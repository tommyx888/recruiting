// Pagination utility for the Recruiting Management System

/**
 * Create pagination controls
 * @param {number} currentPage - Current page number (1-based)
 * @param {number} totalPages - Total number of pages
 * @param {Function} onPageChange - Callback function for page changes
 * @returns {HTMLElement} - Pagination container element
 */
function createPagination(currentPage, totalPages, onPageChange) {
    const container = document.createElement('div');
    container.className = 'pagination';
    container.style.cssText = `
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        margin: 20px 0;
        padding: 10px;
    `;

    if (totalPages <= 1) {
        return container; // No pagination needed
    }

    // Previous button
    const prevButton = createPageButton('‹', currentPage > 1, () => {
        if (currentPage > 1) onPageChange(currentPage - 1);
    });
    container.appendChild(prevButton);

    // Page numbers
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);

    // First page if not in range
    if (startPage > 1) {
        container.appendChild(createPageButton('1', true, () => onPageChange(1)));
        if (startPage > 2) {
            container.appendChild(createPageButton('...', false, null));
        }
    }

    // Page range
    for (let i = startPage; i <= endPage; i++) {
        const isActive = i === currentPage;
        container.appendChild(createPageButton(i.toString(), true, () => onPageChange(i), isActive));
    }

    // Last page if not in range
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            container.appendChild(createPageButton('...', false, null));
        }
        container.appendChild(createPageButton(totalPages.toString(), true, () => onPageChange(totalPages)));
    }

    // Next button
    const nextButton = createPageButton('›', currentPage < totalPages, () => {
        if (currentPage < totalPages) onPageChange(currentPage + 1);
    });
    container.appendChild(nextButton);

    return container;
}

/**
 * Create a page button element
 * @param {string} text - Button text
 * @param {boolean} enabled - Whether button is enabled
 * @param {Function|null} onClick - Click handler
 * @param {boolean} isActive - Whether this is the active page
 * @returns {HTMLElement} - Button element
 */
function createPageButton(text, enabled, onClick, isActive = false) {
    const button = document.createElement('button');
    button.textContent = text;
    button.className = `page-button ${isActive ? 'active' : ''}`;
    button.disabled = !enabled;
    
    button.style.cssText = `
        padding: 8px 12px;
        border: 1px solid #ddd;
        background-color: ${isActive ? '#3498db' : (enabled ? '#fff' : '#f5f5f5')};
        color: ${isActive ? '#fff' : (enabled ? '#333' : '#999')};
        cursor: ${enabled ? 'pointer' : 'not-allowed'};
        border-radius: 4px;
        font-size: 14px;
        transition: all 0.2s ease;
    `;

    if (enabled && onClick) {
        button.addEventListener('click', onClick);
        button.addEventListener('mouseenter', () => {
            if (!isActive) {
                button.style.backgroundColor = '#e9ecef';
            }
        });
        button.addEventListener('mouseleave', () => {
            if (!isActive) {
                button.style.backgroundColor = '#fff';
            }
        });
    }

    return button;
}

/**
 * Paginate an array of data
 * @param {Array} data - Array to paginate
 * @param {number} page - Current page (1-based)
 * @param {number} pageSize - Number of items per page
 * @returns {Object} - Paginated result with data, totalPages, etc.
 */
function paginateData(data, page, pageSize) {
    const totalItems = data.length;
    const totalPages = Math.ceil(totalItems / pageSize);
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedData = data.slice(startIndex, endIndex);

    return {
        data: paginatedData,
        currentPage: page,
        totalPages,
        totalItems,
        pageSize,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1
    };
}

/**
 * Create pagination info text
 * @param {Object} paginationInfo - Pagination information
 * @returns {HTMLElement} - Info text element
 */
function createPaginationInfo(paginationInfo) {
    const info = document.createElement('div');
    info.className = 'pagination-info';
    info.style.cssText = `
        text-align: center;
        color: #666;
        font-size: 14px;
        margin: 10px 0;
    `;

    const { currentPage, totalPages, totalItems, pageSize } = paginationInfo;
    const startItem = (currentPage - 1) * pageSize + 1;
    const endItem = Math.min(currentPage * pageSize, totalItems);

    info.textContent = `Showing ${startItem}-${endItem} of ${totalItems} items (Page ${currentPage} of ${totalPages})`;
    
    return info;
}

// Export functions for use in other modules
window.pagination = {
    createPagination,
    paginateData,
    createPaginationInfo
};

