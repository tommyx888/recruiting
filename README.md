# Recruiting Management System

A web-based recruiting management system built with vanilla JavaScript, HTML, and CSS, using Supabase as the backend database.

## Features

- **Candidate Management**: Full CRUD operations for candidates with file uploads (CV, assessment forms)
- **Recruiting Requests**: Complete workflow for creating and managing job requests
- **Role-Based Access Control**: Different permissions for GMs, recruiters, and managers
- **Multi-language Support**: English and Slovak translations
- **Statistics & Reporting**: Analytics and export functionality
- **Dark Mode**: User preference for theme switching
- **File Upload**: Secure file handling for candidate documents
- **Input Validation**: Comprehensive validation and sanitization
- **Pagination**: Efficient data display for large datasets

## Security Improvements Made

### ✅ Fixed Critical Issues
- **Moved hardcoded Supabase credentials** to configuration file
- **Fixed syntax errors** in HTML and JavaScript
- **Removed duplicate code** and function definitions
- **Added input validation** and sanitization
- **Implemented proper error handling** throughout the application

### 🔒 Security Features
- Input sanitization to prevent XSS attacks
- File upload validation (type, size, content)
- Email format validation
- Required field validation
- Error handling with user-friendly messages

## Setup Instructions

### 1. Environment Configuration

Create a `.env` file in the project root (copy from `.env.example`):

```env
# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here

# Application Configuration
VITE_APP_NAME=Recruiting Management System
VITE_DEFAULT_LANGUAGE=sk
```

### 2. Supabase Setup

1. Create a new Supabase project
2. Set up the following tables:

#### Users Table
```sql
CREATE TABLE users (
    id UUID REFERENCES auth.users(id) PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    role TEXT NOT NULL CHECK (role IN ('gm', 'recruiter', 'manager')),
    department TEXT,
    allowed_positions TEXT[],
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### Candidates Table
```sql
CREATE TABLE candidates (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    department TEXT NOT NULL,
    position TEXT NOT NULL,
    source TEXT NOT NULL,
    date_obtained DATE NOT NULL,
    interviewer TEXT,
    status TEXT NOT NULL DEFAULT 'New',
    notes TEXT,
    cv_file_path TEXT,
    assesment_file_path TEXT,
    last_updated TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### Recruiting Requests Table
```sql
CREATE TABLE recruiting_requests (
    id SERIAL PRIMARY KEY,
    position TEXT NOT NULL,
    department TEXT NOT NULL,
    description TEXT NOT NULL,
    headcount INTEGER NOT NULL DEFAULT 1,
    status TEXT NOT NULL DEFAULT 'Pending',
    position_type TEXT NOT NULL,
    position_category TEXT NOT NULL,
    is_confidential BOOLEAN DEFAULT FALSE,
    new_position_reason TEXT,
    replacement_name TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 3. Storage Setup

Create a storage bucket named `candidate-files` in Supabase with the following policies:

```sql
-- Allow authenticated users to upload files
CREATE POLICY "Allow authenticated uploads" ON storage.objects
FOR INSERT TO authenticated
WITH CHECK (bucket_id = 'candidate-files');

-- Allow authenticated users to download files
CREATE POLICY "Allow authenticated downloads" ON storage.objects
FOR SELECT TO authenticated
USING (bucket_id = 'candidate-files');
```

### 4. Row Level Security (RLS)

Enable RLS on all tables and create appropriate policies:

```sql
-- Enable RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE candidates ENABLE ROW LEVEL SECURITY;
ALTER TABLE recruiting_requests ENABLE ROW LEVEL SECURITY;

-- Example policies (adjust based on your requirements)
CREATE POLICY "Users can view own data" ON users
FOR SELECT USING (auth.uid() = id);

CREATE POLICY "GMs can view all candidates" ON candidates
FOR SELECT USING (
    EXISTS (
        SELECT 1 FROM users 
        WHERE users.id = auth.uid() 
        AND users.role = 'gm'
    )
);
```

## File Structure

```
recruitingManagement/
├── index.html              # Main HTML file
├── app.js                  # Original monolithic application (kept for reference)
├── app-refactored.js       # New modular main application
├── styles.css              # Application styles
├── config.js               # Configuration and environment variables
├── utils.js                # Utility functions (validation, sanitization, etc.)
├── pagination.js           # Pagination utilities
├── cache.js                # Caching system for performance
├── auth.js                 # Authentication management module
├── candidates.js           # Candidate management module
├── requests.js             # Recruiting requests management module
├── ui.js                   # UI management and translations module
├── english-flag.png        # English language flag
├── slovak-flag.png         # Slovak language flag
├── generated-icon.png      # Application icon
├── README.md               # This file
├── MIGRATION_GUIDE.md      # Migration guide from monolithic to modular
└── .env.example            # Environment variables template
```

## Usage

1. Open `index.html` in a web browser
2. Login with your Supabase credentials
3. Navigate through the different sections:
   - **Dashboard**: Overview and quick actions
   - **Candidates**: Manage candidate information
   - **Recruiting Requests**: Create and manage job requests
   - **GM Approval**: Approve/reject requests (GM only)
   - **Statistics**: View recruitment analytics
   - **Reports**: Generate and export reports

## Security Recommendations

### 🔐 Production Deployment

1. **Environment Variables**: Never commit `.env` files to version control
2. **HTTPS**: Always use HTTPS in production
3. **Supabase RLS**: Implement proper Row Level Security policies
4. **File Validation**: The system validates file types and sizes
5. **Input Sanitization**: All user inputs are sanitized
6. **Error Handling**: Sensitive information is not exposed in error messages

### 🛡️ Additional Security Measures

1. **Regular Updates**: Keep Supabase and dependencies updated
2. **Monitoring**: Set up logging and monitoring
3. **Backup**: Regular database backups
4. **Access Control**: Review user permissions regularly
5. **Audit Trail**: Consider adding audit logging for sensitive operations

## Development

### Code Organization

The application has been refactored into modules:

- **config.js**: Configuration and environment variables
- **utils.js**: Utility functions for validation, sanitization, and common operations
- **pagination.js**: Pagination utilities for large datasets
- **app.js**: Main application logic (still needs further modularization)

### ✅ Completed Improvements

- [x] **Modular Architecture**: Split monolithic app.js into focused modules
- [x] **Security Enhancements**: Input validation, sanitization, and secure configuration
- [x] **Performance Optimizations**: Caching system and pagination
- [x] **Error Handling**: Comprehensive error handling throughout the application
- [x] **Code Organization**: Better separation of concerns and maintainability

### Future Improvements

- [ ] Add TypeScript for better type safety
- [ ] Implement comprehensive testing suite
- [ ] Add real-time notifications
- [ ] Improve mobile responsiveness
- [ ] Add advanced search and filtering
- [ ] Implement audit logging
- [ ] Add automated deployment pipeline
- [ ] Implement API rate limiting

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please contact the development team.
#   r e c r u i t i n g  
 