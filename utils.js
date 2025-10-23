// Utility functions for the Recruiting Management System

/**
 * Sanitize user input to prevent XSS attacks
 * @param {string} input - The input string to sanitize
 * @returns {string} - Sanitized string
 */
function sanitizeInput(input) {
    if (typeof input !== 'string') return input;
    
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
}

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} - True if valid email format
 */
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Validate file upload
 * @param {File} file - File to validate
 * @param {Object} options - Validation options
 * @returns {Object} - Validation result with isValid and message
 */
function validateFile(file, options = {}) {
    const {
        maxSize = 10 * 1024 * 1024, // 10MB default
        allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
        allowedExtensions = ['.pdf', '.doc', '.docx']
    } = options;

    if (!file) {
        return { isValid: false, message: 'No file selected' };
    }

    if (file.size > maxSize) {
        return { isValid: false, message: `File size exceeds ${maxSize / (1024 * 1024)}MB limit` };
    }

    if (!allowedTypes.includes(file.type)) {
        return { isValid: false, message: 'Invalid file type. Only PDF, DOC, and DOCX files are allowed' };
    }

    const fileExtension = '.' + file.name.split('.').pop().toLowerCase();
    if (!allowedExtensions.includes(fileExtension)) {
        return { isValid: false, message: 'Invalid file extension' };
    }

    return { isValid: true, message: 'File is valid' };
}

/**
 * Validate required fields
 * @param {Object} data - Object containing form data
 * @param {Array} requiredFields - Array of required field names
 * @returns {Object} - Validation result
 */
function validateRequiredFields(data, requiredFields) {
    const missingFields = [];
    
    for (const field of requiredFields) {
        if (!data[field] || (typeof data[field] === 'string' && data[field].trim() === '')) {
            missingFields.push(field);
        }
    }

    return {
        isValid: missingFields.length === 0,
        missingFields,
        message: missingFields.length > 0 ? `Missing required fields: ${missingFields.join(', ')}` : 'All required fields provided'
    };
}

/**
 * Format date for display
 * @param {string|Date} date - Date to format
 * @returns {string} - Formatted date string
 */
function formatDate(date) {
    if (!date) return '';
    
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return dateObj.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
}

/**
 * Calculate time difference in days
 * @param {string|Date} startDate - Start date
 * @param {string|Date} endDate - End date (defaults to now)
 * @returns {number} - Number of days difference
 */
function calculateDaysDifference(startDate, endDate = new Date()) {
    const start = typeof startDate === 'string' ? new Date(startDate) : startDate;
    const end = typeof endDate === 'string' ? new Date(endDate) : endDate;
    
    const diffTime = Math.abs(end - start);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

/**
 * Show error message to user
 * @param {string} message - Error message
 * @param {string} type - Message type (error, warning, success)
 */
function showMessage(message, type = 'error') {
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.message');
    existingMessages.forEach(msg => msg.remove());

    // Create new message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 5px;
        color: white;
        font-weight: bold;
        z-index: 1000;
        max-width: 400px;
        word-wrap: break-word;
        ${type === 'error' ? 'background-color: #e74c3c;' : ''}
        ${type === 'warning' ? 'background-color: #f39c12;' : ''}
        ${type === 'success' ? 'background-color: #27ae60;' : ''}
    `;

    document.body.appendChild(messageDiv);

    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.parentNode.removeChild(messageDiv);
        }
    }, 5000);
}

/**
 * Debounce function to limit function calls
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} - Debounced function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Generate unique ID
 * @returns {string} - Unique identifier
 */
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

/**
 * Async error handler wrapper
 * @param {Function} asyncFn - Async function to wrap
 * @param {string} errorMessage - Default error message
 * @returns {Function} - Wrapped function with error handling
 */
function asyncErrorHandler(asyncFn, errorMessage = 'An error occurred') {
    return async (...args) => {
        try {
            return await asyncFn(...args);
        } catch (error) {
            console.error(errorMessage, error);
            showMessage(`${errorMessage}: ${error.message}`, 'error');
            throw error;
        }
    };
}

/**
 * Safe JSON parse with fallback
 * @param {string} jsonString - JSON string to parse
 * @param {*} fallback - Fallback value if parsing fails
 * @returns {*} - Parsed object or fallback
 */
function safeJsonParse(jsonString, fallback = null) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.warn('Failed to parse JSON:', error);
        return fallback;
    }
}

// Export functions for use in other modules
window.utils = {
    sanitizeInput,
    validateEmail,
    validateFile,
    validateRequiredFields,
    formatDate,
    calculateDaysDifference,
    showMessage,
    debounce,
    generateId,
    asyncErrorHandler,
    safeJsonParse
};
