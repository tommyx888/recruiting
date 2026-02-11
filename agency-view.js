// Agency view module for managing interview slots booking

/**
 * Fold long ICS line (RFC 5545: max 75 octets per line, continuation with space)
 */
function foldIcsLine(line) {
    const maxLen = 75;
    if (line.length <= maxLen) return line;
    const parts = [];
    let rest = line;
    while (rest.length > 0) {
        parts.push(rest.slice(0, maxLen));
        rest = rest.slice(maxLen);
        if (rest.length > 0) rest = ' ' + rest;
    }
    return parts.join('\r\n');
}

/**
 * Escape ICS text (commas, semicolons, backslashes)
 */
function escapeIcsText(text) {
    if (!text) return '';
    return String(text).replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\n/g, '\\n');
}

/**
 * Generate ICS file content for calendar invitation.
 * METHOD:PUBLISH = opening the file adds the event to calendar (Outlook, Google).
 * @param {Object} slot - Interview slot data
 * @param {Object} candidate - Candidate data
 * @param {Object} request - Recruiting request data
 * @param {Object} [attachmentUrls] - Optional { cvUrl, assessmentUrl } – links to CV/Assessment (signed URLs)
 * @returns {string} ICS file content
 */
function generateICS(slot, candidate, request, attachmentUrls) {
    const startDate = new Date(slot.start_time);
    const endDate = new Date(slot.end_time);

    const formatICSDate = (date) => {
        return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };

    const startICS = formatICSDate(startDate);
    const endICS = formatICSDate(endDate);
    const nowICS = formatICSDate(new Date());

    const uid = `interview-${slot.id}-${Date.now()}@recruiting-system`;
    const summary = `Interview - ${request.position} - ${candidate.name}`;
    let description =
        `Interview for position: ${request.position}\n` +
        `Department: ${request.department}\n` +
        `Candidate: ${candidate.name}\n` +
        `Round: ${slot.round === 'first' ? 'First Round' : 'Second Round'}\n` +
        `Agency: ${slot.agency_source || ''}`;
    if (attachmentUrls && (attachmentUrls.cvUrl || attachmentUrls.assessmentUrl)) {
        description += '\n\nOdkazy na dokumenty:';
        if (attachmentUrls.cvUrl) description += '\nCV: ' + attachmentUrls.cvUrl;
        if (attachmentUrls.assessmentUrl) description += '\nAssessment: ' + attachmentUrls.assessmentUrl;
    } else {
        description += '\n\nCV a Assessment sú v prílohe tohto emailu.';
    }
    const location = slot.round === 'first' ? 'First Round Interview' : 'Second Round Interview';

    const lines = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Recruiting Management System//Interview Scheduler//EN',
        'CALSCALE:GREGORIAN',
        'METHOD:PUBLISH',
        'BEGIN:VEVENT',
        `UID:${uid}`,
        `DTSTAMP:${nowICS}`,
        `DTSTART:${startICS}`,
        `DTEND:${endICS}`,
        foldIcsLine('SUMMARY:' + escapeIcsText(summary)),
        foldIcsLine('DESCRIPTION:' + escapeIcsText(description)),
        foldIcsLine('LOCATION:' + escapeIcsText(location))
    ];

    if (attachmentUrls) {
        if (attachmentUrls.cvUrl) {
            lines.push(foldIcsLine('ATTACH;FMTTYPE=application/pdf:' + attachmentUrls.cvUrl));
        }
        if (attachmentUrls.assessmentUrl) {
            lines.push(foldIcsLine('ATTACH;FMTTYPE=application/pdf:' + attachmentUrls.assessmentUrl));
        }
    }

    lines.push(
        'STATUS:CONFIRMED',
        'SEQUENCE:0',
        'BEGIN:VALARM',
        'TRIGGER:-PT15M',
        'ACTION:DISPLAY',
        'DESCRIPTION:Reminder: Interview in 15 minutes',
        'END:VALARM',
        'END:VEVENT',
        'END:VCALENDAR'
    );

    return lines.join('\r\n');
}

/**
 * Download ICS file
 * @param {string} icsContent - ICS file content
 * @param {string} filename - Filename for download
 */
function downloadICS(icsContent, filename) {
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename || 'interview-invitation.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
}

// Export functions
window.generateICS = generateICS;
window.downloadICS = downloadICS;
