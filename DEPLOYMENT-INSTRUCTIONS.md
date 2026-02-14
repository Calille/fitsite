# cPanel Deployment Instructions for The Elevate Programme Website

## Pre-Deployment Checklist

- [x] Mobile and desktop optimization completed
- [x] All responsive breakpoints tested
- [x] Text sizes verified (minimum 16px on mobile)
- [x] Touch targets verified (minimum 44x44px)
- [x] Images optimized and responsive
- [x] No horizontal scrolling on any device
- [x] All interactive elements tested
- [x] Popup modals tested on mobile
- [x] Navigation tested on all devices

## Build Process

### Step 1: Create Production Build

1. **Open terminal/command prompt** in the project directory:
   ```bash
   cd C:\Users\joshr\Documents\fitsite
   ```

2. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

3. **Create production build**:
   ```bash
   npm run build
   ```

4. **Verify build success**: The build should complete without errors and create an `out/` directory.

### Step 2: Verify Build Output

After building, check that the `out/` directory contains:
- ✅ `index.html` (homepage)
- ✅ `_next/` folder (with static assets)
- ✅ All page folders (elevate-programme/, menopause-way/, etc.)
- ✅ `public/` assets (images, videos, PDFs)
- ✅ `.htaccess` file (in public folder, will be copied to out/)

### Step 3: Prepare Files for Upload

**Important**: The `.htaccess` file needs to be in the root of the `out/` directory after build.

1. **Copy .htaccess to out directory**:
   - Copy `public/.htaccess` to `out/.htaccess`
   - OR manually create `.htaccess` in the `out/` directory using the provided content

## cPanel Upload Instructions

### Step 1: Access cPanel File Manager

1. Log into your cPanel account
2. Navigate to **File Manager**
3. Go to `public_html/` directory (or your domain's root directory)

### Step 2: Backup Current Site (IMPORTANT)

1. **Create a backup folder**:
   - Create a folder named `backup-[date]` (e.g., `backup-2024-01-15`)
   - Move all current files into this backup folder
   - OR download all current files as a backup

### Step 3: Upload Build Files

**Option A: Using cPanel File Manager**

1. **Delete all files** in `public_html/` (after backing up)
2. **Upload the entire `out/` folder contents**:
   - Select all files and folders from the `out/` directory
   - Upload to `public_html/`
   - **Important**: Upload the CONTENTS of `out/`, not the `out/` folder itself

**Option B: Using FTP Client (Recommended for large files)**

1. Connect to your server via FTP
2. Navigate to `public_html/`
3. Upload all contents from the `out/` directory
4. Ensure `.htaccess` is uploaded (it may be hidden - enable "Show hidden files")

### Step 4: Set File Permissions

Set the following permissions:
- **Folders**: 755
- **Files**: 644
- **.htaccess**: 644

### Step 5: Verify .htaccess File

1. Ensure `.htaccess` exists in `public_html/` root
2. If missing, create it with the provided content
3. Verify it's not blocked by cPanel (some hosts require enabling it)

## Post-Deployment Verification

### Step 1: Test Homepage

1. Visit your domain: `https://tphealthfitness.com`
2. Verify the homepage loads correctly
3. Check browser console for errors (F12 → Console)

### Step 2: Test Key Pages

Test these pages:
- ✅ `/` (Homepage)
- ✅ `/elevate-programme/` (Elevate Programme page)
- ✅ `/menopause-way/` (Menopause Way page)
- ✅ `/services/` (Services page)
- ✅ `/contact/` (Contact page)
- ✅ `/team/` (Team page)

### Step 3: Test Mobile Responsiveness

1. Use browser DevTools (F12 → Toggle device toolbar)
2. Test at these breakpoints:
   - Mobile: 320px, 375px, 414px
   - Tablet: 768px, 1024px
   - Desktop: 1280px, 1920px
3. Verify:
   - No horizontal scrolling
   - Text is readable (minimum 16px)
   - Buttons are easily tappable (44x44px minimum)
   - Images scale properly
   - Navigation menu works on mobile

### Step 4: Test Interactive Features

1. **Open Day Popup** (Elevate Programme page):
   - Should appear after 3 seconds
   - Should be dismissible
   - Should not reappear after dismissal
   - Should work on mobile

2. **Quiz Popup** (Menopause Way page):
   - Should appear after 5 seconds
   - Form should be functional
   - Should work on mobile

3. **Navigation**:
   - Dropdown menus should work
   - Mobile hamburger menu should function
   - All links should work

4. **Forms**:
   - Contact forms should be functional
   - All inputs should be properly sized for mobile

### Step 5: Performance Check

1. **Page Load Speed**:
   - Use Google PageSpeed Insights: https://pagespeed.web.dev/
   - Target: Mobile score > 70, Desktop score > 90

2. **Check Console Errors**:
   - Open browser DevTools (F12)
   - Check Console tab for errors
   - Fix any critical errors

3. **Verify HTTPS**:
   - Ensure site redirects HTTP to HTTPS
   - Check SSL certificate is valid

## Troubleshooting

### Issue: White Page / 500 Error

**Solution**:
1. Check `.htaccess` file exists and has correct permissions (644)
2. Check error logs in cPanel
3. Verify all files uploaded correctly
4. Check file permissions (folders: 755, files: 644)

### Issue: CSS/JS Not Loading

**Solution**:
1. Verify `_next/` folder uploaded correctly
2. Check file paths are relative (not absolute)
3. Clear browser cache
4. Check `.htaccess` MIME types are correct

### Issue: 404 Errors on Routes

**Solution**:
1. Verify `.htaccess` rewrite rules are active
2. Check `trailingSlash: true` in next.config.mjs
3. Ensure all page folders end with `/index.html`

### Issue: Images Not Loading

**Solution**:
1. Verify images are in `public/` folder
2. Check image paths are correct
3. Verify image file permissions (644)
4. Check `.htaccess` image MIME types

### Issue: Popup Not Appearing

**Solution**:
1. Check browser console for JavaScript errors
2. Verify localStorage is enabled
3. Clear browser cache and test again

## Rollback Procedure

If something goes wrong:

1. **Quick Rollback**:
   - Delete current files in `public_html/`
   - Restore files from backup folder
   - OR restore from cPanel backup

2. **Full Rollback**:
   - Access cPanel backup feature
   - Restore previous website backup
   - Contact hosting support if needed

## File Structure After Deployment

Your `public_html/` should look like this:

```
public_html/
├── .htaccess
├── index.html
├── _next/
│   ├── static/
│   │   ├── css/
│   │   ├── chunks/
│   │   └── media/
├── elevate-programme/
│   └── index.html
├── menopause-way/
│   └── index.html
├── services/
│   └── index.html
├── contact/
│   └── index.html
├── img/
│   └── logo.png
├── elevatevid.webm
├── 1111.webm
├── openday.pdf
└── [other static assets]
```

## Support

If you encounter issues:
1. Check cPanel error logs
2. Check browser console for errors
3. Verify file permissions
4. Contact hosting support if needed

## Notes

- The build uses static export, so no server-side rendering
- All paths are relative for cPanel compatibility
- Images are unoptimized in build (for cPanel compatibility)
- The site is fully static and can be served from any web server

---

**Last Updated**: January 2024
**Build Command**: `npm run build`
**Output Directory**: `out/`


