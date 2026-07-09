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

    _isAgencyRole(role) {
        return role === 'agency' || role === 'agency-interim';
    }

    _isInternalRole(role) {
        return role === 'gm' || role === 'recruiter' || role === 'Manager' || role === 'manager';
    }

    _normalizeInternalNotesError(error, operation) {
        const message = error?.message || error?.details || '';
        const hint = error?.hint || '';
        const combined = `${message} ${hint}`;
        const missingTable = error?.status === 404
            || error?.code === 'PGRST205'
            || combined.toLowerCase().includes('candidate_internal_notes');

        if (missingTable) {
            return new Error(
                'Interné poznámky ešte nie sú nasadené v databáze. Spustite migrácie vrátane 20260526141000_add_candidate_internal_notes.sql a obnovte stránku.'
            );
        }

        if (message) {
            return new Error(message);
        }
        return new Error(`Nastala chyba pri ${operation}.`);
    }

    /**
     * Remove document paths for agency users (UI + client data); internal booking flow may fetch paths separately.
     * @param {Object|null} candidate
     * @returns {Object|null}
     */
    _redactCandidateDocumentsIfAgency(candidate) {
        if (!candidate || typeof candidate !== 'object') return candidate;
        try {
            const userInfo = typeof window !== 'undefined' && window.authManager
                ? window.authManager.getUserInfo()
                : null;
            if (!this._isAgencyRole(userInfo?.role)) return candidate;
            // Vlastné kandidáti podľa zdroja agentúry – dokumenty zostávajú (nahrali ich oni)
            if (userInfo.source && candidate.source === userInfo.source) {
                return candidate;
            }
            return { ...candidate, cv_file_path: null, assesment_file_path: null };
        } catch (e) {
            return candidate;
        }
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

        if (!this.supabase) {
            throw new Error('Supabase client not initialized');
        }

        const userInfo = window.authManager.getUserInfo();
        const cacheKey = `candidates_${JSON.stringify({
            page,
            pageSize,
            department,
            position,
            source,
            status,
            doc: this._isAgencyRole(userInfo?.role) ? 'redacted' : 'full'
        })}`;

        // Check cache first
        if (useCache && this.cache.has(cacheKey)) {
            const cached = this.cache.get(cacheKey);
            if (Date.now() - cached.timestamp < this.cacheTimeout) {
                return cached.data;
            }
        }

        try {
            let query = this.supabase
                .from('candidates')
                .select('*, recruiting_request:recruiting_requests(contract_type, position_type)');

            // Apply filters based on user permissions
            if (this._isAgencyRole(userInfo.role)) {
                // Agencies can only see their own candidates (filtered by source from users table)
                if (userInfo.source) {
                    console.log('🔍 Agency filter: Filtering candidates by source:', userInfo.source);
                    query = query.eq('source', userInfo.source);
                } else {
                    console.warn('⚠️ Agency user has no source set, returning empty results');
                    // If no source set, return empty result
                    query = query.eq('source', '__NO_SOURCE__'); // This will return no results
                }
            } else if (userInfo.role !== 'gm' && userInfo.role !== 'recruiter') {
                const isManagerRole = userInfo.role === 'Manager' || userInfo.role === 'manager';
                if (isManagerRole && userInfo.department) {
                    // Managers should see all candidates in their department
                    // (both permanent and interim), not just allowed positions.
                    query = query.eq('department', userInfo.department);
                } else if (userInfo.allowedPositions.length > 0) {
                    query = query.in('position', userInfo.allowedPositions);
                } else {
                    query = query.eq('department', userInfo.department);
                }
                // Manažéri nevidia podania agentúr, kým ich recruiter nepotvrdí (stav New)
                query = query.neq('status', 'Pending Recruiter Review');
            }

            // Apply additional filters
            if (department) query = query.eq('department', department);
            if (position) query = query.eq('position', position);
            if (source) query = query.eq('source', source);
            if (status) query = query.eq('status', status);

            // Get total count for pagination (using same filters)
            let countQuery = this.supabase.from('candidates').select('*', { count: 'exact', head: true });
            
            // Apply same permission filters to count query
            if (this._isAgencyRole(userInfo.role)) {
                if (userInfo.source) {
                    countQuery = countQuery.eq('source', userInfo.source);
                } else {
                    countQuery = countQuery.eq('source', '__NO_SOURCE__');
                }
            } else if (userInfo.role !== 'gm' && userInfo.role !== 'recruiter') {
                const isManagerRole = userInfo.role === 'Manager' || userInfo.role === 'manager';
                if (isManagerRole && userInfo.department) {
                    countQuery = countQuery.eq('department', userInfo.department);
                } else if (userInfo.allowedPositions.length > 0) {
                    countQuery = countQuery.in('position', userInfo.allowedPositions);
                } else {
                    countQuery = countQuery.eq('department', userInfo.department);
                }
                countQuery = countQuery.neq('status', 'Pending Recruiter Review');
            }
            
            // Apply same additional filters to count query
            if (department) countQuery = countQuery.eq('department', department);
            if (position) countQuery = countQuery.eq('position', position);
            if (source) countQuery = countQuery.eq('source', source);
            if (status) countQuery = countQuery.eq('status', status);
            
            const { count } = await countQuery;

            // Apply pagination
            const from = (page - 1) * pageSize;
            const to = from + pageSize - 1;
            query = query.range(from, to);

            const { data: candidates, error } = await query;

            if (error) throw error;

            const list = (candidates || []).map((c) => this._redactCandidateDocumentsIfAgency(c));

            const result = {
                candidates: list,
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
                
                // Get original file extension
                const originalFileName = candidateData.cvFile.name;
                const fileExtension = originalFileName.substring(originalFileName.lastIndexOf('.'));
                const fileName = `cv_${Date.now()}${fileExtension}`;
                
                const { data: cvData, error: cvError } = await this.supabase.storage
                    .from('candidate-files')
                    .upload(fileName, candidateData.cvFile);

                if (cvError) throw cvError;
                cvPath = cvData.path;
            }

            if (candidateData.assessmentFile) {
                const assessmentValidation = window.utils.validateFile(candidateData.assessmentFile);
                if (!assessmentValidation.isValid) {
                    throw new Error(`Assessment upload error: ${assessmentValidation.message}`);
                }
                
                // Get original file extension
                const originalFileName = candidateData.assessmentFile.name;
                const fileExtension = originalFileName.substring(originalFileName.lastIndexOf('.'));
                const fileName = `assessment_${Date.now()}${fileExtension}`;
                
                const { data: assessmentData, error: assessmentError } = await this.supabase.storage
                    .from('candidate-files')
                    .upload(fileName, candidateData.assessmentFile);

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
     * Agentúra: pridanie kandidáta na schválenú pozíciu (stav Pending Recruiter Review).
     * @param {Object} data - { name, recruiting_request_id, cvFile, assessmentFile, comment }
     */
    async addCandidateAsAgency(data) {
        if (!this.supabase) {
            throw new Error('Supabase client not initialized');
        }
        const userInfo = window.authManager.getUserInfo();
        if (!this._isAgencyRole(userInfo.role) || !userInfo.source) {
            throw new Error('Len prihlásená agentúra so zadaným zdrojom môže pridávať kandidátov.');
        }
        const name = (data.name || '').trim();
        const reqId = data.recruiting_request_id;
        const assessmentRequired = userInfo.role !== 'agency-interim';
        if (!name || !reqId || !data.cvFile) {
            throw new Error('Vyplňte meno, vyberte otvorenú pozíciu a nahrajte životopis.');
        }
        if (assessmentRequired && !data.assessmentFile) {
            throw new Error('Vyplňte meno, vyberte otvorenú pozíciu, nahrajte životopis aj hodnotiaci formulár.');
        }

        const { data: reqRow, error: reqErr } = await this.supabase
            .from('recruiting_requests')
            .select('id, status, department, position, visible_to_agencies')
            .eq('id', reqId)
            .single();

        if (reqErr || !reqRow || reqRow.status !== 'Approved') {
            throw new Error('Vybraná pozícia nie je schválená alebo neexistuje.');
        }
        if (reqRow.visible_to_agencies === false) {
            throw new Error('Táto pozícia nie je pre agentúry sprístupnená. Vyberte inú pozíciu.');
        }

        const existingCandidates = await this.checkExistingCandidate(name);
        if (existingCandidates && existingCandidates.length > 0) {
            const confirmAdd = confirm(
                `Kandidát s menom "${name}" už existuje. Chcete aj tak pridať tohto kandidáta?\n\nExistujúci:\n${existingCandidates.map(c => c.name).join('\n')}`
            );
            if (!confirmAdd) {
                return { success: false, message: 'Zrušené' };
            }
        }

        let cvPath = null;
        let assessmentPath = null;

        const cvValidation = window.utils.validateFile(data.cvFile);
        if (!cvValidation.isValid) {
            throw new Error(`Chyba CV: ${cvValidation.message}`);
        }
        const cvExt = data.cvFile.name.substring(data.cvFile.name.lastIndexOf('.'));
        const cvName = `cv_${Date.now()}${cvExt}`;
        const { data: cvData, error: cvError } = await this.supabase.storage
            .from('candidate-files')
            .upload(cvName, data.cvFile);
        if (cvError) throw cvError;
        cvPath = cvData.path;

        if (data.assessmentFile) {
            const asValidation = window.utils.validateFile(data.assessmentFile);
            if (!asValidation.isValid) {
                throw new Error(`Chyba formulára hodnotenia: ${asValidation.message}`);
            }
            const asExt = data.assessmentFile.name.substring(data.assessmentFile.name.lastIndexOf('.'));
            const asName = `assessment_${Date.now()}${asExt}`;
            const { data: asData, error: asError } = await this.supabase.storage
                .from('candidate-files')
                .upload(asName, data.assessmentFile);
            if (asError) throw asError;
            assessmentPath = asData.path;
        }

        const comment = (data.comment || '').trim();
        const today = new Date().toISOString().split('T')[0];
        const insertPayload = {
            name,
            department: reqRow.department,
            position: reqRow.position,
            source: userInfo.source,
            date_obtained: today,
            interviewer: null,
            notes: comment || null,
            status: 'Pending Recruiter Review',
            recruiting_request_id: reqRow.id,
            cv_file_path: cvPath,
            assesment_file_path: assessmentPath
        };

        const { data: inserted, error: insErr } = await this.supabase
            .from('candidates')
            .insert([insertPayload])
            .select();

        if (insErr) throw insErr;

        this.clearCache();

        try {
            await this.notifyRecruitersAgencyNewCandidate(inserted[0]);
        } catch (e) {
            console.warn('notifyRecruitersAgencyNewCandidate:', e);
        }

        return { success: true, data: inserted[0] };
    }

    /**
     * E-mail len recruiterom o novom podaní od agentúry (nie GM)
     */
    async notifyRecruitersAgencyNewCandidate(candidate) {
        try {
            const { data: recipients, error } = await this.supabase
                .from('users')
                .select('email, role')
                .eq('role', 'recruiter')
                .not('email', 'is', null);

            if (error) {
                console.warn('notifyRecruitersAgencyNewCandidate users error:', error);
                return;
            }
            if (!recipients || recipients.length === 0) return;

            for (const u of recipients) {
                if (!u.email) continue;
                try {
                    await window.emailManager.notifyRecruitersAgencyCandidateSubmission(candidate, u.email);
                } catch (emailError) {
                    console.warn(`Agency submission email failed for ${u.email}:`, emailError);
                }
            }
        } catch (e) {
            console.warn('notifyRecruitersAgencyNewCandidate:', e);
        }
    }

    /**
     * Recruiter/GM: potvrdiť agentúrne podanie → stav New, notifikácia manažérom pozície
     */
    async confirmAgencySubmission(candidateId) {
        if (!this.supabase) {
            throw new Error('Supabase client not initialized');
        }
        const userInfo = window.authManager.getUserInfo();
        if (!userInfo || (userInfo.role !== 'recruiter' && userInfo.role !== 'gm')) {
            throw new Error('Nemáte oprávnenie potvrdiť toto podanie.');
        }

        const { data, error } = await this.supabase
            .from('candidates')
            .update({
                status: 'New',
                last_updated: new Date().toISOString()
            })
            .eq('id', candidateId)
            .eq('status', 'Pending Recruiter Review')
            .select();

        if (error) throw error;
        if (!data || data.length === 0) {
            throw new Error('Kandidát sa nenašiel alebo už bol spracovaný.');
        }

        this.clearCache();

        try {
            await this.notifyManagerNewCandidate(data[0]);
        } catch (e) {
            console.warn('notifyManagerNewCandidate after confirm:', e);
        }

        return { success: true, data: data[0] };
    }

    /**
     * Recruiter/GM: zamietnuť agentúrne podanie (notifikácia agentúry cez updateCandidateStatus)
     */
    async rejectAgencySubmission(candidateId, notes = null) {
        const userInfo = window.authManager.getUserInfo();
        if (!userInfo || (userInfo.role !== 'recruiter' && userInfo.role !== 'gm')) {
            throw new Error('Nemáte oprávnenie zamietnuť toto podanie.');
        }
        const { data: row } = await this.supabase
            .from('candidates')
            .select('id, status')
            .eq('id', candidateId)
            .single();
        if (!row || row.status !== 'Pending Recruiter Review') {
            throw new Error('Kandidát sa nenašiel alebo už bol spracovaný.');
        }
        const noteText = notes && notes.trim()
            ? notes.trim()
            : 'Agentúrne podanie bolo recruiterom zamietnuté.';
        return this.updateCandidateStatus(candidateId, 'Rejected', noteText);
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
            let currentRow = null;
            if (notes || status === 'Hired') {
                const { data } = await this.supabase
                    .from('candidates')
                    .select('notes, hire_date')
                    .eq('id', candidateId)
                    .single();
                currentRow = data;
            }

            const updateData = {
                status,
                last_updated: new Date().toISOString()
            };

            if (status === 'Hired' && !currentRow?.hire_date) {
                updateData.hire_date = new Date().toISOString();
            }

            if (notes) {
                const currentDate = new Date().toISOString().split('T')[0];
                const newNote = `[${currentDate}] ${notes}`;
                updateData.notes = currentRow?.notes
                    ? `${currentRow.notes}\n\n${newNote}`
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
     * Assign candidate to talent pool target
     * @param {number} candidateId - Candidate ID
     * @param {Object} poolData - Talent pool assignment
     * @returns {Promise<Object>}
     */
    async setTalentPoolEntry(candidateId, poolData) {
        if (!this.supabase) {
            throw new Error('Supabase client not initialized');
        }

        const userInfo = window.authManager.getUserInfo();
        if (!userInfo || (userInfo.role !== 'recruiter' && userInfo.role !== 'gm')) {
            throw new Error('Nemáte oprávnenie spravovať Talent Pool.');
        }

        const targetType = poolData?.type;
        const targetValue = poolData?.value ? String(poolData.value).trim() : '';
        if (!['department', 'position'].includes(targetType)) {
            throw new Error('Neplatný typ Talent Pool cieľa.');
        }
        if (!targetValue) {
            throw new Error('Cieľ Talent Pool je povinný.');
        }

        try {
            const updateData = {
                in_talent_pool: true,
                talent_pool_target_type: targetType,
                talent_pool_target_value: targetValue,
                talent_pool_added_at: new Date().toISOString(),
                talent_pool_added_by: userInfo.id || null,
                last_updated: new Date().toISOString()
            };

            const { data, error } = await this.supabase
                .from('candidates')
                .update(updateData)
                .eq('id', candidateId)
                .select()
                .single();

            if (error) throw error;
            this.clearCache();
            return { success: true, data };
        } catch (error) {
            console.error('Error setting talent pool entry:', error);
            throw error;
        }
    }

    /**
     * Remove candidate from talent pool
     * @param {number} candidateId - Candidate ID
     * @returns {Promise<Object>}
     */
    async removeTalentPoolEntry(candidateId) {
        if (!this.supabase) {
            throw new Error('Supabase client not initialized');
        }

        const userInfo = window.authManager.getUserInfo();
        if (!userInfo || (userInfo.role !== 'recruiter' && userInfo.role !== 'gm')) {
            throw new Error('Nemáte oprávnenie spravovať Talent Pool.');
        }

        try {
            const updateData = {
                in_talent_pool: false,
                talent_pool_target_type: null,
                talent_pool_target_value: null,
                talent_pool_added_at: null,
                talent_pool_added_by: null,
                last_updated: new Date().toISOString()
            };

            const { data, error } = await this.supabase
                .from('candidates')
                .update(updateData)
                .eq('id', candidateId)
                .select()
                .single();

            if (error) throw error;
            this.clearCache();
            return { success: true, data };
        } catch (error) {
            console.error('Error removing talent pool entry:', error);
            throw error;
        }
    }

    /**
     * Update candidate with optional file re-upload
     * @param {number} candidateId - Candidate ID
     * @param {Object} candidateData - Updated candidate data
     * @returns {Promise<Object>}
     */
    async updateCandidate(candidateId, candidateData) {
        if (!this.supabase) {
            throw new Error('Supabase client not initialized');
        }

        const userInfo = typeof window !== 'undefined' && window.authManager
            ? window.authManager.getUserInfo()
            : null;
        if (this._isAgencyRole(userInfo?.role) && (candidateData.cvFile || candidateData.assessmentFile)) {
            throw new Error('Agentúry nemôžu nahrávať dokumenty uchádzačov.');
        }

        try {
            let existingHireDate = null;
            let previousStatus = null;
            if (candidateData.status === 'Hired' || candidateData.status) {
                const { data: existingRow } = await this.supabase
                    .from('candidates')
                    .select('hire_date, status')
                    .eq('id', candidateId)
                    .single();
                existingHireDate = existingRow?.hire_date;
                previousStatus = existingRow?.status ?? null;
            }

            // Prepare update data
            const updateData = {
                name: candidateData.name,
                department: candidateData.department,
                position: candidateData.position,
                source: candidateData.source,
                date_obtained: candidateData.date_obtained,
                interviewer: candidateData.interviewer || null,
                status: candidateData.status,
                notes: candidateData.notes || null,
                last_updated: new Date().toISOString()
            };

            if (candidateData.status === 'Hired' && !existingHireDate) {
                updateData.hire_date = new Date().toISOString();
            }

            // Handle CV re-upload if new file is provided
            if (candidateData.cvFile) {
                const cvValidation = window.utils.validateFile(candidateData.cvFile);
                if (!cvValidation.isValid) {
                    throw new Error(`CV upload error: ${cvValidation.message}`);
                }

                // Get original file extension
                const originalFileName = candidateData.cvFile.name;
                const fileExtension = originalFileName.substring(originalFileName.lastIndexOf('.'));
                const fileName = `cv_${candidateId}_${Date.now()}${fileExtension}`;

                // Delete old CV if exists
                const { data: oldCandidate } = await this.supabase
                    .from('candidates')
                    .select('cv_file_path')
                    .eq('id', candidateId)
                    .single();

                if (oldCandidate?.cv_file_path) {
                    try {
                        await this.supabase.storage
                            .from('candidate-files')
                            .remove([oldCandidate.cv_file_path]);
                    } catch (deleteError) {
                        console.warn('Error deleting old CV file:', deleteError);
                        // Continue even if old file deletion fails
                    }
                }

                // Upload new CV
                const { data: cvData, error: cvError } = await this.supabase.storage
                    .from('candidate-files')
                    .upload(fileName, candidateData.cvFile);

                if (cvError) throw cvError;
                updateData.cv_file_path = cvData.path;
            }

            // Handle Assessment re-upload if new file is provided
            if (candidateData.assessmentFile) {
                const assessmentValidation = window.utils.validateFile(candidateData.assessmentFile);
                if (!assessmentValidation.isValid) {
                    throw new Error(`Assessment upload error: ${assessmentValidation.message}`);
                }

                // Get original file extension
                const originalFileName = candidateData.assessmentFile.name;
                const fileExtension = originalFileName.substring(originalFileName.lastIndexOf('.'));
                const fileName = `assessment_${candidateId}_${Date.now()}${fileExtension}`;

                // Delete old Assessment if exists
                const { data: oldCandidate } = await this.supabase
                    .from('candidates')
                    .select('assesment_file_path')
                    .eq('id', candidateId)
                    .single();

                if (oldCandidate?.assesment_file_path) {
                    try {
                        await this.supabase.storage
                            .from('candidate-files')
                            .remove([oldCandidate.assesment_file_path]);
                    } catch (deleteError) {
                        console.warn('Error deleting old Assessment file:', deleteError);
                        // Continue even if old file deletion fails
                    }
                }

                // Upload new Assessment
                const { data: assessmentData, error: assessmentError } = await this.supabase.storage
                    .from('candidate-files')
                    .upload(fileName, candidateData.assessmentFile);

                if (assessmentError) throw assessmentError;
                updateData.assesment_file_path = assessmentData.path;
            }

            // Update candidate record
            const { data, error } = await this.supabase
                .from('candidates')
                .update(updateData)
                .eq('id', candidateId)
                .select();

            if (error) throw error;

            // Clear cache
            this.clearCache();

            if (candidateData.status && candidateData.status !== previousStatus) {
                await this.notifyRecruiterStatusChange(
                    candidateId,
                    candidateData.status,
                    candidateData.notes || null
                );
            }

            return { success: true, data: data[0] };
        } catch (error) {
            console.error('Error updating candidate:', error);
            throw error;
        }
    }

    /**
     * Get candidate details by ID
     * @param {number} candidateId - Candidate ID
     * @returns {Promise<Object>}
     */
    async getCandidateDetails(candidateId) {
        if (!this.supabase) {
            throw new Error('Supabase client not initialized');
        }

        try {
            const { data, error } = await this.supabase
                .from('candidates')
                .select('*')
                .eq('id', candidateId)
                .single();

            if (error) throw error;
            return this._redactCandidateDocumentsIfAgency(data);
        } catch (error) {
            console.error('Error getting candidate details:', error);
            throw error;
        }
    }

    /**
     * Get internal notes for candidate (recruiter/manager communication).
     * @param {number} candidateId
     * @returns {Promise<Array>}
     */
    async getCandidateInternalNotes(candidateId) {
        if (!this.supabase) {
            throw new Error('Supabase client not initialized');
        }

        const userInfo = window.authManager?.getUserInfo?.();
        if (!this._isInternalRole(userInfo?.role)) {
            return [];
        }

        const { data, error } = await this.supabase
            .from('candidate_internal_notes')
            .select('id, candidate_id, note_text, created_by, created_by_role, created_by_email, created_at')
            .eq('candidate_id', candidateId)
            .order('created_at', { ascending: false });

        if (error) throw this._normalizeInternalNotesError(error, 'načítaní interných poznámok');
        return data || [];
    }

    /**
     * Add internal note and notify relevant internal users by email.
     * @param {number} candidateId
     * @param {string} noteText
     * @returns {Promise<Object>}
     */
    async addCandidateInternalNote(candidateId, noteText) {
        if (!this.supabase) {
            throw new Error('Supabase client not initialized');
        }

        const text = (noteText || '').trim();
        if (!text) {
            throw new Error('Text poznámky je povinný.');
        }

        const userInfo = window.authManager?.getUserInfo?.();
        if (!this._isInternalRole(userInfo?.role)) {
            throw new Error('Nemáte oprávnenie pridávať interné poznámky.');
        }

        const authUser = await window.authManager.resolveAuthUser();
        if (!authUser?.id) {
            throw new Error('Používateľ nie je prihlásený.');
        }

        const { data: inserted, error: insertError } = await this.supabase
            .from('candidate_internal_notes')
            .insert([{
                candidate_id: candidateId,
                note_text: text,
                created_by: authUser.id,
                created_by_role: userInfo.role,
                created_by_email: authUser.email || null
            }])
            .select('id, candidate_id, note_text, created_by, created_by_role, created_by_email, created_at')
            .single();

        if (insertError) throw this._normalizeInternalNotesError(insertError, 'uložení internej poznámky');

        try {
            const candidate = await this.getCandidateDetails(candidateId);
            await this.notifyInternalCandidateNoteAdded(candidate, inserted);
        } catch (notifyErr) {
            console.warn('notifyInternalCandidateNoteAdded failed:', notifyErr);
        }

        return { success: true, data: inserted };
    }

    /**
     * Send internal note email notification only to recruiters.
     * @param {Object} candidate
     * @param {Object} note
     */
    async notifyInternalCandidateNoteAdded(candidate, note) {
        if (!candidate || !note) return;
        if (!window.emailManager?.notifyInternalCandidateNote) return;

        const { data: users, error } = await this.supabase
            .from('users')
            .select('id, email, role, department, allowed_positions')
            .eq('role', 'recruiter')
            .not('email', 'is', null);

        if (error) {
            console.warn('notifyInternalCandidateNoteAdded users error:', error);
            return;
        }

        const recipients = (users || []).filter((u) => {
            if (!u?.email) return false;
            if (u.id === note.created_by) return false;
            if (Array.isArray(u.allowed_positions) && u.allowed_positions.length > 0) {
                return u.allowed_positions.includes(candidate.position);
            }
            return true;
        });

        const uniqueEmails = [...new Set(recipients.map((u) => String(u.email).trim()).filter(Boolean))];
        for (const email of uniqueEmails) {
            try {
                await window.emailManager.notifyInternalCandidateNote(candidate, note, email);
            } catch (emailError) {
                console.warn(`Internal note email failed for ${email}:`, emailError);
            }
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

        const userInfo = typeof window !== 'undefined' && window.authManager
            ? window.authManager.getUserInfo()
            : null;

        try {
            const fieldName = fileType === 'cv' ? 'cv_file_path' : 'assesment_file_path';
            
            // Get candidate data including name
            const { data: candidateData, error: candidateError } = await this.supabase
                .from('candidates')
                .select(`${fieldName}, name, source`)
                .eq('id', candidateId)
                .single();

            if (candidateError) throw candidateError;

            if (this._isAgencyRole(userInfo?.role)) {
                if (!userInfo.source || candidateData.source !== userInfo.source) {
                    throw new Error('Agentúry nemajú prístup k dokumentom tohto uchádzača.');
                }
            }

            const filePath = candidateData[fieldName];
            if (!filePath) {
                throw new Error(`No ${fileType.toUpperCase()} file found for this candidate`);
            }

            const { data, error } = await this.supabase.storage
                .from('candidate-files')
                .download(filePath);

            if (error) throw error;

            // Get file extension from path
            const fileExtension = filePath.substring(filePath.lastIndexOf('.')).toLowerCase();
            
            // Determine MIME type based on file extension
            const mimeTypes = {
                '.pdf': 'application/pdf',
                '.doc': 'application/msword',
                '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
            };
            
            const mimeType = mimeTypes[fileExtension] || 'application/octet-stream';
            
            // Sanitize candidate name for filename (remove invalid characters)
            const candidateName = candidateData.name || 'Candidate';
            const sanitizedName = candidateName
                .replace(/[<>:"/\\|?*]/g, '_') // Replace invalid filename characters
                .replace(/\s+/g, '_') // Replace spaces with underscores
                .trim();
            
            // Create download link with candidate name in filename
            const blob = new Blob([data], { type: mimeType });
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = `${sanitizedName}_${fileType.toUpperCase()}${fileExtension}`;
            link.click();
            
            // Clean up the object URL after a short delay
            setTimeout(() => {
                window.URL.revokeObjectURL(link.href);
            }, 100);
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
                .select('status, source, date_obtained, last_updated, hire_date');

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

            // Prijatí: od nahratia (date_obtained) do prijatia (hire_date alebo last_updated)
            const hiredCandidates = candidates.filter(c => {
                if (c.status !== 'Hired') return false;
                const start = c.date_obtained;
                const end = c.hire_date || c.last_updated;
                return start && end;
            });
            if (hiredCandidates.length > 0) {
                const totalDays = hiredCandidates.reduce((sum, c) => {
                    const start = new Date(c.date_obtained);
                    const end = new Date(c.hire_date || c.last_updated);
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
     * Notify agencies about candidate status changes based on candidate source.
     * Uses the same RPC function as slot notifications to resolve agency emails.
     * @param {number} candidateId - Candidate ID
     * @param {string} status - New status
     * @param {string} notes - Additional notes
     */
    async notifyRecruiterStatusChange(candidateId, status, notes = null) {
        if (!this.supabase) {
            console.warn('Supabase client not initialized, skipping agency notification');
            return;
        }

        try {
            // Skip initial "New" status to avoid redundant emails
            if (status === 'New') {
                return;
            }

            // Load candidate details to get source and other fields
            const candidate = await this.getCandidateDetails(candidateId);
            if (!candidate || !candidate.source) {
                console.log('No candidate source found, skipping agency notification');
                return;
            }

            const sources = [(candidate.source || '').trim()].filter(Boolean);

            // Resolve agency emails for this source
            const { data: agencyRows, error: rpcError } = await this.supabase
                .rpc('get_agency_emails_for_new_slots', { sources });

            if (rpcError) {
                console.warn('get_agency_emails_for_new_slots RPC error:', rpcError);
                return;
            }

            const emails = [...new Set((agencyRows || []).map(r => {
                if (r && typeof r === 'object') return (r.email || '').trim();
                return typeof r === 'string' ? r.trim() : '';
            }).filter(Boolean))];

            if (!emails.length) {
                console.warn('No agency emails found for source (RPC returned empty):', candidate.source, {
                    candidateId,
                    status,
                    rpcRows: agencyRows
                });
                return;
            }

            console.log('📧 Notifying agencies about status change:', {
                candidateId,
                status,
                source: candidate.source,
                emails
            });

            for (const email of emails) {
                try {
                    await window.emailManager.notifyAgencyCandidateStatusChange(
                        candidate,
                        status,
                        notes,
                        email
                    );
                    console.log(`✅ Agency status email sent to ${email}`);
                } catch (emailError) {
                    console.warn(`❌ Error sending agency status email to ${email}:`, emailError);
                }
            }
        } catch (error) {
            console.warn('Error in notifyRecruiterStatusChange (agency notifications):', error);
        }
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
