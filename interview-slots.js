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
     * Check if two time ranges overlap (boundaries inclusive for same-time check).
     * Overlap when: start1 < end2 && start2 < end1
     */
    _slotsOverlap(start1, end1, start2, end2) {
        const s1 = new Date(start1).getTime();
        const e1 = new Date(end1).getTime();
        const s2 = new Date(start2).getTime();
        const e2 = new Date(end2).getTime();
        return s1 < e2 && s2 < e1;
    }

    /**
     * Validate that new slots don't overlap with each other or with any existing slot in the same round (any position).
     * @throws {Error} with message listing overlapping times if any
     */
    async _validateNoOverlappingSlots(requestId, round, newSlots, excludeSlotId = null) {
        const existing = await this.getSlotsByRound(round);
        const formatSlot = (s) => {
            const start = (s.startTime || s.start_time);
            const end = (s.endTime || s.end_time);
            if (!start || !end) return '';
            return `${new Date(start).toLocaleString('sk-SK')} – ${new Date(end).toLocaleString('sk-SK', { hour: '2-digit', minute: '2-digit' })}`;
        };
        const positionLabel = (ex) => {
            const req = ex.recruiting_requests;
            const r = Array.isArray(req) ? req[0] : req;
            if (r && (r.position || r.department)) {
                return ` (${[r.position, r.department].filter(Boolean).join(', ')})`;
            }
            return '';
        };
        const conflicts = [];

        for (let i = 0; i < newSlots.length; i++) {
            const a = newSlots[i];
            const aStart = a.startTime;
            const aEnd = a.endTime;

            for (let j = i + 1; j < newSlots.length; j++) {
                const b = newSlots[j];
                if (this._slotsOverlap(aStart, aEnd, b.startTime, b.endTime)) {
                    conflicts.push(`Nové termíny sa prekrývajú: ${formatSlot(a)} a ${formatSlot(b)}`);
                }
            }

            for (const ex of existing) {
                if (excludeSlotId && ex.id === excludeSlotId) continue;
                if (this._slotsOverlap(aStart, aEnd, ex.start_time, ex.end_time)) {
                    conflicts.push(`Termín sa prekrýva s existujúcim${positionLabel(ex)}: ${formatSlot(a)} vs ${formatSlot(ex)}`);
                }
            }
        }

        if (conflicts.length > 0) {
            throw new Error(conflicts.slice(0, 5).join('; ') + (conflicts.length > 5 ? '; …' : ''));
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

            await this._validateNoOverlappingSlots(requestId, round, slots);

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
     * Get all slots for a given round (all positions) – used to check overlaps across positions.
     * @param {string} round - 'first' or 'second'
     * @returns {Promise<Array>}
     */
    async getSlotsByRound(round) {
        if (!this.supabase) {
            throw new Error('Supabase client not initialized');
        }
        try {
            const { data, error } = await this.supabase
                .from('interview_slots')
                .select(`
                    *,
                    recruiting_requests:request_id (
                        id,
                        position,
                        department
                    )
                `)
                .eq('round', round)
                .order('start_time', { ascending: true });
            if (error) throw error;
            return data || [];
        } catch (error) {
            console.error('Error fetching slots by round:', error);
            throw error;
        }
    }

    /**
     * Agency sources that already have a booked slot for this request and round.
     * @param {number} requestId
     * @param {string} round - 'first' | 'second'
     * @returns {Promise<string[]>}
     */
    async getBookedAgencySources(requestId, round) {
        const slots = await this.getSlotsForRequest(requestId, round);
        return [...new Set(
            (slots || [])
                .filter(s => s.candidate_id && s.agency_source)
                .map(s => s.agency_source)
        )];
    }

    /**
     * Candidate IDs that already have a booked slot for this request and round.
     * @param {number} requestId
     * @param {string} round - 'first' | 'second'
     * @returns {Promise<Set<number>>}
     */
    async getBookedCandidateIds(requestId, round) {
        const slots = await this.getSlotsForRequest(requestId, round);
        return new Set(
            (slots || [])
                .filter(s => s.candidate_id != null)
                .map(s => Number(s.candidate_id))
                .filter(id => !Number.isNaN(id))
        );
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
    async cancelBooking(slotId, agencySource = null) {
        if (!this.supabase) {
            throw new Error('Supabase client not initialized');
        }

        try {
            if (agencySource) {
                const { data: rows, error: rpcError } = await this.supabase
                    .rpc('cancel_interview_slot_booking', {
                        slot_id: slotId,
                        p_agency_source: agencySource
                    });
                if (rpcError) throw rpcError;
                const data = Array.isArray(rows) && rows.length > 0 ? rows[0] : rows;
                return { success: true, data };
            }

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
     * Update an existing slot's time range
     * @param {number} slotId - Slot ID
     * @param {number} requestId - Request ID
     * @param {string} round - 'first' or 'second'
     * @param {{ startTime: string, endTime: string }} times - ISO strings
     * @returns {Promise<Object>}
     */
    async updateSlot(slotId, requestId, round, { startTime, endTime }) {
        if (!this.supabase) {
            throw new Error('Supabase client not initialized');
        }

        try {
            await this._validateNoOverlappingSlots(
                requestId,
                round,
                [{ startTime, endTime }],
                slotId
            );

            const { data, error } = await this.supabase
                .from('interview_slots')
                .update({
                    start_time: startTime,
                    end_time: endTime,
                    updated_at: new Date().toISOString()
                })
                .eq('id', slotId)
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
                .single();

            if (error) throw error;

            return { success: true, data };
        } catch (error) {
            console.error('Error updating slot:', error);
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
