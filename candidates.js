// Candidates management module for the Recruiting Management System

class CandidatesManager {
    constructor() {
        this.supabase = null;
        this.currentPage = 1;
        this.pageSize = 20;
        this.cache = new Map();
        this.cacheTimeout = 5 * 60 * 1000; // 5 minutes
    }

    /**
     * Initialize with Supabase instance
     * @param {Object} supabaseInstance - Supabase client
     */
    init(supabaseInstance) {
        this.supabase = supabaseInstance;
    }

    /**
     * Get candidates with pagination and filtering
     * @param {Object} options - Query options
     * @returns {Promise<Object>}
     */
    async getCandidates(options = {}) {
        const {
            page = 1,
            pageSize = this.pageSize,
            department = null,
            position = null,
            source = null,
            status = null,
            useCache = true
        } = options;

        const cacheKey = `candidates_${JSON.stringify({ page, pageSize, department, position, source, status })}`;
        
        // Check cache first
        if (useCache && this.cache.has(cacheKey)) {
            const cached = this.cache.get(cacheKey);
            if (Date.now() - cached.timestamp < this.cacheTimeout) {
                return cached.data;
            }
        }

        if (!this.supabase) {
            throw new Error('Supabase client not initialized');
        }

        try {
            let query = this.supabase.from('candidates').select('*');

            // Apply filters based on user permissions
            const userInfo = window.authManager.getUserInfo();
            if (userInfo.role !== 'gm') {
                if (userInfo.allowedPositions.length > 0) {
                    query = query.in('position', userInfo.allowedPositions);
                } else {
                    query = query.eq('department', userInfo.department);
                }
            }

            // Apply additional filters
            if (department) query = query.eq('department', department);
            if (position) query = query.eq('position', position);
            if (source) query = query.eq('source', source);
            if (status) query = query.eq('status', status);

            // Get total count for pagination
            const { count } = await this.supabase
                .from('candidates')
                .select('*', { count: 'exact', head: true });

            // Apply pagination
            const from = (page - 1) * pageSize;
            const to = from + pageSize - 1;
            query = query.range(from, to);

            const { data: candidates, error } = await query;

            if (error) throw error;

            const result = {
                candidates: candidates || [],
                pagination: {
                    currentPage: page,
                    totalPages: Math.ceil(count / pageSize),
                    totalItems: count,
                    pageSize,
                    hasNextPage: page < Math.ceil(count / pageSize),
                    hasPrevPage: page > 1
                }
            };

            // Cache the result
            this.cache.set(cacheKey, {
                data: result,
                timestamp: Date.now()
            });

            return result;
        } catch (error) {
            console.error('Error fetching candidates:', error);
            throw error;
        }
    }

    /**
     * Add a new candidate
     * @param {Object} candidateData - Candidate data
     * @returns {Promise<Object>}
     */
    async addCandidate(candidateData) {
        if (!this.supabase) {
            throw new Error('Supabase client not initialized');
        }

        try {
            // Validate required fields
            const requiredFields = ['name', 'department', 'position', 'source', 'date_obtained'];
            const validation = window.utils.validateRequiredFields(candidateData, requiredFields);
            
            if (!validation.isValid) {
                throw new Error(validation.message);
            }

            // Check for existing candidate
            const existingCandidates = await this.checkExistingCandidate(candidateData.name);
            if (existingCandidates && existingCandidates.length > 0) {
                const confirmAdd = confirm(
                    `A candidate with the name "${candidateData.name}" already exists. Do you still want to add this candidate?\n\nExisting candidates:\n${existingCandidates.map(c => c.name).join('\n')}`
                );
                if (!confirmAdd) {
                    return { success: false, message: 'Operation cancelled' };
                }
            }

            // Handle file uploads
            let cvPath = null;
            let assessmentPath = null;

            if (candidateData.cvFile) {
                const cvValidation = window.utils.validateFile(candidateData.cvFile);
                if (!cvValidation.isValid) {
                    throw new Error(`CV upload error: ${cvValidation.message}`);
                }
                
                const { data: cvData, error: cvError } = await this.supabase.storage
                    .from('candidate-files')
                    .upload(`cv_${Date.now()}.pdf`, candidateData.cvFile);

                if (cvError) throw cvError;
                cvPath = cvData.path;
            }

            if (candidateData.assessmentFile) {
                const assessmentValidation = window.utils.validateFile(candidateData.assessmentFile);
                if (!assessmentValidation.isValid) {
                    throw new Error(`Assessment upload error: ${assessmentValidation.message}`);
                }
                
                const { data: assessmentData, error: assessmentError } = await this.supabase.storage
                    .from('candidate-files')
                    .upload(`assessment_${Date.now()}.pdf`, candidateData.assessmentFile);

                if (assessmentError) throw assessmentError;
                assessmentPath = assessmentData.path;
            }

            // Insert candidate data
            const { data, error } = await this.supabase
                .from('candidates')
                .insert([{
                    name: candidateData.name,
                    department: candidateData.department,
                    position: candidateData.position,
                    source: candidateData.source,
                    date_obtained: candidateData.date_obtained,
                    interviewer: candidateData.interviewer,
                    notes: candidateData.notes,
                    status: 'New',
                    cv_file_path: cvPath,
                    assesment_file_path: assessmentPath
                }])
                .select();

            if (error) throw error;

            // Send notification to department manager
            try {
                await this.notifyManagerNewCandidate(data[0]);
            } catch (emailError) {
                console.warn('Error sending new candidate notification:', emailError);
            }

            // Clear cache
            this.clearCache();

            return { success: true, data: data[0] };
        } catch (error) {
            console.error('Error adding candidate:', error);
            throw error;
        }
    }

    /**
     * Update candidate status
     * @param {number} candidateId - Candidate ID
     * @param {string} status - New status
     * @param {string} notes - Additional notes
     * @returns {Promise<Object>}
     */
    async updateCandidateStatus(candidateId, status, notes = null) {
        if (!this.supabase) {
            throw new Error('Supabase client not initialized');
        }

        try {
            const updateData = { 
                status,
                last_updated: new Date().toISOString()
            };

            if (notes) {
                // Get current notes and append new ones
                const { data: currentData } = await this.supabase
                    .from('candidates')
                    .select('notes')
                    .eq('id', candidateId)
                    .single();

                const currentDate = new Date().toISOString().split('T')[0];
                const newNote = `[${currentDate}] ${notes}`;
                updateData.notes = currentData?.notes 
                    ? `${currentData.notes}\n\n${newNote}`
                    : newNote;
            }

            const { data, error } = await this.supabase
                .from('candidates')
                .update(updateData)
                .eq('id', candidateId)
                .select();

            if (error) throw error;

            // Clear cache
            this.clearCache();

            // Notify Recruiter about status change
            await this.notifyRecruiterStatusChange(candidateId, status, notes);

            return { success: true, data: data[0] };
        } catch (error) {
            console.error('Error updating candidate status:', error);
            throw error;
        }
    }

    /**
     * Delete candidate
     * @param {number} candidateId - Candidate ID
     * @returns {Promise<Object>}
     */
    async deleteCandidate(candidateId) {
        if (!this.supabase) {
            throw new Error('Supabase client not initialized');
        }

        try {
            // Delete candidate files from storage
            const { data: candidateData } = await this.supabase
                .from('candidates')
                .select('cv_file_path, assesment_file_path')
                .eq('id', candidateId)
                .single();

            if (candidateData) {
                const filesToDelete = [];
                if (candidateData.cv_file_path) filesToDelete.push(candidateData.cv_file_path);
                if (candidateData.assesment_file_path) filesToDelete.push(candidateData.assesment_file_path);

                if (filesToDelete.length > 0) {
                    await this.supabase.storage
                        .from('candidate-files')
                        .remove(filesToDelete);
                }
            }

            // Delete candidate record
            const { error } = await this.supabase
                .from('candidates')
                .delete()
                .eq('id', candidateId);

            if (error) throw error;

            // Clear cache
            this.clearCache();

            return { success: true };
        } catch (error) {
            console.error('Error deleting candidate:', error);
            throw error;
        }
    }

    /**
     * Check for existing candidates with similar names
     * @param {string} name - Candidate name
     * @returns {Promise<Array>}
     */
    async checkExistingCandidate(name) {
        if (!this.supabase) return [];

        try {
            const { data, error } = await this.supabase
                .from('candidates')
                .select('id, name')
                .ilike('name', `%${name}%`);

            if (error) throw error;
            return data || [];
        } catch (error) {
            console.error('Error checking existing candidate:', error);
            return [];
        }
    }

    /**
     * Download candidate file
     * @param {number} candidateId - Candidate ID
     * @param {string} fileType - File type ('cv' or 'assessment')
     * @returns {Promise<void>}
     */
    async downloadFile(candidateId, fileType) {
        if (!this.supabase) {
            throw new Error('Supabase client not initialized');
        }

        try {
            const fieldName = fileType === 'cv' ? 'cv_file_path' : 'assesment_file_path';
            
            const { data: candidateData, error: candidateError } = await this.supabase
                .from('candidates')
                .select(fieldName)
                .eq('id', candidateId)
                .single();

            if (candidateError) throw candidateError;

            const filePath = candidateData[fieldName];
            if (!filePath) {
                throw new Error(`No ${fileType.toUpperCase()} file found for this candidate`);
            }

            const { data, error } = await this.supabase.storage
                .from('candidate-files')
                .download(filePath);

            if (error) throw error;

            // Create download link
            const blob = new Blob([data], { type: 'application/pdf' });
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = `${fileType}_${candidateId}.pdf`;
            link.click();
        } catch (error) {
            console.error(`Error downloading ${fileType}:`, error);
            throw error;
        }
    }

    /**
     * Get candidate statistics
     * @returns {Promise<Object>}
     */
    async getStatistics() {
        if (!this.supabase) {
            throw new Error('Supabase client not initialized');
        }

        try {
            const { data: candidates, error } = await this.supabase
                .from('candidates')
                .select('status, source, date_obtained, last_updated');

            if (error) throw error;

            const stats = {
                total: candidates.length,
                byStatus: {},
                bySource: {},
                averageTimeToHire: 0
            };

            // Calculate status distribution
            candidates.forEach(candidate => {
                stats.byStatus[candidate.status] = (stats.byStatus[candidate.status] || 0) + 1;
            });

            // Calculate source distribution
            candidates.forEach(candidate => {
                stats.bySource[candidate.source] = (stats.bySource[candidate.source] || 0) + 1;
            });

            // Calculate average time to hire (using last_updated for hired candidates)
            const hiredCandidates = candidates.filter(c => c.status === 'Hired' && c.last_updated);
            if (hiredCandidates.length > 0) {
                const totalDays = hiredCandidates.reduce((sum, c) => {
                    const start = new Date(c.date_obtained);
                    const end = new Date(c.last_updated);
                    return sum + (end - start) / (1000 * 60 * 60 * 24);
                }, 0);
                stats.averageTimeToHire = Math.round(totalDays / hiredCandidates.length);
            }

            return stats;
        } catch (error) {
            console.error('Error getting statistics:', error);
            throw error;
        }
    }

    /**
     * Clear cache
     */
    clearCache() {
        this.cache.clear();
    }

    /**
     * Get cache statistics
     * @returns {Object}
     */
    getCacheStats() {
        return {
            size: this.cache.size,
            keys: Array.from(this.cache.keys())
        };
    }

    /**
     * Notify manager when new candidate is added
     * @param {Object} candidate - Candidate data
     * @returns {Promise<void>}
     */
    async notifyManagerNewCandidate(candidate) {
        try {
            console.log('🔍 Looking for managers with allowed position:', candidate.position);
            
            // Get all managers and recruiters who have this position in their allowed_positions
            const { data: managers, error: managerError } = await this.supabase
                .from('users')
                .select('email, department, allowed_positions, role')
                .in('role', ['Manager', 'recruiter'])
                .not('email', 'is', null);

            if (managerError) {
                console.warn('Error fetching managers:', managerError);
                return;
            }

            if (!managers || managers.length === 0) {
                console.warn('No managers or recruiters with emails found');
                return;
            }

            // Filter managers and recruiters who have this position in their allowed_positions
            const relevantUsers = managers.filter(user => {
                if (!user.allowed_positions || !Array.isArray(user.allowed_positions)) {
                    return false;
                }
                return user.allowed_positions.includes(candidate.position);
            });

            console.log('📧 Found relevant managers/recruiters for new candidate:', relevantUsers.map(u => ({ 
                email: u.email, 
                department: u.department, 
                role: u.role,
                allowed_positions: u.allowed_positions 
            })));

            if (relevantUsers.length === 0) {
                console.warn(`No managers or recruiters found with position "${candidate.position}" in their allowed_positions`);
                return;
            }

            // Send new candidate notification to each relevant user
            for (const user of relevantUsers) {
                try {
                    const result = await window.emailManager.notifyNewCandidate(candidate, user.email);
                    console.log(`✅ New candidate email sent to ${user.role}: ${user.email} (${user.department})`, result);
                } catch (emailError) {
                    console.warn(`❌ Error sending email to ${user.role} ${user.email}:`, emailError);
                }
            }
        } catch (error) {
            console.warn('Error in notifyManagerNewCandidate:', error);
        }
    }

    /**
     * Notify Recruiter about candidate status changes
     * DISABLED - No notifications will be sent
     * @param {number} candidateId - Candidate ID
     * @param {string} status - New status
     * @param {string} notes - Additional notes
     */
    async notifyRecruiterStatusChange(candidateId, status, notes = null) {
        // All recruiter notifications are disabled
        console.log(`🔇 Recruiter notifications disabled for status: ${status}`);
        return;
    }
}

// Export class for global usage
window.CandidatesManager = CandidatesManager;

// Create global instance
window.candidatesManager = new CandidatesManager();

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CandidatesManager;
}
