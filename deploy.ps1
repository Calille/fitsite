# Deployment Script for cPanel
# This script builds the site and prepares it for deployment

Write-Host "Starting deployment build..." -ForegroundColor Green

# Try to remove out directory if it exists
if (Test-Path "out") {
    Write-Host "Cleaning previous build..." -ForegroundColor Yellow
    try {
        Remove-Item -Recurse -Force "out" -ErrorAction Stop
        Write-Host "Previous build cleaned successfully." -ForegroundColor Green
    } catch {
        Write-Host "Warning: Could not fully clean out directory. Some files may be locked." -ForegroundColor Yellow
        Write-Host "You may need to close any programs using files in the 'out' directory." -ForegroundColor Yellow
    }
}

# Run the build
Write-Host "Building production site..." -ForegroundColor Green
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "Build completed successfully!" -ForegroundColor Green
    
    # Copy .htaccess to out directory
    if (Test-Path "public\.htaccess") {
        Copy-Item "public\.htaccess" "out\.htaccess" -Force
        Write-Host ".htaccess file copied to out directory." -ForegroundColor Green
    } else {
        Write-Host "Warning: .htaccess file not found in public folder." -ForegroundColor Yellow
    }
    
    Write-Host "`nBuild is ready in the 'out' directory!" -ForegroundColor Green
    Write-Host "Next steps:" -ForegroundColor Cyan
    Write-Host "1. Upload all contents of the 'out' directory to your cPanel public_html folder" -ForegroundColor White
    Write-Host "2. Ensure .htaccess file is uploaded (it may be hidden)" -ForegroundColor White
    Write-Host "3. Set file permissions: folders=755, files=644" -ForegroundColor White
    Write-Host "4. Test your site and verify all pages work correctly" -ForegroundColor White
} else {
    Write-Host "Build failed! Please check the errors above." -ForegroundColor Red
    exit 1
}


