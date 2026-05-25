// Refactored main application file using modular architecture

// Translations object
const translations = {
    en: {
        // Navigation
        "Dashboard": "Dashboard",
        "Candidates": "Candidates",
        "View and manage candidates by status": "View and manage candidates by status",
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
        "Interim": "Interim",
        "Reason for New Position": "Reason for New Position",
        "Name of Person Being Replaced": "Name of Person Being Replaced",
        "Replaced person": "Replaced person",
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
        "Pending Recruiter Review": "Pending recruiter review",
        "Agency submissions": "Agency submissions",
        "Review agency submissions": "Review agency submissions",
        "Select open position": "Select an approved open position",
        "No open positions": "No approved open positions. Recruiter must approve a request first.",
        "Agency source": "Agency (source)",
        "Submit for review": "Submit for recruiter review",
        "Confirm agency candidate": "Confirm",
        "Reject agency submission": "Reject submission",
        "Awaiting recruiter review": "Awaiting recruiter review",
        "Confirm this agency submission?": "Confirm this candidate? Managers will be notified.",
        "Agency candidate submitted": "Candidate submitted. Recruiter has been notified.",
        "Agency submission confirmed": "Candidate confirmed. Managers have been notified.",
        "Agency submission rejected": "Submission rejected. The agency will be notified.",
        "Agency submissions subtitle": "Candidates added by agencies — confirm or reject before they appear to department managers.",
        "Candidates by status heading": "All candidates by status",
        "No pending agency submissions": "No agency submissions waiting for your review.",
        "Visible to agencies": "Visible to agencies",
        "Agency visibility updated": "Agency visibility saved.",
        "Visible to agencies help": "When approved: agencies see this position when submitting candidates.",
        "Yes": "Yes",
        "No": "No",
        "Rejection reason (optional)": "Rejection reason (optional)",
        "Name": "Name",
        "CV": "CV",
        "Actions": "Actions",
        "Admin Actions": "Admin Actions",
        "View Details": "View Details",
        "Edit": "Edit",
        "Edit Candidate": "Edit Candidate",
        "Save Changes": "Save Changes",
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
        "Passwords do not match": "Passwords do not match",
        "Password updated successfully": "Password updated successfully",
        "Error updating password. Please try again.": "Error updating password. Please try again.",
        "Password Strength": "Password Strength",
        "Weak": "Weak",
        "Medium": "Medium",
        "Strong": "Strong",
        "At least 8 characters": "At least 8 characters",
        "One uppercase letter": "One uppercase letter",
        "One lowercase letter": "One lowercase letter",
        "One number": "One number",
        "One special character": "One special character",
        "Cancel": "Cancel",
        "Updating...": "Updating...",
        "Current password is required": "Current password is required",
        "New password is required": "New password is required",
        "Password must be at least 8 characters long": "Password must be at least 8 characters long",
        "Password does not meet all requirements": "Password does not meet all requirements",
        "Please confirm your new password": "Please confirm your new password",
        "Current password is incorrect": "Current password is incorrect",
        "New password must be different from current password": "New password must be different from current password",
        "Apply Filters": "Apply Filters",
        "Documents": "Documents",
        "No documents": "No documents",
        "Agencies cannot access candidate documents": "Agencies cannot access candidate documents",
        "Agencies cannot edit candidates": "Agencies cannot edit candidates",
        "Error": "Error",
        "Success": "Success",
        "Cancel": "Cancel",
        "Save": "Save",
        "Back": "Back",
        "Reload Page": "Reload Page",
        "All Statuses": "All Statuses",
        "Pending": "Pending",
        "Approved": "Open",
        "Paused": "Paused",
        "Rejected": "Rejected",
        "Filled": "Filled",
        "Manage Slots": "Manage Slots",
        "Book Interviews": "Book Time Slots",
        "Add Interview Slots": "Add Interview Slots",
        "Add First Round Slots": "Add First Round Slots",
        "Add Second Round Slots": "Add Second Round Slots",
        "View Slots": "View Slots",
        "Add": "Add",
        "View": "View",
        "First Round": "First Round",
        "Second Round": "Second Round",
        "Add Another Slot": "Add Another Slot",
        "Duration": "Duration",
        "Select": "Select",
        "Save Slots": "Save Slots",
        "Saving slots...": "Saving slots...",
        "Notifying agencies...": "Notifying agencies...",
        "Interview Slots": "Interview Slots",
        "Available Slots": "Available Slots",
        "No available slots": "No available slots",
        "Book Slot": "Book Slot",
        "Book Interview Slot": "Book Interview Slot",
        "Select Candidate": "Select Candidate",
        "Available Positions": "Available Positions",
        "No approved positions": "No approved positions",
        "First Round Slots": "First Round Slots",
        "Second Round Slots": "Second Round Slots",
        "No positions with candidates": "No positions with candidates",
        "Candidates": "Candidates",
        "Candidate Names": "Candidate Names",
        "First Round": "First Round",
        "Second Round": "Second Round",
        "slots": "slots",
        "slot": "slot",
        "available": "available",
        "available slot": "available slot",
        "available slots": "available slots",
        "Loading available slots...": "Loading available slots...",
        "Booked by": "Booked by",
        "Available": "Available",
        "Select a position to book interview slots": "Select a position to book interview slots",
        "Book": "Book",
        "Today": "Today",
        "No slots available": "No slots available",
        "No available slots for this round": "No available slots for this round. Please check back later.",
        "Add Interview Slots": "Add Interview Slots",
        "Time slots are set in 15-minute intervals, each slot lasts 30 minutes": "Time slots are set in 15-minute intervals (e.g., 10:00, 10:15, 10:30), each slot lasts 30 minutes",
        "Date": "Date",
        "Start Time": "Start Time",
        "End Time": "End Time",
        "Remove Slot": "Remove Slot",
        "End time must be after start time": "End time must be after start time",
        "Minimum slot duration is 30 minutes": "Minimum slot duration is 30 minutes",
        "Slot duration must be a multiple of 30 minutes": "Slot duration must be a multiple of 30 minutes",
        "Candidate is already booked for another slot in this round": "Candidate is already booked for another slot in this round.",
        "Slot no longer available": "Slot no longer available",
        "This slot was already booked by another agency. Please choose a different slot.": "This slot was already booked by another agency. Please choose a different slot.",
        "Create and manage interview time slots for approved positions": "Create and manage interview time slots for approved positions",
        "available": "available",
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
        "Dashboard Overview": "Dashboard Overview",
        "Quick Actions": "Quick Actions",
        "Open Requests": "Open Requests",
        "Approved Requests": "Open Requests",
        "Pending Requests": "Pending Requests",
        "View Candidates": "View Candidates",
        "View Requests": "View Requests",
        "Manage Time Slots": "Manage Time Slots",
        "Total Requests": "Total Requests",
        "Request approved successfully!": "Request approved successfully!",
        "Request rejected successfully!": "Request rejected successfully!",
        "Position marked as filled!": "Position marked as filled!",
        "Request paused successfully!": "Request paused successfully!",
        "Request resumed successfully!": "Request resumed successfully!",
        "Request deleted successfully!": "Request deleted successfully!",
        "Error pausing request:": "Error pausing request:",
        "Error resuming request:": "Error resuming request:",
        "Error deleting request:": "Error deleting request:",
        "Pause": "Pause",
        "Resume": "Resume",
        "Delete Request": "Delete",
        "Sections": "Sections",
        "All Requests": "All Requests",
        "No requests found in this section.": "No requests found in this section.",
        "Are you sure you want to delete this request?": "Are you sure you want to delete this request?",
        "Download Excel": "Download Excel",
        "Export Options": "Export Options",
        "Select what to export": "Select what to export",
        "Only Approved": "Only Open",
        "Approved and Pending": "Open and Pending",
        "Export": "Export",
        "Exporting...": "Exporting...",
        "Export completed successfully": "Export completed successfully",
        "Error exporting data": "Error exporting data",
        "No data to export": "No data to export",
        "Please select export type": "Please select export type",
        "Notify Recruiter": "Notify Recruiter",
        "Send Interview Dates": "Send Interview Dates",
        "Add Interview Date": "Add Interview Date",
        "Date": "Date",
        "Time": "Time",
        "Duration (minutes)": "Duration (minutes)",
        "Remove": "Remove",
        "Continue": "Continue",
        "Skip": "Skip",
        "Interview Dates": "Interview Dates",
        "Please add at least one interview date": "Please add at least one interview date",
        "Interview dates sent to recruiter": "Interview dates sent to recruiter",
        "Interview Type": "Interview Type",
        "In Person": "In Person",
        "Teams": "Teams",
        "Interviewer Name": "Interviewer Name",
        "Specify Interview Type": "Specify Interview Type",
        "Specify Interviewer": "Specify Interviewer",
        "Enter interviewer name": "Enter interviewer name",
        "Error approving request:": "Error approving request:",
        "Error rejecting request:": "Error rejecting request:",
        "Error updating position:": "Error updating position:",
        "Reports functionality coming soon!": "Reports functionality coming soon!",
        "Clear Filters": "Clear Filters",
        "Request Details": "Request Details",
        "Created At": "Created At",
        "Days Old": "Days",
        "Day": "Day",
        "Days": "Days",
        "Request days column hint": "Pending: days since request. Approved: days since approval. Filled: days from approval to close.",
        "Approved at": "Approved at",
        "Filled at": "Filled at",
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
        "Upload": "Upload",
        "Login": "Login",
        "Remember me": "Remember me",
        "Forgot password?": "Forgot password?",
        "Send reset link": "Send reset link",
        "Back to login": "Back to login",
        "Set new password": "Set new password",
        "Save new password": "Save new password",
        "Enter your email and we will send you a reset link.": "Enter your email and we will send you a reset link.",
        "If an account exists for this email, you will receive password reset instructions.": "If an account exists for this email, you will receive password reset instructions.",
        "Password reset email sent. Check your inbox.": "Password reset email sent. Check your inbox.",
        "Could not send reset email. Please try again.": "Could not send reset email. Please try again.",
        "Email is required": "Email is required",
        "New Password": "New Password",
        "Confirm New Password": "Confirm New Password",
        "Reset password": "Reset password",
        "Invalid or expired reset link. Please request a new reset email from the login page.": "Invalid or expired reset link. Please request a new reset email from the login page."
    },
    sk: {
        // Navigation
        "Dashboard": "Nástenka",
        "Candidates": "Kandidáti",
        "View and manage candidates by status": "Zobraziť a spravovať kandidátov podľa stavu",
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
        "Interim": "Interim",
        "Reason for New Position": "Dôvod novej pozície",
        "Name of Person Being Replaced": "Meno nahradzovanej osoby",
        "Replaced person": "Nahradzovaná osoba",
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
        "Pending Recruiter Review": "Čaká na schválenie recruiterom",
        "Agency submissions": "Podania od agentúr",
        "Review agency submissions": "Skontrolovať podania agentúr",
        "Select open position": "Vyberte schválenú otvorenú pozíciu",
        "No open positions": "Žiadna schválená otvorená pozícia. Najprv musí recruiter schváliť žiadosť.",
        "Agency source": "Agentúra (zdroj)",
        "Submit for review": "Odoslať na schválenie recruiterovi",
        "Confirm agency candidate": "Potvrdiť kandidáta",
        "Reject agency submission": "Zamietnuť podanie",
        "Awaiting recruiter review": "Čaká na recruitera",
        "Confirm this agency submission?": "Potvrdiť tohto kandidáta? Manažéri oddelenia dostanú notifikáciu.",
        "Agency candidate submitted": "Kandidát bol odoslaný. Recruiter bol informovaný e-mailom.",
        "Agency submission confirmed": "Kandidát bol potvrdený. Manažéri boli informovaní.",
        "Agency submission rejected": "Podanie bolo zamietnuté. Agentúra bude informovaná.",
        "Agency submissions subtitle": "Kandidáti pridaní agentúrami — pred zobrazením manažérom ich potvrďte alebo zamietnite.",
        "Candidates by status heading": "Všetci kandidáti podľa stavu",
        "No pending agency submissions": "Žiadne podania od agentúr na spracovanie.",
        "Visible to agencies": "Viditeľné pre agentúry",
        "Agency visibility updated": "Viditeľnosť pre agentúry bola uložená.",
        "Visible to agencies help": "Po schválení: agentúra uvidí túto pozíciu pri pridávaní kandidáta.",
        "Yes": "Áno",
        "No": "Nie",
        "Rejection reason (optional)": "Dôvod zamietnutia (voliteľné)",
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
        "Edit": "Upraviť",
        "Edit Candidate": "Upraviť kandidáta",
        "Save Changes": "Uložiť zmeny",
        "Invite": "Pozvať",
        "Reject": "Zamietnuť",
        "Second Round": "Druhé kolo",
        "Hire": "Prijať",
        "Download CV": "Stiahnuť životopis",
        "Download Assessment": "Stiahnuť hodnotenie",
        "No documents": "Žiadne dokumenty",
        "Agencies cannot access candidate documents": "Agentúry nemajú prístup k dokumentom uchádzačov.",
        "Agencies cannot edit candidates": "Agentúry nemôžu upravovať údaje kandidátov.",
        "No notes": "Žiadne poznámky",
        "Create New Request": "Vytvoriť novú žiadosť",
        "Welcome to the Recruiting Management Dashboard!": "Vitajte v paneli riadenia náboru!",
        "Update Password": "Aktualizovať heslo",
        "Current Password": "Aktuálne heslo",
        "New Password": "Nové heslo",
        "Confirm New Password": "Potvrďte nové heslo",
        "New passwords do not match": "Nové heslá sa nezhodujú",
        "Passwords do not match": "Heslá sa nezhodujú",
        "Password Strength": "Sila hesla",
        "Weak": "Slabé",
        "Medium": "Stredné",
        "Strong": "Silné",
        "At least 8 characters": "Najmenej 8 znakov",
        "One uppercase letter": "Jedno veľké písmeno",
        "One lowercase letter": "Jedno malé písmeno",
        "One number": "Jedno číslo",
        "One special character": "Jeden špeciálny znak",
        "Cancel": "Zrušiť",
        "Updating...": "Aktualizuje sa...",
        "Current password is required": "Aktuálne heslo je povinné",
        "New password is required": "Nové heslo je povinné",
        "Password must be at least 8 characters long": "Heslo musí mať najmenej 8 znakov",
        "Password does not meet all requirements": "Heslo nespĺňa všetky požiadavky",
        "Please confirm your new password": "Prosím potvrďte nové heslo",
        "Current password is incorrect": "Aktuálne heslo je nesprávne",
        "New password must be different from current password": "Nové heslo sa musí líšiť od aktuálneho hesla",
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
        "Approved": "Otvorené",
        "Paused": "Pozastavené",
        "Rejected": "Zamietnuté",
        "Filled": "Obsadené",
        "Manage Slots": "Spravovať termíny",
        "Book Interviews": "Rezervácia termínov",
        "Add Interview Slots": "Pridať termíny na pohovor",
        "Add First Round Slots": "Pridať termíny - Prvé kolo",
        "Add Second Round Slots": "Pridať termíny - Druhé kolo",
        "View Slots": "Zobraziť termíny",
        "Add": "Pridať",
        "View": "Zobraziť",
        "First Round": "Prvé kolo",
        "Second Round": "Druhé kolo",
        "Add Another Slot": "Pridať ďalší termín",
        "Duration": "Trvanie",
        "Select": "Vybrať",
        "Save Slots": "Uložiť termíny",
        "Saving slots...": "Ukladám termíny...",
        "Notifying agencies...": "Posielam informácie agentúram...",
        "Interview Slots": "Termíny na pohovor",
        "Available Slots": "Dostupné termíny",
        "No available slots": "Žiadne dostupné termíny",
        "Book Slot": "Rezervovať termín",
        "Book Interview Slot": "Rezervovať termín na pohovor",
        "Select Candidate": "Vybrať kandidáta",
        "Available Positions": "Dostupné pozície",
        "No approved positions": "Žiadne schválené pozície",
        "First Round Slots": "Termíny - Prvé kolo",
        "Second Round Slots": "Termíny - Druhé kolo",
        "No positions with candidates": "Žiadne pozície, pre ktoré máte kandidátov",
        "Candidates": "Kandidáti",
        "Candidate Names": "Menná kandidátov",
        "First Round": "Prvé kolo",
        "Second Round": "Druhé kolo",
        "slots": "slotov",
        "slot": "slot",
        "available": "dostupných",
        "available slot": "dostupný slot",
        "available slots": "dostupné sloty",
        "Loading available slots...": "Načítavanie dostupných slotov...",
        "Booked by": "Rezervované",
        "Available": "Dostupné",
        "Select a position to book interview slots": "Vyberte pozíciu na rezerváciu termínov pohovoru",
        "Book": "Rezervovať",
        "Today": "Dnes",
        "No slots available": "Žiadne dostupné sloty",
        "No available slots for this round": "Pre toto kolo nie sú k dispozícii žiadne sloty. Skúste to neskôr.",
        "Add Interview Slots": "Pridať termíny na pohovor",
        "Time slots are set in 15-minute intervals, each slot lasts 30 minutes": "Časové sloty sú nastavené po 15 minútach (napr. 10:00, 10:15, 10:30), každý slot trvá 30 minút",
        "Date": "Dátum",
        "Start Time": "Začiatok",
        "End Time": "Koniec",
        "Remove Slot": "Odstrániť slot",
        "End time must be after start time": "Čas konca musí byť po čase začiatku",
        "Minimum slot duration is 30 minutes": "Minimálna dĺžka slotu je 30 minút",
        "Slot duration must be a multiple of 30 minutes": "Dĺžka slotu musí byť násobkom 30 minút",
        "Candidate is already booked for another slot in this round": "Kandidát už má rezervovaný iný termín v tomto kole.",
        "Slot no longer available": "Termín už nie je dostupný",
        "This slot was already booked by another agency. Please choose a different slot.": "Tento termín už bol rezervovaný inou agentúrou. Vyberte prosím iný termín.",
        "Create and manage interview time slots for approved positions": "Vytvárajte a spravujte termíny na pohovory pre schválené pozície",
        "available": "dostupných",
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
        "Dashboard Overview": "Prehľad nástenky",
        "Quick Actions": "Rýchle akcie",
        "Open Requests": "Otvorené žiadosti",
        "Approved Requests": "Otvorené žiadosti",
        "Pending Requests": "Čakajúce žiadosti",
        "View Candidates": "Zobraziť kandidátov",
        "View Requests": "Zobraziť žiadosti",
        "Manage Time Slots": "Spravovať termíny",
        "Total Requests": "Celkový počet žiadostí",
        "Request approved successfully!": "Žiadosť bola úspešne schválená!",
        "Request rejected successfully!": "Žiadosť bola úspešne zamietnutá!",
        "Position marked as filled!": "Pozícia bola označená ako obsadená!",
        "Request paused successfully!": "Žiadosť bola úspešne pozastavená!",
        "Request resumed successfully!": "Žiadosť bola úspešne obnovená!",
        "Request deleted successfully!": "Žiadosť bola úspešne vymazaná!",
        "Error pausing request:": "Chyba pri pozastavení žiadosti:",
        "Error resuming request:": "Chyba pri obnovení žiadosti:",
        "Error deleting request:": "Chyba pri mazaní žiadosti:",
        "Pause": "Pozastaviť",
        "Resume": "Obnoviť",
        "Delete Request": "Vymazať",
        "Sections": "Sekcie",
        "All Requests": "Všetky žiadosti",
        "No requests found in this section.": "V tejto sekcii sa nenašli žiadne žiadosti.",
        "Are you sure you want to delete this request?": "Naozaj chcete túto žiadosť vymazať?",
        "Download Excel": "Stiahnuť Excel",
        "Export Options": "Možnosti exportu",
        "Select what to export": "Vyberte, čo exportovať",
        "Only Approved": "Len otvorené",
        "Approved and Pending": "Otvorené a čakajúce",
        "Export": "Exportovať",
        "Exporting...": "Exportujem...",
        "Export completed successfully": "Export úspešne dokončený",
        "Error exporting data": "Chyba pri exportovaní dát",
        "No data to export": "Žiadne dáta na export",
        "Please select export type": "Prosím vyberte typ exportu",
        "Notify Recruiter": "Upozorniť Recruitera",
        "Send Interview Dates": "Poslať termíny na pohovor",
        "Add Interview Date": "Pridať termín",
        "Date": "Dátum",
        "Time": "Čas",
        "Duration (minutes)": "Dĺžka (minúty)",
        "Remove": "Odstrániť",
        "Continue": "Pokračovať",
        "Skip": "Preskočiť",
        "Interview Dates": "Termíny na pohovor",
        "Please add at least one interview date": "Prosím pridajte aspoň jeden termín",
        "Interview dates sent to recruiter": "Termíny boli odoslané recruiterovi",
        "Interview Type": "Typ pohovoru",
        "In Person": "Osobne",
        "Teams": "Teams",
        "Interviewer Name": "Meno pohovorujúceho",
        "Specify Interview Type": "Určiť typ pohovoru",
        "Specify Interviewer": "Určiť pohovorujúceho",
        "Enter interviewer name": "Zadajte meno pohovorujúceho",
        "Error approving request:": "Chyba pri schvaľovaní žiadosti:",
        "Error rejecting request:": "Chyba pri zamietaní žiadosti:",
        "Error updating position:": "Chyba pri aktualizácii pozície:",
        "Reports functionality coming soon!": "Funkcionalita reportov čoskoro!",
        "Clear Filters": "Vymazať filtre",
        "Request Details": "Detaily žiadosti",
        "Created At": "Vytvorené",
        "Days Old": "Dní",
        "Day": "deň",
        "Days": "dní",
        "Request days column hint": "Čakajúce: dni od podania. Schválené: dni od schválenia. Obsadené: dni od schválenia po uzavretie.",
        "Approved at": "Dátum schválenia",
        "Filled at": "Dátum uzavretia",
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
        "Upload": "Nahrať",
        "Login": "Prihlásenie",
        "Remember me": "Zapamätať si ma",
        "Forgot password?": "Zabudli ste heslo?",
        "Send reset link": "Odoslať odkaz na obnovenie",
        "Back to login": "Späť na prihlásenie",
        "Set new password": "Nastaviť nové heslo",
        "Save new password": "Uložiť nové heslo",
        "Enter your email and we will send you a reset link.": "Zadajte e-mail a pošleme vám odkaz na obnovenie hesla.",
        "If an account exists for this email, you will receive password reset instructions.": "Ak účet s týmto e-mailom existuje, dostanete inštrukcie na obnovenie hesla.",
        "Password reset email sent. Check your inbox.": "E-mail na obnovenie hesla bol odoslaný. Skontrolujte schránku.",
        "Could not send reset email. Please try again.": "Odoslanie e-mailu zlyhalo. Skúste to znova.",
        "Email is required": "E-mail je povinný",
        "New Password": "Nové heslo",
        "Confirm New Password": "Potvrďte nové heslo",
        "Reset password": "Obnovenie hesla",
        "Invalid or expired reset link. Please request a new reset email from the login page.": "Neplatný alebo expirovaný odkaz. Požiadajte o nový e-mail na obnovenie hesla na prihlasovacej stránke."
    }
};

// Global variables
let supabaseInstance;
let currentLanguage = 'sk';
let currentRequestsSection = 'all';
let currentRequestsCache = [];

// Department-Position mapping
const departmentPositions = {
    'Business': ['Assistant Buyer', 'Buyer', 'Supplier Quality Assurance Engineer', 'Business Administration', 'Business Sales & Cost Analyst'],
    'CI': ['CI Coordinator', 'CI Analyst', 'CI Technician'],
    'Engineering': ['Senior Process Engineer 1', 'Senior Process Engineer IM', 'Process Engineer 1', 'Senior IM Technologist Coordinator', 'Process Engineer IM', 'Senior Technologist IM', 'Foreman Technologist IM', 'Technologist IM', 'Mold Changer', 'Materialist', 'Senior Process Engineer 2', 'Process Engineer 2', 'Senior Technologist Coordinator', 'Tooling Engineer', 'Product Engineer', 'Change BOM Coordinator', 'Programe Engineer', 'Quality Program Engineer', 'Launch Coordinator', 'Data Analyst', 'Manufacturing Engineer'],
    'Finance': ['Programme Controller', 'Finance Analyst', 'Chief Accountant', 'Financial Specialist Senior', 'Supplier Accountant', 'Services Accountant', 'Financial Assistant', 'Financial Clerk', 'Revenue Accountant', 'Financial Specialist', 'Treasury Analyst', 'Senior Treasury & Financial Analyst'],
    'HR': ['Payroll accountant', 'Senior HR Generalist', 'Recruiter', 'HR Generalist 1', 'Junior Payroll', 'Training Center Trainer', 'HSE Specialist', 'Environment Officer', 'Executive assistant'],
    'IT': ['Junior IT technician', 'IT Analyst / Administrator', 'Senior IT Specialist'],
    'Logistics': ['Warehouse/Logistics Leader', 'Senior Logistics Planner', 'Logistics Disponent', 'Logistics Planner', 'Packaging Disponent', 'Logistics Referent', 'Inventory Counter', 'Internal Logistics Coordinator', 'Logistics Shift leader', 'Expedient', 'Supervisor Inventory Control', 'Logistics Planner IM', 'Senior Demand Specialist', 'Logistics operator Expedient', 'Logistics operator receiving'],
    'Maintenance': ['Maintenance leader', 'Technician I', 'Technician II', 'Maintenance Shift Leader', 'Maintainer', 'Maintainer - mechanician', 'Maintainer - electrician', 'Energetic Coordinator', 'Robotist', 'Toolmaker', 'Maintenance Leader IM', 'Electrician IM', 'Mechanician IM', 'Maintainer - Toolmaker', 'Energetic/Facility Coordinator', 'Mechatronik', 'Toolmaker Coordinator and Maintenance Leader IM', 'Warehouse referent', 'Technologist 1'],
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
            
            supabaseInstance = supabase.createClient(config.supabase.url, config.supabase.anonKey, {
                auth: {
                    flowType: 'implicit',
                    detectSessionInUrl: true
                }
            });
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

function setLoginPane(pane) {
    const signin = document.getElementById('login-pane-signin');
    const forgot = document.getElementById('login-pane-forgot');
    const cardTitle = document.querySelector('#login-form .login-title');
    if (signin) signin.hidden = pane !== 'signin';
    if (forgot) forgot.hidden = pane !== 'forgot';
    if (cardTitle && window.uiManager && typeof window.uiManager.translate === 'function') {
        if (pane === 'forgot') {
            cardTitle.setAttribute('data-translate', 'Reset password');
            cardTitle.textContent = window.uiManager.translate('Reset password');
        } else {
            cardTitle.setAttribute('data-translate', 'Login');
            cardTitle.textContent = window.uiManager.translate('Login');
        }
    }
}

/** Supabase redirects here with #...&type=recovery (implicit) or ?type=recovery / ?code= (PKCE). */
function isPasswordRecoveryFromLocation() {
    try {
        if (typeof window === 'undefined') return false;
        const hash = (window.location.hash || '').replace(/^#/, '');
        if (hash) {
            const fromHash = new URLSearchParams(hash).get('type');
            if (fromHash === 'recovery') return true;
        }
        const search = (window.location.search || '').replace(/^\?/, '');
        if (search) {
            const fromSearch = new URLSearchParams(search).get('type');
            if (fromSearch === 'recovery') return true;
        }
    } catch (e) {
        /* ignore */
    }
    return false;
}

// Initialize all modules
async function initializeModules() {
    try {
        console.log('Starting module initialization...');

        const recoveryFromUrlCaptured = isPasswordRecoveryFromLocation();
        if (recoveryFromUrlCaptured && window.authManager && typeof window.authManager.getPasswordResetRedirectUrl === 'function') {
            const resetTarget = window.authManager.getPasswordResetRedirectUrl();
            if (resetTarget) {
                try {
                    const u = new URL(resetTarget);
                    u.search = window.location.search || '';
                    u.hash = window.location.hash || '';
                    window.location.replace(u.href);
                    return;
                } catch (e) {
                    console.warn('Could not redirect to password reset page', e);
                }
            }
        }

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

        window.authManager.init(supabase, false);
        window.candidatesManager.init(supabase);
        window.requestsManager.init(supabase);
        if (window.interviewSlotsManager) {
            window.interviewSlotsManager.init(supabase);
        }
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
            if (userInfo && userInfo.role === 'agency') {
                showAgencyView();
            } else {
                showDashboard();
            }
            
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
        window.uiManager.showErrorPage('Failed to initialize application. Please refresh the page.');
    }
}

// Setup login form (once per page load)
function setupLoginForm() {
    const loginScreen = document.getElementById('login-screen');
    if (loginScreen && loginScreen.dataset.loginFormsBound === '1') {
        return;
    }
    if (loginScreen) {
        loginScreen.dataset.loginFormsBound = '1';
    }

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
                const userInfo = await window.authManager.getUserInfo();
                if (userInfo) {
                    userRole = userInfo.role || '';
                    userDepartment = userInfo.department || '';
                }
                if (userInfo && userInfo.role === 'agency') {
                    showAgencyView();
                } else {
                    showDashboard();
                }
            } catch (error) {
                console.error('Login failed:', error);
                window.utils.showMessage('Login failed: ' + error.message, 'error');
            }
        });
        console.log('Login form event listener added');
    } else {
        console.error('Auth form not found!');
    }

    const forgotLink = document.getElementById('forgot-password-link');
    if (forgotLink) {
        forgotLink.addEventListener('click', (e) => {
            e.preventDefault();
            const mainEmail = document.getElementById('email')?.value?.trim();
            const forgotInput = document.getElementById('forgot-email');
            if (forgotInput && mainEmail) {
                forgotInput.value = mainEmail;
            }
            setLoginPane('forgot');
            window.uiManager.translatePage();
        });
    }

    const backFromForgot = document.getElementById('back-to-login-from-forgot');
    if (backFromForgot) {
        backFromForgot.addEventListener('click', () => {
            setLoginPane('signin');
            window.uiManager.translatePage();
        });
    }

    const forgotForm = document.getElementById('forgot-password-form');
    if (forgotForm) {
        forgotForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('forgot-email')?.value?.trim();
            if (!email) {
                window.utils.showMessage(window.uiManager.translate('Email is required'), 'error');
                return;
            }
            const btn = document.getElementById('forgot-submit-btn');
            if (btn) {
                btn.disabled = true;
                btn.textContent = window.uiManager.translate('Updating...');
            }
            try {
                await window.authManager.requestPasswordReset(email);
                window.utils.showMessage(
                    window.uiManager.translate('If an account exists for this email, you will receive password reset instructions.'),
                    'success'
                );
                setLoginPane('signin');
            } catch (error) {
                console.error('Password reset request failed:', error);
                window.utils.showMessage(
                    window.uiManager.translate('Could not send reset email. Please try again.') + (error.message ? ` (${error.message})` : ''),
                    'error'
                );
            } finally {
                if (btn) {
                    btn.disabled = false;
                    btn.textContent = window.uiManager.translate('Send reset link');
                }
            }
        });
    }

}

// Navigation functions
async function showDashboard() {
    const app = document.getElementById('app');
    
    try {
        window.uiManager.showLoading('Loading dashboard...');
        
        const [candidateStats, requestStats] = await Promise.all([
            window.candidatesManager.getStatistics(),
            window.requestsManager.getStatistics()
        ]);
        
        window.uiManager.hideLoading();
        
        const totalCandidates = candidateStats.total || 0;
        const totalRequests = requestStats.total || 0;
        const approvedRequests = requestStats.byStatus?.Approved || 0;
        const pendingRequests = requestStats.byStatus?.Pending || 0;
        
        app.innerHTML = `
            <div class="dashboard-layout">
                <section class="dashboard-hero">
                    <div class="dashboard-hero-text">
                        <h2 data-translate="Dashboard Overview">Dashboard Overview</h2>
                        <p data-translate="Welcome to the Recruiting Management Dashboard!">
                            Welcome to the Recruiting Management Dashboard!
                        </p>
                    </div>
                    <div class="dashboard-hero-actions">
                        <button onclick="showAddCandidate()" class="btn btn-primary" data-translate="Add New Candidate">
                            Add New Candidate
                        </button>
                        <button onclick="showNewRequest()" class="btn btn-secondary" data-translate="Create Recruiting Request">
                            Create Recruiting Request
                        </button>
                    </div>
                </section>
                
                <section class="dashboard-grid">
                    <div class="dashboard-card metric-card">
                        <div class="metric-header">
                            <span class="metric-label" data-translate="Total Candidates">Total Candidates</span>
                        </div>
                        <div class="metric-value">${totalCandidates}</div>
                        <button class="link-button" onclick="showCandidates()" data-translate="View Candidates">
                            View Candidates
                        </button>
                    </div>
                    
                    <div class="dashboard-card metric-card">
                        <div class="metric-header">
                            <span class="metric-label" data-translate="Total Requests">Total Requests</span>
                        </div>
                        <div class="metric-value">${totalRequests}</div>
                        <button class="link-button" onclick="showRequests()" data-translate="View Requests">
                            View Requests
                        </button>
                    </div>
                    
                    <div class="dashboard-card metric-card">
                        <div class="metric-header">
                            <span class="metric-label" data-translate="Approved Requests">Approved Requests</span>
                        </div>
                        <div class="metric-value">${approvedRequests}</div>
                    </div>
                    
                    <div class="dashboard-card metric-card">
                        <div class="metric-header">
                            <span class="metric-label" data-translate="Pending Requests">Pending Requests</span>
                        </div>
                        <div class="metric-value">${pendingRequests}</div>
                        <button class="link-button" onclick="showManageSlots()" data-translate="Manage Time Slots">
                            Manage Time Slots
                        </button>
                    </div>
                </section>
            </div>
        `;
        
        window.uiManager.translatePage();
    } catch (error) {
        console.error('Error loading dashboard:', error);
        window.uiManager.hideLoading();
        app.innerHTML = `
            <div class="error-state">
                <h2 data-translate="Error">Error</h2>
                <p>${error.message}</p>
            </div>
        `;
        window.uiManager.translatePage();
    }
}

async function showCandidates() {
    try {
        window.uiManager.showLoading('Loading candidates...');
        
        // Check if there's a saved filter state
        const savedState = sessionStorage.getItem('candidateFilterState');
        
        let result;
        if (savedState) {
            // Apply saved filters
            try {
                const filterState = JSON.parse(savedState);
                result = await window.candidatesManager.getCandidates({
                    page: 1,
                    pageSize: 1000,
                    status: filterState.status || undefined,
                    department: filterState.department || undefined,
                    position: filterState.position || undefined,
                    source: filterState.source || undefined
                });
                
                // Apply client-side filtering for consistency
                let filteredCandidates = result.candidates;
                if (filterState.department) {
                    filteredCandidates = filteredCandidates.filter(c => c.department === filterState.department);
                }
                if (filterState.position) {
                    filteredCandidates = filteredCandidates.filter(c => c.position === filterState.position);
                }
                if (filterState.source) {
                    filteredCandidates = filteredCandidates.filter(c => c.source === filterState.source);
                }
                if (filterState.status) {
                    filteredCandidates = filteredCandidates.filter(c => c.status === filterState.status);
                }
                result = { candidates: filteredCandidates, pagination: result.pagination };
            } catch (error) {
                // If filter state is invalid, load all candidates
                result = await window.candidatesManager.getCandidates({
                    page: 1,
                    pageSize: 1000
                });
            }
        } else {
            // No saved filter, load all candidates
            result = await window.candidatesManager.getCandidates({
            page: 1,
            pageSize: 1000  // Load all candidates for display
        });
        }

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

    const filterUser = window.authManager.getUserInfo();
    const isRecruiterOrGm = filterUser && (filterUser.role === 'recruiter' || filterUser.role === 'gm');
    const pendingAgencyCandidates = isRecruiterOrGm
        ? candidates.filter(c => c.status === 'Pending Recruiter Review')
        : [];
    const mainCandidates = isRecruiterOrGm
        ? candidates.filter(c => c.status !== 'Pending Recruiter Review')
        : candidates;

    // Group candidates by status (main list; recruiter/GM: bez čakajúcich na schválenie)
    const groupedCandidates = mainCandidates.reduce((acc, candidate) => {
        if (!acc[candidate.status]) {
            acc[candidate.status] = [];
        }
        acc[candidate.status].push(candidate);
        return acc;
    }, {});

    console.log('Grouped candidates:', groupedCandidates);

    // Get all unique statuses from main list (+ pending v filtri len pre ostatné roly)
    const allStatuses = [...new Set(mainCandidates.map(c => c.status).filter(Boolean))].sort();
    const statusFilterOptions = [...allStatuses];

    let html = `
    <div class="candidates-layout">
        <section class="candidates-hero">
            <div class="candidates-hero-text">
                <h2 data-translate="Candidates">Candidates</h2>
                <p class="candidates-subtitle" data-translate="View and manage candidates by status">View and manage candidates by status</p>
            </div>
            <div class="candidates-hero-actions">
                <button onclick="showAddCandidate()" class="btn btn-primary" data-translate="Add New Candidate">Add New Candidate</button>
            </div>
        </section>
        <section class="candidates-filters-card card">
            <div class="candidates-filters">
                <select id="department-filter" class="filter-select">
                    <option value="" data-translate="All Departments">All Departments</option>
                    ${Object.keys(departmentPositions).map(dept => `<option value="${dept}">${dept}</option>`).join('')}
                </select>
                <select id="position-filter" class="filter-select">
                    <option value="" data-translate="All Positions">All Positions</option>
                </select>
                <select id="source-filter" class="filter-select">
                    <option value="" data-translate="All Sources">All Sources</option>
                    ${sourceOptions.map(source => `<option value="${source}">${source}</option>`).join('')}
                </select>
                <select id="status-filter" class="filter-select">
                    <option value="" data-translate="All Statuses">All Statuses</option>
                    ${statusFilterOptions.map(status => `<option value="${status}">${window.uiManager.translate(status)}</option>`).join('')}
                </select>
                <button onclick="applyFilters()" class="btn btn-primary" data-translate="Apply Filters">Apply Filters</button>
                <button onclick="clearFilters()" class="btn btn-secondary" data-translate="Clear Filters">Clear Filters</button>
            </div>
        </section>
        <div id="agency-submissions-host" class="agency-submissions-host" hidden></div>
        <div id="candidates-main-wrap" class="candidates-main-wrap">
            <h2 id="candidates-main-heading" class="candidates-main-heading" style="display: none;" data-translate="Candidates by status heading">All candidates by status</h2>
            <div id="candidates-container" class="candidates-container"></div>
        </div>
    </div>
    `;

    app.innerHTML = html;

    const agencyHost = document.getElementById('agency-submissions-host');
    if (isRecruiterOrGm && agencyHost) {
        if (candidates.length === 0) {
            agencyHost.hidden = true;
        } else {
            agencyHost.hidden = false;
            const section = document.createElement('section');
            section.id = 'agency-submissions-section';
            section.className = 'agency-submissions-section card';
            section.innerHTML = `
            <div class="agency-submissions-section__head">
                <h3 class="agency-submissions-section__title" data-translate="Agency submissions">Agency submissions</h3>
                <p class="agency-submissions-section__subtitle" data-translate="Agency submissions subtitle"></p>
            </div>
            <div class="agency-submissions-section__body"></div>`;
            const body = section.querySelector('.agency-submissions-section__body');
            if (pendingAgencyCandidates.length > 0) {
                body.appendChild(createCandidateTable(pendingAgencyCandidates, 'Pending Recruiter Review', { omitHeader: true }));
            } else {
                const empty = document.createElement('p');
                empty.className = 'agency-submissions-section__empty';
                empty.setAttribute('data-translate', 'No pending agency submissions');
                empty.textContent = window.uiManager.translate('No pending agency submissions');
                body.appendChild(empty);
            }
            agencyHost.appendChild(section);
        }
    }

    // Render candidate tables
    const container = document.getElementById('candidates-container');
    const mainHeading = document.getElementById('candidates-main-heading');
    if (isRecruiterOrGm && mainHeading) {
        mainHeading.style.display = mainCandidates.length > 0 ? 'block' : 'none';
    }
    
    // Define preferred status order (bez Pending pre recruiter/GM — ten je v hornej sekcii)
    const preferredStatusOrder = isRecruiterOrGm
        ? ['New', 'In Process - First Round', 'In Process - Second Round', 'Hired - Contact Source', 'Rejected - Inform Source', 'Hired', 'Rejected']
        : ['Pending Recruiter Review', 'New', 'In Process - First Round', 'In Process - Second Round', 'Hired - Contact Source', 'Rejected - Inform Source', 'Hired', 'Rejected'];
    
    // Get all statuses from grouped candidates
    const allStatusesInData = Object.keys(groupedCandidates);
    
    // Combine preferred order with any additional statuses
    const statusOrder = [
        ...preferredStatusOrder.filter(s => allStatusesInData.includes(s)),
        ...allStatusesInData.filter(s => !preferredStatusOrder.includes(s)).sort()
    ];

    const userInfo = window.authManager.getUserInfo();
    const isAgency = userInfo && userInfo.role === 'agency';
    const statusesToShow = isAgency
        ? statusOrder.filter(s => s !== 'Rejected')
        : statusOrder;

    // Show status groups that have candidates (agency: last section is Hired, no Rejected)
    statusesToShow.forEach(status => {
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
    
    // Restore filter state if it exists
    restoreFilterState();
    
    // Add event listener for department filter to update position filter
    const departmentFilter = document.getElementById('department-filter');
    const positionFilter = document.getElementById('position-filter');
    
    if (departmentFilter && positionFilter) {
        // Initialize position filter on load (after restoring filter state)
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
    
    // Get user info to check allowed positions
    const userInfo = window.authManager ? window.authManager.getUserInfo() : null;
    const isGMOrRecruiter = userInfo && (userInfo.role === 'gm' || userInfo.role === 'recruiter');
    const userAllowedPositions = userInfo && userInfo.allowedPositions && Array.isArray(userInfo.allowedPositions) ? userInfo.allowedPositions : [];
    
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
    
    let positionsToShow = [];
    
    if (selectedDepartment && departmentPositions[selectedDepartment]) {
        // If department selected, show only positions from that department that exist in candidates
        positionsToShow = departmentPositions[selectedDepartment];
    } else {
        // If no department selected, show all unique positions from displayed candidates
        positionsToShow = Array.from(allPositions).sort();
    }
    
    // Filter by user's allowed positions if not GM/Recruiter and has allowed positions
    if (!isGMOrRecruiter && userAllowedPositions.length > 0) {
        positionsToShow = positionsToShow.filter(position => userAllowedPositions.includes(position));
    }
    
    // Add positions to filter dropdown
    positionsToShow.forEach(position => {
            const option = document.createElement('option');
            option.value = position;
            option.textContent = position;
            positionFilter.appendChild(option);
        });
}

function createCandidateTable(candidates, status, options = {}) {
    const { omitHeader = false } = options;
    const statusGroup = document.createElement('div');
    statusGroup.className = 'status-group';
    if (omitHeader) {
        statusGroup.classList.add('status-group--no-header');
    }
    
    if (status.toLowerCase().includes('rejected')) {
        statusGroup.setAttribute('data-status', 'rejected');
    }

    if (!omitHeader) {
        const header = document.createElement('h3');
        header.className = 'status-header';
        header.textContent = window.uiManager.translate(status);
        statusGroup.appendChild(header);
    }

    const table = document.createElement('table');
    table.className = 'candidates-table';
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    const userInfo = window.authManager.getUserInfo();
    const isAgency = userInfo && userInfo.role === 'agency';
    const headers = isAgency
        ? ['Name', 'Department', 'Position', 'Source', 'Date Obtained', 'Interviewer']
        : ['Name', 'Department', 'Position', 'Source', 'Date Obtained', 'Interviewer', 'Time in Process', 'Documents', 'Notes', 'Actions', 'Admin Actions'];

    const headerRow = document.createElement('tr');
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = window.uiManager.translate(headerText);
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    candidates.forEach(candidate => {
        const row = document.createElement('tr');
        const timeInProcess = getTimeInProcessForCandidate(candidate);
        const skipStaleRowAlert = candidate.status && (
            candidate.status.includes('Hired') ||
            candidate.status.includes('Rejected') ||
            candidate.status === 'Pending Recruiter Review'
        );
        const alertClass = !isAgency && !skipStaleRowAlert && timeInProcess.days > 7 ? 'alert-status' : '';
        row.className = alertClass;

        const nameWithWarning = createNameWithWarning(candidate);

        const cells = isAgency
            ? [
                nameWithWarning,
                candidate.department || '',
                candidate.position || '',
                candidate.source || '',
                candidate.date_obtained || '',
                candidate.interviewer || ''
            ]
            : [
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
            ];

        cells.forEach(cellContent => {
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
        candidate.status.includes('Rejected') ||
        candidate.status === 'Pending Recruiter Review'
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
                    case 'Pending Recruiter Review': {
            const u = window.authManager.getUserInfo();
            const canReview = u && (u.role === 'recruiter' || u.role === 'gm');
            buttons = canReview
                ? `<button onclick="confirmAgencyCandidate(${candidate.id})" class="btn btn-success" data-translate="Confirm agency candidate">Confirm</button>
                   <button onclick="rejectAgencyCandidate(${candidate.id})" class="btn btn-danger" data-translate="Reject agency submission">Reject</button>`
                : '<span data-translate="Awaiting recruiter review">Awaiting recruiter review</span>';
            break;
                    }
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
    // Show modal to optionally add interview dates
    showInterviewDatesModal(id, 'In Process - First Round', 'Candidate invited to first round interview.');
}

async function secondRound(id) {
    // Show modal to optionally add interview dates
    showInterviewDatesModal(id, 'In Process - Second Round', 'Candidate moved to second round interview.');
}

function showInterviewDatesModal(candidateId, newStatus, successMessage) {
    const modal = document.createElement('div');
    modal.id = 'interview-dates-modal';
    modal.className = 'modal';
    modal.style.display = 'block';
    
    // Reset interview dates
    interviewDatesData = [];
    
    const updateModalContent = () => {
        const datesContainer = document.getElementById('interview-dates-container');
        if (!datesContainer) return;
        
        datesContainer.innerHTML = interviewDatesData.map((date, index) => `
            <div class="interview-date-item" style="display: flex; gap: 10px; margin-bottom: 10px; align-items: center;">
                <input type="date" id="date-${index}" value="${date.date}" required style="flex: 1; padding: 8px;">
                <input type="time" id="time-${index}" value="${date.time}" required style="flex: 1; padding: 8px;">
                <input type="number" id="duration-${index}" value="${date.duration}" placeholder="${window.uiManager.translate('Duration (minutes)')}" min="15" step="15" required style="flex: 1; padding: 8px;">
                <button type="button" onclick="removeInterviewDate(${index})" class="btn btn-danger" style="padding: 8px 15px;">${window.uiManager.translate('Remove')}</button>
            </div>
        `).join('');
        
        // Add event listeners to update data
        interviewDatesData.forEach((date, index) => {
            const dateInput = document.getElementById(`date-${index}`);
            const timeInput = document.getElementById(`time-${index}`);
            const durationInput = document.getElementById(`duration-${index}`);
            
            if (dateInput) dateInput.addEventListener('change', () => {
                interviewDatesData[index].date = dateInput.value;
            });
            if (timeInput) timeInput.addEventListener('change', () => {
                interviewDatesData[index].time = timeInput.value;
            });
            if (durationInput) durationInput.addEventListener('change', () => {
                interviewDatesData[index].duration = parseInt(durationInput.value) || 60;
            });
        });
    };
    
    const addInterviewDate = () => {
        const today = new Date().toISOString().split('T')[0];
        interviewDatesData.push({ date: today, time: '09:00', duration: 60 });
        updateModalContent();
    };
    
    window.removeInterviewDate = (index) => {
        interviewDatesData.splice(index, 1);
        updateModalContent();
    };
    
    modal.innerHTML = `
        <div class="modal-content interview-dates-modal" style="max-width: 600px;">
            <div class="modal-header">
                <h2 data-translate="Send Interview Dates">Send Interview Dates</h2>
                <span class="close" onclick="closeInterviewDatesModal()">&times;</span>
            </div>
            <div class="interview-dates-modal-content">
                <div style="margin-bottom: 20px;">
                    <label style="display: flex; align-items: center; cursor: pointer;">
                        <input type="checkbox" id="notify-recruiter" checked style="margin-right: 10px; width: 20px; height: 20px;">
                        <span data-translate="Notify Recruiter">Notify Recruiter</span>
                    </label>
                </div>
                
                <div id="interview-dates-section" style="margin-top: 20px;">
                    <h3 data-translate="Interview Dates">Interview Dates</h3>
                    <div id="interview-dates-container"></div>
                    <button type="button" onclick="addInterviewDateToModal()" class="btn btn-secondary" style="margin-top: 10px;" data-translate="Add Interview Date">Add Interview Date</button>
                </div>
                
                <div style="margin-top: 25px; padding-top: 20px; border-top: 1px solid #ddd;">
                    <div style="margin-bottom: 15px;">
                        <label style="display: flex; align-items: center; cursor: pointer;">
                            <input type="checkbox" id="specify-interview-type" style="margin-right: 10px; width: 20px; height: 20px;" onchange="toggleInterviewType()">
                            <span data-translate="Specify Interview Type">Specify Interview Type</span>
                        </label>
                    </div>
                    <div id="interview-type-section" style="margin-left: 30px; margin-top: 10px; display: none;">
                        <label style="display: block; margin-bottom: 5px;" data-translate="Interview Type">Interview Type:</label>
                        <select id="interview-type" style="width: 100%; padding: 8px; margin-bottom: 10px;" disabled>
                            <option value="In Person" data-translate="In Person">In Person</option>
                            <option value="Teams" data-translate="Teams">Teams</option>
                        </select>
                    </div>
                    
                    <div style="margin-bottom: 15px; margin-top: 15px;">
                        <label style="display: flex; align-items: center; cursor: pointer;">
                            <input type="checkbox" id="specify-interviewer" style="margin-right: 10px; width: 20px; height: 20px;" onchange="toggleInterviewer()">
                            <span data-translate="Specify Interviewer">Specify Interviewer</span>
                        </label>
                    </div>
                    <div id="interviewer-section" style="margin-left: 30px; margin-top: 10px; display: none;">
                        <label style="display: block; margin-bottom: 5px;" data-translate="Interviewer Name">Interviewer Name:</label>
                        <input type="text" id="interviewer-name" placeholder="${window.uiManager.translate('Enter interviewer name')}" style="width: 100%; padding: 8px;" disabled>
                    </div>
                </div>
                
                <div style="display: flex; gap: 10px; justify-content: flex-end; margin-top: 30px;">
                    <button onclick="closeInterviewDatesModal()" class="btn btn-secondary" data-translate="Skip">Skip</button>
                    <button onclick="processInterviewDates(${candidateId}, '${newStatus}', '${successMessage.replace(/'/g, "\\'")}')" class="btn btn-primary" data-translate="Continue">Continue</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    window.uiManager.translatePage();
    
    // Make addInterviewDate accessible
    window.addInterviewDateToModal = addInterviewDate;
    
    // Toggle functions for interview type and interviewer
    window.toggleInterviewType = () => {
        const checkbox = document.getElementById('specify-interview-type');
        const section = document.getElementById('interview-type-section');
        const select = document.getElementById('interview-type');
        
        if (checkbox.checked) {
            section.style.display = 'block';
            select.disabled = false;
        } else {
            section.style.display = 'none';
            select.disabled = true;
            select.value = 'In Person'; // Reset to default
        }
    };
    
    window.toggleInterviewer = () => {
        const checkbox = document.getElementById('specify-interviewer');
        const section = document.getElementById('interviewer-section');
        const input = document.getElementById('interviewer-name');
        
        if (checkbox.checked) {
            section.style.display = 'block';
            input.disabled = false;
        } else {
            section.style.display = 'none';
            input.disabled = true;
            input.value = ''; // Clear value
        }
    };
    
    // Add first date by default
    addInterviewDate();
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeInterviewDatesModal();
        }
    });
}

function closeInterviewDatesModal() {
    const modal = document.getElementById('interview-dates-modal');
    if (modal) {
        modal.remove();
    }
    // Clean up global functions
    interviewDatesData = [];
    delete window.addInterviewDateToModal;
    delete window.removeInterviewDate;
    delete window.toggleInterviewType;
    delete window.toggleInterviewer;
}

async function processInterviewDates(candidateId, newStatus, successMessage) {
    try {
        const notifyRecruiter = document.getElementById('notify-recruiter')?.checked || false;
        
        // Collect all interview dates from the form
        const interviewDates = [];
        interviewDatesData.forEach((date, index) => {
            const dateInput = document.getElementById(`date-${index}`);
            const timeInput = document.getElementById(`time-${index}`);
            const durationInput = document.getElementById(`duration-${index}`);
            
            if (dateInput && timeInput && durationInput) {
                const dateValue = dateInput.value;
                const timeValue = timeInput.value;
                const durationValue = parseInt(durationInput.value) || 60;
                
                if (dateValue && timeValue && durationValue) {
                    interviewDates.push({ 
                        date: dateValue, 
                        time: timeValue, 
                        duration: durationValue 
                    });
                }
            }
        });
        
        if (notifyRecruiter && interviewDates.length === 0) {
            window.utils.showMessage(window.uiManager.translate('Please add at least one interview date'), 'error');
            return;
        }
        
        // Get interview type and interviewer if specified
        const specifyType = document.getElementById('specify-interview-type')?.checked || false;
        const specifyInterviewer = document.getElementById('specify-interviewer')?.checked || false;
        const interviewType = specifyType ? document.getElementById('interview-type')?.value : null;
        const interviewerName = specifyInterviewer ? document.getElementById('interviewer-name')?.value : null;
        
        // Update candidate status
        await window.candidatesManager.updateCandidateStatus(candidateId, newStatus);
        
        // Send email to recruiter if requested
        if (notifyRecruiter && interviewDates.length > 0) {
            try {
                const candidate = await window.candidatesManager.getCandidateDetails(candidateId);
                await window.emailManager.notifyRecruiterInterviewDates(
                    candidate, 
                    newStatus, 
                    interviewDates,
                    interviewType,
                    interviewerName
                );
                window.utils.showMessage(window.uiManager.translate('Interview dates sent to recruiter'), 'success');
            } catch (emailError) {
                console.warn('Error sending interview dates email:', emailError);
                // Don't fail the status update if email fails
            }
        }
        
        window.utils.showMessage(successMessage, 'success');
        closeInterviewDatesModal();
        showCandidates();
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
function diffDaysHoursBetween(startVal, endVal) {
    const start = new Date(startVal);
    const end = new Date(endVal);
    if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
        return null;
    }
    const diffTime = Math.abs(end - start);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    return { days: diffDays, hours: diffHours };
}

/** Pre prijatých (Hired): čas od nahratia (dátum získania) do prijatia; inak od poslednej zmeny do teraz. */
function getTimeInProcessForCandidate(candidate) {
    if (candidate.status === 'Hired') {
        const start = candidate.date_obtained || candidate.created_at;
        const end = candidate.hire_date || candidate.last_updated;
        if (start && end) {
            const range = diffDaysHoursBetween(start, end);
            if (range) return range;
        }
    }
    return calculateTimeInProcess(candidate.last_updated);
}

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
    const { requests } = result;

    // Sort requests: Pending first, then Approved/Open, then Paused, then Filled, then Rejected
    const sortedRequests = [...requests].sort((a, b) => {
        const statusOrder = { 'Pending': 1, 'Approved': 2, 'Paused': 3, 'Filled': 4, 'Rejected': 5 };
        const aOrder = statusOrder[a.status] || 6;
        const bOrder = statusOrder[b.status] || 6;
        
        if (aOrder !== bOrder) {
            return aOrder - bOrder;
        }
        
        // If same status, sort by ID descending (newest first)
        return b.id - a.id;
    });
    currentRequestsCache = sortedRequests;

    const counts = {
        pending: sortedRequests.filter(r => r.status === 'Pending').length,
        approved: sortedRequests.filter(r => r.status === 'Approved').length,
        paused: sortedRequests.filter(r => r.status === 'Paused').length,
        filled: sortedRequests.filter(r => r.status === 'Filled').length,
        rejected: sortedRequests.filter(r => r.status === 'Rejected').length
    };

    let html = `
        <h2 data-translate="Recruiting Requests">Recruiting Requests</h2>
        <div style="display: flex; gap: 10px; margin-bottom: 20px;">
        <button onclick="showNewRequest()" class="btn btn-primary" data-translate="Create New Request">Create New Request</button>
            <button onclick="showExportModal()" class="btn btn-secondary" data-translate="Download Excel">Download Excel</button>
        </div>
        <div class="requests-summary">
            <div class="summary-card pending summary-card--clickable" data-section="pending" onclick="setRequestSection('pending')">
                <h3>${counts.pending}</h3>
                <p data-translate="Pending">Pending</p>
            </div>
            <div class="summary-card approved summary-card--clickable" data-section="approved" onclick="setRequestSection('approved')">
                <h3>${counts.approved}</h3>
                <p data-translate="Approved">Approved</p>
            </div>
            <div class="summary-card paused summary-card--clickable" data-section="paused" onclick="setRequestSection('paused')">
                <h3>${counts.paused}</h3>
                <p data-translate="Paused">Paused</p>
            </div>
            <div class="summary-card filled summary-card--clickable" data-section="filled" onclick="setRequestSection('filled')">
                <h3>${counts.filled}</h3>
                <p data-translate="Filled">Filled</p>
            </div>
            <div class="summary-card rejected summary-card--clickable" data-section="rejected" onclick="setRequestSection('rejected')">
                <h3>${counts.rejected}</h3>
                <p data-translate="Rejected">Rejected</p>
            </div>
        </div>
        <div id="requests-container" class="requests-table-scroll"></div>
    `;

    app.innerHTML = html;

    // Add fade-in animation
    app.classList.add('fade-in');

    // Keep selected section valid and render the active one
    const allowedSections = ['all', 'pending', 'approved', 'paused', 'filled', 'rejected'];
    if (!allowedSections.includes(currentRequestsSection)) {
        currentRequestsSection = 'all';
    }
    renderCurrentRequestSection();
    updateRequestSummaryCards();
    window.uiManager.translatePage();
}

function getRequestsForSection(requests, section) {
    switch (section) {
        case 'pending':
            return requests.filter(r => r.status === 'Pending');
        case 'approved':
            return requests.filter(r => r.status === 'Approved');
        case 'paused':
            return requests.filter(r => r.status === 'Paused');
        case 'filled':
            return requests.filter(r => r.status === 'Filled');
        case 'rejected':
            return requests.filter(r => r.status === 'Rejected');
        case 'all':
        default:
            return requests;
    }
}

function renderCurrentRequestSection() {
    const container = document.getElementById('requests-container');
    if (!container) return;

    const sectionRequests = getRequestsForSection(currentRequestsCache, currentRequestsSection);
    container.innerHTML = '';

    if (sectionRequests.length === 0) {
        container.innerHTML = `<div class="requests-empty-state" data-translate="No requests found in this section.">No requests found in this section.</div>`;
        window.uiManager.translatePage();
        return;
    }

    const table = createRequestsTable(sectionRequests);
    container.appendChild(table);
    table.classList.add('slide-in');
}

function setRequestSection(section) {
    // Click on active card toggles back to "all"
    currentRequestsSection = currentRequestsSection === section ? 'all' : section;
    renderCurrentRequestSection();
    updateRequestSummaryCards();
}

function updateRequestSummaryCards() {
    document.querySelectorAll('.requests-summary .summary-card--clickable').forEach(card => {
        const cardSection = card.dataset.section;
        card.classList.toggle('active', currentRequestsSection === cardSection);
    });
}

function createRequestsTable(requests) {
    const table = document.createElement('table');
    table.className = 'requests-table';
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    // Create header row
    const headerRow = document.createElement('tr');
    ['Position', 'Department', 'Description', 'Headcount', 'Type', 'Replaced person', 'Category', 'Status', 'Visible to agencies', 'Days Old', 'ID', 'Actions'].forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = window.uiManager.translate(headerText);
        if (headerText === 'Days Old') {
            th.setAttribute('title', window.uiManager.translate('Request days column hint'));
        }
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    /**
     * Pending: dni od podania. Schválené: dni od schválenia. Obsadené: dni schválenie → uzavretie.
     */
    function getRequestDaysMetric(request) {
        const MS_DAY = 1000 * 60 * 60 * 24;
        const floorDaysBetween = (a, b) => Math.floor(Math.abs(b - a) / MS_DAY);

        if (!request.created_at) {
            return { days: 'N/A', highlight: false };
        }

        const created = new Date(request.created_at).getTime();
        const now = Date.now();

        if (request.status === 'Filled') {
            const start = request.approved_at
                ? new Date(request.approved_at).getTime()
                : created;
            const end = request.filled_at ? new Date(request.filled_at).getTime() : null;
            if (end == null || Number.isNaN(end) || Number.isNaN(start)) {
                return { days: 'N/A', highlight: false };
            }
            return { days: floorDaysBetween(start, end), highlight: false };
        }

        if (request.status === 'Approved') {
            const start = request.approved_at
                ? new Date(request.approved_at).getTime()
                : created;
            return { days: floorDaysBetween(start, now), highlight: true };
        }

        // Pending, Rejected, …
        return { days: floorDaysBetween(created, now), highlight: true };
    }

    // Create data rows
    requests.forEach(request => {
        const row = document.createElement('tr');
        row.className = `request-row status-${request.status.toLowerCase()}`;
        
        const daysMetric = getRequestDaysMetric(request);
        const daysOld = daysMetric.days;
        const daysOldDisplay = daysOld === 'N/A'
            ? '—'
            : `${daysOld} ${daysOld === 1 ? window.uiManager.translate('Day') : window.uiManager.translate('Days')}`;
        
        // Replaced person: show name only when type is replacement
        const replacedPersonDisplay = (request.position_type === 'replacement' && request.replacement_name)
            ? request.replacement_name
            : '—';

        // Prepare cell data
        const cellData = [
            request.position || '',
            request.department || '',
            request.description ? request.description.substring(0, 50) + '...' : '',
            request.headcount || '',
            request.position_type || '',
            replacedPersonDisplay,
            request.position_category || '',
            createStatusBadge(request.status),
            createAgencyVisibilityCell(request),
            daysOldDisplay,
            request.id ? `#${request.id}` : '',
            createRequestActionButtons(request)
        ];
        
        // Add cells
        cellData.forEach((cellContent, index) => {
            const td = document.createElement('td');
            if (index === 2) {
                td.classList.add('requests-table__cell--desc');
                if (request.description) {
                    td.title = request.description;
                }
            }
            if (index === 11) {
                td.classList.add('requests-table__cell--actions');
            }
            if (typeof cellContent === 'string' && cellContent.includes('<')) {
                td.innerHTML = cellContent;
            } else {
                td.textContent = cellContent;
            }
            
            // Stĺpec dní (index 9): upozornenie len pre čakajúce / otvorené schválené
            if (index === 9 && daysMetric.highlight && typeof daysOld === 'number' && daysOld > 3) {
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
    const statusLabel = window.uiManager.translate(status);
    return `<span class="${badgeClass}">${statusLabel}</span>`;
}

/** Schválené pozície: recruiter prepínač; GM/Manager len informácia */
function createAgencyVisibilityCell(request) {
    const userInfo = window.authManager.getUserInfo();
    if (request.status !== 'Approved') {
        return '—';
    }
    const vis = request.visible_to_agencies !== false;
    if (userInfo.role === 'recruiter') {
        const label = window.uiManager.translate('Visible to agencies');
        return `<label class="agency-vis-toggle"><input type="checkbox" ${vis ? 'checked' : ''} title="${label}" aria-label="${label}" onchange="toggleRequestAgencyVisibility(${request.id}, this.checked)"></label>`;
    }
    if (userInfo.role === 'gm') {
        return vis ? window.uiManager.translate('Yes') : window.uiManager.translate('No');
    }
    return vis ? '✓' : '—';
}

async function toggleRequestAgencyVisibility(requestId, visible) {
    try {
        await window.requestsManager.setRequestVisibleToAgencies(requestId, visible);
        window.utils.showMessage(window.uiManager.translate('Agency visibility updated'), 'success');
        await showRequests();
    } catch (error) {
        window.utils.showMessage(error.message || String(error), 'error');
        await showRequests();
    }
}

async function toggleRequestAgencyVisibilityFromDetails(requestId, visible) {
    try {
        await window.requestsManager.setRequestVisibleToAgencies(requestId, visible);
        window.utils.showMessage(window.uiManager.translate('Agency visibility updated'), 'success');
        await showRequestDetails(requestId);
    } catch (error) {
        window.utils.showMessage(error.message || String(error), 'error');
        await showRequestDetails(requestId);
    }
}

function createRequestActionButtons(request) {
    let buttons = '';
    const userInfo = window.authManager.getUserInfo();
    const canManage = ['gm', 'recruiter', 'manager'].includes(userInfo.role);
    
    if ((userInfo.role === 'gm' || userInfo.role === 'recruiter') && request.status === 'Pending') {
        buttons = `
            <button onclick="approveRequest(${request.id})" class="btn btn-success" data-translate="Approve">Approve</button>
            <button onclick="rejectRequest(${request.id})" class="btn btn-danger" data-translate="Reject">Reject</button>
        `;
    }
    
    if (canManage && request.status === 'Approved') {
        buttons += `<button onclick="fillPosition(${request.id})" class="btn btn-primary" data-translate="Fill Position">Fill Position</button>`;
        buttons += `<button onclick="pauseRequest(${request.id})" class="btn btn-warning" data-translate="Pause">Pause</button>`;
    }

    if (canManage && request.status === 'Paused') {
        buttons += `<button onclick="resumeRequest(${request.id})" class="btn btn-success" data-translate="Resume">Resume</button>`;
    }

    if (canManage) {
        buttons += `<button onclick="deleteRequest(${request.id})" class="btn btn-danger" data-translate="Delete Request">Delete</button>`;
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
        <div id="gm-approval-container" class="requests-table-scroll"></div>
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

async function pauseRequest(id) {
    try {
        await window.requestsManager.pauseRequest(id);
        window.utils.showMessage('Request paused successfully!', 'success');
        showRequests();
    } catch (error) {
        window.utils.showMessage('Error pausing request: ' + error.message, 'error');
    }
}

async function resumeRequest(id) {
    try {
        await window.requestsManager.resumeRequest(id);
        window.utils.showMessage('Request resumed successfully!', 'success');
        showRequests();
    } catch (error) {
        window.utils.showMessage('Error resuming request: ' + error.message, 'error');
    }
}

async function deleteRequest(id) {
    const confirmed = confirm(window.uiManager.translate('Are you sure you want to delete this request?'));
    if (!confirmed) {
        return;
    }

    try {
        await window.requestsManager.deleteRequest(id);
        window.utils.showMessage('Request deleted successfully!', 'success');
        showRequests();
    } catch (error) {
        window.utils.showMessage('Error deleting request: ' + error.message, 'error');
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

        if (request.status === 'Approved') {
            const vis = request.visible_to_agencies !== false;
            if (userInfo.role === 'recruiter') {
                detailsHtml += `
                <p class="request-detail-agency-vis">
                    <strong data-translate="Visible to agencies">Visible to agencies</strong>:
                    <label class="agency-vis-toggle" style="margin-left:8px;">
                        <input type="checkbox" ${vis ? 'checked' : ''} onchange="toggleRequestAgencyVisibilityFromDetails(${request.id}, this.checked)">
                    </label>
                    <span style="display:block;font-size:0.9em;color:var(--text-secondary);margin-top:6px;" data-translate="Visible to agencies help"></span>
                </p>`;
            } else {
                detailsHtml += `<p><strong data-translate="Visible to agencies">Visible to agencies</strong>: ${vis ? window.uiManager.translate('Yes') : window.uiManager.translate('No')}</p>`;
            }
        }
        
        if (request.position_type === 'new' && request.new_position_reason) {
            detailsHtml += `<p><strong data-translate="Reason for New Position">Reason for New Position:</strong> ${request.new_position_reason}</p>`;
        } else if (request.position_type === 'replacement' && request.replacement_name) {
            detailsHtml += `<p><strong data-translate="Name of Person Being Replaced">Name of Person Being Replaced:</strong> ${request.replacement_name}</p>`;
        }
        
        if (request.created_at) {
            detailsHtml += `<p><strong data-translate="Created At">Created At:</strong> ${new Date(request.created_at).toLocaleString()}</p>`;
        }
        if (request.approved_at) {
            detailsHtml += `<p><strong data-translate="Approved at">Approved at:</strong> ${new Date(request.approved_at).toLocaleString()}</p>`;
        }
        if (request.filled_at) {
            detailsHtml += `<p><strong data-translate="Filled at">Filled at:</strong> ${new Date(request.filled_at).toLocaleString()}</p>`;
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
        
        if (['gm', 'recruiter', 'manager'].includes(userInfo.role) && request.status === 'Approved') {
            detailsHtml += `
                <button onclick="fillPosition(${request.id})" class="btn btn-primary" data-translate="Fill Position">Fill Position</button>
                <button onclick="pauseRequest(${request.id})" class="btn btn-warning" data-translate="Pause">Pause</button>
            `;
        }

        if (['gm', 'recruiter', 'manager'].includes(userInfo.role) && request.status === 'Paused') {
            detailsHtml += `
                <button onclick="resumeRequest(${request.id})" class="btn btn-success" data-translate="Resume">Resume</button>
            `;
        }

        if (['gm', 'recruiter', 'manager'].includes(userInfo.role)) {
            detailsHtml += `
                <button onclick="deleteRequest(${request.id})" class="btn btn-danger" data-translate="Delete Request">Delete</button>
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

    const currentUserInfo = window.authManager ? window.authManager.getUserInfo() : null;
    const currentUserRole = currentUserInfo?.role || userRole;
    const currentUserDepartment = currentUserInfo?.department || userDepartment;

    // Get department options based on user role
    let departmentOptions = '';
    if (currentUserRole === 'gm' || currentUserRole === 'recruiter') {
        departmentOptions = Object.keys(departmentPositions).map(dept =>
            `<option value="${dept}">${dept}</option>`
        ).join('');
    } else if (currentUserDepartment) {
        departmentOptions = `<option value="${currentUserDepartment}">${currentUserDepartment}</option>`;
    }

    const html = `
        <div class="card">
        <h2 data-translate="Create New Recruiting Request">Create New Recruiting Request</h2>
        <form id="new-request-form">
            <div class="form-group">
                    <label for="department" data-translate="Department">Oddelenie:</label>
                    <select id="department" name="department" required ${currentUserRole !== 'gm' && currentUserRole !== 'recruiter' ? 'disabled' : ''} onchange="updatePositionOptions()">
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
                        <label class="radio-label">
                        <input type="radio" id="interim-position" name="position-type" value="interim" required onchange="togglePositionTypeFields()">
                            <span data-translate="Interim">Interim</span>
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

    // Auto-load positions for managers (non-GM and non-recruiter users)
    if (currentUserRole !== 'gm' && currentUserRole !== 'recruiter') {
        // Set department value and load positions
        const departmentSelect = document.getElementById('department');
        if (departmentSelect && currentUserDepartment) {
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
        'Junior IT technician',
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
    
    // Check if user is GM or recruiter
    if (userRole === 'gm' || userRole === 'recruiter') {
        // GM and recruiter see all department positions
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
    } else if (positionType === 'replacement') {
        newPositionFields.classList.add('hidden');
        replacementFields.classList.remove('hidden');
    } else {
        newPositionFields.classList.add('hidden');
        replacementFields.classList.add('hidden');
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
    const userInfo = window.authManager.getUserInfo();
    if (userInfo && userInfo.role === 'agency') {
        showAgencyAddCandidate();
        return;
    }
    console.log('Redirecting to add candidate page');
    window.location.href = 'add-candidate.html';
}

/**
 * Formulár pre agentúru: výber schválenej pozície, meno, CV + assessment, zdroj z účtu.
 */
async function showAgencyAddCandidate() {
    const userInfo = window.authManager.getUserInfo();
    if (!userInfo || userInfo.role !== 'agency') {
        window.utils.showMessage('Táto stránka je len pre agentúry.', 'error');
        return;
    }
    if (!userInfo.source) {
        window.utils.showMessage('Váš účet nemá priradený zdroj agentúry. Kontaktujte administrátora.', 'error');
        return;
    }

    try {
        window.uiManager.showLoading();
        const res = await window.requestsManager.getRequests({
            status: 'Approved',
            page: 1,
            pageSize: 500
        });
        window.uiManager.hideLoading();

        const requests = res.requests || [];
        const app = document.getElementById('app');
        const noPos = window.uiManager.translate('No open positions');
        const selPos = window.uiManager.translate('Select open position');
        const requestOptions = requests.length === 0
            ? `<option value="">${noPos}</option>`
            : `<option value="">${selPos}</option>${requests.map(r =>
                `<option value="${r.id}">${(r.department || '')} — ${(r.position || '')} (#${r.id})</option>`
            ).join('')}`;

        app.innerHTML = `
            <div class="candidates-layout">
                <section class="candidates-hero">
                    <div class="candidates-hero-text">
                        <h2 data-translate="Add New Candidate">Add New Candidate</h2>
                        <p class="candidates-subtitle" data-translate="Submit for review">Submit for recruiter review</p>
                    </div>
                </section>
                <div class="card" style="max-width: 640px; margin: 0 auto; padding: 1.5rem;">
                    <form id="agency-add-candidate-form">
                        <div class="form-group" style="margin-bottom: 1rem;">
                            <label for="agency-open-position" data-translate="Select open position">Open position</label>
                            <select id="agency-open-position" class="filter-select" style="width:100%" required>${requestOptions}</select>
                        </div>
                        <div class="form-group" style="margin-bottom: 1rem;">
                            <label data-translate="Full Name">Full name</label>
                            <input type="text" id="agency-candidate-name" class="filter-select" style="width:100%" required maxlength="200">
                        </div>
                        <div class="form-group" style="margin-bottom: 1rem;">
                            <label data-translate="Agency source">Agency source</label>
                            <input type="text" id="agency-candidate-source-display" readonly style="width:100%; padding:8px; background:#f5f5f5; border:1px solid #ddd; border-radius:6px;" value="">
                        </div>
                        <div class="form-group" style="margin-bottom: 1rem;">
                            <label data-translate="Upload CV">Upload CV</label>
                            <input type="file" id="agency-candidate-cv" accept=".pdf,.doc,.docx" required>
                        </div>
                        <div class="form-group" style="margin-bottom: 1rem;">
                            <label data-translate="Upload Assessment Form">Upload Assessment Form</label>
                            <input type="file" id="agency-candidate-assessment" accept=".pdf,.doc,.docx" required>
                        </div>
                        <div style="display:flex; gap:12px; flex-wrap:wrap; margin-top:1.25rem;">
                            <button type="submit" class="btn btn-primary" data-translate="Submit for review" ${requests.length === 0 ? 'disabled' : ''}>Submit</button>
                            <button type="button" class="btn btn-secondary" onclick="showCandidates()" data-translate="Back">Back</button>
                        </div>
                    </form>
                </div>
            </div>`;

        document.getElementById('agency-candidate-source-display').value = userInfo.source;

        document.getElementById('agency-add-candidate-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            const reqId = parseInt(document.getElementById('agency-open-position').value, 10);
            if (!reqId || Number.isNaN(reqId)) {
                window.utils.showMessage(window.uiManager.translate('Select open position'), 'error');
                return;
            }
            const name = document.getElementById('agency-candidate-name').value.trim();
            const cvFile = document.getElementById('agency-candidate-cv').files[0];
            const assessmentFile = document.getElementById('agency-candidate-assessment').files[0];
            try {
                window.uiManager.showLoading();
                const result = await window.candidatesManager.addCandidateAsAgency({
                    name,
                    recruiting_request_id: reqId,
                    cvFile,
                    assessmentFile
                });
                window.uiManager.hideLoading();
                if (result.success) {
                    window.utils.showMessage(window.uiManager.translate('Agency candidate submitted'), 'success');
                    await showCandidates();
                }
            } catch (err) {
                window.uiManager.hideLoading();
                window.utils.showMessage(err.message || String(err), 'error');
            }
        });

        window.uiManager.translatePage();
    } catch (error) {
        window.uiManager.hideLoading();
        console.error(error);
        window.utils.showMessage(error.message || String(error), 'error');
    }
}

async function confirmAgencyCandidate(candidateId) {
    if (!confirm(window.uiManager.translate('Confirm this agency submission?'))) return;
    try {
        window.uiManager.showLoading();
        await window.candidatesManager.confirmAgencySubmission(candidateId);
        window.uiManager.hideLoading();
        window.utils.showMessage(window.uiManager.translate('Agency submission confirmed'), 'success');
        await showCandidates();
        updateNavigationIndicators();
    } catch (e) {
        window.uiManager.hideLoading();
        window.utils.showMessage(e.message || String(e), 'error');
    }
}

async function rejectAgencyCandidate(candidateId) {
    const reason = prompt(window.uiManager.translate('Rejection reason (optional)'));
    if (reason === null) return;
    try {
        window.uiManager.showLoading();
        await window.candidatesManager.rejectAgencySubmission(candidateId, reason || null);
        window.uiManager.hideLoading();
        window.utils.showMessage(window.uiManager.translate('Agency submission rejected'), 'success');
        await showCandidates();
        updateNavigationIndicators();
    } catch (e) {
        window.uiManager.hideLoading();
        window.utils.showMessage(e.message || String(e), 'error');
    }
}

async function showAgencySubmissionsReview(e) {
    if (e) e.preventDefault();
    clearFilterState();
    const allNavLinks = document.querySelectorAll('nav a');
    allNavLinks.forEach(link => link.classList.remove('active'));
    const nc = document.getElementById('nav-candidates');
    if (nc) nc.classList.add('active');
    await showCandidates();
    requestAnimationFrame(() => {
        document.getElementById('agency-submissions-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
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
        'Engineering': ['Senior Process Engineer 1', 'Senior Process Engineer IM', 'Process Engineer 1', 'Senior IM Technologist Coordinator', 'Process Engineer IM', 'Senior Technologist IM', 'Foreman Technologist IM', 'Technologist IM', 'Mold Changer', 'Materialist', 'Senior Process Engineer 2', 'Process Engineer 2', 'Senior Technologist Coordinator', 'Tooling Engineer', 'Product Engineer', 'Change BOM Coordinator', 'Programe Engineer', 'Quality Program Engineer', 'Launch Coordinator', 'Data Analyst', 'Manufacturing Engineer'],
        'Finance': ['Programme Controller', 'Finance Analyst', 'Chief Accountant', 'Financial Specialist Senior', 'Supplier Accountant', 'Services Accountant', 'Financial Assistant', 'Financial Clerk', 'Revenue Accountant', 'Financial Specialist', 'Treasury Analyst', 'Senior Treasury & Financial Analyst'],
        'HR': ['Payroll accountant', 'Senior HR Generalist', 'Recruiter', 'HR Generalist 1', 'Junior Payroll', 'Training Center Trainer', 'HSE Specialist', 'Environment Officer', 'Executive assistant'],
        'IT': ['Junior IT technician', 'IT Analyst / Administrator', 'Senior IT Specialist'],
        'Logistics': ['Warehouse/Logistics Leader', 'Senior Logistics Planner', 'Logistics Disponent', 'Logistics Planner', 'Packaging Disponent', 'Logistics Referent', 'Inventory Counter', 'Internal Logistics Coordinator', 'Logistics Shift leader', 'Expedient', 'Supervisor Inventory Control', 'Logistics Planner IM', 'Senior Demand Specialist', 'Logistics operator Expedient', 'Logistics operator receiving'],
        'Maintenance': ['Maintenance leader', 'Technician I', 'Technician II', 'Maintenance Shift Leader', 'Maintainer', 'Maintainer - mechanician', 'Maintainer - electrician', 'Energetic Coordinator', 'Robotist', 'Toolmaker', 'Maintenance Leader IM', 'Electrician IM', 'Mechanician IM', 'Maintainer - Toolmaker', 'Energetik/Facility Coordinator', 'Mechatronik', 'Toolmaker Coordinator and Maintenance Leader IM', 'Warehouse referent', 'Technologist 1'],
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
        // Cache currently viewed candidate for editing
        window.currentCandidateDetails = candidate;
        
        const app = document.getElementById('app');
        if (!app) return;

        const isAgency = (window.authManager.getUserInfo() || {}).role === 'agency';
        
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
                ${(window.authManager.getUserInfo() || {}).role !== 'agency' ? `
                <div class="detail-row">
                    <strong data-translate="Created At">Created At:</strong>
                    <span>${createdDate}</span>
                </div>
                <div class="detail-row">
                    <strong data-translate="Last Updated">Last Updated:</strong>
                    <span>${lastUpdated}</span>
                </div>
                ` : ''}
            </div>
        `;

        if (!isAgency) {
            detailsHtml += `
            <div class="documents-section" style="margin-top: 20px;">
                <h3 data-translate="Documents">Documents</h3>
                <div class="document-actions" style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 10px;">
        `;
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
        `;
        }

        detailsHtml += `
            <div class="action-buttons" style="margin-top: 20px;">
                ${!isAgency ? `<button onclick="showEditCandidateModal(${candidate.id})" class="btn btn-primary" data-translate="Edit Candidate">Edit Candidate</button>` : ''}
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
    if ((window.authManager.getUserInfo() || {}).role === 'agency') {
        window.utils.showMessage(
            window.uiManager.translate('Agencies cannot access candidate documents'),
            'error'
        );
        return;
    }
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

async function showEditCandidateModal(candidateId) {
    try {
        if ((window.authManager.getUserInfo() || {}).role === 'agency') {
            window.utils.showMessage(
                window.uiManager.translate('Agencies cannot edit candidates'),
                'error'
            );
            return;
        }
        // Prefer candidate data cached from showCandidateDetails to avoid extra loading state
        let candidate = window.currentCandidateDetails;
        if (!candidate || candidate.id !== candidateId) {
            candidate = await window.candidatesManager.getCandidateDetails(candidateId);
        }
        
        // Get all possible statuses
        const allStatuses = [
            'New',
            'In Process - First Round',
            'In Process - Second Round',
            'Hired - Contact Source',
            'Rejected - Inform Source',
            'Hired',
            'Rejected'
        ];
        
        // Create modal
        const modal = document.createElement('div');
        modal.id = 'edit-candidate-modal';
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
        
        // Get positions for current department
        const currentPositions = departmentPositions[candidate.department] || [];
        const dateObtainedValue = candidate.date_obtained ? new Date(candidate.date_obtained).toISOString().split('T')[0] : '';
        
        modal.innerHTML = `
            <div class="modal-content" style="background: white; padding: 30px; border-radius: 8px; max-width: 600px; width: 90%; max-height: 90vh; overflow-y: auto;">
                <h2 data-translate="Edit Candidate">Edit Candidate</h2>
                <form id="edit-candidate-form">
                    <input type="hidden" id="edit-candidate-id" value="${candidateId}">
                    
                    <div class="form-group" style="margin-bottom: 20px;">
                        <label for="edit-name" data-translate="Name">Name:</label>
                        <input type="text" id="edit-name" class="form-control" value="${(candidate.name || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;')}" required>
                    </div>
                    
                    <div class="form-group" style="margin-bottom: 20px;">
                        <label for="edit-department" data-translate="Department">Department:</label>
                        <select id="edit-department" class="form-control" required onchange="updateEditPositionOptions()">
                            ${Object.keys(departmentPositions).map(dept => 
                                `<option value="${dept}" ${candidate.department === dept ? 'selected' : ''}>${dept}</option>`
                            ).join('')}
                        </select>
                    </div>
                    
                    <div class="form-group" style="margin-bottom: 20px;">
                        <label for="edit-position" data-translate="Position">Position:</label>
                        <select id="edit-position" class="form-control" required>
                            ${currentPositions.map(pos => 
                                `<option value="${pos}" ${candidate.position === pos ? 'selected' : ''}>${pos}</option>`
                            ).join('')}
                        </select>
                    </div>
                    
                    <div class="form-group" style="margin-bottom: 20px;">
                        <label for="edit-source" data-translate="Source">Source:</label>
                        <select id="edit-source" class="form-control" required>
                            ${sourceOptions.map(src => 
                                `<option value="${src}" ${candidate.source === src ? 'selected' : ''}>${src}</option>`
                            ).join('')}
                        </select>
                    </div>
                    
                    <div class="form-group" style="margin-bottom: 20px;">
                        <label for="edit-date-obtained" data-translate="Date Obtained">Date Obtained:</label>
                        <input type="date" id="edit-date-obtained" class="form-control" value="${dateObtainedValue}" required>
                    </div>
                    
                    <div class="form-group" style="margin-bottom: 20px;">
                        <label for="edit-interviewer" data-translate="Interviewer">Interviewer:</label>
                        <input type="text" id="edit-interviewer" class="form-control" value="${(candidate.interviewer || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;')}" placeholder="">
                    </div>
                    
                    <div class="form-group" style="margin-bottom: 20px;">
                        <label for="edit-status" data-translate="Status">Status:</label>
                        <select id="edit-status" class="form-control" required>
                            ${allStatuses.map(status => 
                                `<option value="${status}" ${candidate.status === status ? 'selected' : ''}>${window.uiManager.translate(status)}</option>`
                            ).join('')}
                        </select>
                    </div>
                    
                    <div class="form-group" style="margin-bottom: 20px;">
                        <label for="edit-notes" data-translate="Notes">Notes:</label>
                        <textarea id="edit-notes" class="form-control" rows="4" style="width: 100%; resize: vertical;">${(candidate.notes || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</textarea>
                    </div>
                    
                    <div style="display: flex; gap: 10px; justify-content: flex-end; margin-top: 20px;">
                        <button type="button" onclick="closeEditCandidateModal()" class="btn btn-secondary" data-translate="Cancel">Cancel</button>
                        <button type="submit" class="btn btn-primary" data-translate="Save Changes">Save Changes</button>
                    </div>
                </form>
            </div>
        `;
        
        document.body.appendChild(modal);
        window.uiManager.translatePage();
        
        // Store current candidate data for position update
        window.currentEditCandidate = candidate;
        
        // Handle form submission
        document.getElementById('edit-candidate-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            await saveCandidateChanges(candidateId);
        });
    } catch (error) {
        console.error('Error loading candidate for edit:', error);
        window.utils.showMessage('Error loading candidate data: ' + error.message, 'error');
    }
}

function updateEditPositionOptions() {
    const departmentSelect = document.getElementById('edit-department');
    const positionSelect = document.getElementById('edit-position');
    
    if (!departmentSelect || !positionSelect) return;
    
    const selectedDepartment = departmentSelect.value;
    const positions = departmentPositions[selectedDepartment] || [];
    
    // Clear and populate position dropdown
    positionSelect.innerHTML = positions.map(pos => 
        `<option value="${pos}">${pos}</option>`
    ).join('');
    
    // If we have a current candidate and the position exists in new department, select it
    if (window.currentEditCandidate && positions.includes(window.currentEditCandidate.position)) {
        positionSelect.value = window.currentEditCandidate.position;
    } else if (positions.length > 0) {
        positionSelect.value = positions[0];
    }
}

function closeEditCandidateModal() {
    const modal = document.getElementById('edit-candidate-modal');
    if (modal) {
        modal.remove();
    }
    window.currentEditCandidate = null;
}

async function saveCandidateChanges(candidateId) {
    try {
        const name = document.getElementById('edit-name').value.trim();
        const department = document.getElementById('edit-department').value;
        const position = document.getElementById('edit-position').value;
        const source = document.getElementById('edit-source').value;
        const dateObtained = document.getElementById('edit-date-obtained').value;
        const interviewer = document.getElementById('edit-interviewer').value.trim();
        const status = document.getElementById('edit-status').value;
        const notes = document.getElementById('edit-notes').value.trim();
        
        if (!name || !department || !position || !source || !dateObtained) {
            window.utils.showMessage(window.uiManager.translate('Please fill in all required fields'), 'error');
            return;
        }
        
        window.uiManager.showLoading('Saving changes...');
        
        // Prepare update data from form
        const updateData = {
            name: name,
            department: department,
            position: position,
            source: source,
            date_obtained: dateObtained,
            interviewer: interviewer || null,
            status: status,
            notes: notes || null
        };
        
        // Update candidate
        await window.candidatesManager.updateCandidate(candidateId, updateData);
        
        window.uiManager.hideLoading();
        window.utils.showMessage('Candidate updated successfully!', 'success');
        
        // Close modal
        closeEditCandidateModal();
        
        // Refresh candidate details view
        await showCandidateDetails(candidateId);
        
        // Refresh candidates list if we're on that view
        const app = document.getElementById('app');
        if (app && app.querySelector('.candidates-view')) {
            showCandidates();
        }
    } catch (error) {
        console.error('Error saving candidate changes:', error);
        window.uiManager.hideLoading();
        window.utils.showMessage('Error saving changes: ' + error.message, 'error');
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

// Save filter state to sessionStorage
function saveFilterState() {
    const departmentFilter = document.getElementById('department-filter');
    const positionFilter = document.getElementById('position-filter');
    const sourceFilter = document.getElementById('source-filter');
    const statusFilter = document.getElementById('status-filter');
    
    if (!departmentFilter || !sourceFilter) return;
    
    const filterState = {
        department: departmentFilter.value || '',
        position: positionFilter.value || '',
        source: sourceFilter.value || '',
        status: statusFilter ? statusFilter.value || '' : ''
    };
    
    sessionStorage.setItem('candidateFilterState', JSON.stringify(filterState));
}

// Restore filter state from sessionStorage
function restoreFilterState() {
    const savedState = sessionStorage.getItem('candidateFilterState');
    if (!savedState) return;
    
    try {
        const filterState = JSON.parse(savedState);
        const departmentFilter = document.getElementById('department-filter');
        const positionFilter = document.getElementById('position-filter');
        const sourceFilter = document.getElementById('source-filter');
        const statusFilter = document.getElementById('status-filter');
        
        if (departmentFilter && filterState.department) {
            departmentFilter.value = filterState.department;
        }
        if (positionFilter && filterState.position) {
            positionFilter.value = filterState.position;
        }
        if (sourceFilter && filterState.source) {
            sourceFilter.value = filterState.source;
        }
        if (statusFilter && filterState.status) {
            statusFilter.value = filterState.status;
        }
        
        // Update position filter options based on department
        if (departmentFilter && departmentFilter.value) {
            updatePositionFilterForCandidates();
        }
    } catch (error) {
        console.error('Error restoring filter state:', error);
    }
}

// Clear saved filter state
function clearFilterState() {
    sessionStorage.removeItem('candidateFilterState');
}

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
    
    // Save filter state
    saveFilterState();
    
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
    
    // Clear saved filter state
    clearFilterState();
    
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
                candidate.status.includes('Rejected') ||
                candidate.status === 'Pending Recruiter Review'
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
    
    // Find or create badge element (should be sibling of nav link)
    const navLi = navElement.parentElement;
    let badge = navLi.querySelector('.nav-badge');
    if (!badge) {
        badge = document.createElement('span');
        badge.className = 'nav-badge';
        navLi.appendChild(badge);
    }
    
    // Update badge based on counts
    const totalCount = redCount + orangeCount;
    if (totalCount > 0) {
        badge.textContent = totalCount > 99 ? '99+' : totalCount;
        badge.style.display = 'inline-flex';
        badge.classList.remove('nav-badge--warning', 'nav-badge--critical');
        if (redCount > 0) {
            badge.classList.add('nav-badge--critical');
            badge.title = `${redCount} kandidátov bez zmeny viac ako 2 týždne`;
        } else {
            badge.classList.add('nav-badge--warning');
            badge.title = `${orangeCount} kandidátov bez zmeny viac ako týždeň`;
        }
    } else {
        badge.style.display = 'none';
        badge.classList.remove('nav-badge--warning', 'nav-badge--critical');
    }
}

// Export modal and functions
function showExportModal() {
    const modal = document.createElement('div');
    modal.id = 'export-modal';
    modal.className = 'modal';
    modal.style.display = 'block';
    
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 500px;">
            <div class="modal-header">
                <h2 data-translate="Export Options">Export Options</h2>
                <span class="close" onclick="closeExportModal()">&times;</span>
            </div>
            <div style="padding: 20px;">
                <p data-translate="Select what to export">Select what to export</p>
                <div style="margin: 20px 0;">
                    <label style="display: flex; align-items: center; margin: 15px 0; cursor: pointer;">
                        <input type="radio" name="export-type" value="approved" checked style="margin-right: 10px;">
                        <span data-translate="Only Approved">Only Approved</span>
                    </label>
                    <label style="display: flex; align-items: center; margin: 15px 0; cursor: pointer;">
                        <input type="radio" name="export-type" value="approved-pending" style="margin-right: 10px;">
                        <span data-translate="Approved and Pending">Approved and Pending</span>
                    </label>
                </div>
                <div style="display: flex; gap: 10px; justify-content: flex-end; margin-top: 20px;">
                    <button onclick="closeExportModal()" class="btn btn-secondary" data-translate="Cancel">Cancel</button>
                    <button onclick="exportToExcel()" class="btn btn-primary" data-translate="Export">Export</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    window.uiManager.translatePage();
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeExportModal();
        }
    });
}

function closeExportModal() {
    const modal = document.getElementById('export-modal');
    if (modal) {
        modal.remove();
    }
}

async function exportToExcel() {
    try {
        const exportType = document.querySelector('input[name="export-type"]:checked')?.value;
        if (!exportType) {
            window.utils.showMessage(window.uiManager.translate('Please select export type'), 'error');
            return;
        }
        
        // Show loading
        const exportBtn = document.querySelector('#export-modal button[onclick="exportToExcel()"]');
        if (exportBtn) {
            exportBtn.disabled = true;
            exportBtn.textContent = window.uiManager.translate('Exporting...');
        }
        
        // Determine status filter
        const statuses = exportType === 'approved' ? ['Approved'] : ['Approved', 'Pending'];
        
        // Fetch all requests with the selected statuses directly from Supabase
        const allRequests = [];
        
        // Get Supabase instance
        const supabase = window.authManager.supabase;
        if (!supabase) {
            throw new Error('Supabase client not initialized');
        }
        
        // Build query based on user permissions
        const userInfo = window.authManager.getUserInfo();
        let query = supabase.from('recruiting_requests').select('*');
        
        // Apply department filter based on user role
        if (userInfo.role !== 'gm' && userInfo.role !== 'recruiter') {
            if (userInfo.role === 'Manager') {
                query = query.eq('department', userInfo.department);
            }
        }
        
        // Apply status filter - use 'in' for multiple statuses
        if (statuses.length === 1) {
            query = query.eq('status', statuses[0]);
        } else {
            query = query.in('status', statuses);
        }
        
        // Order by created_at descending
        query = query.order('created_at', { ascending: false });
        
        // Execute query
        const { data: requests, error } = await query;
        
        if (error) {
            throw error;
        }
        
        if (requests) {
            allRequests.push(...requests);
        }
        
        if (allRequests.length === 0) {
            window.utils.showMessage(window.uiManager.translate('No data to export'), 'info');
            closeExportModal();
            return;
        }
        
        // Prepare data for Excel
        const excelData = allRequests.map(request => ({
            'Position': request.position || '',
            'Department': request.department || '',
            'Description': request.description || '',
            'Headcount': request.headcount || '',
            'Type': request.position_type || '',
            'Category': request.position_category || '',
            'Status': request.status || '',
            'Created At': request.created_at ? new Date(request.created_at).toLocaleDateString('sk-SK', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit'
            }) : ''
        }));
        
        // Create workbook
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.json_to_sheet(excelData);
        
        // Set column widths
        const colWidths = [
            { wch: 25 }, // Position
            { wch: 20 }, // Department
            { wch: 50 }, // Description
            { wch: 10 }, // Headcount
            { wch: 15 }, // Type
            { wch: 15 }, // Category
            { wch: 12 }, // Status
            { wch: 20 }  // Created At
        ];
        ws['!cols'] = colWidths;
        
        // Add worksheet to workbook
        XLSX.utils.book_append_sheet(wb, ws, 'Recruiting Requests');
        
        // Generate filename
        const dateStr = new Date().toISOString().split('T')[0];
        const filename = `recruiting_requests_${exportType}_${dateStr}.xlsx`;
        
        // Write file
        XLSX.writeFile(wb, filename);
        
        // Show success message
        window.utils.showMessage(window.uiManager.translate('Export completed successfully'), 'success');
        closeExportModal();
        
    } catch (error) {
        console.error('Error exporting to Excel:', error);
        window.utils.showMessage(window.uiManager.translate('Error exporting data') + ': ' + error.message, 'error');
        
        // Re-enable button
        const exportBtn = document.querySelector('#export-modal button[onclick="exportToExcel()"]');
        if (exportBtn) {
            exportBtn.disabled = false;
            exportBtn.textContent = window.uiManager.translate('Export');
        }
    }
}

// Navigation event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Setup navigation
    const navDashboard = document.getElementById('nav-dashboard');
    const navCandidates = document.getElementById('nav-candidates');
    const navRequests = document.getElementById('nav-requests');
    const navGMApproval = document.getElementById('nav-gm-approval');
    const navManageSlots = document.getElementById('nav-manage-slots');
    const navAgencyView = document.getElementById('nav-agency-view');
    const navLogout = document.getElementById('nav-logout');
    const navStatistics = document.getElementById('nav-statistics');
    const navReports = document.getElementById('nav-reports');

    // Helper function to set active nav
    function setActiveNav(activeId) {
        const allNavLinks = document.querySelectorAll('nav a');
        allNavLinks.forEach(link => link.classList.remove('active'));
        const activeLink = document.getElementById(activeId);
        if (activeLink) activeLink.classList.add('active');
    }

    if (navDashboard) navDashboard.addEventListener('click', (e) => { e.preventDefault(); setActiveNav('nav-dashboard'); showDashboard(); });
    if (navCandidates) navCandidates.addEventListener('click', (e) => { e.preventDefault(); setActiveNav('nav-candidates'); showCandidates(); });
    if (navRequests) navRequests.addEventListener('click', (e) => { e.preventDefault(); setActiveNav('nav-requests'); showRequests(); });
    if (navGMApproval) navGMApproval.addEventListener('click', (e) => { e.preventDefault(); setActiveNav('nav-gm-approval'); showGMApproval(); });
    if (navManageSlots) navManageSlots.addEventListener('click', (e) => { e.preventDefault(); setActiveNav('nav-manage-slots'); showManageSlots(); });
    if (navAgencyView) navAgencyView.addEventListener('click', (e) => { e.preventDefault(); setActiveNav('nav-agency-view'); showAgencyView(); });
    const navAgencySubmissions = document.getElementById('nav-agency-submissions');
    if (navAgencySubmissions) {
        navAgencySubmissions.addEventListener('click', (e) => {
            showAgencySubmissionsReview(e);
        });
    }
    if (navStatistics) navStatistics.addEventListener('click', (e) => { e.preventDefault(); setActiveNav('nav-statistics'); showStatistics(); });
    if (navReports) navReports.addEventListener('click', (e) => {
        e.preventDefault();
        setActiveNav('nav-reports');
        // TODO: Implement reports functionality
        window.utils.showMessage('Reports functionality coming soon!', 'info');
    });
    if (navLogout) navLogout.addEventListener('click', async () => {
        try {
            await window.authManager.logout();
            window.uiManager.showLogin();
            setLoginPane('signin');
            setupLoginForm();
    } catch (error) {
            window.utils.showMessage('Logout failed: ' + error.message, 'error');
        }
    });

    // Initialize the application
    initializeModules();
});

// ============================================
// INTERVIEW SLOTS MANAGEMENT (RECRUITER)
// ============================================

/**
 * Show interface for recruiter to manage interview slots
 */
async function showManageSlots() {
    try {
        window.uiManager.showLoading('Loading approved requests...');
        
        // Get approved requests
        const result = await window.requestsManager.getRequests({
            status: 'Approved',
            page: 1,
            pageSize: 100
        });

        window.uiManager.hideLoading();

        const app = document.getElementById('app');
        app.innerHTML = `
            <div class="manage-slots-header">
                <h2 data-translate="Manage Interview Slots">Manage Interview Slots</h2>
                <p class="manage-slots-subtitle" data-translate="Create and manage interview time slots for approved positions">Create and manage interview time slots for approved positions</p>
            </div>
            <div class="slots-management">
                <div class="requests-list">
                    <h3 class="section-title" data-translate="Approved Positions">Approved Positions</h3>
                    <div id="approved-requests-list" class="approved-requests-grid"></div>
                </div>
            </div>
        `;

        // Get slot counts for each request
        const slotCounts = {};
        for (const request of result.requests) {
            try {
                const firstRoundSlots = await window.interviewSlotsManager.getSlotsForRequest(request.id, 'first');
                const secondRoundSlots = await window.interviewSlotsManager.getSlotsForRequest(request.id, 'second');
                const firstAvailable = firstRoundSlots.filter(s => !s.candidate_id).length;
                const secondAvailable = secondRoundSlots.filter(s => !s.candidate_id).length;
                slotCounts[request.id] = {
                    first: { total: firstRoundSlots.length, available: firstAvailable },
                    second: { total: secondRoundSlots.length, available: secondAvailable }
                };
            } catch (error) {
                console.warn(`Error loading slots for request ${request.id}:`, error);
                slotCounts[request.id] = { first: { total: 0, available: 0 }, second: { total: 0, available: 0 } };
            }
        }

        // Render approved requests
        const container = document.getElementById('approved-requests-list');
        if (result.requests.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <div class="empty-icon">📅</div>
                    <h3 data-translate="No approved requests">No approved requests</h3>
                    <p data-translate="No approved requests available">No approved requests available</p>
                </div>
            `;
        } else {
            result.requests.forEach(request => {
                const slots = slotCounts[request.id] || { first: { total: 0, available: 0 }, second: { total: 0, available: 0 } };
                
                const requestCard = document.createElement('div');
                requestCard.className = 'manage-slots-card';
                requestCard.innerHTML = `
                    <div class="slots-card-header">
                        <div class="slots-card-title-group">
                            <h4 class="slots-card-title">${request.position}</h4>
                            <span class="slots-card-department">${request.department}</span>
                        </div>
                    </div>
                    <div class="slots-card-stats">
                        <div class="slot-stat-item">
                            <span class="stat-icon">1️⃣</span>
                            <div class="stat-info">
                                <span class="stat-label" data-translate="First Round">First Round</span>
                                <span class="stat-value">${slots.first.total} ${slots.first.total === 1 ? window.uiManager.translate('slot') : window.uiManager.translate('slots')}</span>
                                <span class="stat-available">${slots.first.available} ${window.uiManager.translate('available')}</span>
                            </div>
                        </div>
                        <div class="slot-stat-item">
                            <span class="stat-icon">2️⃣</span>
                            <div class="stat-info">
                                <span class="stat-label" data-translate="Second Round">Second Round</span>
                                <span class="stat-value">${slots.second.total} ${slots.second.total === 1 ? window.uiManager.translate('slot') : window.uiManager.translate('slots')}</span>
                                <span class="stat-available">${slots.second.available} ${window.uiManager.translate('available')}</span>
                            </div>
                        </div>
                    </div>
                    <div class="slots-card-actions">
                        <button onclick="showAddSlotsModal(${request.id}, 'first')" class="btn btn-primary btn-slot-action" title="${window.uiManager.translate('Add First Round Slots') || 'Add First Round Slots'}">
                            <span class="btn-icon">➕</span>
                            <span class="btn-text">1</span>
                        </button>
                        <button onclick="showAddSlotsModal(${request.id}, 'second')" class="btn btn-primary btn-slot-action" title="${window.uiManager.translate('Add Second Round Slots') || 'Add Second Round Slots'}">
                            <span class="btn-icon">➕</span>
                            <span class="btn-text">2</span>
                        </button>
                        <button onclick="showSlotsForRequest(${request.id})" class="btn btn-secondary btn-slot-action" title="${window.uiManager.translate('View Slots') || 'View Slots'}">
                            <span class="btn-icon">👁️</span>
                        </button>
                    </div>
                `;
                container.appendChild(requestCard);
            });
        }

        window.uiManager.translatePage();
    } catch (error) {
        console.error('Error loading slots management:', error);
        window.uiManager.hideLoading();
        window.utils.showMessage('Error loading slots management: ' + error.message, 'error');
    }
}

/**
 * Show modal to add interview slots
 */
async function showAddSlotsModal(requestId, round) {
    const roundText = round === 'first' ? window.uiManager.translate('First Round') : window.uiManager.translate('Second Round');
    
    // Get request details for header
    let request;
    try {
        request = await window.requestsManager.getRequestById(requestId);
    } catch (error) {
        console.error('Error loading request:', error);
        request = { position: '', department: '' };
    }
    
    const modal = document.createElement('div');
    modal.id = 'add-slots-modal';
    modal.className = 'modal add-slots-modal';
    
    modal.innerHTML = `
        <div class="add-slots-modal-content">
            <div class="add-slots-modal-header">
                <div class="modal-header-info">
                    <h2 class="modal-title" data-translate="Add Interview Slots">Add Interview Slots</h2>
                    <p class="modal-subtitle">${roundText} • ${request.position} - ${request.department}</p>
                    <p class="modal-hint" data-translate="Time slots are set in 15-minute intervals, each slot lasts 30 minutes">Time slots are set in 15-minute intervals (e.g., 10:00, 10:15, 10:30), each slot lasts 30 minutes</p>
                </div>
                <button onclick="closeAddSlotsModal()" class="modal-close-btn" aria-label="Close">&times;</button>
            </div>
            <form id="add-slots-form" class="add-slots-form">
                <input type="hidden" id="slots-request-id" value="${requestId}">
                <input type="hidden" id="slots-round" value="${round}">
                <div class="slots-form-content">
                    <div id="slots-container" class="slots-container"></div>
                    <button type="button" onclick="addSlotRow()" class="btn btn-secondary btn-add-slot" data-translate="Add Another Slot">
                        <span class="btn-icon">➕</span>
                        <span data-translate="Add Another Slot">Add Another Slot</span>
                    </button>
                </div>
                <div class="slots-form-actions">
                    <button type="button" onclick="closeAddSlotsModal()" class="btn btn-secondary" data-translate="Cancel">Cancel</button>
                    <button type="submit" class="btn btn-primary" data-translate="Save Slots">
                        <span data-translate="Save Slots">Save Slots</span>
                    </button>
                </div>
            </form>
        </div>
    `;
    
    document.body.appendChild(modal);
    window.uiManager.translatePage();
    
    // Add first slot row
    addSlotRow();
    
    // Handle form submission
    document.getElementById('add-slots-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        await saveSlots();
    });
}

let slotRowCount = 0;

/**
 * Round time to nearest 15-minute interval
 * @param {string} timeString - Time in HH:MM format
 * @returns {string} Rounded time in HH:MM format
 */
function roundTo15Minutes(timeString) {
    if (!timeString) return '';
    
    const [hours, minutes] = timeString.split(':').map(Number);
    const roundedMinutes = Math.round(minutes / 15) * 15;
    
    if (roundedMinutes === 60) {
        return `${String(hours + 1).padStart(2, '0')}:00`;
    }
    
    return `${String(hours).padStart(2, '0')}:${String(roundedMinutes).padStart(2, '0')}`;
}

/**
 * Generate time options in 15-minute intervals
 * @returns {string[]} Array of HH:MM strings (00:00..23:45)
 */
function get15MinuteTimeOptions() {
    const options = [];
    for (let hour = 0; hour < 24; hour++) {
        for (let minute = 0; minute < 60; minute += 15) {
            options.push(`${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`);
        }
    }
    return options;
}

/**
 * Add minutes to a HH:MM time string
 * @param {string} timeString
 * @param {number} minutesToAdd
 * @returns {string}
 */
function addMinutesToTime(timeString, minutesToAdd) {
    const [h, m] = timeString.split(':').map(Number);
    const total = h * 60 + m + minutesToAdd;
    const newH = Math.floor(total / 60);
    const newM = total % 60;
    return `${String(newH).padStart(2, '0')}:${String(newM).padStart(2, '0')}`;
}

function addSlotRow() {
    const container = document.getElementById('slots-container');
    const row = document.createElement('div');
    row.className = 'slot-row';
    row.id = `slot-row-${slotRowCount}`;
    
    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    
    const dateInput = document.createElement('input');
    dateInput.type = 'date';
    dateInput.id = `slot-date-${slotRowCount}`;
    dateInput.className = 'form-control slot-date-input';
    dateInput.required = true;
    dateInput.min = today;
    
    const timeOptions = get15MinuteTimeOptions();

    // Duration (default 30, allow 60+)
    const durationSelect = document.createElement('select');
    durationSelect.id = `slot-duration-${slotRowCount}`;
    durationSelect.className = 'form-control slot-time-input';
    durationSelect.required = true;
    durationSelect.innerHTML = `
        <option value="30" selected>30 min</option>
        <option value="60">60 min</option>
        <option value="90">90 min</option>
    `;
    
    const timeStartSelect = document.createElement('select');
    timeStartSelect.id = `slot-time-start-${slotRowCount}`;
    timeStartSelect.className = 'form-control slot-time-input';
    timeStartSelect.required = true;
    timeStartSelect.innerHTML = `<option value="" disabled selected>${window.uiManager.translate('Select') || 'Select'}</option>` +
        timeOptions.map(t => `<option value="${t}">${t}</option>`).join('');
    
    const timeEndSelect = document.createElement('select');
    timeEndSelect.id = `slot-time-end-${slotRowCount}`;
    timeEndSelect.className = 'form-control slot-time-input';
    timeEndSelect.required = true;
    timeEndSelect.disabled = true; // auto-set based on start time (30 min slots)
    timeEndSelect.innerHTML = `<option value="" disabled selected>${window.uiManager.translate('Select') || 'Select'}</option>` +
        timeOptions.map(t => `<option value="${t}">${t}</option>`).join('');
    
    const updateEndTime = () => {
        const startVal = timeStartSelect.value;
        const durationVal = parseInt(durationSelect.value, 10);
        
        if (!startVal || !durationVal || isNaN(durationVal)) {
            timeEndSelect.value = '';
            return;
        }

        // Round start time to 15 minutes if needed
        const roundedStart = roundTo15Minutes(startVal);
        if (roundedStart !== startVal) {
            timeStartSelect.value = roundedStart;
        }

        // Calculate end time
        const end = addMinutesToTime(roundedStart, durationVal);
        
        // If end goes beyond 23:59, keep end empty (invalid for same-day slots)
        if (end.startsWith('24:') || end.startsWith('25:')) {
            timeEndSelect.value = '';
            timeEndSelect.disabled = true;
            return;
        }
        
        // Round end time to 15 minutes and set it
        const roundedEnd = roundTo15Minutes(end);
        timeEndSelect.disabled = false;
        timeEndSelect.value = roundedEnd;
        // Keep disabled (read-only feel) but ensure it renders the selected value
        timeEndSelect.disabled = true;
    };

    // Auto-set end time based on start + duration
    timeStartSelect.addEventListener('change', updateEndTime);
    durationSelect.addEventListener('change', updateEndTime);
    
    // Also trigger on input for better responsiveness
    timeStartSelect.addEventListener('input', updateEndTime);
    durationSelect.addEventListener('input', updateEndTime);
    
    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.className = 'btn btn-danger btn-remove-slot';
    removeBtn.innerHTML = '<span class="remove-icon">🗑️</span>';
    removeBtn.title = window.uiManager.translate('Remove Slot') || 'Remove Slot';
    removeBtn.onclick = () => {
        row.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => row.remove(), 300);
    };
    
    // Create label elements
    const dateLabel = document.createElement('label');
    dateLabel.className = 'slot-label';
    dateLabel.textContent = window.uiManager.translate('Date') || 'Date';
    dateLabel.setAttribute('for', `slot-date-${slotRowCount}`);
    
    const startLabel = document.createElement('label');
    startLabel.className = 'slot-label';
    startLabel.textContent = window.uiManager.translate('Start Time') || 'Start Time';
    startLabel.setAttribute('for', `slot-time-start-${slotRowCount}`);

    const durationLabel = document.createElement('label');
    durationLabel.className = 'slot-label';
    durationLabel.textContent = window.uiManager.translate('Duration') || 'Duration';
    durationLabel.setAttribute('for', `slot-duration-${slotRowCount}`);
    
    const endLabel = document.createElement('label');
    endLabel.className = 'slot-label';
    endLabel.textContent = window.uiManager.translate('End Time') || 'End Time';
    endLabel.setAttribute('for', `slot-time-end-${slotRowCount}`);
    
    // Create input groups
    const dateGroup = document.createElement('div');
    dateGroup.className = 'slot-input-group';
    dateGroup.appendChild(dateLabel);
    dateGroup.appendChild(dateInput);
    
    const startGroup = document.createElement('div');
    startGroup.className = 'slot-input-group';
    startGroup.appendChild(startLabel);
    startGroup.appendChild(timeStartSelect);

    const durationGroup = document.createElement('div');
    durationGroup.className = 'slot-input-group';
    durationGroup.appendChild(durationLabel);
    durationGroup.appendChild(durationSelect);
    
    const endGroup = document.createElement('div');
    endGroup.className = 'slot-input-group';
    endGroup.appendChild(endLabel);
    endGroup.appendChild(timeEndSelect);
    
    row.appendChild(dateGroup);
    row.appendChild(startGroup);
    row.appendChild(durationGroup);
    row.appendChild(endGroup);
    row.appendChild(removeBtn);
    container.appendChild(row);
    
    slotRowCount++;
}

function closeAddSlotsModal() {
    const modal = document.getElementById('add-slots-modal');
    if (modal) {
        modal.remove();
    }
    slotRowCount = 0;

    // Return to positions list (Manage Interview Slots)
    if (typeof showManageSlots === 'function') {
        showManageSlots();
    }
}

async function saveSlots() {
    try {
        const requestId = parseInt(document.getElementById('slots-request-id').value);
        const round = document.getElementById('slots-round').value;
        
        const slots = [];
        const rows = document.querySelectorAll('.slot-row');
        
        rows.forEach(row => {
            const dateInput = row.querySelector('input[type="date"]');
            const timeSelects = row.querySelectorAll('select');
            
            if (!dateInput || timeSelects.length < 2) {
                // Skip invalid rows
                return;
            }
            
            const date = dateInput.value;
            // We now have: [startSelect, durationSelect, endSelect]
            const timeStart = timeSelects[0].value;
            const timeEnd = timeSelects[2] ? timeSelects[2].value : timeSelects[1].value;
            
            if (date && timeStart && timeEnd) {
                // Round times to 15-minute intervals
                const roundedStart = roundTo15Minutes(timeStart);
                const roundedEnd = roundTo15Minutes(timeEnd);
                
                const startTime = new Date(`${date}T${roundedStart}`);
                const endTime = new Date(`${date}T${roundedEnd}`);
                
                if (endTime <= startTime) {
                    throw new Error(window.uiManager.translate('End time must be after start time') || 'End time must be after start time');
                }
                
                // Validate that duration is at least 30 minutes
                const duration = (endTime - startTime) / (1000 * 60); // Duration in minutes
                if (duration < 30) {
                    throw new Error(window.uiManager.translate('Minimum slot duration is 30 minutes') || 'Minimum slot duration is 30 minutes');
                }
                
                // Validate that duration is exactly 30 minutes (or multiple of 30)
                if (duration % 30 !== 0) {
                    throw new Error(window.uiManager.translate('Slot duration must be a multiple of 30 minutes') || 'Slot duration must be a multiple of 30 minutes');
                }
                
                slots.push({
                    startTime: startTime.toISOString(),
                    endTime: endTime.toISOString()
                });
            }
        });
        
        if (slots.length === 0) {
            window.utils.showMessage('Please add at least one slot', 'error');
            return;
        }
        
        const msgSaving = window.uiManager.translate('Saving slots...') || 'Saving slots...';
        const msgNotifying = window.uiManager.translate('Notifying agencies...') || 'Notifying agencies...';
        window.uiManager.showLoading(msgSaving);
        
        await window.interviewSlotsManager.createSlots(requestId, round, slots);
        
        window.uiManager.showLoading(msgNotifying);
        
        const request = await window.requestsManager.getRequestById(requestId);
        const allowedStatuses = ['New', 'In Process - First Round', 'In Process - Second Round'];
        const candidatesResult = await window.candidatesManager.getCandidates({
            page: 1,
            pageSize: 2000,
            position: request.position,
            department: request.department
        });
        const candidatesWithStatus = (candidatesResult.candidates || []).filter(c =>
            c.position === request.position &&
            c.department === request.department &&
            allowedStatuses.includes(c.status)
        );
        const sourcesWithCandidates = [...new Set(candidatesWithStatus.map(c => c.source).filter(Boolean))];
        console.log('Slots saved: sources with candidates for', request.position, '=', sourcesWithCandidates);

        let notificationReport = {
            sources: sourcesWithCandidates,
            recipients: [],
            sent: [],
            failed: []
        };

        if (sourcesWithCandidates.length > 0) {
            const { data: agencyRows, error: rpcError } = await window.supabase
                .rpc('get_agency_emails_for_new_slots', { sources: sourcesWithCandidates });
            if (rpcError) {
                console.warn('get_agency_emails_for_new_slots RPC error:', rpcError);
            }
            const uniqueEmails = [...new Set((agencyRows || []).map(r => (r && r.email) || r).filter(Boolean))];
            notificationReport.recipients = uniqueEmails;
            console.log('Agency emails to notify:', uniqueEmails.length, uniqueEmails);

            for (const email of uniqueEmails) {
                const sendResult = await notifyAgencySlotsWithRetry(email, request, round, slots);
                if (sendResult.success) {
                    notificationReport.sent.push(email);
                    console.log('Notified agency:', email, `(attempt ${sendResult.attempt})`);
                } else {
                    const reason = sendResult.error?.message || 'Unknown error';
                    notificationReport.failed.push({ email, reason });
                    console.warn('Failed to notify agency:', email, reason);
                }
            }
        }
        
        window.uiManager.hideLoading();
        window.utils.showMessage('Slots created successfully!', 'success');
        closeAddSlotsModal();
        showManageSlots();
        showAgencyNotificationReport(notificationReport);
    } catch (error) {
        console.error('Error saving slots:', error);
        window.uiManager.hideLoading();
        window.utils.showMessage('Error saving slots: ' + error.message, 'error');
    }
}

function shouldRetryAgencyEmail(error) {
    const message = (error?.message || '').toLowerCase();
    return (
        message.includes('429') ||
        message.includes('too many') ||
        message.includes('rate') ||
        message.includes('timeout') ||
        message.includes('503') ||
        message.includes('network')
    );
}

function delayMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function notifyAgencySlotsWithRetry(email, request, round, slots, maxAttempts = 3) {
    let lastError = null;
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            await window.emailManager.notifyAgencyNewSlots(email, request, round, slots);
            return { success: true, attempt };
        } catch (error) {
            lastError = error;
            if (attempt < maxAttempts && shouldRetryAgencyEmail(error)) {
                await delayMs(800 * attempt);
                continue;
            }
            break;
        }
    }
    return { success: false, error: lastError };
}

function showAgencyNotificationReport(report) {
    if (!report) return;

    const recipients = report.recipients || [];
    const sent = report.sent || [];
    const failed = report.failed || [];
    const sentSet = new Set(sent);
    const pending = recipients.filter(email => !sentSet.has(email) && !failed.some(f => f.email === email));

    const modal = document.createElement('div');
    modal.id = 'agency-notification-report-modal';
    modal.className = 'modal';
    modal.style.display = 'flex';

    const failedList = failed.length > 0
        ? failed.map(f => `<li><strong>${f.email}</strong><br><span style="color:#dc2626;font-size:0.85rem;">${f.reason}</span></li>`).join('')
        : `<li style="color:#64748b;">Žiadne chyby</li>`;

    const sentList = sent.length > 0
        ? sent.map(email => `<li>${email}</li>`).join('')
        : `<li style="color:#64748b;">Žiadny email nebol odoslaný</li>`;

    const pendingList = pending.length > 0
        ? pending.map(email => `<li>${email}</li>`).join('')
        : `<li style="color:#64748b;">Žiadne nevyhodnotené emaily</li>`;

    modal.innerHTML = `
        <div class="modal-content" style="max-width: 720px;">
            <h2 style="margin-bottom: 1rem;">Report odoslania agentúram</h2>
            <div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;margin-bottom:14px;">
                <div class="summary-card"><h3>${recipients.length}</h3><p>Celkovo príjemcov</p></div>
                <div class="summary-card approved"><h3>${sent.length}</h3><p>Úspešne odoslané</p></div>
                <div class="summary-card rejected"><h3>${failed.length}</h3><p>Zlyhané</p></div>
            </div>
            <p style="margin-bottom:8px;color:#475569;"><strong>Zdroje kandidátov:</strong> ${(report.sources || []).join(', ') || 'N/A'}</p>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
                <div>
                    <h3 style="font-size:1rem;margin-bottom:8px;">Odoslané</h3>
                    <ul style="margin:0;padding-left:18px;max-height:180px;overflow:auto;">${sentList}</ul>
                </div>
                <div>
                    <h3 style="font-size:1rem;margin-bottom:8px;">Zlyhané</h3>
                    <ul style="margin:0;padding-left:18px;max-height:180px;overflow:auto;">${failedList}</ul>
                </div>
            </div>
            <div style="margin-top:14px;">
                <h3 style="font-size:1rem;margin-bottom:8px;">Nevyhodnotené</h3>
                <ul style="margin:0;padding-left:18px;max-height:120px;overflow:auto;">${pendingList}</ul>
            </div>
            <div style="display:flex;justify-content:flex-end;margin-top:18px;">
                <button class="btn btn-primary" onclick="closeAgencyNotificationReport()">Zavrieť</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
}

function closeAgencyNotificationReport() {
    const modal = document.getElementById('agency-notification-report-modal');
    if (modal) modal.remove();
}

async function showSlotsForRequest(requestId) {
    try {
        window.uiManager.showLoading('Loading slots...');
        
        const firstRoundSlots = await window.interviewSlotsManager.getSlotsForRequest(requestId, 'first');
        const secondRoundSlots = await window.interviewSlotsManager.getSlotsForRequest(requestId, 'second');
        
        window.uiManager.hideLoading();
        
        const modal = document.createElement('div');
        modal.id = 'view-slots-modal';
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
        
        const renderSlots = (slots, round) => {
            if (slots.length === 0) {
                return `<p data-translate="No slots available">${window.uiManager.translate('No slots available') || 'No slots available'}</p>`;
            }
            return slots.map(slot => {
                const start = new Date(slot.start_time);
                const end = new Date(slot.end_time);
                const isBooked = slot.candidate_id !== null;
                return `
                    <div style="padding: 10px; margin: 5px 0; background: ${isBooked ? '#ffebee' : '#e8f5e9'}; border-radius: 5px;">
                        <strong>${start.toLocaleString('sk-SK')} - ${end.toLocaleString('sk-SK')}</strong>
                        ${isBooked ? `<br>${window.uiManager.translate('Booked by') || 'Booked by'}: ${slot.candidates?.name || 'N/A'} (${slot.agency_source || 'N/A'})` : `<br>${window.uiManager.translate('Available') || 'Available'}`}
                    </div>
                `;
            }).join('');
        };
        
        modal.innerHTML = `
            <div class="modal-content" style="background: white; padding: 30px; border-radius: 8px; max-width: 800px; width: 90%; max-height: 90vh; overflow-y: auto;">
                <h2 data-translate="Interview Slots">Interview Slots</h2>
                <div style="margin-bottom: 20px;">
                    <h3 data-translate="First Round">First Round</h3>
                    ${renderSlots(firstRoundSlots, 'first')}
                </div>
                <div>
                    <h3 data-translate="Second Round">Second Round</h3>
                    ${renderSlots(secondRoundSlots, 'second')}
                </div>
                <div style="display: flex; justify-content: flex-end; margin-top: 20px;">
                    <button onclick="closeViewSlotsModal()" class="btn btn-secondary" data-translate="Close">Close</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        window.uiManager.translatePage();
    } catch (error) {
        console.error('Error loading slots:', error);
        window.uiManager.hideLoading();
        window.utils.showMessage('Error loading slots: ' + error.message, 'error');
    }
}

function closeViewSlotsModal() {
    const modal = document.getElementById('view-slots-modal');
    if (modal) {
        modal.remove();
    }
}

// ============================================
// AGENCY VIEW
// ============================================

/**
 * Show interface for agencies to view positions and book slots
 */
async function showAgencyView() {
    try {
        window.uiManager.showLoading('Loading positions...');
        
        // Get user info to determine agency source
        const userInfo = await window.authManager.getUserInfo();
        if (userInfo.role !== 'agency') {
            window.uiManager.hideLoading();
            throw new Error('Access denied. Agency role required.');
        }
        
        // Get approved requests
        let result;
        try {
            result = await window.requestsManager.getRequests({
                status: 'Approved',
                page: 1,
                pageSize: 100
            });
        } catch (error) {
            console.error('Error loading requests:', error);
            window.uiManager.hideLoading();
            window.utils.showMessage('Error loading positions: ' + error.message, 'error');
            return;
        }
        
        // Get agency source from user email
        const agencySource = getAgencySource();
        
        if (!agencySource) {
            window.uiManager.hideLoading();
            window.utils.showMessage('Unable to determine agency source. Please contact administrator.', 'error');
            return;
        }
        
        // Get candidates for this agency (by source)
        let candidatesResult;
        try {
            candidatesResult = await window.candidatesManager.getCandidates({
                page: 1,
                pageSize: 1000,
                source: agencySource
            });
        } catch (error) {
            console.warn('Error loading candidates (non-critical):', error);
            candidatesResult = { candidates: [] };
        }
        
        // Filter candidates by agency source and allowed statuses
        // Only show candidates with status: New, In Process - First Round, or In Process - Second Round
        const allowedStatuses = ['New', 'In Process - First Round', 'In Process - Second Round'];
        const agencyCandidates = (candidatesResult.candidates || []).filter(c => 
            c.source === agencySource && 
            allowedStatuses.includes(c.status)
        );
        
        console.log('🔍 showAgencyView: Agency candidates (filtered by status):', {
            total: agencyCandidates.length,
            byPosition: agencyCandidates.reduce((acc, c) => {
                const key = `${c.position}|${c.department}`;
                if (!acc[key]) acc[key] = [];
                acc[key].push(c);
                return acc;
            }, {})
        });
        
        // Group candidates by position and department
        const candidatesByPosition = {};
        agencyCandidates.forEach(candidate => {
            const key = `${candidate.position}|${candidate.department}`;
            if (!candidatesByPosition[key]) {
                candidatesByPosition[key] = [];
            }
            candidatesByPosition[key].push(candidate);
        });
        
        // Filter requests to show only positions where agency has candidates
        const relevantRequests = result.requests.filter(request => {
            const key = `${request.position}|${request.department}`;
            return candidatesByPosition[key] && candidatesByPosition[key].length > 0;
        });
        
        // Get slot counts for each request
        const slotCounts = {};
        for (const request of relevantRequests) {
            try {
                const firstRoundSlots = await window.interviewSlotsManager.getAvailableSlots(request.id, 'first');
                const secondRoundSlots = await window.interviewSlotsManager.getAvailableSlots(request.id, 'second');
                slotCounts[request.id] = {
                    first: firstRoundSlots.length,
                    second: secondRoundSlots.length
                };
            } catch (error) {
                console.warn(`Error loading slots for request ${request.id}:`, error);
                slotCounts[request.id] = { first: 0, second: 0 };
            }
        }
        
        window.uiManager.hideLoading();
        
        const app = document.getElementById('app');
        app.innerHTML = `
            <div class="agency-view-header">
                <h2 data-translate="Available Positions">Available Positions</h2>
                <p class="agency-view-subtitle" data-translate="Select a position to book interview slots">Select a position to book interview slots</p>
            </div>
            <div id="agency-positions-list" class="agency-positions-grid"></div>
        `;
        
        // Render positions
        const container = document.getElementById('agency-positions-list');
        if (relevantRequests.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <p data-translate="No positions with candidates">No positions available where you have candidates</p>
                </div>
            `;
        } else {
            relevantRequests.forEach(request => {
                const key = `${request.position}|${request.department}`;
                const candidatesForPosition = candidatesByPosition[key] || [];
                const candidateCount = candidatesForPosition.length;
                const slots = slotCounts[request.id] || { first: 0, second: 0 };
                
                // Get candidate names (limit to 3 for display, show "+X more" if more)
                const candidateNames = candidatesForPosition.map(c => c.name).slice(0, 3);
                const moreCount = candidateCount > 3 ? candidateCount - 3 : 0;
                
                const positionCard = document.createElement('div');
                positionCard.className = 'agency-position-card';
                positionCard.innerHTML = `
                    <div class="position-card-header">
                        <h3 class="position-title">${request.position}</h3>
                        <span class="position-department">${request.department}</span>
                    </div>
                    
                    <div class="position-stats">
                        <div class="stat-item">
                            <span class="stat-icon">👥</span>
                            <div class="stat-content">
                                <span class="stat-label" data-translate="Candidates">Candidates</span>
                                <span class="stat-value">${candidateCount}</span>
                            </div>
                        </div>
                        <div class="stat-item">
                            <span class="stat-icon">📅</span>
                            <div class="stat-content">
                                <span class="stat-label" data-translate="First Round">First Round</span>
                                <span class="stat-value">${slots.first} <span data-translate="slots">slots</span></span>
                            </div>
                        </div>
                        <div class="stat-item">
                            <span class="stat-icon">📅</span>
                            <div class="stat-content">
                                <span class="stat-label" data-translate="Second Round">Second Round</span>
                                <span class="stat-value">${slots.second} <span data-translate="slots">slots</span></span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="candidates-list">
                        <strong data-translate="Candidate Names">Candidate Names:</strong>
                        <div class="candidate-names">
                            ${candidateNames.map(name => `<span class="candidate-name-tag">${name}</span>`).join('')}
                            ${moreCount > 0 ? `<span class="candidate-name-tag more-tag" data-translate="+{count} more">+${moreCount} more</span>` : ''}
                        </div>
                    </div>
                    
                    <div class="position-actions">
                        <button onclick="showAgencySlotsCalendar(${request.id}, 'first')" class="btn btn-primary btn-round" data-translate="First Round Slots">
                            <span class="btn-icon">1️⃣</span>
                            <span data-translate="First Round">First Round</span>
                            ${slots.first > 0 ? `<span class="slot-badge">${slots.first}</span>` : ''}
                        </button>
                        <button onclick="showAgencySlotsCalendar(${request.id}, 'second')" class="btn btn-primary btn-round" data-translate="Second Round Slots">
                            <span class="btn-icon">2️⃣</span>
                            <span data-translate="Second Round">Second Round</span>
                            ${slots.second > 0 ? `<span class="slot-badge">${slots.second}</span>` : ''}
                        </button>
                    </div>
                `;
                container.appendChild(positionCard);
            });
        }
        
        window.uiManager.translatePage();
        
        // Setup real-time listener for slot changes
        window.addEventListener('interviewSlotChanged', (event) => {
            console.log('Slot changed, refreshing view...');
            // Refresh the current view if needed
        });
    } catch (error) {
        console.error('Error loading agency view:', error);
        window.uiManager.hideLoading();
        window.utils.showMessage('Error loading positions: ' + error.message, 'error');
        
        // Show error page with retry button
        const app = document.getElementById('app');
        if (app) {
            app.innerHTML = `
                <div style="text-align: center; padding: 40px;">
                    <h2 style="color: #d32f2f;">Error</h2>
                    <p>${error.message}</p>
                    <p style="color: #666; font-size: 14px; margin-top: 10px;">
                        If this problem persists, please check:
                        <br>1. That RLS policies for agency role are set up correctly
                        <br>2. That you have the 'agency' role in the users table
                        <br>3. That there are approved recruiting requests
                    </p>
                    <button onclick="showAgencyView()" class="btn btn-primary" style="margin-top: 20px;">Retry</button>
                </div>
            `;
        }
    }
}

/**
 * Show calendar view for booking slots (agency)
 */
async function showAgencySlotsCalendar(requestId, round) {
    try {
        window.uiManager.showLoading(window.uiManager.translate('Loading available slots...') || 'Loading available slots...');
        
        // Get agency source
        const agencySource = getAgencySource();
        
        if (!agencySource) {
            window.uiManager.hideLoading();
            window.utils.showMessage('Unable to determine agency source. Please contact administrator.', 'error');
            return;
        }

        // Get available slots and all round slots (for agency booked ones)
        const slots = await window.interviewSlotsManager.getAvailableSlots(requestId, round);
        const allRoundSlots = await window.interviewSlotsManager.getSlotsForRequest(requestId, round);
        const myBookedSlots = (allRoundSlots || []).filter(slot =>
            slot.candidate_id &&
            slot.agency_source === agencySource
        );
        
        // Get candidates for this agency (filtered by source)
        const candidatesResult = await window.candidatesManager.getCandidates({
            page: 1,
            pageSize: 1000,
            source: agencySource
        });
        
        // Filter candidates by agency source and allowed statuses
        // Only show candidates with status: New, In Process - First Round, or In Process - Second Round
        const allowedStatuses = ['New', 'In Process - First Round', 'In Process - Second Round'];
        const agencyCandidates = (candidatesResult.candidates || []).filter(c => 
            c.source === agencySource && 
            allowedStatuses.includes(c.status)
        );
        
        window.uiManager.hideLoading();
        
        // Group slots by date
        const slotsByDate = {};
        slots.forEach(slot => {
            const date = new Date(slot.start_time).toISOString().split('T')[0];
            if (!slotsByDate[date]) {
                slotsByDate[date] = [];
            }
            slotsByDate[date].push(slot);
        });
        
        const modal = document.createElement('div');
        modal.id = 'agency-slots-calendar';
        modal.className = 'modal agency-slots-modal';
        
        const roundText = round === 'first' ? window.uiManager.translate('First Round') : window.uiManager.translate('Second Round');
        
        // Get request details for header
        const request = await window.requestsManager.getRequestById(requestId);
        
        const calendarHtml = Object.keys(slotsByDate).sort().map(date => {
            const dateSlots = slotsByDate[date];
            const dateObj = new Date(date);
            const dateStr = dateObj.toLocaleDateString('sk-SK', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const isToday = dateObj.getTime() === today.getTime();
            const isPast = dateObj < today;
            
            return `
                <div class="calendar-date-section ${isToday ? 'today' : ''} ${isPast ? 'past' : ''}">
                    <div class="calendar-date-header">
                        <h4 class="calendar-date-title">${dateStr}</h4>
                        ${isToday ? '<span class="today-badge" data-translate="Today">Today</span>' : ''}
                        <span class="slots-count">${dateSlots.length} ${dateSlots.length === 1 ? window.uiManager.translate('slot') : window.uiManager.translate('slots')}</span>
                    </div>
                    <div class="calendar-slots-grid">
                        ${dateSlots.map(slot => {
                            const start = new Date(slot.start_time);
                            const end = new Date(slot.end_time);
                            const timeStr = `${start.toLocaleTimeString('sk-SK', { hour: '2-digit', minute: '2-digit' })} - ${end.toLocaleTimeString('sk-SK', { hour: '2-digit', minute: '2-digit' })}`;
                            const duration = Math.round((end - start) / (1000 * 60)); // Duration in minutes
                            return `
                                <div class="calendar-slot-card">
                                    <div class="slot-time">
                                        <span class="slot-time-icon">🕐</span>
                                        <span class="slot-time-text">${timeStr}</span>
                                    </div>
                                    <div class="slot-duration">${duration} min</div>
                                    <button onclick="showBookSlotModal(${slot.id}, ${requestId}, '${round}')" class="btn btn-primary btn-slot" data-translate="Book Slot">
                                        <span data-translate="Book">Book</span>
                                    </button>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            `;
        }).join('');

        const myBookedHtml = myBookedSlots.length > 0 ? `
            <div style="margin-bottom: 1.25rem; padding: 1rem; border: 1px solid #e5e7eb; border-radius: 10px; background: #fafafa;">
                <h3 style="margin-top: 0; margin-bottom: 0.8rem;">Moje potvrdené termíny</h3>
                <div style="display: grid; gap: 10px;">
                    ${myBookedSlots.map(slot => {
                        const start = new Date(slot.start_time);
                        const end = new Date(slot.end_time);
                        const dateStr = start.toLocaleDateString('sk-SK', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
                        const timeStr = `${start.toLocaleTimeString('sk-SK', { hour: '2-digit', minute: '2-digit' })} - ${end.toLocaleTimeString('sk-SK', { hour: '2-digit', minute: '2-digit' })}`;
                        const candidateName = (slot.candidates?.name || '').replace(/&/g, '&amp;').replace(/</g, '&lt;');
                        return `
                            <div style="display: flex; justify-content: space-between; align-items: center; gap: 10px; border: 1px solid #e5e7eb; border-radius: 8px; padding: 10px; background: #fff;">
                                <div>
                                    <div style="font-weight: 600;">${candidateName || 'Kandidát'}</div>
                                    <div style="font-size: 0.92rem; color: #4b5563;">${dateStr}, ${timeStr}</div>
                                </div>
                                <button onclick="cancelAgencyBooking(${slot.id}, ${requestId}, '${round}')" class="btn btn-danger">Zrušiť</button>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        ` : '';
        
        modal.innerHTML = `
            <div class="agency-slots-modal-content">
                <div class="agency-slots-modal-header">
                    <div class="modal-header-info">
                        <h2 class="modal-title">${roundText} - ${request.position}</h2>
                        <p class="modal-subtitle">${request.department} • ${slots.length} ${slots.length === 1 ? window.uiManager.translate('available slot') : window.uiManager.translate('available slots')}</p>
                    </div>
                    <button onclick="closeAgencySlotsCalendar()" class="modal-close-btn" aria-label="Close">&times;</button>
                </div>
                <div class="agency-slots-calendar-content">
                    ${myBookedHtml}
                    ${slots.length === 0 ? `
                        <div class="empty-slots-state">
                            <div class="empty-icon">📅</div>
                            <h3 data-translate="No slots available">No slots available</h3>
                            <p data-translate="No available slots for this round">There are no available slots for this round. Please check back later.</p>
                        </div>
                    ` : calendarHtml}
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        window.uiManager.translatePage();
    } catch (error) {
        console.error('Error loading slots calendar:', error);
        window.uiManager.hideLoading();
        window.utils.showMessage('Error loading slots: ' + error.message, 'error');
    }
}

function closeAgencySlotsCalendar() {
    const modal = document.getElementById('agency-slots-calendar');
    if (modal) {
        modal.remove();
    }
    // Return to positions list
    showAgencyView();
}

/**
 * Get agency source from user profile (users.source column)
 * Only uses source from users table - no email mapping
 * @returns {string|null} Agency source name
 */
function getAgencySource() {
    const userInfo = window.authManager.getUserInfo();
    if (!userInfo) {
        console.warn('⚠️ getAgencySource: No userInfo available');
        return null;
    }
    
    console.log('🔍 getAgencySource: userInfo:', { role: userInfo.role, source: userInfo.source });
    
    // Get source directly from users table (users.source column)
    // This is the only way to determine agency source - no email mapping
    if (userInfo.role === 'agency' && userInfo.source) {
        console.log('✅ getAgencySource: Returning source:', userInfo.source);
        return userInfo.source;
    }
    
    console.warn('⚠️ getAgencySource: No source found for agency user');
    return null;
}

async function showBookSlotModal(slotId, requestId, round) {
    try {
        // Get user info and determine agency source
        const userInfo = await window.authManager.getUserInfo();
        const agencySource = getAgencySource();
        
        if (!agencySource) {
            window.utils.showMessage('Unable to determine agency source. Please contact administrator.', 'error');
            return;
        }
        
        // Get request details
        const request = await window.requestsManager.getRequestById(requestId);
        console.log('🔍 showBookSlotModal: Request details:', {
            requestId,
            position: request.position,
            department: request.department,
            agencySource
        });
        
        // Get candidates filtered by agency source and position
        // Note: getCandidates already filters by source for agency role automatically
        // Allowed statuses for booking slots
        const allowedStatuses = ['New', 'In Process - First Round', 'In Process - Second Round'];
        
        const candidatesResult = await window.candidatesManager.getCandidates({
            page: 1,
            pageSize: 1000,
            position: request.position,
            department: request.department
            // Don't pass source here - it's already filtered automatically in candidates.js
        });
        
        console.log('🔍 showBookSlotModal: Candidates result:', {
            totalCandidates: candidatesResult.candidates.length,
            candidates: candidatesResult.candidates.map(c => ({
                id: c.id,
                name: c.name,
                position: c.position,
                department: c.department,
                source: c.source,
                status: c.status
            }))
        });
        
        // Filter candidates: must match position, department, source, and have allowed status
        const agencyCandidates = candidatesResult.candidates.filter(c => 
            c.position === request.position && 
            c.department === request.department &&
            c.source === agencySource &&
            allowedStatuses.includes(c.status)
        );
        
        console.log('🔍 showBookSlotModal: Filtered agency candidates:', {
            count: agencyCandidates.length,
            candidates: agencyCandidates.map(c => ({
                id: c.id,
                name: c.name,
                position: c.position,
                department: c.department,
                source: c.source
            }))
        });
        
        if (agencyCandidates.length === 0) {
            window.utils.showMessage(`No candidates available for position ${request.position} from ${agencySource}`, 'error');
            return;
        }
        
        const modal = document.createElement('div');
        modal.id = 'book-slot-modal';
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
            z-index: 1001;
        `;
        
        modal.innerHTML = `
            <div class="modal-content" style="background: white; padding: 30px; border-radius: 8px; max-width: 500px; width: 90%;">
                <h2 data-translate="Book Interview Slot">Book Interview Slot</h2>
                <form id="book-slot-form">
                    <input type="hidden" id="book-slot-id" value="${slotId}">
                    <div class="form-group" style="margin-bottom: 20px;">
                        <label for="book-candidate" data-translate="Select Candidate">Select Candidate:</label>
                        <select id="book-candidate" class="form-control" required>
                            <option value="">-- Select --</option>
                            ${agencyCandidates.map(c => `<option value="${c.id}">${c.name}</option>`).join('')}
                        </select>
                    </div>
                    <div style="display: flex; gap: 10px; justify-content: flex-end; margin-top: 20px;">
                        <button type="button" onclick="closeBookSlotModal()" class="btn btn-secondary" data-translate="Cancel">Cancel</button>
                        <button type="submit" class="btn btn-primary" data-translate="Book Slot">Book Slot</button>
                    </div>
                </form>
            </div>
        `;
        
        document.body.appendChild(modal);
        window.uiManager.translatePage();
        
        // Handle form submission
        document.getElementById('book-slot-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            await bookSlot(slotId, requestId, round);
        });
    } catch (error) {
        console.error('Error showing book slot modal:', error);
        window.utils.showMessage('Error: ' + error.message, 'error');
    }
}

function closeBookSlotModal() {
    const modal = document.getElementById('book-slot-modal');
    if (modal) {
        modal.remove();
    }
}

async function bookSlot(slotId, requestId, round) {
    try {
        const candidateId = parseInt(document.getElementById('book-candidate').value);
        
        if (!candidateId) {
            window.utils.showMessage('Please select a candidate', 'error');
            return;
        }
        
        // Get user info to determine agency source
        const userInfo = await window.authManager.getUserInfo();
        // Determine agency source - this should be stored in user profile or determined from candidate source
        const candidate = await window.candidatesManager.getCandidateDetails(candidateId);
        const agencySource = candidate.source;
        
        window.uiManager.showLoading('Booking slot...');
        
        // Book the slot
        const result = await window.interviewSlotsManager.bookSlot(slotId, candidateId, agencySource);
        
        if (result.success) {
            const slotData = result.data;
            const request = await window.requestsManager.getRequestById(requestId);

            // Document paths are redacted for agency in getCandidateDetails; load paths only for recruiter ICS/email.
            let candidateForAttachments = candidate;
            if (userInfo.role === 'agency' && window.supabase) {
                const { data: docRow } = await window.supabase
                    .from('candidates')
                    .select('cv_file_path, assesment_file_path')
                    .eq('id', candidateId)
                    .maybeSingle();
                candidateForAttachments = {
                    ...candidate,
                    cv_file_path: docRow?.cv_file_path ?? null,
                    assesment_file_path: docRow?.assesment_file_path ?? null
                };
            }

            const attachmentUrls = {};
            const expiresIn = 7 * 24 * 60 * 60;
            if (candidateForAttachments.cv_file_path) {
                const { data: cvSigned } = await window.supabase.storage
                    .from('candidate-files')
                    .createSignedUrl(candidateForAttachments.cv_file_path, expiresIn);
                const url = cvSigned?.signedUrl || cvSigned?.signedURL;
                if (url) attachmentUrls.cvUrl = url;
            }
            if (candidateForAttachments.assesment_file_path) {
                const { data: assessmentSigned } = await window.supabase.storage
                    .from('candidate-files')
                    .createSignedUrl(candidateForAttachments.assesment_file_path, expiresIn);
                const url = assessmentSigned?.signedUrl || assessmentSigned?.signedURL;
                if (url) attachmentUrls.assessmentUrl = url;
            }

            const icsContent = window.generateICS(slotData, candidateForAttachments, request, attachmentUrls);
            
            // Notify only users with role "recruiter"
            const { data: recruiters } = await window.supabase
                .from('users')
                .select('email')
                .eq('role', 'recruiter')
                .not('email', 'is', null)
                .limit(20);
            
            const recruiterEmails = (recruiters || []).map(u => u.email).filter(Boolean);
            
            if (recruiterEmails.length > 0) {
                try {
                    await window.emailManager.notifySlotBooked(
                        { slot: slotData, candidate: candidateForAttachments, request },
                        recruiterEmails,
                        [],
                        icsContent
                    );
                } catch (emailError) {
                    console.warn('Error sending notification email:', emailError);
                }
            }
            
            // Download ICS file for user
            window.downloadICS(icsContent, `interview-${candidate.name}-${Date.now()}.ics`);
            
            window.uiManager.hideLoading();
            window.utils.showMessage('Slot booked successfully! Notifications sent.', 'success');
            closeBookSlotModal();
            // Close calendar and return to positions list
            closeAgencySlotsCalendar();
        }
    } catch (error) {
        console.error('Error booking slot:', error);
        window.uiManager.hideLoading();
        const isSlotTakenByOther = (error?.message || '').toLowerCase().includes('not available') || (error?.message || '').includes('Slot is not available');
        if (isSlotTakenByOther) {
            showSlotTakenByAgencyModal(requestId, round);
            return;
        }
        const msg = (error.code === '23505' || error.message?.includes('already booked'))
            ? (window.uiManager.translate?.('Candidate is already booked for another slot in this round') || 'Candidate is already booked for another slot in this round.')
            : ('Error booking slot: ' + (error.message || error));
        window.utils.showMessage(msg, 'error');
    }
}

async function cancelAgencyBooking(slotId, requestId, round) {
    try {
        const reason = prompt('Zadajte dôvod zrušenia termínu:');
        if (reason === null) return;
        const trimmedReason = reason.trim();
        if (!trimmedReason) {
            window.utils.showMessage('Dôvod zrušenia je povinný.', 'error');
            return;
        }

        const agencySource = getAgencySource();
        if (!agencySource) {
            window.utils.showMessage('Unable to determine agency source. Please contact administrator.', 'error');
            return;
        }

        const request = await window.requestsManager.getRequestById(requestId);
        const allSlots = await window.interviewSlotsManager.getSlotsForRequest(requestId, round);
        const slot = (allSlots || []).find(s => s.id === slotId);
        if (!slot || !slot.candidate_id) {
            window.utils.showMessage('Tento termín už nie je rezervovaný.', 'error');
            await showAgencySlotsCalendar(requestId, round);
            return;
        }
        if (slot.agency_source !== agencySource) {
            window.utils.showMessage('Môžete zrušiť len vlastné rezervácie.', 'error');
            return;
        }

        const candidate = await window.candidatesManager.getCandidateDetails(slot.candidate_id);
        window.uiManager.showLoading('Cancelling booking...');
        await window.interviewSlotsManager.cancelBooking(slotId, agencySource);

        const { data: recruiters } = await window.supabase
            .from('users')
            .select('email')
            .eq('role', 'recruiter')
            .not('email', 'is', null)
            .limit(20);
        const recruiterEmails = (recruiters || []).map(u => u.email).filter(Boolean);

        if (recruiterEmails.length > 0 && candidate) {
            try {
                await window.emailManager.notifySlotCancelled(
                    { slot, candidate, request },
                    recruiterEmails,
                    trimmedReason
                );
            } catch (emailError) {
                console.warn('Error sending cancellation notification email:', emailError);
            }
        }

        try {
            const noteText = `[Agency cancellation] ${trimmedReason}`;
            await window.candidatesManager.updateCandidateStatus(candidate.id, candidate.status, noteText);
        } catch (noteError) {
            console.warn('Error adding cancellation note to candidate:', noteError);
        }

        window.uiManager.hideLoading();
        window.utils.showMessage('Rezervácia bola zrušená a recruiter bol informovaný.', 'success');
        const existingCalendar = document.getElementById('agency-slots-calendar');
        if (existingCalendar) existingCalendar.remove();
        await showAgencySlotsCalendar(requestId, round);
    } catch (error) {
        console.error('Error canceling booking:', error);
        window.uiManager.hideLoading();
        window.utils.showMessage('Error canceling booking: ' + (error.message || error), 'error');
    }
}

/**
 * Show popup when agency tried to book a slot that another agency already took.
 * On OK: close popup + book modal, refresh calendar for same request/round.
 */
function showSlotTakenByAgencyModal(requestId, round) {
    closeBookSlotModal();
    const title = window.uiManager.translate('Slot no longer available') || 'Slot no longer available';
    const message = window.uiManager.translate('This slot was already booked by another agency. Please choose a different slot.') || 'This slot was already booked by another agency. Please choose a different slot.';
    const modal = document.createElement('div');
    modal.id = 'slot-taken-by-agency-modal';
    modal.className = 'modal';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 420px;">
            <h2 style="margin-bottom: 0.5rem;">${title}</h2>
            <p style="margin: 1rem 0; color: var(--text-secondary);">${message}</p>
            <div style="display: flex; justify-content: flex-end; margin-top: 1.25rem;">
                <button type="button" class="btn btn-primary" id="slot-taken-ok">OK</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    document.getElementById('slot-taken-ok').addEventListener('click', () => {
        modal.remove();
        const cal = document.getElementById('agency-slots-calendar');
        if (cal) cal.remove();
        showAgencySlotsCalendar(requestId, round);
    });
}

// Add getRequestById to RequestsManager if it doesn't exist
if (window.requestsManager && !window.requestsManager.getRequestById) {
    window.requestsManager.getRequestById = async function(requestId) {
        if (!this.supabase) {
            throw new Error('Supabase client not initialized');
        }
        
        const { data, error } = await this.supabase
            .from('recruiting_requests')
            .select('*')
            .eq('id', requestId)
            .single();
        
        if (error) throw error;
        return data;
    };
}


