// Interview slots management module for the Recruiting Management System

class InterviewSlotsManager {
    constructor() {
        this.supabase = null;
        this.realtimeChannel = null;
    }

    /**
     * Initialize with Supabase instance
     * @param {Object} supabaseInstance - Supabase client
     */
    init(supabaseInstance) {
        this.supabase = supabaseInstance;
        this.setupRealtime();
    }

    /**
     * Setup Supabase Realtime subscriptions
     */
    setupRealtime() {
        if (!this.supabase) return;

        // Subscribe to changes in interview_slots table
        this.realtimeChannel = this.supabase
            .channel('interview-slots-changes')
            .on('postgres_changes', 
                { 
                    event: '*', 
                    schema: 'public', 
                    table: 'interview_slots' 
                },
                (payload) => {
                    console.log('Interview slot changed:', payload);
                    // Dispatch custom event for UI updates
                    window.dispatchEvent(new CustomEvent('interviewSlotChanged', {
                        detail: payload
                    }));
                }
            )
            .subscribe();
    }

    /**
     * Cleanup realtime subscription
     */
    cleanup() {
        if (this.realtimeChannel) {
            this.supabase.removeChannel(this.realtimeChannel);
            this.realtimeChannel = null;
        }
    }

    /**
     * Create interview slots for a request
     * @param {number} requestId - Request ID
     * @param {string} round - 'first' or 'second'
     * @param {Array} slots - Array of {startTime, endTime} objects
     * @returns {Promise<Object>}
     */
    async createSlots(requestId, round, slots) {
        if (!this.supabase) {
            throw new Error('Supabase client not initialized');
        }

        try {
            // Validate slots
            if (!Array.isArray(slots) || slots.length === 0) {
                throw new Error('At least one slot is required');
            }

            // Get current user ID
            const { data: { user } } = await this.supabase.auth.getUser();
            if (!user) {
                throw new Error('User not authenticated');
            }

            // Prepare slots data
            const slotsData = slots.map(slot => ({
                request_id: requestId,
                round: round,
                start_time: slot.startTime,
                end_time: slot.endTime,
                created_by: user.id
            }));

            // Insert slots
            const { data, error } = await this.supabase
                .from('interview_slots')
                .insert(slotsData)
                .select();

            if (error) throw error;

            return { success: true, data };
        } catch (error) {
            console.error('Error creating interview slots:', error);
            throw error;
        }
    }

    /**
     * Get available slots for a request and round
     * @param {number} requestId - Request ID
     * @param {string} round - 'first' or 'second'
     * @param {string} agencySource - Agency source (optional, for filtering)
     * @returns {Promise<Array>}
     */
    async getAvailableSlots(requestId, round, agencySource = null) {
        if (!this.supabase) {
            throw new Error('Supabase client not initialized');
        }

        try {
            let query = this.supabase
                .from('interview_slots')
                .select('*')
                .eq('request_id', requestId)
                .eq('round', round)
                .is('candidate_id', null)
                .gte('start_time', new Date().toISOString()) // Only future slots
                .order('start_time', { ascending: true });

            const { data, error } = await query;

            if (error) throw error;

            return data || [];
        } catch (error) {
            console.error('Error fetching available slots:', error);
            throw error;
        }
    }

    /**
     * Get all slots for a request (including booked)
     * @param {number} requestId - Request ID
     * @param {string} round - 'first' or 'second' (optional)
     * @returns {Promise<Array>}
     */
    async getSlotsForRequest(requestId, round = null) {
        if (!this.supabase) {
            throw new Error('Supabase client not initialized');
        }

        try {
            let query = this.supabase
                .from('interview_slots')
                .select(`
                    *,
                    candidates:candidate_id (
                        id,
                        name,
                        source
                    ),
                    recruiting_requests:request_id (
                        id,
                        position,
                        department
                    )
                `)
                .eq('request_id', requestId)
                .order('start_time', { ascending: true });

            if (round) {
                query = query.eq('round', round);
            }

            const { data, error } = await query;

            if (error) throw error;

            return data || [];
        } catch (error) {
            console.error('Error fetching slots for request:', error);
            throw error;
        }
    }

    /**
     * Book a slot (assign candidate to slot)
     * @param {number} slotId - Slot ID
     * @param {number} candidateId - Candidate ID
     * @param {string} agencySource - Agency source
     * @returns {Promise<Object>}
     */
    async bookSlot(slotId, candidateId, agencySource) {
        if (!this.supabase) {
            throw new Error('Supabase client not initialized');
        }

        try {
            // Book via RPC (bypasses RLS; function validates agency + free slot)
            const { data: rows, error: rpcError } = await this.supabase
                .rpc('book_interview_slot', {
                    slot_id: slotId,
                    p_candidate_id: candidateId,
                    p_agency_source: agencySource
                });

            if (rpcError) throw rpcError;

            const data = Array.isArray(rows) && rows.length > 0 ? rows[0] : rows;
            return { success: true, data };
        } catch (error) {
            console.error('Error booking slot:', error);
            throw error;
        }
    }

    /**
     * Cancel a booking (free up a slot)
     * @param {number} slotId - Slot ID
     * @returns {Promise<Object>}
     */
    async cancelBooking(slotId) {
        if (!this.supabase) {
            throw new Error('Supabase client not initialized');
        }

        try {
            const { data, error } = await this.supabase
                .from('interview_slots')
                .update({
                    candidate_id: null,
                    agency_source: null,
                    updated_at: new Date().toISOString()
                })
                .eq('id', slotId)
                .select()
                .single();

            if (error) throw error;

            return { success: true, data };
        } catch (error) {
            console.error('Error canceling booking:', error);
            throw error;
        }
    }

    /**
     * Delete a slot
     * @param {number} slotId - Slot ID
     * @returns {Promise<Object>}
     */
    async deleteSlot(slotId) {
        if (!this.supabase) {
            throw new Error('Supabase client not initialized');
        }

        try {
            const { error } = await this.supabase
                .from('interview_slots')
                .delete()
                .eq('id', slotId);

            if (error) throw error;

            return { success: true };
        } catch (error) {
            console.error('Error deleting slot:', error);
            throw error;
        }
    }

    /**
     * Get slots grouped by date for calendar view
     * @param {number} requestId - Request ID
     * @param {string} round - 'first' or 'second'
     * @returns {Promise<Object>}
     */
    async getSlotsGroupedByDate(requestId, round) {
        if (!this.supabase) {
            throw new Error('Supabase client not initialized');
        }

        try {
            const slots = await this.getSlotsForRequest(requestId, round);
            
            // Group by date
            const grouped = {};
            slots.forEach(slot => {
                const date = new Date(slot.start_time).toISOString().split('T')[0];
                if (!grouped[date]) {
                    grouped[date] = [];
                }
                grouped[date].push(slot);
            });

            return grouped;
        } catch (error) {
            console.error('Error grouping slots by date:', error);
            throw error;
        }
    }
}

// Export class for global usage
window.InterviewSlotsManager = InterviewSlotsManager;

// Create global instance
window.interviewSlotsManager = new InterviewSlotsManager();

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = InterviewSlotsManager;
}
