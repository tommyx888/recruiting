Write-Host "🔧 Adding Managers to Database" -ForegroundColor Green
Write-Host ""

Write-Host "📋 Instructions:" -ForegroundColor Yellow
Write-Host "1. Go to Supabase Dashboard → SQL Editor" -ForegroundColor White
Write-Host "2. Copy the content from 'quick-add-managers.sql'" -ForegroundColor White
Write-Host "3. Paste it into the SQL Editor" -ForegroundColor White
Write-Host "4. Click 'Run'" -ForegroundColor White
Write-Host ""

Write-Host "📄 SQL Content:" -ForegroundColor Cyan
Write-Host "----------------------------------------" -ForegroundColor Gray
Get-Content "quick-add-managers.sql" | Write-Host
Write-Host "----------------------------------------" -ForegroundColor Gray
Write-Host ""

Write-Host "🌐 Opening Supabase Dashboard..." -ForegroundColor Green
Start-Process "https://supabase.com/dashboard/project/jlpkwktqylbykvpafmmc/sql"

Write-Host ""
Write-Host "✅ After running the SQL, test the notifications:" -ForegroundColor Green
Write-Host "1. Open test-manager-notifications.html" -ForegroundColor White
Write-Host "2. Click 'Check All Managers'" -ForegroundColor White
Write-Host "3. Test position filtering" -ForegroundColor White
Write-Host ""

Read-Host "Press Enter to continue"

