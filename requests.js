// Recruiting requests management module for the Recruiting Management System

class RequestsManager {
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
     * Get recruiting requests with pagination and filtering
     * @param {Object} options - Query options
     * @returns {Promise<Object>}
     */
    async getRequests(options = {}) {
        const {
            page = 1,
            pageSize = this.pageSize,
            status = null,
            department = null,
            filters = {},
            useCache = true
        } = options;

        // Merge individual filters with filters object
        const allFilters = {
            ...filters,
            ...(status && { status }),
            ...(department && { department })
        };

        const cacheKey = `requests_${JSON.stringify({ page, pageSize, ...allFilters })}`;
        
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
            let query = this.supabase.from('recruiting_requests').select('*');

            // Apply filters based on user permissions
            const userInfo = window.authManager.getUserInfo();
            if (userInfo.role !== 'gm' && userInfo.role !== 'manager') {
                query = query.eq('department', userInfo.department);
            }

            // Apply additional filters
            Object.entries(allFilters).forEach(([key, value]) => {
                if (value !== null && value !== undefined && value !== '') {
                    query = query.eq(key, value);
                }
            });

            // Get total count for pagination
            const { count } = await this.supabase
                .from('recruiting_requests')
                .select('*', { count: 'exact', head: true });

            // Apply pagination
            const from = (page - 1) * pageSize;
            const to = from + pageSize - 1;
            query = query.range(from, to);

            const { data: requests, error } = await query;

            if (error) throw error;

            const result = {
                requests: requests || [],
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
            console.error('Error fetching requests:', error);
            throw error;
        }
    }

    /**
     * Create a new recruiting request
     * @param {Object} requestData - Request data
     * @returns {Promise<Object>}
     */
    async createRequest(requestData) {
        if (!this.supabase) {
            throw new Error('Supabase client not initialized');
        }

        try {
            // Validate required fields
            const requiredFields = ['position', 'department', 'description', 'headcount', 'position_type', 'position_category'];
            const validation = window.utils.validateRequiredFields(requestData, requiredFields);
            
            if (!validation.isValid) {
                throw new Error(validation.message);
            }

            // Prepare request data
            const dataToInsert = {
                position: requestData.position,
                department: requestData.department,
                description: requestData.description,
                headcount: parseInt(requestData.headcount, 10),
                status: 'Pending',
                position_type: requestData.position_type,
                position_category: requestData.position_category,
                is_confidential: requestData.is_confidential || false,
                new_position_reason: requestData.new_position_reason || null,
                replacement_name: requestData.replacement_name || null
            };

            const { data, error } = await this.supabase
                .from('recruiting_requests')
                .insert([dataToInsert])
                .select();

            if (error) throw error;

            // Send notification to GMs (if function exists)
            try {
                await this.notifyGMs(data[0]);
            } catch (emailError) {
                console.warn('Failed to send GM notification:', emailError);
                // Don't fail the request creation if email fails
            }

            // Clear cache
            this.clearCache();

            return { success: true, data: data[0] };
        } catch (error) {
            console.error('Error creating request:', error);
            throw error;
        }
    }

    /**
     * Update request status
     * @param {number} requestId - Request ID
     * @param {string} status - New status
     * @returns {Promise<Object>}
     */
    async updateRequestStatus(requestId, status) {
        if (!this.supabase) {
            throw new Error('Supabase client not initialized');
        }

        try {
            const { data, error } = await this.supabase
                .from('recruiting_requests')
                .update({ status })
                .eq('id', requestId)
                .select();

            if (error) throw error;

            // Send notification if request was approved
            if (status === 'Approved') {
                try {
                    await this.notifyManagerApproved(data[0]);
                } catch (emailError) {
                    console.warn('Error sending approval notification:', emailError);
                }
            }

            // Clear cache
            this.clearCache();

            return { success: true, data: data[0] };
        } catch (error) {
            console.error('Error updating request status:', error);
            throw error;
        }
    }

    /**
     * Delete request
     * @param {number} requestId - Request ID
     * @returns {Promise<Object>}
     */
    async deleteRequest(requestId) {
        if (!this.supabase) {
            throw new Error('Supabase client not initialized');
        }

        try {
            const { error } = await this.supabase
                .from('recruiting_requests')
                .delete()
                .eq('id', requestId);

            if (error) throw error;

            // Clear cache
            this.clearCache();

            return { success: true };
        } catch (error) {
            console.error('Error deleting request:', error);
            throw error;
        }
    }

    /**
     * Get request details
     * @param {number} requestId - Request ID
     * @returns {Promise<Object>}
     */
    async getRequestDetails(requestId) {
        if (!this.supabase) {
            throw new Error('Supabase client not initialized');
        }

        try {
            const { data, error } = await this.supabase
                .from('recruiting_requests')
                .select('*')
                .eq('id', requestId)
                .single();

            if (error) throw error;
            return data;
        } catch (error) {
            console.error('Error getting request details:', error);
            throw error;
        }
    }

    /**
     * Get pending requests for GM approval
     * @returns {Promise<Array>}
     */
    async getPendingRequests() {
        if (!this.supabase) {
            throw new Error('Supabase client not initialized');
        }

        try {
            const { data, error } = await this.supabase
                .from('recruiting_requests')
                .select('*')
                .eq('status', 'Pending')
                .order('id', { ascending: false });

            if (error) throw error;
            return data || [];
        } catch (error) {
            console.error('Error getting pending requests:', error);
            throw error;
        }
    }

    /**
     * Approve request
     * @param {number} requestId - Request ID
     * @returns {Promise<Object>}
     */
    async approveRequest(requestId) {
        return this.updateRequestStatus(requestId, 'Approved');
    }

    /**
     * Reject request
     * @param {number} requestId - Request ID
     * @returns {Promise<Object>}
     */
    async rejectRequest(requestId) {
        return this.updateRequestStatus(requestId, 'Rejected');
    }

    /**
     * Mark position as filled
     * @param {number} requestId - Request ID
     * @returns {Promise<Object>}
     */
    async fillPosition(requestId) {
        return this.updateRequestStatus(requestId, 'Filled');
    }

    /**
     * Notify GMs about new request
     * @param {Object} request - Request data
     * @returns {Promise<void>}
     */
    async notifyGMs(request) {
        try {
            console.log('🔍 Checking for GMs with emails...');
            
            // First, let's check if email column exists by selecting all columns
            const { data: allUsers, error: allUsersError } = await this.supabase
                .from('users')
                .select('*')
                .in('role', ['gm', 'recruiter']);

            if (allUsersError) {
                console.warn('Error fetching all GM data:', allUsersError);
                return;
            }

            console.log('📊 All GM users:', allUsers);

            // Check if email column exists
            if (allUsers && allUsers.length > 0) {
                const firstUser = allUsers[0];
                console.log('👤 First GM user structure:', Object.keys(firstUser));
                
                if (!firstUser.hasOwnProperty('email')) {
                    console.warn('❌ Email column does not exist in users table!');
                    console.log('💡 Please run this SQL in Supabase Dashboard:');
                    console.log('ALTER TABLE users ADD COLUMN email TEXT;');
                    console.log('UPDATE users SET email = \'gm@company.com\' WHERE role = \'gm\';');
                    return;
                }
            }

            // Get GM and Recruiter emails from users table
            const { data: gms, error: gmError } = await this.supabase
                .from('users')
                .select('email, role')
                .in('role', ['gm', 'recruiter'])
                .not('email', 'is', null);

            if (gmError) {
                console.warn('Error fetching GM emails:', gmError);
                return;
            }

            console.log('📧 GMs and Recruiters with emails:', gms);

            if (!gms || gms.length === 0) {
                console.warn('No GMs or Recruiters with emails found');
                console.log('💡 Please add email to GM or Recruiter user in Supabase Dashboard');
                return;
            }

            // Send email to each GM and Recruiter
            for (const user of gms) {
                try {
                    if (user.email) {
                        console.log(`📤 Sending email to ${user.role}: ${user.email}`);
                        const result = await window.emailManager.notifyNewRequest(request, user.email);
                        console.log(`✅ Email sent to ${user.role}: ${user.email}`, result);
                    }
                } catch (emailError) {
                    console.warn(`❌ Error sending email to ${user.role} ${user.email}:`, emailError);
                }
            }
        } catch (error) {
            console.warn('Error in notifyGMs:', error);
        }
    }

    /**
     * Notify manager when request is approved
     * @param {Object} request - Request data
     * @returns {Promise<void>}
     */
    async notifyManagerApproved(request) {
        try {
            console.log('🔍 Looking for managers with allowed position:', request.position);
            
            // Get all managers who have this position in their allowed_positions
            const { data: managers, error: managerError } = await this.supabase
                .from('users')
                .select('email, department, allowed_positions')
                .eq('role', 'Manager')
                .not('email', 'is', null);

            if (managerError) {
                console.warn('Error fetching managers:', managerError);
                return;
            }

            if (!managers || managers.length === 0) {
                console.warn('No managers with emails found');
                return;
            }

            // Filter managers who have this position in their allowed_positions
            const relevantManagers = managers.filter(manager => {
                if (!manager.allowed_positions || !Array.isArray(manager.allowed_positions)) {
                    return false;
                }
                return manager.allowed_positions.includes(request.position);
            });

            console.log('📧 Found relevant managers:', relevantManagers.map(m => ({ 
                email: m.email, 
                department: m.department, 
                allowed_positions: m.allowed_positions 
            })));

            if (relevantManagers.length === 0) {
                console.warn(`No managers found with position "${request.position}" in their allowed_positions`);
                return;
            }

            // Send approval notification to each relevant manager
            for (const manager of relevantManagers) {
                try {
                    const result = await window.emailManager.notifyRequestApproved(request, manager.email);
                    console.log(`✅ Approval email sent to manager: ${manager.email} (${manager.department})`, result);
                } catch (emailError) {
                    console.warn(`❌ Error sending email to manager ${manager.email}:`, emailError);
                }
            }
        } catch (error) {
            console.warn('Error in notifyManagerApproved:', error);
        }
    }

    /**
     * Get request statistics
     * @returns {Promise<Object>}
     */
    async getStatistics() {
        if (!this.supabase) {
            throw new Error('Supabase client not initialized');
        }

        try {
            const { data: requests, error } = await this.supabase
                .from('recruiting_requests')
                .select('status, department, position_type');

            if (error) throw error;

            const stats = {
                total: requests.length,
                byStatus: {},
                byDepartment: {},
                byType: {}
            };

            // Calculate distributions
            requests.forEach(request => {
                // Status distribution
                stats.byStatus[request.status] = (stats.byStatus[request.status] || 0) + 1;
                
                // Department distribution
                stats.byDepartment[request.department] = (stats.byDepartment[request.department] || 0) + 1;
                
                // Type distribution
                stats.byType[request.position_type] = (stats.byType[request.position_type] || 0) + 1;
            });

            return stats;
        } catch (error) {
            console.error('Error getting request statistics:', error);
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
}

// Create global instance
window.requestsManager = new RequestsManager();

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = RequestsManager;
}
