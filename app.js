// Refactored main application file using modular architecture

// Translations object
const translations = {
    en: {
        // Navigation
        "Dashboard": "Dashboard",
        "Candidates": "Candidates",
        "Permanent Candidates": "Permanent Candidates",
        "Interim Candidates": "Interim Candidates",
        "Switch candidate mode": "Switch candidate mode",
        "Switch request mode": "Switch request mode",
        "Current Request Type": "Current request type",
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
        "Position not in list": "Position not in list",
        "Enter custom position": "Enter custom position",
        "Custom position is required.": "Custom position is required.",
        "Source": "Source",
        "Date Obtained": "Date Obtained",
        "Upload CV": "Upload CV",
        "Upload Assessment Form": "Upload Assessment Form",
        "Upload Assessment Form (optional)": "Upload Assessment Form (optional)",
        "Brief comment (optional)": "Brief comment (optional)",
        "Brief comment placeholder": "Short note about the candidate...",
        "New center (str)": "New center (str)",
        "New department org (odd)": "New department (odd)",
        "New unit (utvar)": "New unit (utvar)",
        "Org field hint": "Click and pick from the list, or start typing to filter.",
        "Interviewer": "Interviewer",
        "Status": "Status",
        "Notes": "Notes",
        "Create New Recruiting Request": "Create New Recruiting Request",
        "Job Description": "Job Description",
        "Job Description Document": "Job Description Document",
        "Upload Job Description Document": "Upload Job Description Document (PDF/DOC/DOCX)",
        "Download Job Description Document": "Download Job Description Document",
        "No Job Description Document": "No Job Description Document",
        "Add Final Interview Participant": "Add participant for final interview",
        "Final Interview Participant Name": "Final interview participant name",
        "Final Interview Participant Note": "Final interview participant note",
        "Final interview participant name is required.": "Final interview participant name is required.",
        "Headcount": "Headcount",
        "Position Type": "Position Type",
        "New Position": "New Position",
        "Replacement": "Replacement",
        "Interim": "Interim",
        "Contract Type": "Contract Type",
        "Permanent": "Permanent",
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
        "Talent Pool": "Talent Pool",
        "Talent Pool subtitle": "Rejected candidates moved to a reusable pool for future openings.",
        "Talent Pool Access denied": "Access denied. Only GM and Recruiter can view Talent Pool.",
        "Move to Talent Pool": "Move to Talent Pool",
        "Update Talent Pool": "Update Talent Pool",
        "Remove from Talent Pool": "Remove from Talent Pool",
        "Add to Talent Pool": "Add to Talent Pool",
        "Talent Pool target type": "Talent Pool target type",
        "Talent Pool target": "Talent Pool target",
        "By Department": "By Department",
        "By Position": "By Position",
        "Select target type first": "Select target type first",
        "No talent pool candidates": "No candidates in Talent Pool yet.",
        "Candidate moved to Talent Pool": "Candidate was moved to Talent Pool.",
        "Candidate removed from Talent Pool": "Candidate was removed from Talent Pool.",
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
        "Agency notification preview": "Agency notification preview",
        "Will receive email": "Will receive email",
        "Will not receive email": "Will not receive email",
        "No agency will receive email": "No agency will receive email",
        "Loading notification preview...": "Loading notification preview...",
        "Required candidate status": "Required candidate status",
        "No candidate on this position": "No candidate on this position",
        "Wrong candidate status": "Wrong candidate status",
        "Already booked a slot": "Already booked a slot in this round",
        "All eligible candidates already booked": "All eligible candidates already have a slot in this round",
        "Pending recruiter confirmation": "Candidate pending recruiter confirmation",
        "No agency email in system": "Eligible candidate but no agency email found in system",
        "Booking change notification": "Existing booking change",
        "Other agencies without candidates": "Other agencies without candidates on this position",
        "Show agency notification preview": "Show who will receive email",
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
        "Permanent Candidates": "Permanent Candidates",
        "Interim Candidates": "Interim Candidates",
        "Switch candidate mode": "Switch candidate mode",
        "Switch request mode": "Switch request mode",
        "Current Request Type": "Current request type",
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
        "Edit Slot": "Edit Slot",
        "Delete Slot": "Delete Slot",
        "Update Slot": "Update Slot",
        "Updating slot...": "Updating slot...",
        "Deleting slot...": "Deleting slot...",
        "Slot updated successfully!": "Slot updated successfully!",
        "Slot deleted successfully!": "Slot deleted successfully!",
        "Are you sure you want to delete this slot?": "Are you sure you want to delete this slot?",
        "This slot is booked. Deleting will cancel the booking and agencies will be notified.": "This slot is booked. Deleting will cancel the booking and agencies will be notified.",
        "This slot is booked. Agencies will be notified about the time change.": "This slot is booked. Agencies will be notified about the time change.",
        "Error updating slot:": "Error updating slot:",
        "Error deleting slot:": "Error deleting slot:",
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
        "Internal Notes": "Internal Notes",
        "No internal notes": "No internal notes yet",
        "Interview Pack": "Interview Pack",
        "Open Interview Pack": "Open Interview Pack",
        "Buyer I Interview Pack": "Buyer I – Master Interview Pack",
        "Save Interview Pack": "Save Interview Pack",
        "Interview pack saved": "Interview pack saved",
        "Error saving interview pack": "Error saving interview pack",
        "Assessor 1": "Assessor 1",
        "Assessor 2": "Assessor 2",
        "Interview date": "Interview date",
        "Candidate source type": "Candidate source",
        "Internal": "Internal",
        "External": "External",
        "Location": "Location",
        "Role type": "Role type",
        "Salaried": "Salaried",
        "Hourly": "Hourly",
        "Candidate responses / notes": "Candidate responses / notes",
        "Positive indicators": "Positive indicators",
        "Rating": "Rating",
        "Section score": "Section score",
        "Total score": "Total score",
        "Percentage": "Percentage",
        "Skills validation": "Skills validation",
        "Carry over to skills matrix": "Carry over to skills matrix",
        "Questions asked by candidate": "Questions asked by the candidate",
        "Recommend for offer": "Recommend for offer",
        "Yes": "Yes",
        "No": "No",
        "Possible": "Possible",
        "HR Comments": "HR Comments / Feedback",
        "HR Representative": "Name of HR Representative",
        "Signed": "Signed",
        "Autosaved": "Autosaved",
        "Custom question text": "Write follow-up question here",
        "Interview details": "Interview details",
        "Setup": "Setup",
        "Section": "Section",
        "Matrix": "Matrix",
        "Outcome": "Outcome",
        "Evidenced": "Evidenced",
        "Evidenced in": "Evidenced in",
        "Interview notes placeholder": "Interview notes...",
        "Fails": "Fails",
        "Partial": "Partial",
        "Meets": "Meets",
        "Exceeds some": "Exceeds some",
        "Exceeds all": "Exceeds all",
        "Loading Interview Pack": "Loading Interview Pack...",
        "Date": "Date",
        "Add internal note": "Add internal note",
        "Internal note placeholder": "Write a private note for recruiter / manager...",
        "Save internal note": "Save internal note",
        "Saving note...": "Saving note...",
        "Internal note added": "Internal note added.",
        "Error adding internal note": "Error adding internal note:",
        "Added by": "Added by",
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
        "Permanent Candidates": "Perm. kandidáti",
        "Interim Candidates": "Interim kandidáti",
        "Switch candidate mode": "Prepínač typu kandidátov",
        "Switch request mode": "Prepínač typu žiadostí",
        "Current Request Type": "Aktuálny typ žiadostí",
        "View and manage candidates by status": "Zobraziť a spravovať kandidátov podľa stavu",
        "Recruiting Requests": "Žiadosti o nábor",
        "GM Approval": "Schválenie GM",
        "Logout": "Odhlásiť sa",
        "Add New Candidate": "Pridať nového kandidáta",
        "Full Name": "Celé meno",
        "Department": "Oddelenie",
        "Position": "Pozícia",
        "Position not in list": "Pozícia nie je v zozname",
        "Enter custom position": "Zadajte názov pozície",
        "Custom position is required.": "Vlastný názov pozície je povinný.",
        "Source": "Zdroj",
        "Date Obtained": "Dátum získania",
        "Upload CV": "Nahrať životopis",
        "Upload Assessment Form": "Nahrať hodnotiaci formulár",
        "Upload Assessment Form (optional)": "Nahrať hodnotiaci formulár (voliteľné)",
        "Brief comment (optional)": "Stručný komentár (voliteľné)",
        "Brief comment placeholder": "Krátka poznámka ku kandidátovi...",
        "New center (str)": "Nové stredisko (str)",
        "New department org (odd)": "Nové oddelenie (odd)",
        "New unit (utvar)": "Nový útvar (utvar)",
        "Org field hint": "Kliknite a vyberte zo zoznamu, alebo začnite písať pre filtrovanie.",
        "Interviewer": "Pohovorujúci",
        "Status": "Stav",
        "Notes": "Poznámky",
        "Create New Recruiting Request": "Vytvoriť novú žiadosť o nábor",
        "Job Description": "Popis práce",
        "Job Description Document": "Dokument popisu práce",
        "Upload Job Description Document": "Nahrať dokument popisu práce (PDF/DOC/DOCX)",
        "Download Job Description Document": "Stiahnuť dokument popisu práce",
        "No Job Description Document": "Dokument popisu práce nebol nahraný",
        "Add Final Interview Participant": "Pridať osobu, ktorá sa zúčastní finálneho interview",
        "Final Interview Participant Name": "Meno osoby pre finálne interview",
        "Final Interview Participant Note": "Popis k osobe pre finálne interview",
        "Final interview participant name is required.": "Meno osoby pre finálne interview je povinné.",
        "Headcount": "Počet pracovníkov",
        "Position Type": "Typ pozície",
        "New Position": "Nová pozícia",
        "Replacement": "Náhrada",
        "Interim": "Interim",
        "Contract Type": "Typ zmluvy",
        "Permanent": "Trvalý",
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
        "Talent Pool": "Talent Pool",
        "Talent Pool subtitle": "Zamietnutí kandidáti presunutí do znovu použiteľného poolu pre budúce pozície.",
        "Talent Pool Access denied": "Prístup zamietnutý. Talent Pool môžu zobraziť iba GM a Recruiter.",
        "Move to Talent Pool": "Presunúť do Talent Pool",
        "Update Talent Pool": "Upraviť Talent Pool",
        "Remove from Talent Pool": "Odobrať z Talent Pool",
        "Add to Talent Pool": "Pridať do Talent Pool",
        "Talent Pool target type": "Typ cieľa v Talent Pool",
        "Talent Pool target": "Cieľ v Talent Pool",
        "By Department": "Podľa oddelenia",
        "By Position": "Podľa pozície",
        "Select target type first": "Najprv vyberte typ cieľa",
        "No talent pool candidates": "V Talent Poole zatiaľ nie sú žiadni kandidáti.",
        "Candidate moved to Talent Pool": "Kandidát bol presunutý do Talent Pool.",
        "Candidate removed from Talent Pool": "Kandidát bol odobratý z Talent Pool.",
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
        "Agency notification preview": "Náhľad notifikácií agentúram",
        "Will receive email": "Dostanú email",
        "Will not receive email": "Nedostanú email",
        "No agency will receive email": "Žiadna agentúra nedostane email",
        "Loading notification preview...": "Načítavam náhľad notifikácií...",
        "Required candidate status": "Požadovaný stav kandidáta",
        "No candidate on this position": "Nemá kandidáta na tejto pozícii",
        "Wrong candidate status": "Nesprávny stav kandidáta",
        "Already booked a slot": "Už má rezervovaný termín v tomto kole",
        "All eligible candidates already booked": "Všetci vhodní kandidáti už majú rezervovaný termín v tomto kole",
        "Pending recruiter confirmation": "Kandidát čaká na potvrdenie recruiterom",
        "No agency email in system": "Vhodný kandidát, ale v systéme chýba email agentúry",
        "Booking change notification": "Notifikácia zmeny existujúcej rezervácie",
        "Other agencies without candidates": "Ostatné agentúry bez kandidáta na pozícii",
        "Show agency notification preview": "Zobraziť, komu pôjde email",
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
        "Permanent Candidates": "Perm. kandidáti",
        "Interim Candidates": "Interim kandidáti",
        "Switch candidate mode": "Prepínač typu kandidátov",
        "Switch request mode": "Prepínač typu žiadostí",
        "Current Request Type": "Aktuálny typ žiadostí",
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
        "Edit Slot": "Upraviť termín",
        "Delete Slot": "Zmazať termín",
        "Update Slot": "Uložiť zmenu",
        "Updating slot...": "Ukladám zmenu termínu...",
        "Deleting slot...": "Mažem termín...",
        "Slot updated successfully!": "Termín bol úspešne upravený!",
        "Slot deleted successfully!": "Termín bol úspešne zmazaný!",
        "Are you sure you want to delete this slot?": "Naozaj chcete zmazať tento termín?",
        "This slot is booked. Deleting will cancel the booking and agencies will be notified.": "Termín je rezervovaný. Zmazaním sa zruší rezervácia a agentúry budú informované.",
        "This slot is booked. Agencies will be notified about the time change.": "Termín je rezervovaný. Agentúry budú informované o zmene času.",
        "Error updating slot:": "Chyba pri úprave termínu:",
        "Error deleting slot:": "Chyba pri mazaní termínu:",
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
        "Internal Notes": "Interné poznámky",
        "No internal notes": "Zatiaľ žiadne interné poznámky",
        "Interview Pack": "Interview Pack",
        "Open Interview Pack": "Otvoriť Interview Pack",
        "Buyer I Interview Pack": "Buyer I – Master Interview Pack",
        "Save Interview Pack": "Uložiť Interview Pack",
        "Interview pack saved": "Interview Pack bol uložený",
        "Error saving interview pack": "Chyba pri ukladaní Interview Packu",
        "Assessor 1": "Hodnotiteľ 1",
        "Assessor 2": "Hodnotiteľ 2",
        "Interview date": "Dátum pohovoru",
        "Candidate source type": "Zdroj kandidáta",
        "Internal": "Interný",
        "External": "Externý",
        "Location": "Lokalita",
        "Role type": "Typ role",
        "Salaried": "Mesačná mzda",
        "Hourly": "Hodinová mzda",
        "Candidate responses / notes": "Odpovede kandidáta / poznámky",
        "Positive indicators": "Pozitívne indikátory",
        "Rating": "Hodnotenie",
        "Section score": "Skóre sekcie",
        "Total score": "Celkové skóre",
        "Percentage": "Percentá",
        "Skills validation": "Validácia zručností",
        "Carry over to skills matrix": "Preniesť do skills matrix",
        "Questions asked by candidate": "Otázky kandidáta počas pohovoru",
        "Recommend for offer": "Odporučiť na ponuku",
        "Yes": "Áno",
        "No": "Nie",
        "Possible": "Možno",
        "HR Comments": "Komentáre / feedback HR",
        "HR Representative": "Meno zástupcu HR",
        "Signed": "Podpísané",
        "Autosaved": "Automaticky uložené",
        "Custom question text": "Napíšte follow-up otázku",
        "Interview details": "Detaily pohovoru",
        "Setup": "Príprava",
        "Section": "Sekcia",
        "Matrix": "Matica",
        "Outcome": "Výsledok",
        "Evidenced": "Evidované",
        "Evidenced in": "Evidované v",
        "Interview notes placeholder": "Poznámky z pohovoru...",
        "Fails": "Nespĺňa",
        "Partial": "Čiastočne",
        "Meets": "Spĺňa",
        "Exceeds some": "Čiastočne prevyšuje",
        "Exceeds all": "Plne prevyšuje",
        "Loading Interview Pack": "Načítavam Interview Pack...",
        "Date": "Dátum",
        "Add internal note": "Pridať internú poznámku",
        "Internal note placeholder": "Sem napíšte internú poznámku pre recruitera / manažéra...",
        "Save internal note": "Uložiť internú poznámku",
        "Saving note...": "Ukladám poznámku...",
        "Internal note added": "Interná poznámka bola pridaná.",
        "Error adding internal note": "Chyba pri pridávaní internej poznámky:",
        "Added by": "Pridal",
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
let currentRequestsBaseCache = [];
let currentRequestContractMode = 'permanent';
let currentCandidateViewMode = 'permanent';
let candidateBaseListCache = [];
let candidatePaginationCache = null;
let interimPositionsCache = new Set();

function isAgencyRole(userOrRole) {
    const role = typeof userOrRole === 'string' ? userOrRole : userOrRole?.role;
    return role === 'agency' || role === 'agency-interim';
}

function canAccessInternalCandidateNotes(userInfo) {
    const role = userInfo?.role;
    return role === 'gm' || role === 'recruiter' || role === 'Manager' || role === 'manager';
}

function escapeHtml(value) {
    return String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function formatInternalNoteTimestamp(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleString('sk-SK');
}

function getErrorMessage(error, fallback = 'Unknown error') {
    if (!error) return fallback;
    if (typeof error === 'string') return error;
    if (error.message) return error.message;
    if (error.details) return error.details;
    try {
        return JSON.stringify(error);
    } catch (jsonError) {
        return fallback;
    }
}

function renderInternalCandidateNotes(notes = []) {
    if (!Array.isArray(notes) || notes.length === 0) {
        return `<p class="internal-notes-empty" data-translate="No internal notes">${window.uiManager.translate('No internal notes')}</p>`;
    }

    return notes.map((note) => {
        const author = note.created_by_email || note.created_by_role || window.uiManager.translate('Not assigned');
        const createdAt = formatInternalNoteTimestamp(note.created_at);
        return `
            <article class="internal-note-item">
                <header class="internal-note-meta">
                    <span class="internal-note-author">${window.uiManager.translate('Added by')}: ${escapeHtml(author)}</span>
                    <time class="internal-note-time" datetime="${escapeHtml(note.created_at || '')}">${escapeHtml(createdAt)}</time>
                </header>
                <p class="internal-note-text">${escapeHtml(note.note_text || '')}</p>
            </article>
        `;
    }).join('');
}

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
        if (window.interviewPackManager) {
            window.interviewPackManager.init(supabase);
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
            if (isAgencyRole(userInfo)) {
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
                if (isAgencyRole(userInfo)) {
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

function closeInterviewPackLayout() {
    document.body.classList.remove('interview-pack-open');
    window._interviewPackState = null;
}

async function showCandidates() {
    closeInterviewPackLayout();
    try {
        window.uiManager.showLoading('Loading candidates...');
        const savedMode = sessionStorage.getItem('candidateViewMode');
        if (savedMode === 'permanent' || savedMode === 'interim') {
            currentCandidateViewMode = savedMode;
        }
        
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
        const interimPositions = await fetchInterimPositions();
        candidateBaseListCache = (result.candidates || []).filter(c => c.in_talent_pool !== true);
        candidatePaginationCache = result.pagination || null;
        interimPositionsCache = interimPositions;
        renderCurrentCandidateMode();
    } catch (error) {
        console.error('Error loading candidates:', error);
        window.utils.showMessage('Error loading candidates: ' + error.message, 'error');
    }
}

async function showTalentPool() {
    try {
        const userInfo = window.authManager.getUserInfo();
        const canViewTalentPool = userInfo && (userInfo.role === 'recruiter' || userInfo.role === 'gm');
        if (!canViewTalentPool) {
            window.utils.showMessage(window.uiManager.translate('Talent Pool Access denied'), 'error');
            return;
        }

        window.uiManager.showLoading('Loading candidates...');
        const savedMode = sessionStorage.getItem('candidateViewMode');
        if (savedMode === 'permanent' || savedMode === 'interim') {
            currentCandidateViewMode = savedMode;
        }

        const result = await window.candidatesManager.getCandidates({
            page: 1,
            pageSize: 1000
        });

        const talentPoolCandidates = (result.candidates || []).filter(c => c.in_talent_pool === true);
        const interimPositions = await fetchInterimPositions();
        const { permanentCandidates, interimCandidates } = splitCandidatesByMode(talentPoolCandidates, interimPositions);
        const currentModeCandidates = currentCandidateViewMode === 'interim' ? interimCandidates : permanentCandidates;
        const groupedPool = getTalentPoolGroups(currentModeCandidates);

        const app = document.getElementById('app');
        app.innerHTML = `
            <div class="candidates-layout mode-${currentCandidateViewMode}">
                <section class="talent-pool-section card">
                    <div class="talent-pool-section__head">
                        <h2 data-translate="Talent Pool">${window.uiManager.translate('Talent Pool')}</h2>
                        <p class="talent-pool-section__subtitle" data-translate="Talent Pool subtitle"></p>
                        <div class="candidate-mode-switcher" role="group" aria-label="${window.uiManager.translate('Switch candidate mode')}">
                            <button
                                type="button"
                                class="candidate-mode-btn candidate-mode-btn--permanent ${currentCandidateViewMode === 'permanent' ? 'active' : ''}"
                                onclick="setTalentPoolViewMode('permanent')"
                                data-translate="Permanent Candidates"
                            >
                                ${window.uiManager.translate('Permanent Candidates')} (${permanentCandidates.length})
                            </button>
                            <button
                                type="button"
                                class="candidate-mode-btn candidate-mode-btn--interim ${currentCandidateViewMode === 'interim' ? 'active' : ''}"
                                onclick="setTalentPoolViewMode('interim')"
                                data-translate="Interim Candidates"
                            >
                                ${window.uiManager.translate('Interim Candidates')} (${interimCandidates.length})
                            </button>
                        </div>
                    </div>
                    <div id="talent-pool-only-body" class="talent-pool-section__body"></div>
                </section>
            </div>
        `;

        const body = document.getElementById('talent-pool-only-body');
        if (body) {
            const keys = Object.keys(groupedPool);
            if (keys.length > 0) {
                keys.forEach(groupKey => {
                    const groupCandidates = groupedPool[groupKey] || [];
                    if (groupCandidates.length > 0) {
                        const label = getTalentPoolLabel(groupCandidates[0]);
                        body.appendChild(createCandidateTable(groupCandidates, label));
                    }
                });
            } else {
                const empty = document.createElement('p');
                empty.className = 'talent-pool-section__empty';
                empty.setAttribute('data-translate', 'No talent pool candidates');
                empty.textContent = window.uiManager.translate('No talent pool candidates');
                body.appendChild(empty);
            }
        }

        window.uiManager.translatePage();
    } catch (error) {
        console.error('Error loading talent pool:', error);
        window.utils.showMessage('Error loading talent pool: ' + error.message, 'error');
    }
}

async function fetchInterimPositions() {
    try {
        const userInfo = window.authManager.getUserInfo();
        const isManagerRole = userInfo && (userInfo.role === 'Manager' || userInfo.role === 'manager');
        let requests = [];

        if (isManagerRole && userInfo.department) {
            // For managers, determine interim positions from the whole department
            // so they can see both permanent and interim candidates in that department.
            const { data, error } = await window.supabase
                .from('recruiting_requests')
                .select('position, contract_type, position_type, department')
                .eq('department', userInfo.department)
                .limit(1000);
            if (error) throw error;
            requests = data || [];
        } else {
            const requestResult = await window.requestsManager.getRequests({
                page: 1,
                pageSize: 1000
            });
            requests = requestResult?.requests || [];
        }

        return new Set(
            requests
                .filter(r => (r.contract_type === 'interim' || r.position_type === 'interim') && r.position)
                .map(r => r.position)
        );
    } catch (error) {
        console.warn('Could not load interim positions for candidate switcher:', error);
        return new Set();
    }
}

function splitCandidatesByMode(candidates, interimPositions) {
    const interimPositionSet = new Set(
        Array.from(interimPositions || []).map((p) => String(p || '').trim().toLowerCase())
    );
    const isInterimByLinkedRequest = (candidate) => {
        const request = candidate?.recruiting_request;
        if (!request || typeof request !== 'object') return false;
        return request.contract_type === 'interim' || request.position_type === 'interim';
    };
    const isInterimPosition = (position) => interimPositionSet.has(String(position || '').trim().toLowerCase());
    const isInterimCandidate = (candidate) =>
        isInterimByLinkedRequest(candidate) || isInterimPosition(candidate?.position);
    const interimCandidates = candidates.filter(c => isInterimCandidate(c));
    const permanentCandidates = candidates.filter(c => !isInterimCandidate(c));
    return { permanentCandidates, interimCandidates };
}

function getTalentPoolLabel(candidate) {
    const targetType = candidate?.talent_pool_target_type;
    const targetValue = candidate?.talent_pool_target_value || '';
    if (!targetValue) {
        return window.uiManager.translate('Talent Pool');
    }
    const typeLabel = targetType === 'position'
        ? window.uiManager.translate('By Position')
        : window.uiManager.translate('By Department');
    return `${window.uiManager.translate('Talent Pool')} - ${typeLabel}: ${targetValue}`;
}

function getTalentPoolGroups(candidates) {
    return candidates.reduce((acc, candidate) => {
        const type = candidate.talent_pool_target_type === 'position' ? 'position' : 'department';
        const value = (candidate.talent_pool_target_value || '').trim() || window.uiManager.translate('Not assigned');
        const key = `${type}:${value}`;
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(candidate);
        return acc;
    }, {});
}

function renderCurrentCandidateMode() {
    const { permanentCandidates, interimCandidates } = splitCandidatesByMode(candidateBaseListCache, interimPositionsCache);
    const modeCandidates = currentCandidateViewMode === 'interim' ? interimCandidates : permanentCandidates;
    renderCandidatesView({
        candidates: modeCandidates,
        pagination: candidatePaginationCache,
        modeMeta: {
            permanentCount: permanentCandidates.length,
            interimCount: interimCandidates.length
        }
    });
}

function setCandidateViewMode(mode) {
    if (mode !== 'permanent' && mode !== 'interim') {
        return;
    }
    currentCandidateViewMode = mode;
    sessionStorage.setItem('candidateViewMode', mode);
    renderCurrentCandidateMode();
}

function setTalentPoolViewMode(mode) {
    if (mode !== 'permanent' && mode !== 'interim') {
        return;
    }
    currentCandidateViewMode = mode;
    sessionStorage.setItem('candidateViewMode', mode);
    showTalentPool();
}

function renderCandidatesView(result) {
    const app = document.getElementById('app');
    const { candidates, pagination, modeMeta } = result;
    const candidateMainTitleKey = currentCandidateViewMode === 'interim' ? 'Interim Candidates' : 'Permanent Candidates';

    console.log('Total candidates loaded:', candidates.length);
    console.log('Candidates data:', candidates);

    const filterUser = window.authManager.getUserInfo();
    const isRecruiterOrGm = filterUser && (filterUser.role === 'recruiter' || filterUser.role === 'gm');
    const pendingAgencyCandidates = isRecruiterOrGm
        ? candidates.filter(c => c.status === 'Pending Recruiter Review')
        : [];
    const baseCandidates = candidates.filter(c => c.in_talent_pool !== true);
    const mainCandidates = isRecruiterOrGm
        ? baseCandidates.filter(c => c.status !== 'Pending Recruiter Review')
        : baseCandidates;

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
    <div class="candidates-layout mode-${currentCandidateViewMode}">
        <section class="candidates-hero">
            <div class="candidates-hero-text">
                <h2 data-translate="${candidateMainTitleKey}">${window.uiManager.translate(candidateMainTitleKey)}</h2>
                <p class="candidates-subtitle" data-translate="View and manage candidates by status">View and manage candidates by status</p>
                <div class="candidate-mode-switcher" role="group" aria-label="${window.uiManager.translate('Switch candidate mode')}">
                    <button
                        type="button"
                        class="candidate-mode-btn candidate-mode-btn--permanent ${currentCandidateViewMode === 'permanent' ? 'active' : ''}"
                        onclick="setCandidateViewMode('permanent')"
                        data-translate="Permanent Candidates"
                    >
                        ${window.uiManager.translate('Permanent Candidates')} (${modeMeta?.permanentCount ?? 0})
                    </button>
                    <button
                        type="button"
                        class="candidate-mode-btn candidate-mode-btn--interim ${currentCandidateViewMode === 'interim' ? 'active' : ''}"
                        onclick="setCandidateViewMode('interim')"
                        data-translate="Interim Candidates"
                    >
                        ${window.uiManager.translate('Interim Candidates')} (${modeMeta?.interimCount ?? 0})
                    </button>
                </div>
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
    const isAgency = isAgencyRole(userInfo);
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
    const isManagerRole = userInfo && (userInfo.role === 'Manager' || userInfo.role === 'manager');
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
    if (!isGMOrRecruiter && !isManagerRole && userAllowedPositions.length > 0) {
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
    const isAgency = isAgencyRole(userInfo);
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
    const userInfo = window.authManager ? window.authManager.getUserInfo() : null;
    const canManageTalentPool = userInfo && (userInfo.role === 'recruiter' || userInfo.role === 'gm');
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
    if (canManageTalentPool && candidate.status && candidate.status.includes('Rejected')) {
        const moveButtonLabel = candidate.in_talent_pool
            ? window.uiManager.translate('Update Talent Pool')
            : window.uiManager.translate('Move to Talent Pool');
        const removeButton = candidate.in_talent_pool
            ? ` <button onclick="removeFromTalentPool(${candidate.id})" class="btn btn-danger" data-translate="Remove from Talent Pool">Remove from Talent Pool</button>`
            : '';
        const moveButton = `<button onclick="showTalentPoolModal(${candidate.id})" class="btn btn-info" data-translate="${candidate.in_talent_pool ? 'Update Talent Pool' : 'Move to Talent Pool'}">${moveButtonLabel}</button>`;
        buttons = buttons && !buttons.includes('No actions')
            ? `${buttons} ${moveButton}${removeButton}`
            : `${moveButton}${removeButton}`;
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

async function showTalentPoolModal(candidateId) {
    try {
        const candidate = await window.candidatesManager.getCandidateDetails(candidateId);
        if (!candidate) {
            window.utils.showMessage('Candidate not found.', 'error');
            return;
        }

        const modal = document.createElement('div');
        modal.id = 'talent-pool-modal';
        modal.className = 'modal';
        modal.style.display = 'block';

        const currentType = candidate.in_talent_pool
            ? (candidate.talent_pool_target_type === 'position' ? 'position' : 'department')
            : 'department';
        const currentValue = candidate.in_talent_pool
            ? (candidate.talent_pool_target_value || '')
            : '';
        const positionOptions = Object.values(departmentPositions)
            .flat()
            .filter(Boolean)
            .filter((value, idx, arr) => arr.indexOf(value) === idx)
            .sort();

        const renderTargetOptions = (type, selectedValue = '') => {
            const options = type === 'position'
                ? positionOptions
                : Object.keys(departmentPositions).sort();
            return options
                .map(item => `<option value="${item}" ${selectedValue === item ? 'selected' : ''}>${item}</option>`)
                .join('');
        };

        modal.innerHTML = `
            <div class="modal-content talent-pool-modal">
                <div class="modal-header">
                    <h2 data-translate="${candidate.in_talent_pool ? 'Update Talent Pool' : 'Add to Talent Pool'}"></h2>
                    <span class="close" onclick="closeTalentPoolModal()">&times;</span>
                </div>
                <div class="talent-pool-modal-content">
                    <p class="talent-pool-modal-candidate"><strong>${candidate.name || '-'}</strong> - ${candidate.position || '-'}</p>
                    <div class="form-group">
                        <label for="talent-pool-target-type" data-translate="Talent Pool target type"></label>
                        <select id="talent-pool-target-type">
                            <option value="department" ${currentType === 'department' ? 'selected' : ''} data-translate="By Department">${window.uiManager.translate('By Department')}</option>
                            <option value="position" ${currentType === 'position' ? 'selected' : ''} data-translate="By Position">${window.uiManager.translate('By Position')}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="talent-pool-target-value" data-translate="Talent Pool target"></label>
                        <select id="talent-pool-target-value">
                            ${renderTargetOptions(currentType, currentValue)}
                        </select>
                    </div>
                    <div class="talent-pool-modal-actions">
                        <button type="button" class="btn btn-secondary" onclick="closeTalentPoolModal()" data-translate="Cancel">Cancel</button>
                        <button type="button" class="btn btn-primary" onclick="saveTalentPoolSelection(${candidateId})" data-translate="${candidate.in_talent_pool ? 'Update Talent Pool' : 'Add to Talent Pool'}"></button>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        const typeSelect = document.getElementById('talent-pool-target-type');
        const valueSelect = document.getElementById('talent-pool-target-value');
        if (typeSelect && valueSelect) {
            typeSelect.addEventListener('change', () => {
                const selectedType = typeSelect.value;
                valueSelect.innerHTML = renderTargetOptions(selectedType, '');
            });
        }

        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeTalentPoolModal();
            }
        });
        window.uiManager.translatePage();
    } catch (error) {
        window.utils.showMessage('Error opening Talent Pool form: ' + error.message, 'error');
    }
}

function closeTalentPoolModal() {
    const modal = document.getElementById('talent-pool-modal');
    if (modal) {
        modal.remove();
    }
}

async function saveTalentPoolSelection(candidateId) {
    try {
        const typeSelect = document.getElementById('talent-pool-target-type');
        const valueSelect = document.getElementById('talent-pool-target-value');
        if (!typeSelect || !valueSelect) {
            return;
        }

        const targetType = typeSelect.value;
        const targetValue = valueSelect.value;
        if (!targetType) {
            window.utils.showMessage(window.uiManager.translate('Select target type first'), 'warning');
            return;
        }
        if (!targetValue) {
            window.utils.showMessage(window.uiManager.translate('Talent Pool target') + ' is required.', 'warning');
            return;
        }

        await window.candidatesManager.setTalentPoolEntry(candidateId, {
            type: targetType,
            value: targetValue
        });

        closeTalentPoolModal();
        window.utils.showMessage(window.uiManager.translate('Candidate moved to Talent Pool'), 'success');
        showCandidates();
    } catch (error) {
        window.utils.showMessage('Error updating Talent Pool: ' + error.message, 'error');
    }
}

async function removeFromTalentPool(candidateId) {
    try {
        const confirmed = confirm(window.uiManager.translate('Remove from Talent Pool') + '?');
        if (!confirmed) {
            return;
        }
        await window.candidatesManager.removeTalentPoolEntry(candidateId);
        window.utils.showMessage(window.uiManager.translate('Candidate removed from Talent Pool'), 'success');
        showCandidates();
    } catch (error) {
        window.utils.showMessage('Error removing from Talent Pool: ' + error.message, 'error');
    }
}

async function downloadFile(candidateId, fileType) {
    try {
        await window.candidatesManager.downloadFile(candidateId, fileType);
    } catch (error) {
        window.utils.showMessage(`Error downloading ${fileType}: ` + error.message, 'error');
    }
}

async function downloadRequestDocument(requestId) {
    try {
        const supabase = getSupabase();
        if (!supabase) {
            throw new Error('Supabase client not initialized');
        }

        const { data: request, error: requestError } = await supabase
            .from('recruiting_requests')
            .select('job_description_file_path')
            .eq('id', requestId)
            .single();

        if (requestError) throw requestError;

        const filePath = request?.job_description_file_path;
        if (!filePath) {
            window.utils.showMessage(window.uiManager.translate('No Job Description Document'), 'info');
            return;
        }

        const { data: fileData, error: downloadError } = await supabase.storage
            .from('candidate-files')
            .download(filePath);

        if (downloadError) throw downloadError;

        const fileExt = filePath.includes('.') ? filePath.substring(filePath.lastIndexOf('.')) : '';
        const url = URL.createObjectURL(fileData);
        const link = document.createElement('a');
        link.href = url;
        link.download = `job_description_request_${requestId}${fileExt}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Error downloading job description document:', error);
        window.utils.showMessage('Error downloading document: ' + error.message, 'error');
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
        const savedMode = sessionStorage.getItem('requestContractMode');
        if (savedMode === 'permanent' || savedMode === 'interim') {
            currentRequestContractMode = savedMode;
        }
        
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

function resolveRequestContractType(request) {
    if (request?.contract_type === 'interim' || request?.contract_type === 'permanent') {
        return request.contract_type;
    }
    // Backward compatibility for legacy data before contract_type existed.
    return request?.position_type === 'interim' ? 'interim' : 'permanent';
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
    currentRequestsBaseCache = sortedRequests;

    const requestModeCounts = {
        permanent: sortedRequests.filter(r => resolveRequestContractType(r) === 'permanent').length,
        interim: sortedRequests.filter(r => resolveRequestContractType(r) === 'interim').length
    };
    const modeRequests = sortedRequests.filter(r => resolveRequestContractType(r) === currentRequestContractMode);
    currentRequestsCache = modeRequests;

    const counts = {
        pending: modeRequests.filter(r => r.status === 'Pending').length,
        approved: modeRequests.filter(r => r.status === 'Approved').length,
        paused: modeRequests.filter(r => r.status === 'Paused').length,
        filled: modeRequests.filter(r => r.status === 'Filled').length,
        rejected: modeRequests.filter(r => r.status === 'Rejected').length
    };

    const requestTypeLabel = window.uiManager.translate(currentRequestContractMode === 'interim' ? 'Interim' : 'Permanent');

    let html = `
        <div class="requests-layout mode-${currentRequestContractMode}">
        <div class="requests-header">
            <div class="requests-header__text">
                <h2 data-translate="Recruiting Requests">Recruiting Requests</h2>
                <p class="requests-subtitle"><span data-translate="Current Request Type">Current request type</span>: ${requestTypeLabel}</p>
            </div>
            <div class="requests-type-pill requests-type-pill--${currentRequestContractMode}">
                ${requestTypeLabel}
            </div>
        </div>
        <div style="display: flex; gap: 10px; margin-bottom: 20px;">
        <button onclick="showNewRequest()" class="btn btn-primary" data-translate="Create New Request">Create New Request</button>
            <button onclick="showExportModal()" class="btn btn-secondary" data-translate="Download Excel">Download Excel</button>
        </div>
        <div class="requests-mode-switcher" role="group" aria-label="${window.uiManager.translate('Switch request mode')}">
            <button
                type="button"
                class="requests-mode-btn requests-mode-btn--permanent ${currentRequestContractMode === 'permanent' ? 'active' : ''}"
                onclick="setRequestViewMode('permanent')"
                data-translate="Permanent"
            >
                ${window.uiManager.translate('Permanent')} (${requestModeCounts.permanent})
            </button>
            <button
                type="button"
                class="requests-mode-btn requests-mode-btn--interim ${currentRequestContractMode === 'interim' ? 'active' : ''}"
                onclick="setRequestViewMode('interim')"
                data-translate="Interim"
            >
                ${window.uiManager.translate('Interim')} (${requestModeCounts.interim})
            </button>
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
        </div>
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

function setRequestViewMode(mode) {
    if (mode !== 'permanent' && mode !== 'interim') {
        return;
    }
    currentRequestContractMode = mode;
    sessionStorage.setItem('requestContractMode', mode);
    renderRequestsView({ requests: currentRequestsBaseCache });
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
                <p><strong data-translate="Job Description Document">Job Description Document:</strong> ${
                    request.job_description_file_path
                        ? `<button onclick="downloadRequestDocument(${request.id})" class="btn btn-secondary" data-translate="Download Job Description Document">Download Job Description Document</button>`
                        : `<span data-translate="No Job Description Document">No Job Description Document</span>`
                }</p>
                <p><strong data-translate="Position Type">Position Type:</strong> ${request.position_type || 'N/A'}</p>
                <p><strong data-translate="Contract Type">Contract Type:</strong> ${request.contract_type ? window.uiManager.translate(request.contract_type === 'interim' ? 'Interim' : 'Permanent') : 'N/A'}</p>
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
        
        if (request.position_type === 'new') {
            if (request.new_stredisko) {
                detailsHtml += `<p><strong data-translate="New center (str)">Nové stredisko (str):</strong> ${request.new_stredisko}</p>`;
            }
            if (request.new_oddelenie) {
                detailsHtml += `<p><strong data-translate="New department org (odd)">Nové oddelenie (odd):</strong> ${request.new_oddelenie}</p>`;
            }
            if (request.new_utvar) {
                detailsHtml += `<p><strong data-translate="New unit (utvar)">Nový útvar (utvar):</strong> ${request.new_utvar}</p>`;
            }
            if (request.new_position_reason) {
                detailsHtml += `<p><strong data-translate="Reason for New Position">Reason for New Position:</strong> ${request.new_position_reason}</p>`;
            }
        } else if (request.position_type === 'replacement' && request.replacement_name) {
            detailsHtml += `<p><strong data-translate="Name of Person Being Replaced">Name of Person Being Replaced:</strong> ${request.replacement_name}</p>`;
        }

        if (request.has_final_interview_participant) {
            detailsHtml += `<p><strong data-translate="Final Interview Participant Name">Final interview participant name:</strong> ${request.final_interview_participant_name || '—'}</p>`;
            if (request.final_interview_participant_note) {
                detailsHtml += `<p><strong data-translate="Final Interview Participant Note">Final interview participant note:</strong> ${request.final_interview_participant_note}</p>`;
            }
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
                    <select id="position" name="position" required onchange="toggleCustomPositionField()">
                        <option value="" data-translate="Select Position">Najprv vyberte oddelenie</option>
                </select>
            </div>

            <div id="custom-position-fields" class="hidden">
                <div class="form-group">
                        <label for="custom-position" data-translate="Enter custom position">Zadajte názov pozície:</label>
                        <input type="text" id="custom-position" name="custom_position">
                </div>
            </div>
                
            <div class="form-group">
                    <label for="description" data-translate="Job Description">Popis práce:</label>
                    <textarea id="description" name="description" rows="4" required></textarea>
            </div>
                
            <div class="form-group">
                    <label for="job-description-file" data-translate="Upload Job Description Document">Upload Job Description Document (PDF/DOC/DOCX):</label>
                    <input type="file" id="job-description-file" name="job_description_file" accept=".pdf,.doc,.docx">
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

            <div class="form-group">
                    <label data-translate="Contract Type">Typ zmluvy:</label>
                    <div class="radio-group">
                        <label class="radio-label">
                        <input type="radio" id="contract-permanent" name="contract-type" value="permanent" required>
                            <span data-translate="Permanent">Trvalý</span>
                    </label>
                        <label class="radio-label">
                        <input type="radio" id="contract-interim" name="contract-type" value="interim" required>
                            <span data-translate="Interim">Interim</span>
                    </label>
                </div>
            </div>
                
            <div id="new-position-fields" class="hidden">
                <div class="org-structure-row">
                    <div class="form-group searchable-select-field">
                        <label for="new-org-str" data-translate="New center (str)">Nové stredisko (str)</label>
                        <div class="searchable-select-wrap">
                            <input type="text" id="new-org-str" class="searchable-select-input" maxlength="120">
                            <div id="new-org-str-list" class="searchable-select-list" role="listbox"></div>
                        </div>
                        <p class="form-field-hint" data-translate="Org field hint">Kliknite a vyberte zo zoznamu, alebo začnite písať pre filtrovanie.</p>
                    </div>
                    <div class="form-group searchable-select-field">
                        <label for="new-org-odd" data-translate="New department org (odd)">Nové oddelenie (odd)</label>
                        <div class="searchable-select-wrap">
                            <input type="text" id="new-org-odd" class="searchable-select-input" maxlength="120">
                            <div id="new-org-odd-list" class="searchable-select-list" role="listbox"></div>
                        </div>
                        <p class="form-field-hint" data-translate="Org field hint">Kliknite a vyberte zo zoznamu, alebo začnite písať pre filtrovanie.</p>
                    </div>
                    <div class="form-group searchable-select-field">
                        <label for="new-org-utvar" data-translate="New unit (utvar)">Nový útvar (utvar)</label>
                        <div class="searchable-select-wrap">
                            <input type="text" id="new-org-utvar" class="searchable-select-input" maxlength="120">
                            <div id="new-org-utvar-list" class="searchable-select-list" role="listbox"></div>
                        </div>
                        <p class="form-field-hint" data-translate="Org field hint">Kliknite a vyberte zo zoznamu, alebo začnite písať pre filtrovanie.</p>
                    </div>
                </div>
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

            <div class="form-group">
                <label>
                        <input type="checkbox" id="add-final-interview-participant" name="add_final_interview_participant" onchange="toggleFinalInterviewParticipantFields()">
                        <span data-translate="Add Final Interview Participant">Pridať osobu, ktorá sa zúčastní finálneho interview</span>
                </label>
            </div>

            <div id="final-interview-participant-fields" class="hidden">
                <div class="form-group">
                        <label for="final-interview-participant-name" data-translate="Final Interview Participant Name">Meno osoby pre finálne interview:</label>
                        <input type="text" id="final-interview-participant-name" name="final_interview_participant_name">
                </div>
                <div class="form-group">
                        <label for="final-interview-participant-note" data-translate="Final Interview Participant Note">Popis k osobe pre finálne interview:</label>
                        <textarea id="final-interview-participant-note" name="final_interview_participant_note" rows="3"></textarea>
                </div>
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

    if (window.orgStructurePicker) {
        window.orgStructurePicker.initOrgStructurePickers(getSupabase()).catch((error) => {
            console.warn('Org structure pickers init:', error);
        });
    }

    window.uiManager.translatePage();
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

    const customOption = document.createElement('option');
    customOption.value = '__custom__';
    customOption.textContent = window.uiManager ? window.uiManager.translate('Position not in list') : 'Position not in list';
    positionSelect.appendChild(customOption);

    toggleCustomPositionField();
}

function toggleCustomPositionField() {
    const positionSelect = document.getElementById('position');
    const customPositionFields = document.getElementById('custom-position-fields');
    const customPositionInput = document.getElementById('custom-position');
    if (!positionSelect || !customPositionFields) return;

    const isCustom = positionSelect.value === '__custom__';
    customPositionFields.classList.toggle('hidden', !isCustom);
    if (!isCustom && customPositionInput) {
        customPositionInput.value = '';
    }
}

function togglePositionTypeFields() {
    const newPositionFields = document.getElementById('new-position-fields');
    const replacementFields = document.getElementById('replacement-fields');
    const positionType = document.querySelector('input[name="position-type"]:checked').value;

    if (positionType === 'new') {
        newPositionFields.classList.remove('hidden');
        replacementFields.classList.add('hidden');
        if (window.orgStructurePicker) {
            window.orgStructurePicker.initOrgStructurePickers(getSupabase()).catch((error) => {
                console.warn('Org structure pickers init:', error);
            });
        }
    } else if (positionType === 'replacement') {
        newPositionFields.classList.add('hidden');
        replacementFields.classList.remove('hidden');
        if (window.orgStructurePicker) {
            window.orgStructurePicker.resetPickers();
        }
    } else {
        newPositionFields.classList.add('hidden');
        replacementFields.classList.add('hidden');
        if (window.orgStructurePicker) {
            window.orgStructurePicker.resetPickers();
        }
    }
}

function toggleFinalInterviewParticipantFields() {
    const finalParticipantFields = document.getElementById('final-interview-participant-fields');
    const isEnabled = document.getElementById('add-final-interview-participant')?.checked;
    if (!finalParticipantFields) return;

    if (isEnabled) {
        finalParticipantFields.classList.remove('hidden');
    } else {
        finalParticipantFields.classList.add('hidden');
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
    const selectedPosition = document.getElementById('position').value;
    const customPosition = document.getElementById('custom-position')?.value?.trim() || '';
    const position = selectedPosition === '__custom__' ? customPosition : selectedPosition;
    const description = document.getElementById('description').value;
    const headcount = parseInt(document.getElementById('headcount').value, 10);
    const positionType = document.querySelector('input[name="position-type"]:checked')?.value;
    const contractType = document.querySelector('input[name="contract-type"]:checked')?.value;
    const positionCategory = document.querySelector('input[name="position-category"]:checked')?.value;
    const isConfidential = document.getElementById('confidential-request').checked;
    const jobDescriptionFile = document.getElementById('job-description-file')?.files?.[0];
    const addFinalInterviewParticipant = document.getElementById('add-final-interview-participant')?.checked;
    const finalInterviewParticipantName = document.getElementById('final-interview-participant-name')?.value?.trim() || null;
    const finalInterviewParticipantNote = document.getElementById('final-interview-participant-note')?.value?.trim() || null;

    let newPositionReason = null;
    let replacementName = null;
    let jobDescriptionFilePath = null;

    let newStredisko = null;
    let newOddelenie = null;
    let newUtvar = null;

    if (positionType === 'new') {
        newPositionReason = document.getElementById('new-position-reason').value;
        if (window.orgStructurePicker) {
            const orgValues = window.orgStructurePicker.getValues();
            newStredisko = orgValues.str?.code || orgValues.str?.label || null;
            newOddelenie = orgValues.odd?.code || orgValues.odd?.label || null;
            newUtvar = orgValues.utvar?.code || orgValues.utvar?.label || null;
        }
    } else if (positionType === 'replacement') {
        replacementName = document.getElementById('replacement-name').value;
    }

    if (selectedPosition === '__custom__' && !customPosition) {
        window.utils.showMessage(window.uiManager.translate('Custom position is required.'), 'error');
        return;
    }

    if (addFinalInterviewParticipant && !finalInterviewParticipantName) {
        window.utils.showMessage(window.uiManager.translate('Final interview participant name is required.'), 'error');
        return;
    }

    if (jobDescriptionFile) {
        const fileValidation = window.utils.validateFile(jobDescriptionFile);
        if (!fileValidation.isValid) {
            window.utils.showMessage(fileValidation.message, 'error');
            return;
        }

        const fileExt = jobDescriptionFile.name.substring(jobDescriptionFile.name.lastIndexOf('.'));
        const fileName = `requests/job_description_${Date.now()}${fileExt}`;
        const { data: uploadData, error: uploadError } = await supabase.storage
            .from('candidate-files')
            .upload(fileName, jobDescriptionFile);

        if (uploadError) {
            throw uploadError;
        }
        jobDescriptionFilePath = uploadData.path;
    }

    // Validation
    if (!department || !position || !description || !headcount || !positionType || !contractType || !positionCategory) {
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
        contract_type: contractType,
        position_category: positionCategory,
        is_confidential: isConfidential,
        new_position_reason: newPositionReason,
        new_stredisko: newStredisko,
        new_oddelenie: newOddelenie,
        new_utvar: newUtvar,
        replacement_name: replacementName,
        job_description_file_path: jobDescriptionFilePath,
        has_final_interview_participant: !!addFinalInterviewParticipant,
        final_interview_participant_name: addFinalInterviewParticipant ? finalInterviewParticipantName : null,
        final_interview_participant_note: addFinalInterviewParticipant ? finalInterviewParticipantNote : null
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
    if (isAgencyRole(userInfo)) {
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
    if (!isAgencyRole(userInfo)) {
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
        const isInterimAgency = userInfo.role === 'agency-interim';
        const assessmentLabelKey = isInterimAgency
            ? 'Upload Assessment Form (optional)'
            : 'Upload Assessment Form';
        const assessmentRequiredAttr = isInterimAgency ? '' : 'required';
        const commentPlaceholder = window.uiManager.translate('Brief comment placeholder');
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
                            <label data-translate="${assessmentLabelKey}">Upload Assessment Form</label>
                            <input type="file" id="agency-candidate-assessment" accept=".pdf,.doc,.docx" ${assessmentRequiredAttr}>
                        </div>
                        <div class="form-group" style="margin-bottom: 1rem;">
                            <label for="agency-candidate-comment" data-translate="Brief comment (optional)">Brief comment (optional)</label>
                            <textarea id="agency-candidate-comment" class="filter-select" style="width:100%; min-height:88px; resize:vertical;" maxlength="500" rows="3" placeholder="${commentPlaceholder.replace(/"/g, '&quot;')}"></textarea>
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
            const comment = document.getElementById('agency-candidate-comment').value.trim();
            try {
                window.uiManager.showLoading();
                const result = await window.candidatesManager.addCandidateAsAgency({
                    name,
                    recruiting_request_id: reqId,
                    cvFile,
                    assessmentFile,
                    comment
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
        toggleCandidateCustomPositionField();
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

    const customOption = document.createElement('option');
    customOption.value = '__custom__';
    customOption.textContent = translations[currentLanguage]['Position not in list'] || 'Pozícia nie je v zozname';
    positionSelect.appendChild(customOption);

    toggleCandidateCustomPositionField();
}

function toggleCandidateCustomPositionField() {
    const positionSelect = document.getElementById('candidate-position');
    const customPositionFields = document.getElementById('candidate-custom-position-fields');
    const customPositionInput = document.getElementById('candidate-custom-position');
    if (!positionSelect || !customPositionFields) return;

    const isCustom = positionSelect.value === '__custom__';
    customPositionFields.classList.toggle('hidden', !isCustom);
    if (!isCustom && customPositionInput) {
        customPositionInput.value = '';
    }
}

async function addCandidate() {
    try {
        const selectedPosition = document.getElementById('candidate-position').value;
        const customPosition = document.getElementById('candidate-custom-position')?.value?.trim() || '';
        const position = selectedPosition === '__custom__' ? customPosition : selectedPosition;

        const formData = {
            name: document.getElementById('candidate-name').value.trim(),
            position: position,
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

        if (selectedPosition === '__custom__' && !customPosition) {
            alert(translations[currentLanguage]['Enter custom position'] || 'Prosím zadajte názov pozície');
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

async function showInterviewPack(candidateId, packKey = 'buyer_i_master', round = 'first') {
    const userInfo = window.authManager.getUserInfo();
    if (!canAccessInternalCandidateNotes(userInfo)) {
        window.utils.showMessage(window.uiManager.translate('Error'), 'error');
        return;
    }
    if (!window.interviewPackManager) {
        window.utils.showMessage('Interview Pack module not loaded', 'error');
        return;
    }

    try {
        window.uiManager.showLoading('Loading Interview Pack...');
        const candidate = await window.candidatesManager.getCandidateDetails(candidateId);
        const pack = window.interviewPackManager.localizePack
            ? window.interviewPackManager.localizePack(packKey)
            : window.interviewPackManager.getPack(packKey);
        let existing = null;
        try {
            existing = await window.interviewPackManager.getPackForCandidate(candidateId, packKey, round);
        } catch (loadError) {
            console.warn('Interview pack load error (table may be missing):', loadError);
            window.uiManager.hideLoading();
            window.utils.showMessage(
                (window.uiManager.translate('Error saving interview pack') || 'Error') +
                ': ' + (loadError.message || loadError) +
                ' — skontrolujte, či je nasadená migrácia candidate_interview_packs.',
                'error'
            );
            return;
        }

        const data = existing?.data
            ? JSON.parse(JSON.stringify(existing.data))
            : window.interviewPackManager.emptyData(candidate);

        if (!data.header) data.header = {};
        if (!data.header.candidateName) data.header.candidateName = candidate.name || '';
        if (!data.answers) data.answers = {};
        if (!data.skills) data.skills = {};

        window._interviewPackState = {
            candidateId,
            packKey,
            round,
            candidate,
            pack,
            data,
            recommendation: existing?.recommendation || '',
            dirty: false
        };

        window.uiManager.hideLoading();
        renderInterviewPackView();
    } catch (error) {
        console.error('Error opening interview pack:', error);
        window.uiManager.hideLoading();
        window.utils.showMessage((error.message || error), 'error');
    }
}

function collectInterviewPackFormData() {
    const state = window._interviewPackState;
    if (!state) return null;

    const root = document.getElementById('interview-pack-form');
    if (!root) return state.data;

    const data = state.data;
    data.header = {
        candidateName: root.querySelector('[name="header-candidateName"]')?.value || '',
        interviewDate: root.querySelector('[name="header-interviewDate"]')?.value || '',
        assessor1: root.querySelector('[name="header-assessor1"]')?.value || '',
        assessor2: root.querySelector('[name="header-assessor2"]')?.value || '',
        candidateSourceType: root.querySelector('[name="header-candidateSourceType"]')?.value || '',
        location: root.querySelector('[name="header-location"]')?.value || '',
        roleType: root.querySelector('[name="header-roleType"]')?.value || ''
    };

    data.answers = data.answers || {};
    (state.pack.sections || []).forEach(section => {
        (section.questions || []).forEach(q => {
            const notes = root.querySelector(`[name="notes-${q.id}"]`)?.value || '';
            const ratingRaw = root.querySelector(`[name="rating-${q.id}"]:checked`)?.value
                || root.querySelector(`[name="rating-${q.id}"]`)?.value
                || '';
            const customPrompt = root.querySelector(`[name="customPrompt-${q.id}"]`)?.value || '';
            data.answers[q.id] = {
                notes,
                rating: ratingRaw ? Number(ratingRaw) : null,
                customPrompt: q.customPrompt ? customPrompt : undefined
            };
        });
    });

    data.skills = data.skills || {};
    (state.pack.skills || []).forEach(skill => {
        data.skills[skill.id] = {
            evidenced: !!root.querySelector(`[name="skill-evidenced-${skill.id}"]`)?.checked,
            carryOver: !!root.querySelector(`[name="skill-carry-${skill.id}"]`)?.checked,
            detail: root.querySelector(`[name="skill-detail-${skill.id}"]`)?.value || ''
        };
    });

    data.candidateQuestions = root.querySelector('[name="candidateQuestions"]')?.value || '';
    data.hrComments = root.querySelector('[name="hrComments"]')?.value || '';
    data.hrName = root.querySelector('[name="hrName"]')?.value || '';
    data.hrSigned = !!root.querySelector('[name="hrSigned"]')?.checked;
    data.hrDate = root.querySelector('[name="hrDate"]')?.value || '';

    state.recommendation = root.querySelector('[name="recommendation"]:checked')?.value
        || root.querySelector('[name="recommendation"]')?.value
        || '';
    state.data = data;
    return data;
}

function updateInterviewPackScoreDisplay() {
    const state = window._interviewPackState;
    if (!state) return;
    collectInterviewPackFormData();
    const scores = window.interviewPackManager.calculateScores(state.pack, state.data);

    const totalEl = document.getElementById('ip-total-score');
    const pctEl = document.getElementById('ip-percentage');
    if (totalEl) totalEl.textContent = `${scores.total} / ${scores.max}`;
    if (pctEl) pctEl.textContent = `${scores.percentage} %`;

    Object.entries(scores.sectionScores || {}).forEach(([sectionId, s]) => {
        const el = document.getElementById(`ip-section-score-${sectionId}`);
        if (el) el.textContent = `${s.score} / ${s.max}`;
        const navEl = document.getElementById(`ip-nav-score-${sectionId}`);
        if (navEl) navEl.textContent = `${s.score}/${s.max}`;
    });
}

async function saveInterviewPack(opts = {}) {
    const { silent = false } = opts;
    const state = window._interviewPackState;
    if (!state) return;

    collectInterviewPackFormData();
    updateInterviewPackScoreDisplay();

    try {
        const saved = await window.interviewPackManager.savePack(
            state.candidateId,
            state.packKey,
            state.round,
            {
                data: state.data,
                recommendation: state.recommendation || null
            }
        );
        state.dirty = false;
        const status = document.getElementById('ip-save-status');
        if (status) {
            const when = new Date().toLocaleTimeString('sk-SK');
            status.textContent = `${window.uiManager.translate('Autosaved')} ${when}`;
        }
        if (!silent) {
            window.utils.showMessage(window.uiManager.translate('Interview pack saved'), 'success');
        }
        return saved;
    } catch (error) {
        console.error('Error saving interview pack:', error);
        if (!silent) {
            window.utils.showMessage(
                `${window.uiManager.translate('Error saving interview pack')}: ${error.message || error}`,
                'error'
            );
        }
        throw error;
    }
}

function scheduleInterviewPackAutosave() {
    const state = window._interviewPackState;
    if (!state) return;
    state.dirty = true;
    updateInterviewPackScoreDisplay();
    window.interviewPackManager.scheduleAutosave(() => saveInterviewPack({ silent: true }));
}

function renderInterviewPackQuestion(q, answer = {}) {
    const t = (k) => window.uiManager.translate(k);
    const rating = answer.rating != null ? Number(answer.rating) : null;
    const indicators = (q.indicators || []).map(i => `<li>${escapeHtml(i)}</li>`).join('');
    const followUps = (q.followUps || []).map(f => `<li>${escapeHtml(f)}</li>`).join('');
    const ratingLabels = {
        1: t('Fails'),
        2: t('Partial'),
        3: t('Meets'),
        4: t('Exceeds some'),
        5: t('Exceeds all')
    };

    const ratingButtons = [1, 2, 3, 4, 5].map(n => `
        <label class="ip-rating-option ${rating === n ? 'is-selected' : ''}" title="${escapeHtml(ratingLabels[n])}">
            <input type="radio" name="rating-${q.id}" value="${n}" ${rating === n ? 'checked' : ''}>
            <span class="ip-rating-num">${n}</span>
            <span class="ip-rating-label">${escapeHtml(ratingLabels[n])}</span>
        </label>
    `).join('');

    return `
        <article class="ip-question" data-question-id="${q.id}">
            <div class="ip-question-badge">${escapeHtml(q.id)}</div>
            <header class="ip-question-header">
                <h4>${escapeHtml(q.title)}</h4>
                <p class="ip-prompt">${escapeHtml(q.prompt)}</p>
                ${q.promptInternal ? `<p class="ip-prompt-alt"><em>${escapeHtml(q.promptInternal)}</em></p>` : ''}
                ${followUps ? `<ul class="ip-followups">${followUps}</ul>` : ''}
            </header>
            ${q.customPrompt ? `
                <label class="ip-field">
                    <span data-translate="Custom question text">${t('Custom question text')}</span>
                    <textarea name="customPrompt-${q.id}" rows="2" class="form-control ip-textarea">${escapeHtml(answer.customPrompt || '')}</textarea>
                </label>
            ` : ''}
            <div class="ip-question-grid">
                <label class="ip-field ip-notes-field">
                    <span data-translate="Candidate responses / notes">${t('Candidate responses / notes')}</span>
                    <textarea name="notes-${q.id}" rows="8" class="form-control ip-textarea" placeholder="${escapeHtml(t('Interview notes placeholder'))}">${escapeHtml(answer.notes || '')}</textarea>
                </label>
                <div class="ip-indicators">
                    <strong data-translate="Positive indicators">${t('Positive indicators')}</strong>
                    <ul>${indicators}</ul>
                </div>
            </div>
            <div class="ip-rating-row">
                <div class="ip-rating-title">
                    <span data-translate="Rating">${t('Rating')}</span>
                    <span class="ip-rating-hint">1–5</span>
                </div>
                <div class="ip-rating-scale" role="radiogroup" aria-label="${escapeHtml(q.title)}">
                    ${ratingButtons}
                </div>
            </div>
        </article>
    `;
}

function renderInterviewPackView() {
    const state = window._interviewPackState;
    if (!state) return;

    // Re-localize pack content for current language
    if (window.interviewPackManager?.localizePack) {
        state.pack = window.interviewPackManager.localizePack(state.packKey || 'buyer_i_master');
    }

    const t = (k) => window.uiManager.translate(k);
    const { pack, data, candidate, recommendation } = state;
    const scores = window.interviewPackManager.calculateScores(
        window.interviewPackManager.getPack(state.packKey || 'buyer_i_master'),
        data
    );
    const header = data.header || {};

    const navHtml = (pack.sections || []).map(section => {
        const sectionScore = scores.sectionScores[section.id] || { score: 0, max: section.maxScore };
        return `
            <a class="ip-nav-chip" href="#ip-section-${section.id}">
                <span class="ip-nav-chip-title">${escapeHtml(section.title)}</span>
                <span class="ip-nav-chip-score" id="ip-nav-score-${section.id}">${sectionScore.score}/${sectionScore.max}</span>
            </a>
        `;
    }).join('');

    const sectionsHtml = (pack.sections || []).map(section => {
        const sectionScore = scores.sectionScores[section.id] || { score: 0, max: section.maxScore };
        const intro = (section.intro || []).map(line => `<p class="ip-intro-line">${escapeHtml(line)}</p>`).join('');
        const questions = (section.questions || [])
            .map(q => renderInterviewPackQuestion(q, data.answers?.[q.id] || {}))
            .join('');

        return `
            <section class="ip-section" id="ip-section-${section.id}">
                <div class="ip-section-head">
                    <div>
                        <p class="ip-section-kicker" data-translate="Section">${t('Section')}</p>
                        <h3>${escapeHtml(section.title)}</h3>
                    </div>
                    <div class="ip-section-score-pill">
                        <span data-translate="Section score">${t('Section score')}</span>
                        <strong id="ip-section-score-${section.id}">${sectionScore.score} / ${sectionScore.max}</strong>
                    </div>
                </div>
                ${intro ? `<div class="ip-section-intro">${intro}</div>` : ''}
                ${section.note ? `<p class="ip-section-note">${escapeHtml(section.note)}</p>` : ''}
                <div class="ip-questions">${questions}</div>
            </section>
        `;
    }).join('');

    const skillsHtml = (pack.skills || []).map(skill => {
        const s = data.skills?.[skill.id] || {};
        return `
            <article class="ip-skill-card">
                <div class="ip-skill-main">
                    <h4>${escapeHtml(skill.skill)}</h4>
                    <p class="ip-skill-meta"><strong data-translate="Evidenced in">${t('Evidenced in')}:</strong> ${escapeHtml(skill.evidencedIn)}</p>
                    <p class="ip-skill-hint">${escapeHtml(skill.detail)}</p>
                </div>
                <div class="ip-skill-controls">
                    <label class="ip-check">
                        <input type="checkbox" name="skill-evidenced-${skill.id}" ${s.evidenced ? 'checked' : ''}>
                        <span data-translate="Evidenced">${t('Evidenced')}</span>
                    </label>
                    <label class="ip-check">
                        <input type="checkbox" name="skill-carry-${skill.id}" ${s.carryOver ? 'checked' : ''}>
                        <span data-translate="Carry over to skills matrix">${t('Carry over to skills matrix')}</span>
                    </label>
                    <textarea name="skill-detail-${skill.id}" rows="3" class="form-control ip-textarea" placeholder="${escapeHtml(t('Interview notes placeholder'))}">${escapeHtml(s.detail || '')}</textarea>
                </div>
            </article>
        `;
    }).join('');

    const app = document.getElementById('app');
    document.body.classList.add('interview-pack-open');
    app.innerHTML = `
        <div class="interview-pack-page">
            <div class="ip-hero">
                <div class="ip-hero-main">
                    <p class="ip-hero-kicker" data-translate="Interview Pack">${t('Interview Pack')}</p>
                    <h2 data-translate="Buyer I Interview Pack">${t('Buyer I Interview Pack')}</h2>
                    <p class="ip-subtitle">
                        <strong>${escapeHtml(candidate.name || '')}</strong>
                        <span>${escapeHtml(candidate.position || '')}</span>
                        <span>${escapeHtml(candidate.department || '')}</span>
                    </p>
                </div>
                <div class="ip-hero-scores">
                    <div class="ip-score-card">
                        <span data-translate="Total score">${t('Total score')}</span>
                        <strong id="ip-total-score">${scores.total} / ${scores.max}</strong>
                    </div>
                    <div class="ip-score-card ip-score-card-accent">
                        <span data-translate="Percentage">${t('Percentage')}</span>
                        <strong id="ip-percentage">${scores.percentage} %</strong>
                    </div>
                </div>
                <div class="ip-hero-actions">
                    <span id="ip-save-status" class="ip-save-status"></span>
                    <button type="button" class="btn btn-secondary" onclick="showCandidateDetails(${candidate.id})" data-translate="Back">Back</button>
                    <button type="button" class="btn btn-primary" id="ip-save-btn" data-translate="Save Interview Pack">${t('Save Interview Pack')}</button>
                </div>
            </div>

            <nav class="ip-section-nav" aria-label="Interview pack sections">
                ${navHtml}
                <a class="ip-nav-chip" href="#ip-section-skills">${t('Skills validation')}</a>
                <a class="ip-nav-chip" href="#ip-section-outcome">${t('Recommend for offer')}</a>
            </nav>

            <form id="interview-pack-form" class="interview-pack-form" autocomplete="off">
                <section class="ip-section ip-header-section">
                    <div class="ip-section-head">
                        <div>
                            <p class="ip-section-kicker" data-translate="Setup">${t('Setup')}</p>
                            <h3 data-translate="Interview details">${t('Interview details')}</h3>
                        </div>
                    </div>
                    <div class="ip-header-grid">
                        <label class="ip-field"><span data-translate="Name">${t('Name')}</span>
                            <input class="form-control" name="header-candidateName" value="${escapeHtml(header.candidateName || '')}">
                        </label>
                        <label class="ip-field"><span data-translate="Interview date">${t('Interview date')}</span>
                            <input type="date" class="form-control" name="header-interviewDate" value="${escapeHtml(header.interviewDate || '')}">
                        </label>
                        <label class="ip-field"><span data-translate="Assessor 1">${t('Assessor 1')}</span>
                            <input class="form-control" name="header-assessor1" value="${escapeHtml(header.assessor1 || '')}">
                        </label>
                        <label class="ip-field"><span data-translate="Assessor 2">${t('Assessor 2')}</span>
                            <input class="form-control" name="header-assessor2" value="${escapeHtml(header.assessor2 || '')}">
                        </label>
                        <label class="ip-field"><span data-translate="Candidate source type">${t('Candidate source type')}</span>
                            <select class="form-control" name="header-candidateSourceType">
                                <option value="">—</option>
                                <option value="internal" ${header.candidateSourceType === 'internal' ? 'selected' : ''}>${t('Internal')}</option>
                                <option value="external" ${header.candidateSourceType === 'external' ? 'selected' : ''}>${t('External')}</option>
                            </select>
                        </label>
                        <label class="ip-field"><span data-translate="Location">${t('Location')}</span>
                            <input class="form-control" name="header-location" value="${escapeHtml(header.location || '')}">
                        </label>
                        <label class="ip-field"><span data-translate="Role type">${t('Role type')}</span>
                            <select class="form-control" name="header-roleType">
                                <option value="">—</option>
                                <option value="salaried" ${header.roleType === 'salaried' ? 'selected' : ''}>${t('Salaried')}</option>
                                <option value="hourly" ${header.roleType === 'hourly' ? 'selected' : ''}>${t('Hourly')}</option>
                            </select>
                        </label>
                    </div>
                </section>

                ${sectionsHtml}

                <section class="ip-section" id="ip-section-skills">
                    <div class="ip-section-head">
                        <div>
                            <p class="ip-section-kicker" data-translate="Matrix">${t('Matrix')}</p>
                            <h3 data-translate="Skills validation">${t('Skills validation')}</h3>
                        </div>
                    </div>
                    <div class="ip-skills-grid">${skillsHtml}</div>
                </section>

                <section class="ip-section" id="ip-section-outcome">
                    <div class="ip-section-head">
                        <div>
                            <p class="ip-section-kicker" data-translate="Outcome">${t('Outcome')}</p>
                            <h3 data-translate="Recommend for offer">${t('Recommend for offer')}</h3>
                        </div>
                    </div>

                    <div class="ip-outcome-grid">
                        <div class="ip-outcome-main">
                            <div class="ip-recommend-group" role="radiogroup" aria-label="${t('Recommend for offer')}">
                                <label class="ip-recommend-option ${recommendation === 'yes' ? 'is-selected' : ''}">
                                    <input type="radio" name="recommendation" value="yes" ${recommendation === 'yes' ? 'checked' : ''}>
                                    <span data-translate="Yes">${t('Yes')}</span>
                                </label>
                                <label class="ip-recommend-option ${recommendation === 'possible' ? 'is-selected' : ''}">
                                    <input type="radio" name="recommendation" value="possible" ${recommendation === 'possible' ? 'checked' : ''}>
                                    <span data-translate="Possible">${t('Possible')}</span>
                                </label>
                                <label class="ip-recommend-option ${recommendation === 'no' ? 'is-selected' : ''}">
                                    <input type="radio" name="recommendation" value="no" ${recommendation === 'no' ? 'checked' : ''}>
                                    <span data-translate="No">${t('No')}</span>
                                </label>
                            </div>

                            <label class="ip-field" style="margin-top:1.25rem;">
                                <span data-translate="Questions asked by candidate">${t('Questions asked by candidate')}</span>
                                <textarea name="candidateQuestions" rows="5" class="form-control ip-textarea">${escapeHtml(data.candidateQuestions || '')}</textarea>
                            </label>
                        </div>

                        <div class="ip-outcome-side">
                            <h4 data-translate="HR Comments">${t('HR Comments')}</h4>
                            <textarea name="hrComments" rows="5" class="form-control ip-textarea">${escapeHtml(data.hrComments || '')}</textarea>
                            <div class="ip-header-grid" style="margin-top:1rem;">
                                <label class="ip-field"><span data-translate="HR Representative">${t('HR Representative')}</span>
                                    <input class="form-control" name="hrName" value="${escapeHtml(data.hrName || '')}">
                                </label>
                                <label class="ip-field"><span data-translate="Date">${t('Date')}</span>
                                    <input type="date" class="form-control" name="hrDate" value="${escapeHtml(data.hrDate || '')}">
                                </label>
                                <label class="ip-check ip-field" style="align-self:end;">
                                    <input type="checkbox" name="hrSigned" ${data.hrSigned ? 'checked' : ''}>
                                    <span data-translate="Signed">${t('Signed')}</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
        </div>
    `;

    window.uiManager.translatePage();

    const form = document.getElementById('interview-pack-form');
    form?.addEventListener('input', scheduleInterviewPackAutosave);
    form?.addEventListener('change', (e) => {
        if (e.target?.matches?.('input[type="radio"][name^="rating-"]')) {
            form.querySelectorAll(`input[name="${e.target.name}"]`).forEach(input => {
                input.closest('.ip-rating-option')?.classList.toggle('is-selected', input.checked);
            });
        }
        if (e.target?.matches?.('input[type="radio"][name="recommendation"]')) {
            form.querySelectorAll('input[name="recommendation"]').forEach(input => {
                input.closest('.ip-recommend-option')?.classList.toggle('is-selected', input.checked);
            });
        }
        scheduleInterviewPackAutosave();
    });

    document.getElementById('ip-save-btn')?.addEventListener('click', async () => {
        const btn = document.getElementById('ip-save-btn');
        try {
            if (btn) btn.disabled = true;
            await saveInterviewPack({ silent: false });
        } finally {
            if (btn) btn.disabled = false;
        }
    });
}

window.showInterviewPack = showInterviewPack;
window.saveInterviewPack = saveInterviewPack;

async function showCandidateDetails(id) {
    closeInterviewPackLayout();
    try {
        window.uiManager.showLoading('Loading candidate details...');
        
        const candidate = await window.candidatesManager.getCandidateDetails(id);
        const userInfo = window.authManager.getUserInfo();
        const canAccessInternalNotes = canAccessInternalCandidateNotes(userInfo);
        let internalNotes = [];
        if (canAccessInternalNotes) {
            try {
                internalNotes = await window.candidatesManager.getCandidateInternalNotes(id);
            } catch (internalNotesError) {
                console.warn('Unable to load internal notes:', internalNotesError);
            }
        }
        // Cache currently viewed candidate for editing
        window.currentCandidateDetails = candidate;
        
        const app = document.getElementById('app');
        if (!app) return;

        const isAgency = isAgencyRole(userInfo);
        
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
                ${!isAgency ? `
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

        if (canAccessInternalNotes) {
            detailsHtml += `
            <div class="candidate-internal-notes card">
                <h3 data-translate="Internal Notes">Internal Notes</h3>
                <div id="candidate-internal-notes-list" class="candidate-internal-notes-list">
                    ${renderInternalCandidateNotes(internalNotes)}
                </div>
                <form id="candidate-internal-note-form" class="candidate-internal-note-form">
                    <label for="candidate-internal-note-input" data-translate="Add internal note">Add internal note</label>
                    <textarea
                        id="candidate-internal-note-input"
                        class="form-control"
                        rows="3"
                        placeholder="${window.uiManager.translate('Internal note placeholder')}"
                        required
                    ></textarea>
                    <div class="candidate-internal-note-actions">
                        <button type="submit" id="candidate-internal-note-submit" class="btn btn-primary" data-translate="Save internal note">Save internal note</button>
                    </div>
                </form>
            </div>
            `;
        }

        detailsHtml += `
            <div class="action-buttons" style="margin-top: 20px;">
                ${canAccessInternalNotes ? `<button onclick="showInterviewPack(${candidate.id})" class="btn btn-primary" data-translate="Open Interview Pack">Open Interview Pack</button>` : ''}
                ${!isAgency ? `<button onclick="showEditCandidateModal(${candidate.id})" class="btn btn-primary" data-translate="Edit Candidate">Edit Candidate</button>` : ''}
                <button onclick="showCandidates()" class="btn btn-secondary" data-translate="Back">Back</button>
            </div>
        `;
        
        app.innerHTML = detailsHtml;
        window.uiManager.translatePage();

        const internalNoteForm = document.getElementById('candidate-internal-note-form');
        if (internalNoteForm) {
            internalNoteForm.addEventListener('submit', async (event) => {
                event.preventDefault();
                const noteInput = document.getElementById('candidate-internal-note-input');
                const submitButton = document.getElementById('candidate-internal-note-submit');
                const text = noteInput?.value?.trim() || '';
                if (!text) {
                    return;
                }

                try {
                    if (submitButton) {
                        submitButton.disabled = true;
                        submitButton.textContent = window.uiManager.translate('Saving note...');
                    }
                    await window.candidatesManager.addCandidateInternalNote(candidate.id, text);
                    window.utils.showMessage(window.uiManager.translate('Internal note added'), 'success');
                    await showCandidateDetails(candidate.id);
                } catch (addNoteError) {
                    console.error('Error adding internal note:', addNoteError);
                    const message = getErrorMessage(addNoteError, window.uiManager.translate('Error'));
                    window.utils.showMessage(
                        `${window.uiManager.translate('Error adding internal note')} ${message}`,
                        'error'
                    );
                } finally {
                    if (submitButton) {
                        submitButton.disabled = false;
                        submitButton.textContent = window.uiManager.translate('Save internal note');
                    }
                }
            });
        }
        
        // Add fade-in animation
        app.classList.add('fade-in');
    } catch (error) {
        console.error('Error loading candidate details:', error);
        window.utils.showMessage('Error loading candidate details: ' + error.message, 'error');
    }
}

function showReuploadDocument(candidateId, documentType) {
    if (isAgencyRole(window.authManager.getUserInfo())) {
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
        if (isAgencyRole(window.authManager.getUserInfo())) {
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
        
        const interimPositions = await fetchInterimPositions();
        candidateBaseListCache = filteredCandidates.filter(c => c.in_talent_pool !== true);
        candidatePaginationCache = null;
        interimPositionsCache = interimPositions;
        renderCurrentCandidateMode();
        
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
    const navTalentPool = document.getElementById('nav-talent-pool');
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
    if (navTalentPool) navTalentPool.addEventListener('click', (e) => { e.preventDefault(); setActiveNav('nav-talent-pool'); showTalentPool(); });
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
                    <details id="agency-notification-preview" class="agency-notification-preview agency-preview-toggle">
                        <summary class="agency-preview-toggle-btn">
                            <span data-translate="Agency notification preview">Agency notification preview</span>
                            <span class="agency-preview-toggle-hint" data-translate="Show agency notification preview">Show who will receive email</span>
                        </summary>
                        <div id="agency-notification-preview-content" class="agency-preview-content">
                            <p class="agency-preview-loading" data-translate="Loading notification preview...">Loading notification preview...</p>
                        </div>
                    </details>
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
    
    loadAgencyNotificationPreview(requestId, round);
    
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
        const agencyLookup = await getAgencyEmailsForRequest(request, round);
        const { sources: sourcesWithCandidates, emails: uniqueEmails } = agencyLookup;
        console.log('Slots saved: sources with candidates in', round, 'round for', request.position, '=', sourcesWithCandidates);

        let notificationReport = {
            sources: sourcesWithCandidates,
            recipients: uniqueEmails,
            sent: [],
            failed: [],
            debug: agencyLookup.debug,
            plan: agencyLookup.plan
        };

        if (uniqueEmails.length === 0) {
            console.warn('No agency emails to notify for', request.position, agencyLookup.plan);
        }

        if (uniqueEmails.length > 0) {
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

    const planBlock = report.plan
        ? `<div class="agency-notification-preview agency-notification-report-plan">${renderAgencyNotificationPlanHtml(report.plan, { showSendResults: true, sent, failed })}</div>`
        : '';

    modal.innerHTML = `
        <div class="modal-content agency-notification-report-content">
            <h2 style="margin-bottom: 1rem;">Report odoslania agentúram</h2>
            <div class="agency-report-summary">
                <div class="summary-card"><h3>${recipients.length}</h3><p>Celkovo príjemcov</p></div>
                <div class="summary-card approved"><h3>${sent.length}</h3><p>Úspešne odoslané</p></div>
                <div class="summary-card rejected"><h3>${failed.length}</h3><p>Zlyhané</p></div>
            </div>
            ${planBlock}
            <details class="agency-report-technical">
                <summary>Technický súhrn odoslania</summary>
                <p style="margin:10px 0 8px;color:#475569;"><strong>Zdroje kandidátov:</strong> ${(report.sources || []).join(', ') || 'N/A'}</p>
                <div class="agency-report-technical-grid">
                    <div>
                        <h3>Odoslané</h3>
                        <ul>${sentList}</ul>
                    </div>
                    <div>
                        <h3>Zlyhané</h3>
                        <ul>${failedList}</ul>
                    </div>
                    <div>
                        <h3>Nevyhodnotené</h3>
                        <ul>${pendingList}</ul>
                    </div>
                </div>
            </details>
            <div class="agency-report-actions">
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

/** Candidate statuses eligible for slot notifications/booking per interview round */
function getCandidateStatusesForSlotRound(round) {
    if (round === 'first') {
        // Include New: confirmed agency candidates not yet moved to first round
        return ['New', 'In Process - First Round'];
    }
    if (round === 'second') {
        return ['In Process - Second Round'];
    }
    return [];
}

function candidateMatchesRequest(candidate, request) {
    if (!candidate || !request) return false;
    if (request.id != null && candidate.recruiting_request_id != null) {
        return Number(candidate.recruiting_request_id) === Number(request.id);
    }
    return candidate.position === request.position && candidate.department === request.department;
}

async function loadCandidatesForAgencyNotification(request) {
    if (!request || !window.supabase) return [];

    if (request.id != null) {
        try {
            const { data, error } = await window.supabase
                .from('candidates')
                .select('*')
                .eq('recruiting_request_id', request.id);
            if (!error && Array.isArray(data) && data.length > 0) {
                return data;
            }
        } catch (error) {
            console.warn('Could not load candidates by recruiting_request_id:', error);
        }
    }

    const candidatesResult = await window.candidatesManager.getCandidates({
        page: 1,
        pageSize: 2000,
        department: request.department,
        position: request.position,
        useCache: false
    });
    return (candidatesResult.candidates || []).filter(c => candidateMatchesRequest(c, request));
}

function formatCandidateStatusLabel(status) {
    if (!status) return '—';
    return window.uiManager ? window.uiManager.translate(status) : status;
}

function formatAgencyNotificationCandidates(candidates = []) {
    if (!candidates.length) return '';
    return candidates.map(c => `${c.name} (${formatCandidateStatusLabel(c.status)})`).join(', ');
}

function renderAgencyNotificationPlanHtml(plan, options = {}) {
    const { showSendResults = false, sent = [], failed = [] } = options;
    const t = (key) => window.uiManager ? window.uiManager.translate(key) : key;
    const roundLabel = plan.round === 'second' ? t('Second Round') : t('First Round');
    const requiredStatuses = (plan.requiredStatuses || []).map(formatCandidateStatusLabel).join(', ');

    const renderAgencyRow = (entry, variant) => {
        const emails = (entry.emails || []).join(', ') || '—';
        const candidates = formatAgencyNotificationCandidates(entry.candidates);
        const sendInfo = showSendResults && entry.emails?.length
            ? entry.emails.map(email => {
                const fail = failed.find(f => f.email === email);
                if (fail) return `<div class="agency-preview-send agency-preview-send-failed">${email}: ${fail.reason}</div>`;
                if (sent.includes(email)) return `<div class="agency-preview-send agency-preview-send-ok">${email}: odoslané</div>`;
                return `<div class="agency-preview-send">${email}: neodoslané</div>`;
            }).join('')
            : '';
        return `
            <li class="agency-preview-item agency-preview-item-${variant}">
                <div class="agency-preview-source"><strong>${entry.source}</strong></div>
                <div class="agency-preview-email">${emails}</div>
                ${candidates ? `<div class="agency-preview-candidates">${candidates}</div>` : ''}
                <div class="agency-preview-reason">${entry.reason}</div>
                ${sendInfo}
            </li>
        `;
    };

    const willNotify = plan.willNotify || [];
    const willNotNotify = plan.willNotNotify || [];
    const withoutCandidates = plan.withoutCandidates || [];

    const willNotifyList = willNotify.length
        ? willNotify.map(entry => renderAgencyRow(entry, 'yes')).join('')
        : `<li class="agency-preview-empty">${t('No agency will receive email')}</li>`;

    const willNotNotifyList = willNotNotify.length
        ? willNotNotify.map(entry => renderAgencyRow(entry, 'no')).join('')
        : `<li class="agency-preview-empty">—</li>`;

    const withoutCandidatesBlock = withoutCandidates.length ? `
        <details class="agency-preview-other">
            <summary>${t('Other agencies without candidates')} (${withoutCandidates.length})</summary>
            <ul class="agency-preview-list">
                ${withoutCandidates.map(entry => renderAgencyRow(entry, 'other')).join('')}
            </ul>
        </details>
    ` : '';

    return `
        <div class="agency-preview-meta">
            <span><strong>${roundLabel}</strong></span>
            <span>${t('Required candidate status')}: <strong>${requiredStatuses || '—'}</strong></span>
        </div>
        <div class="agency-preview-grid">
            <div class="agency-preview-column agency-preview-column-yes">
                <h4>${t('Will receive email')} (${willNotify.length})</h4>
                <ul class="agency-preview-list">${willNotifyList}</ul>
            </div>
            <div class="agency-preview-column agency-preview-column-no">
                <h4>${t('Will not receive email')} (${willNotNotify.length})</h4>
                <ul class="agency-preview-list">${willNotNotifyList}</ul>
            </div>
        </div>
        ${withoutCandidatesBlock}
    `;
}

/** Extract email strings from RPC rows (supports legacy email-only and email+source shapes). */
function parseAgencyEmailRows(rows) {
    return [...new Set((rows || []).map(row => {
        if (row && typeof row === 'object') return (row.email || '').trim();
        return typeof row === 'string' ? row.trim() : '';
    }).filter(Boolean))];
}

/** Load agency users directly when RPC is unavailable or returns empty. */
async function loadAgencyEmailsFromUsersTable(sources = []) {
    const emailsBySource = {};
    const uniqueSources = [...new Set((sources || []).map(s => (s || '').trim()).filter(Boolean))];
    if (!uniqueSources.length || !window.supabase) return emailsBySource;

    try {
        const { data: agencyUsers, error } = await window.supabase
            .from('users')
            .select('email, source, role')
            .in('role', ['agency', 'agency-interim'])
            .not('source', 'is', null);
        if (error) throw error;

        const sourceSet = new Set(uniqueSources);
        (agencyUsers || []).forEach(user => {
            const source = (user.source || '').trim();
            const email = (user.email || '').trim();
            if (!source || !email || !sourceSet.has(source)) return;
            if (!emailsBySource[source]) emailsBySource[source] = [];
            emailsBySource[source].push(email);
        });
        Object.keys(emailsBySource).forEach(source => {
            emailsBySource[source] = [...new Set(emailsBySource[source])];
        });
    } catch (error) {
        console.warn('Could not load agency emails from users table:', error);
    }

    return emailsBySource;
}

/** Resolve agency notification emails by source via RPC, with users-table fallback. */
async function loadAgencyEmailsBySource(sources = []) {
    const emailsBySource = {};
    const uniqueSources = [...new Set((sources || []).map(s => (s || '').trim()).filter(Boolean))];
    if (!uniqueSources.length || !window.supabase) return emailsBySource;

    const mergeRows = (rows, fallbackSource = '') => {
        (rows || []).forEach(row => {
            const email = row && typeof row === 'object' ? (row.email || '').trim() : (typeof row === 'string' ? row.trim() : '');
            const rowSource = row && typeof row === 'object' ? (row.source || '').trim() : '';
            const targetSource = rowSource || fallbackSource;
            if (!email || !targetSource) return;
            if (!emailsBySource[targetSource]) emailsBySource[targetSource] = [];
            emailsBySource[targetSource].push(email);
        });
    };

    try {
        const { data, error } = await window.supabase.rpc('get_agency_emails_for_new_slots', { sources: uniqueSources });
        if (!error) mergeRows(data);
        else console.warn('Bulk get_agency_emails_for_new_slots RPC error:', error);
    } catch (error) {
        console.warn('Bulk get_agency_emails_for_new_slots RPC failed:', error);
    }

    const missingAfterBulk = uniqueSources.filter(source => !(emailsBySource[source] || []).length);
    for (const source of missingAfterBulk) {
        try {
            const { data, error } = await window.supabase.rpc('get_agency_emails_for_new_slots', { sources: [source] });
            if (error) {
                console.warn('get_agency_emails_for_new_slots RPC error for source:', source, error);
                continue;
            }
            mergeRows(data, source);
        } catch (error) {
            console.warn('get_agency_emails_for_new_slots RPC failed for source:', source, error);
        }
    }

    const missingSources = uniqueSources.filter(source => !(emailsBySource[source] || []).length);
    if (missingSources.length) {
        const fallback = await loadAgencyEmailsFromUsersTable(missingSources);
        missingSources.forEach(source => {
            if (fallback[source]?.length) emailsBySource[source] = fallback[source];
        });
    }

    Object.keys(emailsBySource).forEach(source => {
        emailsBySource[source] = [...new Set(emailsBySource[source])];
    });

    if (!Object.keys(emailsBySource).length) {
        console.warn('No agency emails resolved for sources:', uniqueSources);
    }

    return emailsBySource;
}

async function loadAgencyNotificationPreview(requestId, round) {
    const container = document.getElementById('agency-notification-preview-content');
    if (!container) return;

    const loadingText = window.uiManager.translate('Loading notification preview...') || 'Loading notification preview...';
    container.innerHTML = `<p class="agency-preview-loading">${loadingText}</p>`;

    try {
        const request = await window.requestsManager.getRequestById(requestId);
        const plan = await buildAgencySlotNotificationPlan(request, round);
        container.innerHTML = renderAgencyNotificationPlanHtml(plan);
        window.uiManager.translatePage();
    } catch (error) {
        console.warn('Agency notification preview failed:', error);
        container.innerHTML = `<p class="agency-preview-error">Nepodarilo sa načítať náhľad: ${error.message || error}</p>`;
    }
}

async function buildAgencySlotNotificationPlan(request, round, additionalSources = []) {
    const allowedStatuses = getCandidateStatusesForSlotRound(round);
    const mustNotifySources = new Set(additionalSources.filter(Boolean));

    const matchingCandidates = await loadCandidatesForAgencyNotification(request);

    const candidatesBySource = {};
    matchingCandidates.forEach(candidate => {
        const source = (candidate.source || '').trim();
        if (!source) return;
        if (!candidatesBySource[source]) candidatesBySource[source] = [];
        candidatesBySource[source].push(candidate);
    });

    let bookedCandidateIds = new Set();
    try {
        bookedCandidateIds = await window.interviewSlotsManager.getBookedCandidateIds(request.id, round);
    } catch (error) {
        console.warn('Could not load booked candidate ids:', error);
    }

    const allSources = new Set([
        ...Object.keys(candidatesBySource),
        ...[...mustNotifySources].map(s => (s || '').trim()).filter(Boolean)
    ]);
    const emailsBySource = await loadAgencyEmailsBySource([...allSources]);
    Object.keys(emailsBySource).forEach(source => allSources.add(source));

    const willNotify = [];
    const willNotNotify = [];
    const withoutCandidates = [];

    const t = (key) => window.uiManager ? window.uiManager.translate(key) : key;

    for (const source of [...allSources].sort()) {
        const candidates = candidatesBySource[source] || [];
        const emails = emailsBySource[source] || [];
        const candidateInfo = candidates.map(c => ({ name: c.name, status: c.status }));
        const eligibleCandidates = candidates.filter(c => allowedStatuses.includes(c.status));
        const unbookedEligibleCandidates = eligibleCandidates.filter(c => !bookedCandidateIds.has(Number(c.id)));

        if (mustNotifySources.has(source)) {
            const entry = {
                source,
                emails,
                candidates: candidateInfo,
                reason: t('Booking change notification')
            };
            if (emails.length > 0) willNotify.push(entry);
            else willNotNotify.push({ ...entry, reason: `${t('Booking change notification')} — ${t('No agency email in system')}` });
            continue;
        }

        if (candidates.length === 0) {
            if (emails.length > 0) {
                withoutCandidates.push({
                    source,
                    emails,
                    candidates: [],
                    reason: t('No candidate on this position')
                });
            }
            continue;
        }

        const pendingCandidates = candidates.filter(c => c.status === 'Pending Recruiter Review');
        if (pendingCandidates.length > 0 && eligibleCandidates.length === 0) {
            willNotNotify.push({
                source,
                emails,
                candidates: candidateInfo,
                reason: `${t('Pending recruiter confirmation')}: ${pendingCandidates.map(c => c.name).join(', ')}`
            });
            continue;
        }

        if (eligibleCandidates.length === 0) {
            const statuses = [...new Set(candidates.map(c => c.status))].map(formatCandidateStatusLabel).join(', ');
            willNotNotify.push({
                source,
                emails,
                candidates: candidateInfo,
                reason: `${t('Wrong candidate status')} — aktuálny: ${statuses}, požadovaný: ${allowedStatuses.map(formatCandidateStatusLabel).join(' alebo ')}`
            });
            continue;
        }

        if (eligibleCandidates.length > 0 && unbookedEligibleCandidates.length === 0) {
            willNotNotify.push({
                source,
                emails,
                candidates: eligibleCandidates.map(c => ({ name: c.name, status: c.status })),
                reason: t('All eligible candidates already booked')
            });
            continue;
        }

        if (emails.length === 0) {
            willNotNotify.push({
                source,
                emails: [],
                candidates: unbookedEligibleCandidates.map(c => ({ name: c.name, status: c.status })),
                reason: t('No agency email in system')
            });
            continue;
        }

        willNotify.push({
            source,
            emails,
            candidates: unbookedEligibleCandidates.map(c => ({ name: c.name, status: c.status })),
            reason: `Kandidát čaká na termín: ${unbookedEligibleCandidates.map(c => c.name).join(', ')}`
        });
    }

    const sources = willNotify.map(entry => entry.source);
    const emails = [...new Set(willNotify.flatMap(entry => entry.emails))];
    const candidatesByStatus = matchingCandidates.reduce((acc, candidate) => {
        const key = candidate.status || 'Unknown';
        acc[key] = (acc[key] || 0) + 1;
        return acc;
    }, {});

    return {
        round,
        requiredStatuses: allowedStatuses,
        willNotify,
        willNotNotify,
        withoutCandidates,
        sources,
        emails,
        skippedBookedCandidateIds: [...bookedCandidateIds],
        debug: {
            round,
            requiredStatuses: allowedStatuses,
            candidatesByStatus,
            matchedCandidates: matchingCandidates.length,
            eligibleCandidates: matchingCandidates.filter(c => allowedStatuses.includes(c.status)).length,
            unbookedEligibleCandidates: matchingCandidates.filter(c =>
                allowedStatuses.includes(c.status) && !bookedCandidateIds.has(Number(c.id))
            ).length,
            bookedCandidateIds: [...bookedCandidateIds]
        }
    };
}

async function getAgencyEmailsForRequest(request, round, additionalSources = []) {
    const plan = await buildAgencySlotNotificationPlan(request, round, additionalSources);
    return {
        sources: plan.sources,
        emails: plan.emails,
        skippedBookedCandidateIds: plan.skippedBookedCandidateIds,
        debug: plan.debug,
        plan
    };
}

function slotToNotifyPayload(slot) {
    return {
        startTime: slot.start_time || slot.startTime,
        endTime: slot.end_time || slot.endTime,
        candidateName: slot.candidates?.name || slot.candidateName || null
    };
}

async function notifyAgenciesAboutSlotChange(request, round, changeType, slots, oldSlots = []) {
    const extraSources = slots
        .map(s => s.agency_source)
        .filter(Boolean);
    const agencyLookup = await getAgencyEmailsForRequest(request, round, extraSources);
    const { sources, emails } = agencyLookup;

    const notificationReport = {
        sources,
        recipients: emails,
        sent: [],
        failed: [],
        debug: agencyLookup.debug,
        plan: agencyLookup.plan
    };

    const payloads = slots.map(slotToNotifyPayload);
    const oldPayloads = oldSlots.map(slotToNotifyPayload);

    for (const email of emails) {
        try {
            await window.emailManager.notifyAgencySlotChange(
                email,
                request,
                round,
                changeType,
                payloads,
                changeType === 'updated' ? oldPayloads : []
            );
            notificationReport.sent.push(email);
        } catch (error) {
            notificationReport.failed.push({
                email,
                reason: error?.message || 'Unknown error'
            });
        }
    }

    return notificationReport;
}

async function showSlotsForRequest(requestId) {
    try {
        window.uiManager.showLoading('Loading slots...');

        const request = await window.requestsManager.getRequestById(requestId);
        const firstRoundSlots = await window.interviewSlotsManager.getSlotsForRequest(requestId, 'first');
        const secondRoundSlots = await window.interviewSlotsManager.getSlotsForRequest(requestId, 'second');
        const userInfo = window.authManager.getUserInfo();
        const canManage = userInfo && (userInfo.role === 'recruiter' || userInfo.role === 'gm');

        window.uiManager.hideLoading();

        const modal = document.createElement('div');
        modal.id = 'view-slots-modal';
        modal.className = 'modal view-slots-modal';

        const renderSlots = (slots, round) => {
            if (slots.length === 0) {
                return `<p data-translate="No slots available">${window.uiManager.translate('No slots available') || 'No slots available'}</p>`;
            }
            return slots.map(slot => {
                const start = new Date(slot.start_time);
                const end = new Date(slot.end_time);
                const isBooked = slot.candidate_id !== null;
                const actions = canManage ? `
                    <div class="view-slot-actions">
                        <button type="button" class="btn btn-secondary btn-sm" onclick="showEditSlotModal(${slot.id}, ${requestId}, '${round}')" data-translate="Edit Slot">Edit Slot</button>
                        <button type="button" class="btn btn-danger btn-sm" onclick="deleteSlotWithConfirm(${slot.id}, ${requestId}, '${round}')" data-translate="Delete Slot">Delete Slot</button>
                    </div>
                ` : '';
                return `
                    <div class="view-slot-item ${isBooked ? 'view-slot-booked' : 'view-slot-free'}">
                        <div class="view-slot-info">
                            <strong>${start.toLocaleString('sk-SK')} – ${end.toLocaleString('sk-SK', { hour: '2-digit', minute: '2-digit' })}</strong>
                            ${isBooked
                                ? `<span class="view-slot-status">${window.uiManager.translate('Booked by') || 'Booked by'}: ${slot.candidates?.name || 'N/A'} (${slot.agency_source || 'N/A'})</span>`
                                : `<span class="view-slot-status">${window.uiManager.translate('Available') || 'Available'}</span>`}
                        </div>
                        ${actions}
                    </div>
                `;
            }).join('');
        };

        modal.innerHTML = `
            <div class="modal-content view-slots-modal-content">
                <div class="view-slots-modal-header">
                    <div>
                        <h2 data-translate="Interview Slots">Interview Slots</h2>
                        <p class="view-slots-subtitle">${request.position} – ${request.department}</p>
                    </div>
                    <button type="button" onclick="closeViewSlotsModal()" class="modal-close-btn" aria-label="Close">&times;</button>
                </div>
                <div class="view-slots-section">
                    <h3 data-translate="First Round">First Round</h3>
                    ${renderSlots(firstRoundSlots, 'first')}
                </div>
                <div class="view-slots-section">
                    <h3 data-translate="Second Round">Second Round</h3>
                    ${renderSlots(secondRoundSlots, 'second')}
                </div>
                <div class="view-slots-footer">
                    <button type="button" onclick="closeViewSlotsModal()" class="btn btn-secondary" data-translate="Close">Close</button>
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

function closeEditSlotModal() {
    const modal = document.getElementById('edit-slot-modal');
    if (modal) {
        modal.remove();
    }
}

function buildSlotTimeFields(slotId, startTime, endTime) {
    const start = new Date(startTime);
    const end = new Date(endTime);
    const dateValue = start.toISOString().split('T')[0];
    const startTimeValue = `${String(start.getHours()).padStart(2, '0')}:${String(start.getMinutes()).padStart(2, '0')}`;
    const durationMinutes = Math.round((end - start) / (1000 * 60));
    const durationValue = [30, 60, 90].includes(durationMinutes) ? durationMinutes : 30;
    const timeOptions = get15MinuteTimeOptions();

    return `
        <div class="slot-row edit-slot-row" id="edit-slot-row">
            <div class="slot-input-group">
                <label class="slot-label" for="edit-slot-date">${window.uiManager.translate('Date') || 'Date'}</label>
                <input type="date" id="edit-slot-date" class="form-control slot-date-input" required min="${new Date().toISOString().split('T')[0]}" value="${dateValue}">
            </div>
            <div class="slot-input-group">
                <label class="slot-label" for="edit-slot-start">${window.uiManager.translate('Start Time') || 'Start Time'}</label>
                <select id="edit-slot-start" class="form-control slot-time-input" required>
                    ${timeOptions.map(t => `<option value="${t}" ${t === startTimeValue ? 'selected' : ''}>${t}</option>`).join('')}
                </select>
            </div>
            <div class="slot-input-group">
                <label class="slot-label" for="edit-slot-duration">${window.uiManager.translate('Duration') || 'Duration'}</label>
                <select id="edit-slot-duration" class="form-control slot-time-input" required>
                    <option value="30" ${durationValue === 30 ? 'selected' : ''}>30 min</option>
                    <option value="60" ${durationValue === 60 ? 'selected' : ''}>60 min</option>
                    <option value="90" ${durationValue === 90 ? 'selected' : ''}>90 min</option>
                </select>
            </div>
            <div class="slot-input-group">
                <label class="slot-label" for="edit-slot-end">${window.uiManager.translate('End Time') || 'End Time'}</label>
                <input type="text" id="edit-slot-end" class="form-control slot-time-input" readonly value="${String(end.getHours()).padStart(2, '0')}:${String(end.getMinutes()).padStart(2, '0')}">
            </div>
        </div>
        <input type="hidden" id="edit-slot-id" value="${slotId}">
    `;
}

function wireEditSlotTimeFields() {
    const startSelect = document.getElementById('edit-slot-start');
    const durationSelect = document.getElementById('edit-slot-duration');
    const endInput = document.getElementById('edit-slot-end');
    if (!startSelect || !durationSelect || !endInput) return;

    const updateEnd = () => {
        const roundedStart = roundTo15Minutes(startSelect.value);
        if (roundedStart !== startSelect.value) {
            startSelect.value = roundedStart;
        }
        const durationVal = parseInt(durationSelect.value, 10);
        const end = addMinutesToTime(roundedStart, durationVal);
        endInput.value = end.startsWith('24:') ? '' : roundTo15Minutes(end);
    };

    startSelect.addEventListener('change', updateEnd);
    durationSelect.addEventListener('change', updateEnd);
    updateEnd();
}

function readEditSlotTimes() {
    const date = document.getElementById('edit-slot-date')?.value;
    const timeStart = document.getElementById('edit-slot-start')?.value;
    const timeEnd = document.getElementById('edit-slot-end')?.value;

    if (!date || !timeStart || !timeEnd) {
        throw new Error(window.uiManager.translate('Please fill in all required fields') || 'Please fill in all required fields');
    }

    const roundedStart = roundTo15Minutes(timeStart);
    const roundedEnd = roundTo15Minutes(timeEnd);
    const startTime = new Date(`${date}T${roundedStart}`);
    const endTime = new Date(`${date}T${roundedEnd}`);

    if (endTime <= startTime) {
        throw new Error(window.uiManager.translate('End time must be after start time') || 'End time must be after start time');
    }

    const duration = (endTime - startTime) / (1000 * 60);
    if (duration < 30) {
        throw new Error(window.uiManager.translate('Minimum slot duration is 30 minutes') || 'Minimum slot duration is 30 minutes');
    }
    if (duration % 30 !== 0) {
        throw new Error(window.uiManager.translate('Slot duration must be a multiple of 30 minutes') || 'Slot duration must be a multiple of 30 minutes');
    }

    return {
        startTime: startTime.toISOString(),
        endTime: endTime.toISOString()
    };
}

async function showEditSlotModal(slotId, requestId, round) {
    try {
        const slots = await window.interviewSlotsManager.getSlotsForRequest(requestId, round);
        const slot = (slots || []).find(s => s.id === slotId);
        if (!slot) {
            window.utils.showMessage('Termín sa nenašiel.', 'error');
            return;
        }

        const request = await window.requestsManager.getRequestById(requestId);
        const roundText = round === 'first'
            ? window.uiManager.translate('First Round')
            : window.uiManager.translate('Second Round');
        const isBooked = !!slot.candidate_id;

        const modal = document.createElement('div');
        modal.id = 'edit-slot-modal';
        modal.className = 'modal add-slots-modal';
        modal.innerHTML = `
            <div class="add-slots-modal-content">
                <div class="add-slots-modal-header">
                    <div class="modal-header-info">
                        <h2 class="modal-title" data-translate="Edit Slot">Edit Slot</h2>
                        <p class="modal-subtitle">${roundText} • ${request.position} - ${request.department}</p>
                        ${isBooked ? `<p class="modal-hint" data-translate="This slot is booked. Agencies will be notified about the time change.">This slot is booked. Agencies will be notified about the time change.</p>` : ''}
                    </div>
                    <button type="button" onclick="closeEditSlotModal()" class="modal-close-btn" aria-label="Close">&times;</button>
                </div>
                <form id="edit-slot-form" class="add-slots-form">
                    <input type="hidden" id="edit-slot-request-id" value="${requestId}">
                    <input type="hidden" id="edit-slot-round" value="${round}">
                    <div class="slots-form-content">
                        ${buildSlotTimeFields(slotId, slot.start_time, slot.end_time)}
                    </div>
                    <div class="slots-form-actions">
                        <button type="button" onclick="closeEditSlotModal()" class="btn btn-secondary" data-translate="Cancel">Cancel</button>
                        <button type="submit" class="btn btn-primary" data-translate="Update Slot">Update Slot</button>
                    </div>
                </form>
            </div>
        `;

        document.body.appendChild(modal);
        wireEditSlotTimeFields();
        window.uiManager.translatePage();

        document.getElementById('edit-slot-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            await saveEditedSlot(slot);
        });
    } catch (error) {
        console.error('Error opening edit slot modal:', error);
        window.utils.showMessage((window.uiManager.translate('Error updating slot:') || 'Error updating slot:') + ' ' + error.message, 'error');
    }
}

async function saveEditedSlot(originalSlot) {
    try {
        const slotId = parseInt(document.getElementById('edit-slot-id').value, 10);
        const requestId = parseInt(document.getElementById('edit-slot-request-id').value, 10);
        const round = document.getElementById('edit-slot-round').value;
        const times = readEditSlotTimes();

        const oldStart = new Date(originalSlot.start_time).getTime();
        const oldEnd = new Date(originalSlot.end_time).getTime();
        const newStart = new Date(times.startTime).getTime();
        const newEnd = new Date(times.endTime).getTime();
        if (oldStart === newStart && oldEnd === newEnd) {
            closeEditSlotModal();
            return;
        }

        window.uiManager.showLoading(window.uiManager.translate('Updating slot...') || 'Updating slot...');
        const result = await window.interviewSlotsManager.updateSlot(slotId, requestId, round, times);
        const request = await window.requestsManager.getRequestById(requestId);

        window.uiManager.showLoading(window.uiManager.translate('Notifying agencies...') || 'Notifying agencies...');
        const updatedSlot = result.data || { ...originalSlot, ...times, start_time: times.startTime, end_time: times.endTime };
        const notificationReport = await notifyAgenciesAboutSlotChange(
            request,
            round,
            'updated',
            [updatedSlot],
            [originalSlot]
        );

        window.uiManager.hideLoading();
        closeEditSlotModal();
        closeViewSlotsModal();
        window.utils.showMessage(window.uiManager.translate('Slot updated successfully!') || 'Slot updated successfully!', 'success');
        showAgencyNotificationReport(notificationReport);
        await showSlotsForRequest(requestId);
    } catch (error) {
        console.error('Error updating slot:', error);
        window.uiManager.hideLoading();
        window.utils.showMessage((window.uiManager.translate('Error updating slot:') || 'Error updating slot:') + ' ' + error.message, 'error');
    }
}

async function deleteSlotWithConfirm(slotId, requestId, round) {
    try {
        const slots = await window.interviewSlotsManager.getSlotsForRequest(requestId, round);
        const slot = (slots || []).find(s => s.id === slotId);
        if (!slot) {
            window.utils.showMessage('Termín sa nenašiel.', 'error');
            return;
        }

        const isBooked = !!slot.candidate_id;
        const confirmMsg = isBooked
            ? window.uiManager.translate('This slot is booked. Deleting will cancel the booking and agencies will be notified.')
            : window.uiManager.translate('Are you sure you want to delete this slot?');
        if (!confirm(confirmMsg)) {
            return;
        }

        window.uiManager.showLoading(window.uiManager.translate('Deleting slot...') || 'Deleting slot...');
        const request = await window.requestsManager.getRequestById(requestId);
        await window.interviewSlotsManager.deleteSlot(slotId);

        window.uiManager.showLoading(window.uiManager.translate('Notifying agencies...') || 'Notifying agencies...');
        const notificationReport = await notifyAgenciesAboutSlotChange(
            request,
            round,
            'removed',
            [slot]
        );

        window.uiManager.hideLoading();
        closeViewSlotsModal();
        window.utils.showMessage(window.uiManager.translate('Slot deleted successfully!') || 'Slot deleted successfully!', 'success');
        showAgencyNotificationReport(notificationReport);
        await showSlotsForRequest(requestId);
    } catch (error) {
        console.error('Error deleting slot:', error);
        window.uiManager.hideLoading();
        window.utils.showMessage((window.uiManager.translate('Error deleting slot:') || 'Error deleting slot:') + ' ' + error.message, 'error');
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
        if (!isAgencyRole(userInfo)) {
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
    if (isAgencyRole(userInfo) && userInfo.source) {
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
        
        // Only candidates in the matching round can book that round's slots
        const allowedStatuses = getCandidateStatusesForSlotRound(round);

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
        
        // Filter candidates: must match position/request, source, and have allowed status
        const agencyCandidates = candidatesResult.candidates.filter(c => 
            candidateMatchesRequest(c, request) &&
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
            if (isAgencyRole(userInfo) && window.supabase) {
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


