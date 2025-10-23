# Troubleshooting Guide

## Login Issues

If you're having trouble logging in, here are the steps to troubleshoot:

### 1. Check Browser Console

Open your browser's Developer Tools (F12) and check the Console tab for any error messages. The application now includes detailed logging to help identify issues.

**Expected console output on successful load:**
```
Starting module initialization...
Supabase initialized successfully
All modules are available
All modules initialized
Checking authentication...
Authentication check result: false
User not authenticated, showing login
Setting up login form...
Auth form found: true
Login form event listener added
Module initialization completed successfully
```

### 2. Common Issues and Solutions

#### Issue: "AuthManager not available" or similar module errors
**Solution:** Make sure all script files are loaded in the correct order in `index.html`:
```html
<script src="config.js"></script>
<script src="utils.js"></script>
<script src="pagination.js"></script>
<script src="cache.js"></script>
<script src="auth.js"></script>
<script src="candidates.js"></script>
<script src="requests.js"></script>
<script src="ui.js"></script>
<script src="app.js"></script>
```

#### Issue: "Supabase client not initialized"
**Solution:** Check that the Supabase credentials in `config.js` are correct and the Supabase service is accessible.

#### Issue: Login form not responding
**Solution:** Check that the form has the correct ID (`auth-form`) and the email/password fields have the correct IDs (`email`, `password`).

#### Issue: "Login failed" with authentication error
**Solution:** 
1. Verify your email and password are correct
2. Check that your user account exists in the Supabase `auth.users` table
3. Ensure your user has a corresponding record in the `users` table with proper role and permissions

### 3. Database Setup Issues

If you're getting database-related errors, ensure:

1. **Users table exists** with the correct structure:
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

2. **User record exists** for your account:
```sql
INSERT INTO users (id, email, role, department) 
VALUES ('your-user-id', 'your-email@example.com', 'gm', 'Management');
```

3. **Row Level Security (RLS) is properly configured** if you're using it.

### 4. Network Issues

If you're getting network errors:

1. Check your internet connection
2. Verify the Supabase URL is accessible
3. Check if there are any firewall or proxy restrictions

### 5. Browser Compatibility

The application requires a modern browser with support for:
- ES6+ JavaScript features
- Fetch API
- Local Storage
- CSS Grid and Flexbox

### 6. Quick Fixes

#### Reset to Original Version
If you need to quickly revert to the original version:
1. In `index.html`, change the last script tag from:
   ```html
   <script src="app.js"></script>
   ```
   to:
   ```html
   <script src="app-original.js"></script>
   ```

#### Clear Browser Cache
Sometimes cached files can cause issues:
1. Press Ctrl+Shift+R (or Cmd+Shift+R on Mac) to hard refresh
2. Or clear your browser cache completely

#### Check File Permissions
Ensure all files are readable and the web server can serve them properly.

### 7. Getting Help

If you're still having issues:

1. **Check the console logs** - they now provide detailed information about what's happening
2. **Verify your Supabase setup** - make sure your database and authentication are configured correctly
3. **Test with a simple user account** - create a test user with basic permissions
4. **Check network requests** - use the Network tab in Developer Tools to see if API calls are being made

### 8. Debug Mode

The application now includes extensive logging. To see what's happening:

1. Open Developer Tools (F12)
2. Go to the Console tab
3. Refresh the page
4. Look for the initialization messages
5. Try logging in and watch for any error messages

The logs will show you exactly where the process is failing, making it much easier to identify and fix issues.

