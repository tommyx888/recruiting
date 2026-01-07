// Refactored main application file using modular architecture

// Translations object
const translations = {
    en: {
        // Navigation
        "Dashboard": "Dashboard",
        "Candidates": "Candidates",
        "Recruiting Requests": "Recruiting Requests",
        "GM Approval": "GM Approval",
        "Logout": "Logout",
        "Welcome to the Recruiting Management Dashboard!": "Welcome to the Recruiting Management Dashboard!",
        "Add New Candidate": "Add New Candidate",
        "Please fill in all required fields": "Please fill in all required fields",
        "Candidate added successfully": "Candidate added successfully",
        "Name": "Name",
        "Position": "Position",
        "Department": "Department",
        "Source": "Source",
        "Notes": "Notes",
        "CV File": "CV File",
        "Assessment File": "Assessment File",
        "Add Candidate": "Add Candidate",
        "Cancel": "Cancel",
        "Create Recruiting Request": "Create Recruiting Request",
        "All Departments": "All Departments",
        "All Positions": "All Positions",
        "All Sources": "All Sources",
        "Full Name": "Full Name",
        "Department": "Department",
        "Position": "Position",
        "Source": "Source",
        "Date Obtained": "Date Obtained",
        "Upload CV": "Upload CV",
        "Upload Assessment Form": "Upload Assessment Form",
        "Interviewer": "Interviewer",
        "Status": "Status",
        "Notes": "Notes",
        "Create New Recruiting Request": "Create New Recruiting Request",
        "Job Description": "Job Description",
        "Headcount": "Headcount",
        "Position Type": "Position Type",
        "New Position": "New Position",
        "Replacement": "Replacement",
        "Reason for New Position": "Reason for New Position",
        "Name of Person Being Replaced": "Name of Person Being Replaced",
        "Position Category": "Position Category",
        "SAL": "SAL",
        "IND": "IND",
        "Confidential Request": "Confidential Request",
        "Submit Request": "Submit Request",
        "Please fill in all required fields": "Please fill in all required fields",
        "Request created successfully!": "Request created successfully!",
        "New": "New",
        "In Process - First Round": "In Process - First Round",
        "In Process - Second Round": "In Process - Second Round",
        "Hired - Contact Source": "Hired - Contact Source",
        "Rejected - Inform Source": "Rejected - Inform Source",
        "Hired": "Hired",
        "Rejected": "Rejected",
        "Name": "Name",
        "CV": "CV",
        "Actions": "Actions",
        "Admin Actions": "Admin Actions",
        "View Details": "View Details",
        "Edit": "Edit",
        "Delete": "Delete",
        "Invite": "Invite",
        "Second Round": "Second Round",
        "Hire": "Hire",
        "Reject": "Reject",
        "Source Informed": "Source Informed",
        "Download CV": "Download CV",
        "Download Assessment": "Download Assessment",
        "No CV": "No CV",
        "No notes": "No notes",
        "Select a department": "Select a department",
        "Select a position": "Select a position",
        "Select a source": "Select a source",
        "Add Candidate": "Add Candidate",
        "Update Candidate": "Update Candidate",
        "Update Password": "Update Password",
        "Current Password": "Current Password",
        "New Password": "New Password",
        "Confirm New Password": "Confirm New Password",
        "New passwords do not match": "New passwords do not match",
        "Password updated successfully": "Password updated successfully",
        "Error updating password. Please try again.": "Error updating password. Please try again.",
        "Apply Filters": "Apply Filters",
        "Documents": "Documents",
        "No documents": "No documents",
        "Error": "Error",
        "Success": "Success",
        "Cancel": "Cancel",
        "Save": "Save",
        "Back": "Back",
        "Reload Page": "Reload Page",
        "All Statuses": "All Statuses",
        "Pending": "Pending",
        "Approved": "Approved",
        "Rejected": "Rejected",
        "Filled": "Filled",
        "All Departments": "All Departments",
        "All Positions": "All Positions",
        "All Sources": "All Sources",
        "Position": "Position",
        "Description": "Description",
        "Headcount": "Headcount",
        "Type": "Type",
        "Category": "Category",
        "Status": "Status",
        "Created": "Created",
        "ID": "ID",
        "Actions": "Actions",
        "Approve": "Approve",
        "Fill Position": "Fill Position",
        "View Details": "View Details",
        "Access denied. Only GMs can view this page.": "Access denied. Only GMs can view this page.",
        "Review and approve pending recruiting requests": "Review and approve pending recruiting requests",
        "Statistics": "Statistics",
        "Loading Statistics": "Loading Statistics",
        "Candidate Statistics": "Candidate Statistics",
        "Total Candidates": "Total Candidates",
        "Avg. Time to Hire (days)": "Avg. Time to Hire (days)",
        "By Status": "By Status",
        "Request Statistics": "Request Statistics",
        "Total Requests": "Total Requests",
        "Request approved successfully!": "Request approved successfully!",
        "Request rejected successfully!": "Request rejected successfully!",
        "Position marked as filled!": "Position marked as filled!",
        "Error approving request:": "Error approving request:",
        "Error rejecting request:": "Error rejecting request:",
        "Error updating position:": "Error updating position:",
        "Reports functionality coming soon!": "Reports functionality coming soon!",
        "Clear Filters": "Clear Filters",
        "Request Details": "Request Details",
        "Created At": "Created At",
        "Days Old": "Days Old",
        "Day": "Day",
        "Days": "Days",
        "Candidate Details": "Candidate Details",
        "Not assigned": "Not assigned",
        "No notes": "No notes",
        "Last Updated": "Last Updated",
        "Documents": "Documents",
        "CV": "CV",
        "Assessment": "Assessment",
        "No CV uploaded": "No CV uploaded",
        "No Assessment uploaded": "No Assessment uploaded",
        "Re-upload CV": "Re-upload CV",
        "Re-upload Assessment": "Re-upload Assessment",
        "Upload CV": "Upload CV",
        "Upload Assessment": "Upload Assessment",
        "Re-upload Document": "Re-upload Document",
        "Select File": "Select File",
        "Upload": "Upload"
    },
    sk: {
        // Navigation
        "Dashboard": "Nástenka",
        "Candidates": "Kandidáti",
        "Recruiting Requests": "Žiadosti o nábor",
        "GM Approval": "Schválenie GM",
        "Logout": "Odhlásiť sa",
        "Add New Candidate": "Pridať nového kandidáta",
        "Full Name": "Celé meno",
        "Department": "Oddelenie",
        "Position": "Pozícia",
        "Source": "Zdroj",
        "Date Obtained": "Dátum získania",
        "Upload CV": "Nahrať životopis",
        "Upload Assessment Form": "Nahrať hodnotiaci formulár",
        "Interviewer": "Pohovorujúci",
        "Status": "Stav",
        "Notes": "Poznámky",
        "Create New Recruiting Request": "Vytvoriť novú žiadosť o nábor",
        "Job Description": "Popis práce",
        "Headcount": "Počet pracovníkov",
        "Position Type": "Typ pozície",
        "New Position": "Nová pozícia",
        "Replacement": "Náhrada",
        "Reason for New Position": "Dôvod novej pozície",
        "Name of Person Being Replaced": "Meno nahradzovanej osoby",
        "Position Category": "Kategória pozície",
        "SAL": "SAL",
        "IND": "IND",
        "Confidential Request": "Dôverná žiadosť",
        "Submit Request": "Odoslať žiadosť",
        "Please fill in all required fields": "Prosím, vyplňte všetky povinné polia",
        "Request created successfully!": "Žiadosť bola úspešne vytvorená!",
        "Error creating request: ": "Chyba pri vytváraní žiadosti: ",
        "Select a department": "Vyberte oddelenie",
        "Select a department first": "Najprv vyberte oddelenie",
        "Select a source": "Vyberte zdroj",
        "New": "Nový",
        "In Process - First Round": "V procese - Prvé kolo",
        "In Process - Second Round": "V procese - Druhé kolo",
        "Hired": "Prijatý",
        "Rejected": "Zamietnutý",
        "Candidate added successfully!": "Kandidát bol úspešne pridaný!",
        "Error adding candidate: ": "Chyba pri pridávaní kandidáta: ",
        "Please fill in all required fields": "Prosím vyplňte všetky povinné polia",
        "Candidate added successfully": "Kandidát úspešne pridaný",
        "Name": "Meno",
        "Position": "Pozícia",
        "Department": "Oddelenie",
        "Source": "Zdroj",
        "Notes": "Poznámky",
        "CV File": "CV súbor",
        "Assessment File": "Assessment súbor",
        "Add Candidate": "Pridať kandidáta",
        "Cancel": "Zrušiť",
        "Select Position": "Vyberte pozíciu",
        "Supabase client not initialized": "Supabase klient nie je inicializovaný",
        "Error: Supabase client not initialized": "Chyba: Supabase klient nie je inicializovaný",
        "No data returned from insert operation": "Z operácie vloženia neboli vrátené žiadne dáta",
        "Request created successfully:": "Žiadosť bola úspešne vytvorená:",
        "Error sending email to GMs:": "Chyba pri odosielaní e-mailu generálnym manažérom:",
        "Email sent successfully to GMs:": "E-mail bol úspešne odoslaný generálnym manažérom:",
        "Error invoking send-gm-email function:": "Chyba pri volaní funkcie send-gm-email:",
        "All Departments": "Všetky oddelenia",
        "All Positions": "Všetky pozície",
        "All Sources": "Všetky zdroje",
        "Apply Filters": "Použiť filtre",
        "Candidates in Process": "Kandidáti v procese",
        "Hired Candidates": "Prijatí kandidáti",
        "Rejected Candidates": "Zamietnutí kandidáti",
        "Name": "Meno",
        "Documents": "Dokumenty",
        "Actions": "Akcie",
        "Admin Actions": "Administratívne akcie",
        "View Details": "Zobraziť detaily",
        "Invite": "Pozvať",
        "Reject": "Zamietnuť",
        "Second Round": "Druhé kolo",
        "Hire": "Prijať",
        "Download CV": "Stiahnuť životopis",
        "Download Assessment": "Stiahnuť hodnotenie",
        "No documents": "Žiadne dokumenty",
        "No notes": "Žiadne poznámky",
        "Create New Request": "Vytvoriť novú žiadosť",
        "Welcome to the Recruiting Management Dashboard!": "Vitajte v paneli riadenia náboru!",
        "Update Password": "Aktualizovať heslo",
        "Current Password": "Aktuálne heslo",
        "New Password": "Nové heslo",
        "Confirm New Password": "Potvrďte nové heslo",
        "New passwords do not match": "Nové heslá sa nezhodujú",
        "Password updated successfully": "Heslo bolo úspešne aktualizované",
        "Error updating password. Please try again.": "Chyba pri aktualizácii hesla. Prosím, skúste to znova.",
        "Error": "Chyba",
        "Success": "Úspech",
        "Cancel": "Zrušiť",
        "Save": "Uložiť",
        "Back": "Späť",
        "Reload Page": "Obnoviť stránku",
        "All Statuses": "Všetky stavy",
        "Pending": "Čakajúce",
        "Approved": "Schválené",
        "Rejected": "Zamietnuté",
        "Filled": "Obsadené",
        "All Departments": "Všetky oddelenia",
        "All Positions": "Všetky pozície",
        "All Sources": "Všetky zdroje",
        "Position": "Pozícia",
        "Description": "Popis",
        "Headcount": "Počet pracovníkov",
        "Type": "Typ",
        "Category": "Kategória",
        "Status": "Stav",
        "Created": "Vytvorené",
        "ID": "ID",
        "Actions": "Akcie",
        "Approve": "Schváliť",
        "Fill Position": "Obsadiť pozíciu",
        "View Details": "Zobraziť detaily",
        "Access denied. Only GMs can view this page.": "Prístup zamietnutý. Túto stránku môžu zobraziť len GM.",
        "Review and approve pending recruiting requests": "Prehľad a schválenie čakajúcich žiadostí o nábor",
        "Statistics": "Štatistiky",
        "Loading Statistics": "Načítavanie štatistík",
        "Candidate Statistics": "Štatistiky kandidátov",
        "Total Candidates": "Celkový počet kandidátov",
        "Avg. Time to Hire (days)": "Priemerný čas do prijatia (dni)",
        "By Status": "Podľa stavu",
        "Request Statistics": "Štatistiky žiadostí",
        "Total Requests": "Celkový počet žiadostí",
        "Request approved successfully!": "Žiadosť bola úspešne schválená!",
        "Request rejected successfully!": "Žiadosť bola úspešne zamietnutá!",
        "Position marked as filled!": "Pozícia bola označená ako obsadená!",
        "Error approving request:": "Chyba pri schvaľovaní žiadosti:",
        "Error rejecting request:": "Chyba pri zamietaní žiadosti:",
        "Error updating position:": "Chyba pri aktualizácii pozície:",
        "Reports functionality coming soon!": "Funkcionalita reportov čoskoro!",
        "Clear Filters": "Vymazať filtre",
        "Request Details": "Detaily žiadosti",
        "Created At": "Vytvorené",
        "Days Old": "Dní čaká",
        "Day": "deň",
        "Days": "dní",
        "Candidate Details": "Detaily kandidáta",
        "Not assigned": "Nepriradené",
        "No notes": "Žiadne poznámky",
        "Last Updated": "Posledná aktualizácia",
        "Documents": "Dokumenty",
        "CV": "CV",
        "Assessment": "Assessment",
        "No CV uploaded": "CV nie je nahrané",
        "No Assessment uploaded": "Assessment nie je nahraný",
        "Re-upload CV": "Znovu nahrať CV",
        "Re-upload Assessment": "Znovu nahrať Assessment",
        "Upload CV": "Nahrať CV",
        "Upload Assessment": "Nahrať Assessment",
        "Re-upload Document": "Znovu nahrať dokument",
        "Select File": "Vybrať súbor",
        "Upload": "Nahrať"
    }
};

// Global variables
let supabaseInstance;
let currentLanguage = 'sk';

// Department-Position mapping
const departmentPositions = {
    'Business': ['Assistant Buyer', 'Buyer', 'Supplier Quality Assurance Engineer', 'Business Administration', 'Business Sales & Cost Analyst'],
    'CI': ['CI Coordinator', 'CI Analyst', 'CI Technician'],
    'Engineering': ['Senior Process Engineer 1', 'Senior Process Engineer IM', 'Process Engineer 1', 'Senior IM Technologist Coordinator', 'Process Engineer IM', 'Senior Technologist IM', 'Foreman Technologist IM', 'Technologist IM', 'Mold Changer', 'Materialist', 'Senior Process Engineer 2', 'Process Engineer 2', 'Senior Technologist Coordinator', 'Tooling Engineer', 'Product Engineer', 'Change BOM Coordinator', 'Programe Engineer', 'Technologist 1', 'Quality Program Engineer', 'Launch Coordinator', 'Data Analyst', 'Manufacturing Engineer'],
    'Finance': ['Programme Controller', 'Finance Analyst', 'Chief Accountant', 'Financial Specialist Senior', 'Supplier Accountant', 'Services Accountant', 'Financial Assistant', 'Financial Clerk', 'Revenue Accountant', 'Financial Specialist', 'Treasury Analyst', 'Senior Treasury & Financial Analyst'],
    'HR': ['Payroll accountant', 'Senior HR Generalist', 'Recruiter', 'HR Generalist 1', 'Junior Payroll', 'Training Center Trainer', 'HSE Specialist', 'Environment Officer', 'Executive assistant'],
    'IT': ['IT Analyst / Administrator', 'Senior IT Specialist'],
    'Logistics': ['Warehouse/Logistics Leader', 'Senior Logistics Planner', 'Logistics Disponent', 'Logistics Planner', 'Packaging Disponent', 'Logistics Referent', 'Inventory Counter', 'Internal Logistics Coordinator', 'Logistics Shift leader', 'Expedient', 'Supervisor Inventory Control', 'Logistics Planner IM', 'Senior Demand Specialist', 'Logistics operator Expedient', 'Logistics operator receiving'],
    'Maintenance': ['Maintenance leader', 'Technician I', 'Technician II', 'Maintenance Shift Leader', 'Maintainer', 'Maintainer - mechanician', 'Maintainer - electrician', 'Energetic Coordinator', 'Robotist', 'Toolmaker', 'Maintenance Leader IM', 'Electrician IM', 'Mechanician IM', 'Maintainer - Toolmaker', 'Energetic/Facility Coordinator', 'Mechatronik', 'Toolmaker Coordinator and Maintenance Leader IM', 'Warehouse referent'],
    'Management': ['Operation Assistant General Manager', 'Financial Manager', 'HR Manager', 'Logistics Manager', 'Quality Manager', 'Production Manager', 'Maintenance Manager', 'Programme Manager', 'Purchasing Manager', 'IT Manager', 'Ext. Programme Manager', 'Business Manager', 'Program Manager'],
    'Procurement': ['Procurement Manager', 'Senior Buyer', 'Junior Buyer', 'Capital & Tooling Buyer'],
    'Production': ['Production Coordinator', 'Production Shift leader', 'Production Referent'],
    'Quality': ['Customer Quality Leader', 'Quality Leader', 'PPAP Technician', 'Quality Engineer QM System', 'Laboratory Leader/ Metrolog', 'Customer Quality Coordinator', 'Quality Auditors Coordinator', 'Supplier Quality Assurance', 'Sperrlager Coordinator', 'Sperrlager Quality Operator', 'Quality Auditor', 'Incoming Inspection', '3D Measurement', 'Laboratory technician', 'Resident']
};

// Source options
const sourceOptions = [
    'Manuvia', 'Talent Solution', 'Tobin', 'Manpower', 'TG', 'TP Group', 'Profesia',
    'Employee Referral', 'LinkedIn', 'Company Website', 'University/College', 'Job Fair'
];

// Initialize Supabase client
function initSupabase() {
    if (!supabaseInstance) {
        try {
            const config = window.config;
            if (!config || !config.supabase) {
                throw new Error('Supabase configuration not found');
            }
            
            supabaseInstance = supabase.createClient(config.supabase.url, config.supabase.anonKey);
            window.supabase = supabaseInstance; // Make it globally available
            console.log('Supabase client initialized successfully');
        } catch (error) {
            console.error('Error initializing Supabase client:', error);
            if (window.utils && window.utils.showMessage) {
                window.utils.showMessage('Error initializing Supabase client. Please check the console for more details.', 'error');
    } else {
                alert('Error initializing Supabase client. Please check the console for more details.');
            }
        }
    }
    return supabaseInstance;
}

// Initialize all modules
async function initializeModules() {
    try {
        console.log('Starting module initialization...');
        
        // Initialize Supabase
        const supabase = initSupabase();
        if (!supabase) {
            throw new Error('Failed to initialize Supabase');
        }
        console.log('Supabase initialized successfully');

        // Check if modules are available
        if (!window.authManager) {
            throw new Error('AuthManager not available');
        }
        if (!window.candidatesManager) {
            throw new Error('CandidatesManager not available');
        }
        if (!window.requestsManager) {
            throw new Error('RequestsManager not available');
        }
        if (!window.uiManager) {
            throw new Error('UIManager not available');
        }
        console.log('All modules are available');

        // Initialize modules
        window.authManager.init(supabase);
        window.candidatesManager.init(supabase);
        window.requestsManager.init(supabase);
        window.uiManager.init(translations);
        console.log('All modules initialized');

        // Check authentication
        console.log('Checking authentication...');
        const isAuthenticated = await window.authManager.checkAuth();
        console.log('Authentication check result:', isAuthenticated);
        
        if (isAuthenticated) {
            // Get user role and department
            const userInfo = await window.authManager.getUserInfo();
            if (userInfo) {
                userRole = userInfo.role;
                userDepartment = userInfo.department;
                console.log('User info loaded:', { role: userRole, department: userDepartment });
            }
            
            console.log('User is authenticated, showing app');
            window.uiManager.showApp();
            window.uiManager.updateNavigationVisibility();
        showDashboard();
            
            // Update navigation indicators after a short delay to ensure modules are ready
            setTimeout(() => {
                updateNavigationIndicators();
            }, 1000);
    } else {
            console.log('User not authenticated, showing login');
            window.uiManager.showLogin();
            setupLoginForm();
        }

        window.uiManager.translatePage();
        console.log('Module initialization completed successfully');
    } catch (error) {
        console.error('Error initializing modules:', error);
        window.uiManager.showError('Failed to initialize application. Please refresh the page.');
    }
}

// Setup login form
function setupLoginForm() {
    console.log('Setting up login form...');
    const authForm = document.getElementById('auth-form');
    console.log('Auth form found:', !!authForm);
    
    if (authForm) {
        authForm.addEventListener('submit', async (e) => {
        e.preventDefault();
            console.log('Login form submitted');
            
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
            console.log('Login attempt for email:', email);

            try {
                const result = await window.authManager.login(email, password);
                console.log('Login successful:', result);
                
                window.uiManager.showApp();
                window.uiManager.updateNavigationVisibility();
                showDashboard();
            } catch (error) {
                console.error('Login failed:', error);
                window.utils.showMessage('Login failed: ' + error.message, 'error');
            }
        });
        console.log('Login form event listener added');
    } else {
        console.error('Auth form not found!');
    }
}

// Navigation functions
function showDashboard() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <h2 data-translate="Welcome to the Recruiting Management Dashboard!">Welcome to the Recruiting Management Dashboard!</h2>
        <div class="quick-actions">
            <button onclick="showAddCandidate()" class="btn btn-primary" data-translate="Add New Candidate">Add New Candidate</button>
            <button onclick="showNewRequest()" class="btn btn-primary" data-translate="Create Recruiting Request">Create Recruiting Request</button>
        </div>
    `;
    window.uiManager.translatePage();
}

async function showCandidates() {
    try {
        window.uiManager.showLoading('Loading candidates...');
        
        const result = await window.candidatesManager.getCandidates({
            page: 1,
            pageSize: 1000  // Load all candidates for display
        });

        renderCandidatesView(result);
    } catch (error) {
        console.error('Error loading candidates:', error);
        window.utils.showMessage('Error loading candidates: ' + error.message, 'error');
    }
}

function renderCandidatesView(result) {
    const app = document.getElementById('app');
    const { candidates, pagination } = result;

    console.log('Total candidates loaded:', candidates.length);
    console.log('Candidates data:', candidates);

    // Group candidates by status
    const groupedCandidates = candidates.reduce((acc, candidate) => {
        if (!acc[candidate.status]) {
            acc[candidate.status] = [];
        }
        acc[candidate.status].push(candidate);
        return acc;
    }, {});

    console.log('Grouped candidates:', groupedCandidates);

    // Get all unique statuses from candidates
    const allStatuses = [...new Set(candidates.map(c => c.status).filter(Boolean))].sort();
    
    let html = `
    <h2 data-translate="Candidates">Candidates</h2>
    <button onclick="showAddCandidate()" class="btn btn-primary" data-translate="Add New Candidate">Add New Candidate</button>
    <div class="filters">
        <select id="department-filter">
            <option value="" data-translate="All Departments">All Departments</option>
                ${Object.keys(departmentPositions).map(dept => `<option value="${dept}">${dept}</option>`).join('')}
        </select>
        <select id="position-filter">
            <option value="" data-translate="All Positions">All Positions</option>
        </select>
        <select id="source-filter">
            <option value="" data-translate="All Sources">All Sources</option>
                ${sourceOptions.map(source => `<option value="${source}">${source}</option>`).join('')}
        </select>
        <select id="status-filter">
            <option value="" data-translate="All Statuses">All Statuses</option>
                ${allStatuses.map(status => `<option value="${status}">${window.uiManager.translate(status)}</option>`).join('')}
        </select>
        <button onclick="applyFilters()" class="btn btn-secondary" data-translate="Apply Filters">Apply Filters</button>
        <button onclick="clearFilters()" class="btn btn-outline" data-translate="Clear Filters">Clear Filters</button>
        </div>
        <div id="candidates-container"></div>
    `;

    app.innerHTML = html;

    // Render candidate tables
    const container = document.getElementById('candidates-container');
    
    // Define preferred status order
    const preferredStatusOrder = ['New', 'In Process - First Round', 'In Process - Second Round', 'Hired - Contact Source', 'Rejected - Inform Source', 'Hired', 'Rejected'];
    
    // Get all statuses from grouped candidates
    const allStatusesInData = Object.keys(groupedCandidates);
    
    // Combine preferred order with any additional statuses
    const statusOrder = [
        ...preferredStatusOrder.filter(s => allStatusesInData.includes(s)),
        ...allStatusesInData.filter(s => !preferredStatusOrder.includes(s)).sort()
    ];

    // Show all status groups that have candidates
    statusOrder.forEach(status => {
        const candidatesForStatus = groupedCandidates[status] || [];
        if (candidatesForStatus.length > 0) {
            console.log(`Status: ${status}, Count: ${candidatesForStatus.length}`);
            const table = createCandidateTable(candidatesForStatus, status);
            container.appendChild(table);
        }
    });

    // If no candidates at all, show a message
    if (candidates.length === 0) {
        const noCandidatesMsg = document.createElement('div');
        noCandidatesMsg.className = 'no-candidates-message';
        noCandidatesMsg.innerHTML = `
            <div class="card" style="text-align: center; padding: 2rem; margin: 2rem 0;">
                <h3>No candidates found</h3>
                <p>There are no candidates in the system yet.</p>
                <button onclick="showAddCandidate()" class="btn btn-primary">Add First Candidate</button>
            </div>
        `;
        container.appendChild(noCandidatesMsg);
    }

    window.uiManager.translatePage();
    
    // Add event listener for department filter to update position filter
    const departmentFilter = document.getElementById('department-filter');
    const positionFilter = document.getElementById('position-filter');
    
    if (departmentFilter && positionFilter) {
        // Initialize position filter on load
        updatePositionFilterForCandidates();
        
        // Update position filter when department changes
        departmentFilter.addEventListener('change', function() {
            updatePositionFilterForCandidates();
        });
    }
    
    // Show all candidates by default (including rejected)
}

function updatePositionFilterForCandidates() {
    const departmentFilter = document.getElementById('department-filter');
    const positionFilter = document.getElementById('position-filter');
    
    if (!departmentFilter || !positionFilter) return;
    
    const selectedDepartment = departmentFilter.value;
    
    // Clear position filter options
    positionFilter.innerHTML = '<option value="" data-translate="All Positions">All Positions</option>';
    
    // Get all displayed candidates from the DOM
    const candidateRows = document.querySelectorAll('#candidates-container table tbody tr');
    const allPositions = new Set();
    
    candidateRows.forEach(row => {
        const cells = row.querySelectorAll('td');
        if (cells.length > 2) {
            const position = cells[2].textContent.trim();
            if (position) {
                allPositions.add(position);
            }
        }
    });
    
    if (selectedDepartment && departmentPositions[selectedDepartment]) {
        // If department selected, show only positions from that department that exist in candidates
        departmentPositions[selectedDepartment].forEach(position => {
            const option = document.createElement('option');
            option.value = position;
            option.textContent = position;
            positionFilter.appendChild(option);
        });
    } else {
        // If no department selected, show all unique positions from displayed candidates
        Array.from(allPositions).sort().forEach(position => {
            const option = document.createElement('option');
            option.value = position;
            option.textContent = position;
            positionFilter.appendChild(option);
        });
    }
}

function createCandidateTable(candidates, status) {
    const statusGroup = document.createElement('div');
    statusGroup.className = 'status-group';
    
    // Add data attribute for filtering
    if (status.toLowerCase().includes('rejected')) {
        statusGroup.setAttribute('data-status', 'rejected');
    }

    const header = document.createElement('h3');
    header.className = 'status-header';
    header.textContent = window.uiManager.translate(status);
    statusGroup.appendChild(header);

    const table = document.createElement('table');
    table.className = 'candidates-table';
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    // Create header row
    const headerRow = document.createElement('tr');
    ['Name', 'Department', 'Position', 'Source', 'Date Obtained', 'Interviewer', 'Time in Process', 'Documents', 'Notes', 'Actions', 'Admin Actions'].forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = window.uiManager.translate(headerText);
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create data rows
    candidates.forEach(candidate => {
        const row = document.createElement('tr');
        const timeInProcess = calculateTimeInProcess(candidate.last_updated);
        const alertClass = timeInProcess.days > 7 ? 'alert-status' : '';
        row.className = alertClass;

        // Create name cell with warning indicators
        const nameWithWarning = createNameWithWarning(candidate);

        // Add cells
        [
            nameWithWarning,
            candidate.department || '',
            candidate.position || '',
            candidate.source || '',
            candidate.date_obtained || '',
            candidate.interviewer || '',
            formatTimeInProcess(timeInProcess),
            createDocumentsCell(candidate),
            createNotesCell(candidate),
            createActionButtons(candidate),
            createAdminActionButtons(candidate)
        ].forEach(cellContent => {
            const td = document.createElement('td');
            td.innerHTML = cellContent;
            row.appendChild(td);
        });

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    statusGroup.appendChild(table);

    return statusGroup;
}

// Function to create name with warning indicators
function createNameWithWarning(candidate) {
    const name = candidate.name || '';
    
    // Skip warnings for hired and rejected candidates
    if (candidate.status && (
        candidate.status.includes('Hired') || 
        candidate.status.includes('Rejected')
    )) {
        return name; // Return name without warnings
    }
    
    const now = new Date();
    const lastUpdated = new Date(candidate.last_updated);
    const diffTime = Math.abs(now - lastUpdated);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    let warningIcon = '';
    let warningClass = '';
    let tooltipText = '';
    
    if (diffDays > 14) {
        // More than 2 weeks - red warning
        warningIcon = '🚨';
        warningClass = 'name-warning-red';
        tooltipText = `Kritické! Kandidát bez zmeny ${diffDays} dní (viac ako 2 týždne)`;
    } else if (diffDays > 7) {
        // More than 1 week - orange warning
        warningIcon = '⚠️';
        warningClass = 'name-warning-orange';
        tooltipText = `Upozornenie! Kandidát bez zmeny ${diffDays} dní (viac ako týždeň)`;
    }
    
    if (warningIcon) {
        return `<span class="candidate-name ${warningClass}" title="${tooltipText}">${warningIcon} ${name}</span>`;
    }
    
    return name;
}

function createDocumentsCell(candidate) {
    let html = '';
    if (candidate.cv_file_path) {
        html += `<button onclick="downloadFile(${candidate.id}, 'cv')" class="btn btn-document" title="Stiahnuť životopis">📄</button>`;
    }
    if (candidate.assesment_file_path) {
        html += `<button onclick="downloadFile(${candidate.id}, 'assessment')" class="btn btn-document" title="Stiahnuť assessment">📎</button>`;
    }
    if (!html) {
        html = '<span data-translate="No documents">No documents</span>';
    }
    return html;
}

function createNotesCell(candidate) {
    if (!candidate.notes || candidate.notes.trim() === '') {
        return '<span data-translate="No notes">No notes</span>';
    }
    
    const notes = candidate.notes.trim();
    
    // Always show button for notes
    return `<div class="notes-cell">
        <button onclick="showNotesModal(${candidate.id}, '${notes.replace(/'/g, "\\'")}')" class="btn btn-notes" title="Zobraziť poznámky">
            📝
        </button>
    </div>`;
}

function createActionButtons(candidate) {
    let buttons = '';
                switch (candidate.status) {
                    case 'New':
            buttons = `
                            <button onclick="inviteCandidate(${candidate.id})" class="btn btn-primary" data-translate="Invite">Invite</button>
                            <button onclick="rejectCandidate(${candidate.id})" class="btn btn-danger" data-translate="Reject">Reject</button>
                        `;
                        break;
                    case 'In Process - First Round':
            buttons = `
                            <button onclick="secondRound(${candidate.id})" class="btn btn-primary" data-translate="Second Round">Second Round</button>
                            <button onclick="hireCandidate(${candidate.id})" class="btn btn-success" data-translate="Hire">Hire</button>
                            <button onclick="rejectCandidate(${candidate.id})" class="btn btn-danger" data-translate="Reject">Reject</button>
                        `;
                        break;
                    case 'In Process - Second Round':
            buttons = `
                            <button onclick="hireCandidate(${candidate.id})" class="btn btn-success" data-translate="Hire">Hire</button>
                            <button onclick="rejectCandidate(${candidate.id})" class="btn btn-danger" data-translate="Reject">Reject</button>
                        `;
                        break;
                    case 'Rejected - Inform Source':
            buttons = `<button onclick="rejectedSourceInformed(${candidate.id})" class="btn btn-success" data-translate="Rejected - Source Informed">Rejected - Source Informed</button>`;
                        break;
                    case 'Hired - Contact Source':
            buttons = `<button onclick="hiredSourceInformed(${candidate.id})" class="btn btn-danger" data-translate="Hired - Source Informed">Hired - Source Informed</button>`;
            break;
        default:
            buttons = '<span data-translate="No actions">No actions</span>';
                        break;
    }
    return buttons;
}

function createAdminActionButtons(candidate) {
    // Admin actions are always available - View Details button
    return `<button onclick="showCandidateDetails(${candidate.id})" class="btn btn-info" data-translate="View Details">View Details</button>`;
}

// Function to show notes modal
function showNotesModal(candidateId, notes) {
    // Create modal overlay
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    modalOverlay.id = 'notes-modal-overlay';
    
    // Create modal content
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content notes-modal';
    
    modalContent.innerHTML = `
        <div class="modal-header">
            <h3>Poznámky kandidáta</h3>
            <button class="modal-close" onclick="closeNotesModal()">&times;</button>
                    </div>
        <div class="modal-body">
            <div class="notes-content">
                ${notes.replace(/\n/g, '<br>')}
            </div>
        </div>
        <div class="modal-footer">
            <button onclick="closeNotesModal()" class="btn btn-primary">Zavrieť</button>
                </div>
            `;
    
    modalOverlay.appendChild(modalContent);
    document.body.appendChild(modalOverlay);
    
    // Add click outside to close
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            closeNotesModal();
        }
    });
    
    // Add escape key to close
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeNotesModal();
        }
    });
}

// Function to close notes modal
function closeNotesModal() {
    const modalOverlay = document.getElementById('notes-modal-overlay');
    if (modalOverlay) {
        modalOverlay.remove();
    }
}

// Candidate action functions
async function inviteCandidate(id) {
    try {
        await window.candidatesManager.updateCandidateStatus(id, 'In Process - First Round');
        window.utils.showMessage('Candidate invited to first round interview.', 'success');
        showCandidates();
        // Update navigation indicators after status change
        updateNavigationIndicators();
    } catch (error) {
        window.utils.showMessage('Error updating candidate status: ' + error.message, 'error');
    }
}

async function rejectCandidate(id) {
    const reason = prompt('Please enter the reason for rejecting this candidate:');
    if (reason === null) return;

    try {
        await window.candidatesManager.updateCandidateStatus(id, 'Rejected - Inform Source', `Termination reason: ${reason}`);
        window.utils.showMessage('Candidate rejected. Please inform the source.', 'success');
        showCandidates();
        updateNavigationIndicators();
    } catch (error) {
        window.utils.showMessage('Error updating candidate status: ' + error.message, 'error');
    }
}

async function secondRound(id) {
    try {
        await window.candidatesManager.updateCandidateStatus(id, 'In Process - Second Round');
        window.utils.showMessage('Candidate moved to second round interview.', 'success');
        showCandidates();
        updateNavigationIndicators();
    } catch (error) {
        window.utils.showMessage('Error updating candidate status: ' + error.message, 'error');
    }
}

async function hireCandidate(id) {
    try {
        await window.candidatesManager.updateCandidateStatus(id, 'Hired - Contact Source');
        window.utils.showMessage('Candidate hired. Please contact the source.', 'success');
        showCandidates();
        updateNavigationIndicators();
    } catch (error) {
        window.utils.showMessage('Error updating candidate status: ' + error.message, 'error');
    }
}

async function rejectedSourceInformed(id) {
    try {
        await window.candidatesManager.updateCandidateStatus(id, 'Rejected');
        window.utils.showMessage('Source informed. Candidate status updated to Rejected.', 'success');
        showCandidates();
        updateNavigationIndicators();
    } catch (error) {
        window.utils.showMessage('Error updating candidate status: ' + error.message, 'error');
    }
}

async function hiredSourceInformed(id) {
    try {
        await window.candidatesManager.updateCandidateStatus(id, 'Hired');
        window.utils.showMessage('Source informed. Candidate status updated to Hired.', 'success');
        showCandidates();
        updateNavigationIndicators();
    } catch (error) {
        window.utils.showMessage('Error updating candidate status: ' + error.message, 'error');
    }
}

async function downloadFile(candidateId, fileType) {
    try {
        await window.candidatesManager.downloadFile(candidateId, fileType);
    } catch (error) {
        window.utils.showMessage(`Error downloading ${fileType}: ` + error.message, 'error');
    }
}

// Utility functions
function calculateTimeInProcess(lastUpdated) {
    const now = new Date();
    const updated = new Date(lastUpdated);
    const diffTime = Math.abs(now - updated);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    return { days: diffDays, hours: diffHours };
}

function formatTimeInProcess(time) {
    if (time.days > 0) {
        return `${time.days} ${time.days === 1 ? 'day' : 'days'}`;
    } else {
        return `${time.hours} ${time.hours === 1 ? 'hour' : 'hours'}`;
    }
}

// Navigation functions
async function showRequests() {
    try {
        window.uiManager.showLoading('Loading recruiting requests...');
        
        const result = await window.requestsManager.getRequests({
            page: 1,
            pageSize: 20
        });

        renderRequestsView(result);
    } catch (error) {
        console.error('Error loading requests:', error);
        window.utils.showMessage('Error loading requests: ' + error.message, 'error');
    }
}

function renderRequestsView(result) {
    const app = document.getElementById('app');
    const { requests, pagination } = result;

    // Sort requests: Pending first, then Approved, then Filled, then Rejected
    const sortedRequests = [...requests].sort((a, b) => {
        const statusOrder = { 'Pending': 1, 'Approved': 2, 'Filled': 3, 'Rejected': 4 };
        const aOrder = statusOrder[a.status] || 5;
        const bOrder = statusOrder[b.status] || 5;
        
        if (aOrder !== bOrder) {
            return aOrder - bOrder;
        }
        
        // If same status, sort by ID descending (newest first)
        return b.id - a.id;
    });

    let html = `
        <h2 data-translate="Recruiting Requests">Recruiting Requests</h2>
        <button onclick="showNewRequest()" class="btn btn-primary" data-translate="Create New Request">Create New Request</button>
        <div class="filters">
            <select id="status-filter">
                <option value="" data-translate="All Statuses">All Statuses</option>
                <option value="Pending" data-translate="Pending">Pending</option>
                <option value="Approved" data-translate="Approved">Approved</option>
                <option value="Rejected" data-translate="Rejected">Rejected</option>
                <option value="Filled" data-translate="Filled">Filled</option>
                </select>
            <button onclick="applyRequestFilters()" class="btn btn-secondary" data-translate="Apply Filters">Apply Filters</button>
            <button onclick="clearRequestFilters()" class="btn btn-outline" data-translate="Clear Filters">Clear Filters</button>
            </div>
        <div class="requests-summary">
            <div class="summary-card pending">
                <h3>${sortedRequests.filter(r => r.status === 'Pending').length}</h3>
                <p data-translate="Pending">Pending</p>
            </div>
            <div class="summary-card approved">
                <h3>${sortedRequests.filter(r => r.status === 'Approved').length}</h3>
                <p data-translate="Approved">Approved</p>
            </div>
            <div class="summary-card filled">
                <h3>${sortedRequests.filter(r => r.status === 'Filled').length}</h3>
                <p data-translate="Filled">Filled</p>
            </div>
            <div class="summary-card rejected">
                <h3>${sortedRequests.filter(r => r.status === 'Rejected').length}</h3>
                <p data-translate="Rejected">Rejected</p>
            </div>
            </div>
        <div id="requests-container"></div>
    `;

    app.innerHTML = html;

    // Add fade-in animation
    app.classList.add('fade-in');

    // Render requests table
    const container = document.getElementById('requests-container');
    const table = createRequestsTable(sortedRequests);
    container.appendChild(table);
    
    // Add slide-in animation to table
    table.classList.add('slide-in');

    // Setup filter event listener
    const statusFilter = document.getElementById('status-filter');
    if (statusFilter) {
        statusFilter.addEventListener('change', applyRequestFilters);
    }

    window.uiManager.translatePage();
}

function createRequestsTable(requests) {
    const table = document.createElement('table');
    table.className = 'requests-table';
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    // Create header row
    const headerRow = document.createElement('tr');
    ['Position', 'Department', 'Description', 'Headcount', 'Type', 'Category', 'Status', 'Days Old', 'ID', 'Actions'].forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = window.uiManager.translate(headerText);
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Helper function to calculate days since creation
    function getDaysOld(createdAt) {
        if (!createdAt) return 'N/A';
        const created = new Date(createdAt);
        const now = new Date();
        const diffTime = Math.abs(now - created);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    }

    // Create data rows
    requests.forEach(request => {
        const row = document.createElement('tr');
        row.className = `request-row status-${request.status.toLowerCase()}`;
        
        const daysOld = getDaysOld(request.created_at);
        const daysOldDisplay = daysOld === 'N/A' ? 'N/A' : `${daysOld} ${daysOld === 1 ? window.uiManager.translate('Day') : window.uiManager.translate('Days')}`;
        
        // Prepare cell data
        const cellData = [
            request.position || '',
            request.department || '',
            request.description ? request.description.substring(0, 50) + '...' : '',
            request.headcount || '',
            request.position_type || '',
            request.position_category || '',
            createStatusBadge(request.status),
            daysOldDisplay,
            request.id ? `#${request.id}` : '',
            createRequestActionButtons(request)
        ];
        
        // Add cells
        cellData.forEach((cellContent, index) => {
            const td = document.createElement('td');
            td.innerHTML = cellContent;
            
            // Add styling for days old column (index 7) - highlight if > 3 days
            if (index === 7 && typeof daysOld === 'number' && daysOld > 3) {
                td.style.color = daysOld >= 7 ? '#dc2626' : '#f59e0b';
                td.style.fontWeight = 'bold';
            }
            
            row.appendChild(td);
        });

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    return table;
}

function createStatusBadge(status) {
    const badgeClass = `status-badge ${status.toLowerCase()}`;
    return `<span class="${badgeClass}">${status}</span>`;
}

function createRequestActionButtons(request) {
    let buttons = '';
    const userInfo = window.authManager.getUserInfo();
    
    if ((userInfo.role === 'gm' || userInfo.role === 'recruiter') && request.status === 'Pending') {
        buttons = `
            <button onclick="approveRequest(${request.id})" class="btn btn-success" data-translate="Approve">Approve</button>
            <button onclick="rejectRequest(${request.id})" class="btn btn-danger" data-translate="Reject">Reject</button>
        `;
    }
    
    if (request.status === 'Approved') {
        buttons += `<button onclick="fillPosition(${request.id})" class="btn btn-primary" data-translate="Fill Position">Fill Position</button>`;
    }
    
    buttons += `<button onclick="showRequestDetails(${request.id})" class="btn btn-info" data-translate="View Details">View Details</button>`;
    
    return buttons;
}

async function showGMApproval() {
    const userInfo = window.authManager.getUserInfo();
    if (userInfo.role !== 'gm' && userInfo.role !== 'recruiter') {
        const app = document.getElementById('app');
        app.innerHTML = '<p data-translate="Access denied. Only GMs, Recruiters and Managers can view this page.">Access denied. Only GMs, Recruiters and Managers can view this page.</p>';
        window.uiManager.translatePage();
        return;
    }

    try {
        window.uiManager.showLoading('Loading pending requests...');
        
        const pendingRequests = await window.requestsManager.getPendingRequests();
        renderGMApprovalView(pendingRequests);
    } catch (error) {
        console.error('Error loading pending requests:', error);
        window.utils.showMessage('Error loading pending requests: ' + error.message, 'error');
    }
}

function renderGMApprovalView(requests) {
    const app = document.getElementById('app');
    
    let html = `
        <h2 data-translate="GM/Recruiter Approval">GM/Recruiter Approval</h2>
        <p data-translate="Review and approve pending recruiting requests">Review and approve pending recruiting requests</p>
        <div id="gm-approval-container"></div>
    `;

    app.innerHTML = html;

    // Render requests table
    const container = document.getElementById('gm-approval-container');
    const table = createRequestsTable(requests);
    container.appendChild(table);

    window.uiManager.translatePage();
}

async function showStatistics() {
    try {
        window.uiManager.showLoading('Loading statistics...');
        
        const [candidateStats, requestStats] = await Promise.all([
            window.candidatesManager.getStatistics(),
            window.requestsManager.getStatistics()
        ]);

        renderStatisticsView(candidateStats, requestStats);
    } catch (error) {
        console.error('Error loading statistics:', error);
        window.utils.showMessage('Error loading statistics: ' + error.message, 'error');
    }
}

function renderStatisticsView(candidateStats, requestStats) {
    const app = document.getElementById('app');
    
    let html = `
        <h2 data-translate="Statistics">Statistics</h2>
        <div class="stats-container">
            <div class="stats-section">
                <h3 data-translate="Candidate Statistics">Candidate Statistics</h3>
                <div class="stat-cards">
                    <div class="stat-card">
                        <h4>${candidateStats.total}</h4>
                        <p data-translate="Total Candidates">Total Candidates</p>
            </div>
                    <div class="stat-card">
                        <h4>${candidateStats.averageTimeToHire}</h4>
                        <p data-translate="Avg. Time to Hire (days)">Avg. Time to Hire (days)</p>
            </div>
            </div>
                <div class="stat-breakdown">
                    <h4 data-translate="By Status">By Status</h4>
                    ${Object.entries(candidateStats.byStatus).map(([status, count]) => 
                        `<p>${status}: ${count}</p>`
                    ).join('')}
            </div>
            </div>
            <div class="stats-section">
                <h3 data-translate="Request Statistics">Request Statistics</h3>
                <div class="stat-cards">
                    <div class="stat-card">
                        <h4>${requestStats.total}</h4>
                        <p data-translate="Total Requests">Total Requests</p>
            </div>
            </div>
                <div class="stat-breakdown">
                    <h4 data-translate="By Status">By Status</h4>
                    ${Object.entries(requestStats.byStatus).map(([status, count]) => 
                        `<p>${status}: ${count}</p>`
                    ).join('')}
            </div>
            </div>
            </div>
    `;

    app.innerHTML = html;
    window.uiManager.translatePage();
}

// Request action functions
async function approveRequest(id) {
    try {
        await window.requestsManager.approveRequest(id);
        window.utils.showMessage('Request approved successfully!', 'success');
        showGMApproval();
    } catch (error) {
        window.utils.showMessage('Error approving request: ' + error.message, 'error');
    }
}

async function rejectRequest(id) {
    try {
        await window.requestsManager.rejectRequest(id);
        window.utils.showMessage('Request rejected successfully!', 'success');
        showGMApproval();
    } catch (error) {
        window.utils.showMessage('Error rejecting request: ' + error.message, 'error');
    }
}

async function fillPosition(id) {
    try {
        await window.requestsManager.fillPosition(id);
        window.utils.showMessage('Position marked as filled!', 'success');
        showRequests();
    } catch (error) {
        window.utils.showMessage('Error updating position: ' + error.message, 'error');
    }
}

async function showRequestDetails(id) {
    try {
        window.uiManager.showLoading('Loading request details...');
        
        const request = await window.requestsManager.getRequestDetails(id);
        
        const app = document.getElementById('app');
        if (!app) return;
        
        const userInfo = window.authManager.getUserInfo();
        
        let detailsHtml = `
            <h2 data-translate="Request Details">Request Details</h2>
            <div class="request-details">
                <p><strong data-translate="Position">Position:</strong> ${request.position || 'N/A'}</p>
                <p><strong data-translate="Department">Department:</strong> ${request.department || 'N/A'}</p>
                <p><strong data-translate="Headcount">Headcount:</strong> ${request.headcount || 'N/A'}</p>
                <p><strong data-translate="Job Description">Job Description:</strong> ${request.description || 'N/A'}</p>
                <p><strong data-translate="Position Type">Position Type:</strong> ${request.position_type || 'N/A'}</p>
                <p><strong data-translate="Position Category">Position Category:</strong> ${request.position_category || 'N/A'}</p>
                <p><strong data-translate="Status">Status:</strong> ${createStatusBadge(request.status)}</p>
                <p><strong data-translate="Confidential">Confidential:</strong> ${request.is_confidential ? window.uiManager.translate('Yes') : window.uiManager.translate('No')}</p>
        `;
        
        if (request.position_type === 'new' && request.new_position_reason) {
            detailsHtml += `<p><strong data-translate="Reason for New Position">Reason for New Position:</strong> ${request.new_position_reason}</p>`;
        } else if (request.position_type === 'replacement' && request.replacement_name) {
            detailsHtml += `<p><strong data-translate="Name of Person Being Replaced">Name of Person Being Replaced:</strong> ${request.replacement_name}</p>`;
        }
        
        if (request.created_at) {
            detailsHtml += `<p><strong data-translate="Created At">Created At:</strong> ${new Date(request.created_at).toLocaleString()}</p>`;
        }
        
        detailsHtml += `
            </div>
            <div class="action-buttons" style="margin-top: 20px;">
        `;
        
        // Add action buttons based on user role and request status
        if ((userInfo.role === 'gm' || userInfo.role === 'recruiter') && request.status === 'Pending') {
            detailsHtml += `
                <button onclick="approveRequest(${request.id})" class="btn btn-success" data-translate="Approve">Approve</button>
                <button onclick="rejectRequest(${request.id})" class="btn btn-danger" data-translate="Reject">Reject</button>
            `;
        }
        
        if (request.status === 'Approved') {
            detailsHtml += `
                <button onclick="fillPosition(${request.id})" class="btn btn-primary" data-translate="Fill Position">Fill Position</button>
            `;
        }
        
        // Back button - go to GM approval if user is GM/recruiter and request is pending, otherwise go to requests
        const backFunction = ((userInfo.role === 'gm' || userInfo.role === 'recruiter') && request.status === 'Pending') 
            ? 'showGMApproval()' 
            : 'showRequests()';
        
        detailsHtml += `
                <button onclick="${backFunction}" class="btn btn-secondary" data-translate="Back">Back</button>
            </div>
        `;
        
        app.innerHTML = detailsHtml;
        window.uiManager.translatePage();
        
        // Add fade-in animation
        app.classList.add('fade-in');
    } catch (error) {
        console.error('Error loading request details:', error);
        window.utils.showMessage('Error loading request details: ' + error.message, 'error');
    }
}

function showNewRequest() {
    console.log('Show new request form');

    const app = document.getElementById('app');
    if (!app) return;

    // Get department options based on user role
    let departmentOptions = '';
    if (userRole === 'gm') {
        departmentOptions = Object.keys(departmentPositions).map(dept =>
            `<option value="${dept}">${dept}</option>`
        ).join('');
    } else {
        departmentOptions = `<option value="${userDepartment}">${userDepartment}</option>`;
    }

    const html = `
        <div class="card">
        <h2 data-translate="Create New Recruiting Request">Create New Recruiting Request</h2>
        <form id="new-request-form">
            <div class="form-group">
                    <label for="department" data-translate="Department">Oddelenie:</label>
                    <select id="department" name="department" required ${userRole !== 'gm' ? 'disabled' : ''} onchange="updatePositionOptions()">
                        <option value="" data-translate="Select Department">Vyberte oddelenie</option>
                    ${departmentOptions}
                </select>
            </div>
                
            <div class="form-group">
                    <label for="position" data-translate="Position">Pozícia:</label>
                    <select id="position" name="position" required>
                        <option value="" data-translate="Select Position">Najprv vyberte oddelenie</option>
                </select>
            </div>
                
            <div class="form-group">
                    <label for="description" data-translate="Job Description">Popis práce:</label>
                    <textarea id="description" name="description" rows="4" required></textarea>
            </div>
                
            <div class="form-group">
                    <label for="headcount" data-translate="Number of Positions">Počet pracovníkov:</label>
                    <input type="number" id="headcount" name="headcount" min="1" value="1" required>
            </div>
                
            <div class="form-group">
                    <label data-translate="Position Type">Typ pozície:</label>
                    <div class="radio-group">
                        <label class="radio-label">
                        <input type="radio" id="new-position" name="position-type" value="new" required onchange="togglePositionTypeFields()">
                            <span data-translate="New Position">Nová pozícia</span>
                    </label>
                        <label class="radio-label">
                        <input type="radio" id="replacement" name="position-type" value="replacement" required onchange="togglePositionTypeFields()">
                            <span data-translate="Replacement">Náhrada</span>
                    </label>
                </div>
            </div>
                
            <div id="new-position-fields" class="hidden">
                <div class="form-group">
                        <label for="new-position-reason" data-translate="Reason for New Position">Dôvod novej pozície:</label>
                        <textarea id="new-position-reason" name="new_position_reason"></textarea>
                </div>
            </div>
                
            <div id="replacement-fields" class="hidden">
                <div class="form-group">
                        <label for="replacement-name" data-translate="Name of Person Being Replaced">Meno nahradzovanej osoby:</label>
                        <input type="text" id="replacement-name" name="replacement_name">
                </div>
            </div>
                
            <div class="form-group">
                    <label data-translate="Position Category">Kategória pozície:</label>
                    <div class="radio-group">
                        <label class="radio-label">
                        <input type="radio" id="sal-position" name="position-category" value="SAL" required>
                            <span>SAL</span>
                    </label>
                        <label class="radio-label">
                        <input type="radio" id="ind-position" name="position-category" value="IND" required>
                            <span>IND</span>
                    </label>
                </div>
            </div>
                
            <div class="form-group">
                <label>
                        <input type="checkbox" id="confidential-request" name="is_confidential">
                        <span data-translate="Confidential Request">Dôverná žiadosť</span>
                </label>
            </div>
                
                <div class="form-actions">
                    <button type="submit" class="btn btn-primary" data-translate="Submit Request">ODOSLAŤ ŽIADOSŤ</button>
                    <button type="button" onclick="showRequests()" class="btn btn-secondary" data-translate="Cancel">Zrušiť</button>
                </div>
        </form>
        </div>
    `;

    app.innerHTML = html;

    // Add form submit handler
    const form = document.getElementById('new-request-form');
    if (form) {
        form.addEventListener('submit', createRequest);
    }

    // Auto-load positions for managers (non-GM users)
    if (userRole !== 'gm') {
        // Get current user info
        const userInfo = window.authManager ? window.authManager.getUserInfo() : null;
        const currentUserDepartment = userInfo ? userInfo.department : userDepartment;
        
        // Set department value and load positions
        const departmentSelect = document.getElementById('department');
        if (departmentSelect) {
            departmentSelect.value = currentUserDepartment;
            updatePositionOptions();
        }
    }
}

// Global variables for user info
let userRole = '';
let userDepartment = '';

// Get Supabase instance
function getSupabase() {
    return supabaseInstance || null;
}

// Department positions mapping (extended)
const extendedDepartmentPositions = {
    'IT': [
        'Software Developer',
        'Senior Software Developer',
        'Frontend Developer',
        'Backend Developer',
        'Full Stack Developer',
        'DevOps Engineer',
        'System Administrator',
        'Database Administrator',
        'QA Engineer',
        'Technical Lead',
        'IT Manager',
        'Data Analyst',
        'Cybersecurity Specialist'
    ],
    'HR': [
        'HR Generalist',
        'HR Specialist',
        'Recruiter',
        'Senior Recruiter',
        'HR Manager',
        'HR Business Partner',
        'Training Specialist',
        'Compensation & Benefits Specialist',
        'HR Director'
    ],
    'Finance': [
        'Financial Analyst',
        'Senior Financial Analyst',
        'Accountant',
        'Senior Accountant',
        'Financial Controller',
        'Finance Manager',
        'CFO',
        'Auditor',
        'Tax Specialist',
        'Budget Analyst'
    ],
    'Marketing': [
        'Marketing Specialist',
        'Digital Marketing Specialist',
        'Content Marketing Manager',
        'Social Media Manager',
        'Brand Manager',
        'Marketing Manager',
        'Marketing Director',
        'SEO Specialist',
        'PPC Specialist',
        'Marketing Analyst'
    ],
    'Sales': [
        'Sales Representative',
        'Senior Sales Representative',
        'Account Manager',
        'Sales Manager',
        'Sales Director',
        'Business Development Manager',
        'Key Account Manager',
        'Inside Sales Representative',
        'Sales Analyst'
    ],
    'Operations': [
        'Operations Specialist',
        'Operations Manager',
        'Operations Director',
        'Process Improvement Specialist',
        'Supply Chain Manager',
        'Logistics Coordinator',
        'Project Manager',
        'Operations Analyst'
    ],
    'Business': [
        'Business Analyst',
        'Senior Business Analyst',
        'Business Development Specialist',
        'Strategy Manager',
        'Business Manager',
        'Business Director',
        'Management Consultant',
        'Product Manager'
    ]
};

// Update position options based on selected department
function updatePositionOptions() {
    const departmentSelect = document.getElementById('department');
    const positionSelect = document.getElementById('position');
    const selectedDepartment = departmentSelect.value;

    positionSelect.innerHTML = '<option value="">Select a position</option>';

    let positionsToShow = [];
    
    // Get user info if available
    const userInfo = window.authManager ? window.authManager.getUserInfo() : null;
    
    // Check if user is GM
    if (userRole === 'gm') {
        // GM sees all department positions
        if (selectedDepartment && departmentPositions[selectedDepartment]) {
            positionsToShow = departmentPositions[selectedDepartment];
        }
    } else if (userInfo) {
        // For all non-GM users (including Manager and others)
        // Priority: if user has allowedPositions, show only those
        if (userInfo.allowedPositions && Array.isArray(userInfo.allowedPositions) && userInfo.allowedPositions.length > 0) {
            console.log('Using allowedPositions:', userInfo.allowedPositions);
            positionsToShow = userInfo.allowedPositions;
        } else if (userInfo.department) {
            // User has department but no allowedPositions - show all department positions
            const dept = selectedDepartment || userInfo.department;
            if (dept && departmentPositions[dept]) {
                positionsToShow = departmentPositions[dept];
            }
        } else {
            // User has neither department nor allowedPositions - show all department positions
            if (selectedDepartment && departmentPositions[selectedDepartment]) {
                positionsToShow = departmentPositions[selectedDepartment];
            }
        }
    } else {
        // Fallback - show all department positions
        if (selectedDepartment && departmentPositions[selectedDepartment]) {
            positionsToShow = departmentPositions[selectedDepartment];
        }
    }
    
    console.log('Positions to show:', positionsToShow);
    
    positionsToShow.forEach(position => {
        const option = document.createElement('option');
        option.value = position;
        option.textContent = position;
        positionSelect.appendChild(option);
    });
}

function togglePositionTypeFields() {
    const newPositionFields = document.getElementById('new-position-fields');
    const replacementFields = document.getElementById('replacement-fields');
    const positionType = document.querySelector('input[name="position-type"]:checked').value;

    if (positionType === 'new') {
        newPositionFields.classList.remove('hidden');
        replacementFields.classList.add('hidden');
    } else {
        newPositionFields.classList.add('hidden');
        replacementFields.classList.remove('hidden');
    }
}

async function createRequest(e) {
    e.preventDefault();
    const supabase = getSupabase();
    if (!supabase) {
        console.error('Supabase client not initialized');
        alert('Error: Supabase client not initialized');
        return;
    }

    const department = document.getElementById('department').value;
    const position = document.getElementById('position').value;
    const description = document.getElementById('description').value;
    const headcount = parseInt(document.getElementById('headcount').value, 10);
    const positionType = document.querySelector('input[name="position-type"]:checked')?.value;
    const positionCategory = document.querySelector('input[name="position-category"]:checked')?.value;
    const isConfidential = document.getElementById('confidential-request').checked;

    let newPositionReason = null;
    let replacementName = null;

    if (positionType === 'new') {
        newPositionReason = document.getElementById('new-position-reason').value;
    } else if (positionType === 'replacement') {
        replacementName = document.getElementById('replacement-name').value;
    }

    // Validation
    if (!department || !position || !description || !headcount || !positionType || !positionCategory) {
        alert('Please fill in all required fields');
        return;
    }

    const requestData = {
        position,
        department,
        description,
        headcount,
        status: 'Pending',
        position_type: positionType,
        position_category: positionCategory,
        is_confidential: isConfidential,
        new_position_reason: newPositionReason,
        replacement_name: replacementName
    };

    console.log('Request data to be sent:', requestData);

    try {
        const { data, error } = await supabase
            .from('recruiting_requests')
            .insert([requestData])
            .select();

        if (error) throw error;

        if (!data || data.length === 0) {
            throw new Error('No data returned from insert operation');
        }

        console.log('Request created successfully:', data[0]);

        // Notify GM via email
        try {
            const result = await window.requestsManager.notifyGMs(data[0]);
            console.log('Email notification sent:', result);
            
            // Show user-friendly message
            if (result && result.success === false) {
                console.log('📧 Email notifications are not yet configured. To enable them:');
                console.log('1. Deploy the Supabase Edge Function: supabase functions deploy send-email');
                console.log('2. Or check the EDGE_FUNCTION_SETUP.md file for detailed instructions');
            }
        } catch (emailError) {
            console.error('Error sending email notification:', emailError);
            console.log('📧 Email notifications are not yet configured. Check the console for details.');
        }

        alert('Request created successfully!');
        showRequests();
    } catch (error) {
        console.error('Error creating request:', error);
        alert('Error creating request: ' + error.message);
    }
}

function showAddCandidate() {
    console.log('Redirecting to add candidate page');
    window.location.href = 'add-candidate.html';
}

function updatePositions() {
    const department = document.getElementById('candidate-department').value;
    const positionSelect = document.getElementById('candidate-position');
    
    // Clear existing options
    positionSelect.innerHTML = '<option value="">Najprv vyberte oddelenie</option>';
    
    if (!department) {
        positionSelect.disabled = true;
        return;
    }
    
    // Enable position select
    positionSelect.disabled = false;
    
    // Define positions by department
    const positionsByDepartment = {
        'Business': ['Assistant Buyer', 'Buyer', 'Supplier Quality Assurance Engineer', 'Business Administration', 'Business Sales & Cost Analyst'],
        'CI': ['CI Coordinator', 'CI Analyst', 'CI Technician'],
        'Engineering': ['Senior Process Engineer 1', 'Senior Process Engineer IM', 'Process Engineer 1', 'Senior IM Technologist Coordinator', 'Process Engineer IM', 'Senior Technologist IM', 'Foreman Technologist IM', 'Technologist IM', 'Mold Changer', 'Materialist', 'Senior Process Engineer 2', 'Process Engineer 2', 'Senior Technologist Coordinator', 'Tooling Engineer', 'Product Engineer', 'Change BOM Coordinator', 'Programe Engineer', 'Technologist 1', 'Quality Program Engineer', 'Launch Coordinator', 'Data Analyst', 'Manufacturing Engineer'],
        'Finance': ['Programme Controller', 'Finance Analyst', 'Chief Accountant', 'Financial Specialist Senior', 'Supplier Accountant', 'Services Accountant', 'Financial Assistant', 'Financial Clerk', 'Revenue Accountant', 'Financial Specialist', 'Treasury Analyst', 'Senior Treasury & Financial Analyst'],
        'HR': ['Payroll accountant', 'Senior HR Generalist', 'Recruiter', 'HR Generalist 1', 'Junior Payroll', 'Training Center Trainer', 'HSE Specialist', 'Environment Officer', 'Executive assistant'],
        'IT': ['IT Analyst / Administrator', 'Senior IT Specialist'],
        'Logistics': ['Warehouse/Logistics Leader', 'Senior Logistics Planner', 'Logistics Disponent', 'Logistics Planner', 'Packaging Disponent', 'Logistics Referent', 'Inventory Counter', 'Internal Logistics Coordinator', 'Logistics Shift leader', 'Expedient', 'Supervisor Inventory Control', 'Logistics Planner IM', 'Senior Demand Specialist', 'Logistics operator Expedient', 'Logistics operator receiving'],
        'Maintenance': ['Maintenance leader', 'Technician I', 'Technician II', 'Maintenance Shift Leader', 'Maintainer', 'Maintainer - mechanician', 'Maintainer - electrician', 'Energetic Coordinator', 'Robotist', 'Toolmaker', 'Maintenance Leader IM', 'Electrician IM', 'Mechanician IM', 'Maintainer - Toolmaker', 'Energetik/Facility Coordinator', 'Mechatronik', 'Toolmaker Coordinator and Maintenance Leader IM', 'Warehouse referent'],
        'Management': ['Operation Assistant General Manager', 'Financial Manager', 'HR Manager', 'Logistics Manager', 'Quality Manager', 'Production Manager', 'Maintenance Manager', 'Programme Manager', 'Purchasing Manager', 'IT Manager', 'Ext. Programme Manager', 'Business Manager', 'Program Manager'],
        'Procurement': ['Procurement Manager', 'Senior Buyer', 'Junior Buyer', 'Capital & Tooling Buyer'],
        'Production': ['Production Coordinator', 'Production Shift leader', 'Production Referent'],
        'Quality': ['Customer Quality Leader', 'Quality Leader', 'PPAP Technician', 'Quality Engineer QM System', 'Laboratory Leader/ Metrolog', 'Customer Quality Coordinator', 'Quality Auditors Coordinator', 'Supplier Quality Assurance', 'Sperrlager Coordinator', 'Sperrlager Quality Operator', 'Quality Auditor', 'Incoming Inspection', '3D Measurement', 'Laboratory technician', 'Resident']
    };
    
    const positions = positionsByDepartment[department] || [];
    positions.forEach(position => {
        const option = document.createElement('option');
        option.value = position;
        option.textContent = position;
        positionSelect.appendChild(option);
    });
}

async function addCandidate() {
    try {
        const formData = {
            name: document.getElementById('candidate-name').value.trim(),
            position: document.getElementById('candidate-position').value,
            department: document.getElementById('candidate-department').value,
            source: document.getElementById('candidate-source').value,
            date_obtained: document.getElementById('candidate-date').value,
            interviewer: document.getElementById('candidate-interviewer').value.trim(),
            status: document.getElementById('candidate-status').value,
            notes: document.getElementById('candidate-notes').value.trim(),
            cvFile: document.getElementById('candidate-cv').files[0],
            assessmentFile: document.getElementById('candidate-assessment').files[0]
        };
        
        // Validate required fields
        if (!formData.name || !formData.position || !formData.department || !formData.source) {
            alert(translations[currentLanguage]['Please fill in all required fields']);
            return;
        }
        
        console.log('Adding candidate:', formData);
        
        // Call candidates manager to add candidate
        const result = await window.candidatesManager.addCandidate(formData);
        
        if (result.success) {
            console.log('Candidate added successfully:', result.data);
            alert(translations[currentLanguage]['Candidate added successfully']);
            
            // Close modal
            closeModal('add-candidate-modal');
            
            // Refresh candidates list
            if (window.candidatesManager) {
                await window.candidatesManager.loadCandidates();
                showCandidates();
            }
        } else {
            throw new Error(result.error || 'Unknown error');
        }
    } catch (error) {
        console.error('Error adding candidate:', error);
        alert(translations[currentLanguage]['Error adding candidate: '] + error.message);
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.remove();
    }
}

async function showCandidateDetails(id) {
    try {
        window.uiManager.showLoading('Loading candidate details...');
        
        const candidate = await window.candidatesManager.getCandidateDetails(id);
        
        const app = document.getElementById('app');
        if (!app) return;
        
        // Format dates
        const dateObtained = candidate.date_obtained ? new Date(candidate.date_obtained).toLocaleDateString('sk-SK') : 'N/A';
        const createdDate = candidate.created_at ? new Date(candidate.created_at).toLocaleDateString('sk-SK') : 'N/A';
        const lastUpdated = candidate.last_updated ? new Date(candidate.last_updated).toLocaleDateString('sk-SK') : 'N/A';
        
        let detailsHtml = `
            <h2 data-translate="Candidate Details">Candidate Details</h2>
            <div class="candidate-details card">
                <div class="detail-row">
                    <strong data-translate="Name">Name:</strong>
                    <span>${candidate.name || 'N/A'}</span>
                </div>
                <div class="detail-row">
                    <strong data-translate="Department">Department:</strong>
                    <span>${candidate.department || 'N/A'}</span>
                </div>
                <div class="detail-row">
                    <strong data-translate="Position">Position:</strong>
                    <span>${candidate.position || 'N/A'}</span>
                </div>
                <div class="detail-row">
                    <strong data-translate="Source">Source:</strong>
                    <span>${candidate.source || 'N/A'}</span>
                </div>
                <div class="detail-row">
                    <strong data-translate="Date Obtained">Date Obtained:</strong>
                    <span>${dateObtained}</span>
                </div>
                <div class="detail-row">
                    <strong data-translate="Interviewer">Interviewer:</strong>
                    <span>${candidate.interviewer || window.uiManager.translate('Not assigned')}</span>
                </div>
                <div class="detail-row">
                    <strong data-translate="Status">Status:</strong>
                    <span>${createStatusBadge(candidate.status)}</span>
                </div>
                <div class="detail-row">
                    <strong data-translate="Notes">Notes:</strong>
                    <span>${candidate.notes || window.uiManager.translate('No notes')}</span>
                </div>
                <div class="detail-row">
                    <strong data-translate="Created At">Created At:</strong>
                    <span>${createdDate}</span>
                </div>
                <div class="detail-row">
                    <strong data-translate="Last Updated">Last Updated:</strong>
                    <span>${lastUpdated}</span>
                </div>
            </div>
            
            <div class="documents-section" style="margin-top: 20px;">
                <h3 data-translate="Documents">Documents</h3>
                <div class="document-actions" style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 10px;">
        `;
        
        // CV section
        if (candidate.cv_file_path) {
            detailsHtml += `
                <div style="display: flex; align-items: center; gap: 10px; padding: 10px; background: #f5f5f5; border-radius: 5px;">
                    <span><strong data-translate="CV">CV:</strong></span>
                    <button onclick="downloadFile(${candidate.id}, 'cv')" class="btn btn-secondary" data-translate="Download CV">Download CV</button>
                    <button onclick="showReuploadDocument(${candidate.id}, 'cv')" class="btn btn-primary" data-translate="Re-upload CV">Re-upload CV</button>
                </div>
            `;
        } else {
            detailsHtml += `
                <div style="display: flex; align-items: center; gap: 10px; padding: 10px; background: #f5f5f5; border-radius: 5px;">
                    <span><strong data-translate="CV">CV:</strong> <span data-translate="No CV uploaded">No CV uploaded</span></span>
                    <button onclick="showReuploadDocument(${candidate.id}, 'cv')" class="btn btn-primary" data-translate="Upload CV">Upload CV</button>
                </div>
            `;
        }
        
        // Assessment section
        if (candidate.assesment_file_path) {
            detailsHtml += `
                <div style="display: flex; align-items: center; gap: 10px; padding: 10px; background: #f5f5f5; border-radius: 5px;">
                    <span><strong data-translate="Assessment">Assessment:</strong></span>
                    <button onclick="downloadFile(${candidate.id}, 'assessment')" class="btn btn-secondary" data-translate="Download Assessment">Download Assessment</button>
                    <button onclick="showReuploadDocument(${candidate.id}, 'assessment')" class="btn btn-primary" data-translate="Re-upload Assessment">Re-upload Assessment</button>
                </div>
            `;
        } else {
            detailsHtml += `
                <div style="display: flex; align-items: center; gap: 10px; padding: 10px; background: #f5f5f5; border-radius: 5px;">
                    <span><strong data-translate="Assessment">Assessment:</strong> <span data-translate="No Assessment uploaded">No Assessment uploaded</span></span>
                    <button onclick="showReuploadDocument(${candidate.id}, 'assessment')" class="btn btn-primary" data-translate="Upload Assessment">Upload Assessment</button>
                </div>
            `;
        }
        
        detailsHtml += `
                </div>
            </div>
            
            <div class="action-buttons" style="margin-top: 20px;">
                <button onclick="showCandidates()" class="btn btn-secondary" data-translate="Back">Back</button>
            </div>
        `;
        
        app.innerHTML = detailsHtml;
        window.uiManager.translatePage();
        
        // Add fade-in animation
        app.classList.add('fade-in');
    } catch (error) {
        console.error('Error loading candidate details:', error);
        window.utils.showMessage('Error loading candidate details: ' + error.message, 'error');
    }
}

function showReuploadDocument(candidateId, documentType) {
    const documentName = documentType === 'cv' ? window.uiManager.translate('CV') : window.uiManager.translate('Assessment');
    const uploadText = documentType === 'cv' ? window.uiManager.translate('Upload CV') : window.uiManager.translate('Upload Assessment');
    
    // Create modal for file upload
    const modal = document.createElement('div');
    modal.id = 'reupload-document-modal';
    modal.className = 'modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    `;
    
    modal.innerHTML = `
        <div class="modal-content" style="background: white; padding: 30px; border-radius: 8px; max-width: 500px; width: 90%;">
            <h2 data-translate="Re-upload Document">Re-upload ${documentName}</h2>
            <form id="reupload-form">
                <div class="form-group" style="margin-bottom: 20px;">
                    <label for="reupload-file" data-translate="Select File">Select File:</label>
                    <input type="file" id="reupload-file" accept=".pdf,.doc,.docx" required style="margin-top: 10px; width: 100%; padding: 8px;">
                </div>
                <div style="display: flex; gap: 10px; justify-content: flex-end; margin-top: 20px;">
                    <button type="button" onclick="closeReuploadModal()" class="btn btn-secondary" data-translate="Cancel">Cancel</button>
                    <button type="submit" class="btn btn-primary" data-translate="Upload">Upload</button>
                </div>
            </form>
        </div>
    `;
    
    document.body.appendChild(modal);
    window.uiManager.translatePage();
    
    // Handle form submission
    document.getElementById('reupload-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        await reuploadDocument(candidateId, documentType);
    });
}

function closeReuploadModal() {
    const modal = document.getElementById('reupload-document-modal');
    if (modal) {
        modal.remove();
    }
}

async function reuploadDocument(candidateId, documentType) {
    try {
        const fileInput = document.getElementById('reupload-file');
        const file = fileInput.files[0];
        
        if (!file) {
            window.utils.showMessage('Please select a file', 'error');
            return;
        }
        
        // Validate file
        const validation = window.utils.validateFile(file);
        if (!validation.isValid) {
            window.utils.showMessage(validation.message, 'error');
            return;
        }
        
        window.uiManager.showLoading('Uploading document...');
        
        // Prepare update data
        const updateData = {
            name: '', // Will be fetched from existing candidate
            department: '',
            position: '',
            source: '',
            date_obtained: '',
            interviewer: '',
            status: '',
            notes: ''
        };
        
        // Get existing candidate data
        const candidate = await window.candidatesManager.getCandidateDetails(candidateId);
        updateData.name = candidate.name;
        updateData.department = candidate.department;
        updateData.position = candidate.position;
        updateData.source = candidate.source;
        updateData.date_obtained = candidate.date_obtained;
        updateData.interviewer = candidate.interviewer;
        updateData.status = candidate.status;
        updateData.notes = candidate.notes;
        
        // Add file to update data
        if (documentType === 'cv') {
            updateData.cvFile = file;
        } else {
            updateData.assessmentFile = file;
        }
        
        // Update candidate with new document
        const result = await window.candidatesManager.updateCandidate(candidateId, updateData);
        
        if (result.success) {
            window.utils.showMessage('Document uploaded successfully!', 'success');
            closeReuploadModal();
            // Refresh candidate details
            showCandidateDetails(candidateId);
        } else {
            throw new Error(result.message || 'Failed to upload document');
        }
    } catch (error) {
        console.error('Error reuploading document:', error);
        window.utils.showMessage('Error uploading document: ' + error.message, 'error');
    }
}

// Function removed - rejected candidates are now shown by default and can be filtered using status filter

async function applyFilters() {
    const departmentFilter = document.getElementById('department-filter');
    const positionFilter = document.getElementById('position-filter');
    const sourceFilter = document.getElementById('source-filter');
    const statusFilter = document.getElementById('status-filter');
    
    if (!departmentFilter || !sourceFilter) return;
    
    const selectedDepartment = departmentFilter.value;
    const selectedPosition = positionFilter.value;
    const selectedSource = sourceFilter.value;
    const selectedStatus = statusFilter ? statusFilter.value : '';
    
    try {
        window.uiManager.showLoading('Loading filtered candidates...');
        
        // Get all candidates with status filter if specified
        const result = await window.candidatesManager.getCandidates({
            page: 1,
            pageSize: 1000,
            status: selectedStatus || undefined,
            department: selectedDepartment || undefined,
            position: selectedPosition || undefined,
            source: selectedSource || undefined
        });
        
        let filteredCandidates = result.candidates;
        
        // Apply additional client-side filters if needed (for consistency)
        if (selectedDepartment && selectedDepartment !== '') {
            filteredCandidates = filteredCandidates.filter(candidate => 
                candidate.department === selectedDepartment
            );
        }
        
        if (selectedPosition && selectedPosition !== '') {
            filteredCandidates = filteredCandidates.filter(candidate => 
                candidate.position === selectedPosition
            );
        }
        
        if (selectedSource && selectedSource !== '') {
            filteredCandidates = filteredCandidates.filter(candidate => 
                candidate.source === selectedSource
            );
        }
        
        if (selectedStatus && selectedStatus !== '') {
            filteredCandidates = filteredCandidates.filter(candidate => 
                candidate.status === selectedStatus
            );
        }
        
        // Render filtered candidates
        renderCandidatesView({ candidates: filteredCandidates, pagination: null });
        
    } catch (error) {
        console.error('Error filtering candidates:', error);
        window.utils.showMessage('Error filtering candidates: ' + error.message, 'error');
    }
}

async function applyRequestFilters() {
    const statusFilter = document.getElementById('status-filter');
    if (!statusFilter) return;

    const selectedStatus = statusFilter.value;
    
    try {
        window.uiManager.showLoading('Loading filtered requests...');
        
        let result;
        if (selectedStatus) {
            // Filter by specific status
            result = await window.requestsManager.getRequests({
                page: 1,
                pageSize: 100,
                filters: {
                    status: selectedStatus
                }
            });
    } else {
            // Show all requests
            result = await window.requestsManager.getRequests({
                page: 1,
                pageSize: 100
            });
        }

        renderRequestsView(result);
    } catch (error) {
        console.error('Error filtering requests:', error);
        window.utils.showMessage('Error filtering requests: ' + error.message, 'error');
    }
}

async function clearRequestFilters() {
    const statusFilter = document.getElementById('status-filter');
    if (statusFilter) {
        statusFilter.value = '';
    }
    
    try {
        window.uiManager.showLoading('Loading all requests...');
        
        const result = await window.requestsManager.getRequests({
            page: 1,
            pageSize: 100
        });

        renderRequestsView(result);
    } catch (error) {
        console.error('Error loading requests:', error);
        window.utils.showMessage('Error loading requests: ' + error.message, 'error');
    }
}

async function clearFilters() {
    const departmentFilter = document.getElementById('department-filter');
    const positionFilter = document.getElementById('position-filter');
    const sourceFilter = document.getElementById('source-filter');
    const statusFilter = document.getElementById('status-filter');
    
    if (departmentFilter) {
        departmentFilter.value = '';
    }
    if (positionFilter) {
        positionFilter.value = '';
    }
    if (sourceFilter) {
        sourceFilter.value = '';
    }
    if (statusFilter) {
        statusFilter.value = '';
    }
    
    // Reload all candidates
    showCandidates();
}

// Function to check for old candidates and update navigation indicators
async function updateNavigationIndicators() {
    try {
        const result = await window.candidatesManager.getCandidates({
            page: 1,
            pageSize: 1000
        });
        
        const candidates = result.candidates;
        const now = new Date();
        
        let orangeCount = 0; // More than 1 week
        let redCount = 0;    // More than 2 weeks
        
        candidates.forEach(candidate => {
            // Skip alerts for hired and rejected candidates
            if (candidate.status && (
                candidate.status.includes('Hired') || 
                candidate.status.includes('Rejected')
            )) {
                return; // Skip this candidate
            }
            
            if (candidate.last_updated) {
                const lastUpdated = new Date(candidate.last_updated);
                const diffTime = Math.abs(now - lastUpdated);
                const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
                
                if (diffDays > 14) {
                    redCount++;
                } else if (diffDays > 7) {
                    orangeCount++;
                }
            }
        });
        
        // Update navigation indicators
        updateNavIndicator('nav-candidates', orangeCount, redCount);
        
    } catch (error) {
        console.error('Error updating navigation indicators:', error);
    }
}

// Function to update navigation indicator
function updateNavIndicator(navId, orangeCount, redCount) {
    const navElement = document.getElementById(navId);
    if (!navElement) return;
    
    // Remove existing indicators
    const existingIndicator = navElement.querySelector('.nav-indicator');
    if (existingIndicator) {
        existingIndicator.remove();
    }
    
    // Add new indicator if needed
    if (redCount > 0) {
        const indicator = document.createElement('span');
        indicator.className = 'nav-indicator red';
        indicator.innerHTML = `🚨 ${redCount}`;
        indicator.title = `${redCount} kandidátov bez zmeny viac ako 2 týždne`;
        navElement.appendChild(indicator);
    } else if (orangeCount > 0) {
        const indicator = document.createElement('span');
        indicator.className = 'nav-indicator orange';
        indicator.innerHTML = `⚠️ ${orangeCount}`;
        indicator.title = `${orangeCount} kandidátov bez zmeny viac ako týždeň`;
        navElement.appendChild(indicator);
    }
}

// Navigation event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Setup navigation
    const navDashboard = document.getElementById('nav-dashboard');
    const navCandidates = document.getElementById('nav-candidates');
    const navRequests = document.getElementById('nav-requests');
    const navGMApproval = document.getElementById('nav-gm-approval');
    const navLogout = document.getElementById('nav-logout');
    const navStatistics = document.getElementById('nav-statistics');
    const navReports = document.getElementById('nav-reports');

    if (navDashboard) navDashboard.addEventListener('click', showDashboard);
    if (navCandidates) navCandidates.addEventListener('click', showCandidates);
    if (navRequests) navRequests.addEventListener('click', showRequests);
    if (navGMApproval) navGMApproval.addEventListener('click', showGMApproval);
    if (navStatistics) navStatistics.addEventListener('click', showStatistics);
    if (navReports) navReports.addEventListener('click', () => {
        // TODO: Implement reports functionality
        window.utils.showMessage('Reports functionality coming soon!', 'info');
    });
    if (navLogout) navLogout.addEventListener('click', async () => {
        try {
            await window.authManager.logout();
            window.uiManager.showLogin();
            setupLoginForm();
    } catch (error) {
            window.utils.showMessage('Logout failed: ' + error.message, 'error');
        }
    });

    // Initialize the application
    initializeModules();
});


