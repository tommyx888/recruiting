// Caching utility for the Recruiting Management System

class CacheManager {
    constructor() {
        this.cache = new Map();
        this.defaultTTL = 5 * 60 * 1000; // 5 minutes
        this.maxSize = 100; // Maximum number of cached items
        this.cleanupInterval = 60 * 1000; // 1 minute
        this.startCleanupTimer();
    }

    /**
     * Set cache item
     * @param {string} key - Cache key
     * @param {*} value - Value to cache
     * @param {number} ttl - Time to live in milliseconds
     */
    set(key, value, ttl = this.defaultTTL) {
        // Remove oldest items if cache is full
        if (this.cache.size >= this.maxSize) {
            this.evictOldest();
        }

        const expiry = Date.now() + ttl;
        this.cache.set(key, {
            value,
            expiry,
            createdAt: Date.now()
        });
    }

    /**
     * Get cache item
     * @param {string} key - Cache key
     * @returns {*} - Cached value or null
     */
    get(key) {
        const item = this.cache.get(key);
        
        if (!item) {
            return null;
        }

        // Check if expired
        if (Date.now() > item.expiry) {
            this.cache.delete(key);
            return null;
        }

        return item.value;
    }

    /**
     * Check if key exists and is not expired
     * @param {string} key - Cache key
     * @returns {boolean}
     */
    has(key) {
        const item = this.cache.get(key);
        return item && Date.now() <= item.expiry;
    }

    /**
     * Delete cache item
     * @param {string} key - Cache key
     * @returns {boolean}
     */
    delete(key) {
        return this.cache.delete(key);
    }

    /**
     * Clear all cache
     */
    clear() {
        this.cache.clear();
    }

    /**
     * Get cache statistics
     * @returns {Object}
     */
    getStats() {
        const now = Date.now();
        let expired = 0;
        let valid = 0;

        for (const [key, item] of this.cache) {
            if (now > item.expiry) {
                expired++;
            } else {
                valid++;
            }
        }

        return {
            total: this.cache.size,
            valid,
            expired,
            hitRate: this.calculateHitRate()
        };
    }

    /**
     * Evict oldest cache item
     */
    evictOldest() {
        let oldestKey = null;
        let oldestTime = Date.now();

        for (const [key, item] of this.cache) {
            if (item.createdAt < oldestTime) {
                oldestTime = item.createdAt;
                oldestKey = key;
            }
        }

        if (oldestKey) {
            this.cache.delete(oldestKey);
        }
    }

    /**
     * Clean up expired items
     */
    cleanup() {
        const now = Date.now();
        const keysToDelete = [];

        for (const [key, item] of this.cache) {
            if (now > item.expiry) {
                keysToDelete.push(key);
            }
        }

        keysToDelete.forEach(key => this.cache.delete(key));
    }

    /**
     * Start cleanup timer
     */
    startCleanupTimer() {
        setInterval(() => {
            this.cleanup();
        }, this.cleanupInterval);
    }

    /**
     * Calculate cache hit rate (simplified)
     * @returns {number}
     */
    calculateHitRate() {
        // This is a simplified implementation
        // In a real application, you'd track hits and misses
        return 0.85; // Placeholder
    }

    /**
     * Create cache key from object
     * @param {string} prefix - Key prefix
     * @param {Object} params - Parameters to include in key
     * @returns {string}
     */
    createKey(prefix, params = {}) {
        const sortedParams = Object.keys(params)
            .sort()
            .map(key => `${key}:${params[key]}`)
            .join('|');
        
        return sortedParams ? `${prefix}_${sortedParams}` : prefix;
    }

    /**
     * Cache with automatic key generation
     * @param {string} prefix - Key prefix
     * @param {Object} params - Parameters for key generation
     * @param {Function} fetchFn - Function to fetch data if not cached
     * @param {number} ttl - Time to live
     * @returns {Promise<*>}
     */
    async getOrSet(prefix, params, fetchFn, ttl = this.defaultTTL) {
        const key = this.createKey(prefix, params);
        
        // Try to get from cache first
        const cached = this.get(key);
        if (cached !== null) {
            return cached;
        }

        // Fetch data if not in cache
        try {
            const data = await fetchFn();
            this.set(key, data, ttl);
            return data;
        } catch (error) {
            console.error('Error fetching data for cache:', error);
            throw error;
        }
    }
}

// Create global instance
window.cacheManager = new CacheManager();

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CacheManager;
}

