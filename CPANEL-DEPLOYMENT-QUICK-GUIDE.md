# cPanel Deployment Guide - Updated with Mailchimp Integration

## Files to Upload to cPanel

### 1. Main Website Files (Upload to public_html/)
Upload ALL files from the `out/` directory to your cPanel's `public_html/` folder:

**Essential Files:**
- `index.html` (main homepage)
- `404.html` (error page)
- `favicon.ico`
- All `.webp` images (hero1.webp, hero2.webp, etc.)
- All `.svg` files (next.svg, vercel.svg, etc.)

**Directory Structure:**
- `_next/` (entire folder with all subfolders)
- `about/` (entire folder)
- `account/` (entire folder)
- `admin/` (entire folder)
- `blog/` (entire folder with images)
- `book/` (entire folder)
- `cart/` (entire folder)
- `contact/` (entire folder)
- `menopause-way/` (entire folder)
- `more/` (entire folder)
- `privacy/` (entire folder)
- `services/` (entire folder)
- `team/` (entire folder with images)
- `terms/` (entire folder)

### 2. PHP Files (if using email functionality)
- `send-quiz-email.php` (if you want to keep email functionality)
- `basic-email-test.php` (for testing)

## cPanel Upload Steps

### Method 1: File Manager (Recommended)
1. **Login to cPanel**
2. **Open File Manager**
3. **Navigate to public_html/**
4. **Upload the entire `out/` folder contents**
   - Select all files in `out/` directory
   - Upload to `public_html/`
   - Maintain folder structure

### Method 2: ZIP Upload
1. **Create ZIP file** of the `out/` directory contents
2. **Upload ZIP** to cPanel File Manager
3. **Extract** in public_html/
4. **Delete ZIP file** after extraction

## Important Notes

### ✅ What's New in This Build
- **Mailchimp Integration**: Quiz popup now loads Mailchimp signup forms
- **Permission Bypass**: Forms appear automatically without user consent prompts
- **Fallback Button**: Manual "Load Mailchimp Form" button if needed
- **Original Quiz Preserved**: All quiz code is commented out but preserved

### 🔧 Configuration Required
1. **Mailchimp Account**: Ensure your Mailchimp account is properly configured
2. **Domain Connection**: Verify `tphealthfitness.com` is connected in Mailchimp
3. **Popup Campaigns**: Set up popup campaigns in Mailchimp dashboard if desired

### 📁 File Structure After Upload
```
public_html/
├── index.html
├── 404.html
├── favicon.ico
├── _next/
│   ├── build-1760896473240/
│   └── static/
├── about/
├── admin/
├── blog/
├── contact/
├── menopause-way/
├── services/
├── team/
└── [other directories...]
```

## Testing After Upload

1. **Visit your website** (tphealthfitness.com)
2. **Test the popup** - should show "Stay Connected!" with Mailchimp forms
3. **Check Mailchimp integration** - forms should load automatically
4. **Test all pages** - ensure navigation works correctly

## Troubleshooting

### If Mailchimp Forms Don't Appear:
1. Check browser console for errors
2. Verify Mailchimp account connection
3. Try the "Load Mailchimp Form" button
4. Check if popup campaigns are configured in Mailchimp

### If Pages Don't Load:
1. Verify all files uploaded correctly
2. Check file permissions (should be 644 for files, 755 for folders)
3. Ensure `_next/` folder uploaded completely

## Support Files Available
- `CPANEL-FIX-INSTRUCTIONS.md` - Detailed troubleshooting
- `CPANEL-READY-CHECKLIST.md` - Pre-deployment checklist
- `DEPLOYMENT-GUIDE.md` - Comprehensive deployment guide
