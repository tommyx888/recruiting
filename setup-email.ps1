Write-Host "🚀 Setting up Email Notifications for Recruiting Management System" -ForegroundColor Green
Write-Host ""

Write-Host "📋 Checking prerequisites..." -ForegroundColor Yellow
Write-Host ""

Write-Host "1. Checking if Supabase CLI is installed..." -ForegroundColor Cyan
try {
    $supabaseVersion = supabase --version
    Write-Host "✅ Supabase CLI found: $supabaseVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Supabase CLI not found!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please install Supabase CLI first:" -ForegroundColor Yellow
    Write-Host "1. Install Scoop: Set-ExecutionPolicy RemoteSigned -Scope CurrentUser" -ForegroundColor White
    Write-Host "2. Install Supabase: scoop install supabase" -ForegroundColor White
    Write-Host ""
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""
Write-Host "2. Please login to Supabase..." -ForegroundColor Cyan
supabase login

Write-Host ""
Write-Host "3. Please link your project..." -ForegroundColor Cyan
Write-Host "Enter your project reference ID (found in Supabase Dashboard → Settings → General)" -ForegroundColor Yellow
$projectRef = Read-Host "Project Reference ID"
supabase link --project-ref $projectRef

Write-Host ""
Write-Host "4. Deploying Edge Function..." -ForegroundColor Cyan
supabase functions deploy send-email

Write-Host ""
Write-Host "5. Testing the function..." -ForegroundColor Cyan
Write-Host "Opening test page..." -ForegroundColor Yellow
Start-Process "test-email.html"

Write-Host ""
Write-Host "✅ Setup complete!" -ForegroundColor Green
Write-Host ""
Write-Host "📧 Email notifications should now work." -ForegroundColor Green
Write-Host "Test by creating a new recruiting request." -ForegroundColor Yellow
Write-Host ""
Read-Host "Press Enter to exit"

