@echo off
echo 🚀 Setting up Email Notifications for Recruiting Management System
echo.

echo 📋 Checking prerequisites...
echo.

echo 1. Checking if Supabase CLI is installed...
where supabase >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Supabase CLI not found!
    echo.
    echo Please install Supabase CLI first:
    echo 1. Install Scoop: Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
    echo 2. Install Supabase: scoop install supabase
    echo.
    pause
    exit /b 1
) else (
    echo ✅ Supabase CLI found
)

echo.
echo 2. Please login to Supabase...
supabase login

echo.
echo 3. Please link your project...
echo Enter your project reference ID (found in Supabase Dashboard → Settings → General)
set /p PROJECT_REF="Project Reference ID: "
supabase link --project-ref %PROJECT_REF%

echo.
echo 4. Deploying Edge Function...
supabase functions deploy send-email

echo.
echo 5. Testing the function...
echo Opening test page...
start test-email.html

echo.
echo ✅ Setup complete!
echo.
echo 📧 Email notifications should now work.
echo Test by creating a new recruiting request.
echo.
pause

