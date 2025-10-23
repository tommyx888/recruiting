// Configuration file for the Recruiting Management System
// This file should be kept secure and not committed to version control

window.config = {
    // Supabase Configuration
    supabase: {
        url: 'https://jlpkwktqylbykvpafmmc.supabase.co',
        anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpscGt3a3RxeWxieWt2cGFmbW1jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY1OTIxMjYsImV4cCI6MjA0MjE2ODEyNn0.c-UPO_SNxUGtqLEY4YNpciDLJqtO6j4OSKxS-8y9cFI'
    },
    
    // Application Configuration
    app: {
        name: 'Recruiting Management System',
        defaultLanguage: 'sk',
        version: '1.0.0'
    },
    
    // File Upload Configuration
    upload: {
        maxFileSize: 10 * 1024 * 1024, // 10MB
        allowedTypes: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
        allowedExtensions: ['.pdf', '.doc', '.docx']
    },
    
    // Pagination Configuration
    pagination: {
        defaultPageSize: 20,
        maxPageSize: 100
    }
};

// Validate required configuration
if (!window.config.supabase.url || !window.config.supabase.anonKey) {
    console.error('Missing required Supabase configuration. Please check your environment variables.');
}
