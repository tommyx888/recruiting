# PowerShell script to guide RLS policy fixes
# This script will help you fix the RLS policies in Supabase

Write-Host "--- Supabase RLS Policy Fix Guide ---" -ForegroundColor Green

Write-Host "`n🔍 Problem: GM and Recruiter roles can't see all candidates and requests" -ForegroundColor Yellow
Write-Host "   This is likely due to Row Level Security (RLS) policies that are too restrictive."

Write-Host "`n📋 Step 1: Check current RLS policies" -ForegroundColor Cyan
Write-Host "   1. Go to your Supabase Dashboard"
Write-Host "   2. Navigate to Authentication -> Policies"
Write-Host "   3. Check the policies for 'candidates', 'recruiting_requests', and 'users' tables"
Write-Host "   4. Look for policies that might be blocking GM/Recruiter access"

Write-Host "`n🔧 Step 2: Run the RLS fix script" -ForegroundColor Cyan
Write-Host "   1. Go to Supabase Dashboard -> SQL Editor"
Write-Host "   2. Copy and paste the contents of 'fix-rls-policies.sql'"
Write-Host "   3. Click 'Run' to execute the script"
Write-Host "   4. This will create new RLS policies for GM and Recruiter roles"

Write-Host "`n🧪 Step 3: Test the fix" -ForegroundColor Cyan
Write-Host "   1. Open 'test-database-access.html' in your browser"
Write-Host "   2. Login as GM or Recruiter"
Write-Host "   3. Run the database access tests"
Write-Host "   4. Check if you can see all candidates and requests"

Write-Host "`n⚠️  Important Notes:" -ForegroundColor Red
Write-Host "   - Make sure you have admin access to Supabase"
Write-Host "   - The script will drop existing policies and create new ones"
Write-Host "   - This might affect other users temporarily"
Write-Host "   - Test thoroughly after applying the fix"

Write-Host "`n📁 Files to use:" -ForegroundColor Green
Write-Host "   - fix-rls-policies.sql (main fix script)"
Write-Host "   - test-database-access.html (test page)"
Write-Host "   - test-gm-access.html (GM specific tests)"
Write-Host "   - test-recruiter-access.html (Recruiter specific tests)"

$continue = Read-Host "`nPress Enter to continue or Ctrl+C to cancel"
Write-Host "`n✅ Ready to proceed with RLS policy fixes!" -ForegroundColor Green

