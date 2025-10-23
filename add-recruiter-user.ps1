# PowerShell script to add a Recruiter user
# This script will help you add a Recruiter user to the system

Write-Host "=== Adding Recruiter User ===" -ForegroundColor Green

# Configuration
$SUPABASE_URL = "https://jlpkwktqylbykvpafmmc.supabase.co"
$SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpscGt3a3RxeWxieWt2cGFmbW1jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ5NzQyNzYsImV4cCI6MjA1MDU1MDI3Nn0.c-UPO_SNxUGtqLEY4YNpciDLJqtO6j4OSKxS-8y9cFI"

# Create Supabase client
$headers = @{
    "apikey" = $SUPABASE_ANON_KEY
    "Authorization" = "Bearer $SUPABASE_ANON_KEY"
    "Content-Type" = "application/json"
}

Write-Host "Step 1: Create user in Supabase Auth Dashboard first" -ForegroundColor Yellow
Write-Host "1. Go to https://supabase.com/dashboard/project/jlpkwktqylbykvpafmmc/auth/users" -ForegroundColor Cyan
Write-Host "2. Click 'Add user' and create a user with email and password" -ForegroundColor Cyan
Write-Host "3. Copy the User ID from the created user" -ForegroundColor Cyan
Write-Host "4. Press Enter when done..." -ForegroundColor Yellow
Read-Host

Write-Host "Step 2: Enter the Auth User ID" -ForegroundColor Yellow
$authUserId = Read-Host "Enter the Auth User ID from Supabase Auth"

if ([string]::IsNullOrEmpty($authUserId)) {
    Write-Host "Error: Auth User ID is required!" -ForegroundColor Red
    exit 1
}

Write-Host "Step 3: Adding Recruiter user to users table..." -ForegroundColor Yellow

# Prepare the data
$userData = @{
    auth_user_id = $authUserId
    role = "recruiter"
    department = "HR"
    allowed_positions = @(
        "Recruiter", "HR Manager", "Senior HR Generalist", "HR Generalist 1", 
        "Training Center Trainer", "HSE Specialist", "Environment Officer", "Executive assistant"
    )
    email = "recruiter@company.com"
} | ConvertTo-Json

try {
    # Insert user into users table
    $response = Invoke-RestMethod -Uri "$SUPABASE_URL/rest/v1/users" -Method POST -Headers $headers -Body $userData
    
    Write-Host "✅ Recruiter user added successfully!" -ForegroundColor Green
    Write-Host "User ID: $authUserId" -ForegroundColor Cyan
    Write-Host "Role: recruiter" -ForegroundColor Cyan
    Write-Host "Department: HR" -ForegroundColor Cyan
    Write-Host "Allowed positions: HR positions" -ForegroundColor Cyan
    
} catch {
    Write-Host "❌ Error adding Recruiter user:" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    
    if ($_.Exception.Response) {
        $errorContent = $_.Exception.Response.GetResponseStream()
        $reader = New-Object System.IO.StreamReader($errorContent)
        $errorText = $reader.ReadToEnd()
        Write-Host "Response: $errorText" -ForegroundColor Red
    }
}

Write-Host "`nStep 4: Verify the user was added" -ForegroundColor Yellow
Write-Host "You can now test the login with the Recruiter account!" -ForegroundColor Green

