# 🚨 cPanel White Page Fix Instructions

## The Problem
Your website shows a white page because the CSS and JavaScript files are not loading properly. The browser console shows MIME type errors, meaning the server is returning HTML (404 pages) instead of the actual CSS/JS files.

## 🔧 Solution Steps

### Step 1: Check Current File Structure
Log into cPanel File Manager and check your `public_html/` directory. It should look like this:

✅ **CORRECT Structure:**
```
public_html/
├── index.html                    ← Homepage file
├── about/
│   └── index.html
├── services/
│   └── index.html
├── _next/                        ← CRITICAL: This folder must exist
│   ├── static/
│   │   ├── css/
│   │   │   └── dac8722bcb3350e8.css
│   │   ├── chunks/
│   │   │   └── [all .js files]
│   │   └── media/
├── img/
│   └── logo.png
├── favicon.ico
└── [other folders]
```

❌ **WRONG Structure:**
```
public_html/
├── out/                          ← This is wrong!
│   ├── index.html
│   ├── _next/
│   └── ...
```

### Step 2: Fix the Upload (Choose One Method)

#### Method A: Delete and Re-upload Correctly
1. **Delete everything** in `public_html/`
2. **Download** the `website-fixed-v2.zip` file
3. **Extract** the zip on your computer
4. **Upload ONLY the contents** of the extracted folder to `public_html/`
   - NOT the folder itself, just what's inside it

#### Method B: Move Files if Already Uploaded Wrong
If you see an `out/` folder in `public_html/`:
1. Go into the `out/` folder
2. **Select ALL files and folders** inside `out/`
3. **Move** them to `public_html/` (one level up)
4. **Delete** the empty `out/` folder

### Step 3: Verify Upload
Check that these critical files exist at these exact paths:
- `public_html/index.html` ✅
- `public_html/_next/static/css/dac8722bcb3350e8.css` ✅
- `public_html/_next/static/chunks/[various .js files]` ✅

### Step 4: Add .htaccess File (If Still Having Issues)
Create a file called `.htaccess` in `public_html/` with this content:

```apache
# Ensure proper MIME types for static assets
AddType application/javascript .js
AddType text/css .css
AddType application/json .json

# Cache static assets
<FilesMatch "\.(css|js|png|jpg|jpeg|gif|webp|svg|ico|woff|woff2)$">
    ExpiresActive On
    ExpiresDefault "access plus 1 month"
</FilesMatch>

# Fallback for SPA routing (if needed)
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} !^/_next/
RewriteRule . /index.html [L]
```

### Step 5: Clear Browser Cache
After fixing the files:
1. **Hard refresh** your browser (Ctrl+F5 or Cmd+Shift+R)
2. **Clear browser cache** completely
3. Try visiting your site again

### Step 6: Test the Fix
Visit: `https://www.tphealthfitness.com/_next/static/css/dac8722bcb3350e8.css`

- ✅ **If you see CSS code**: Files are uploaded correctly
- ❌ **If you see HTML/404 page**: Files are in wrong location

## 🆘 Still Having Issues?

### Common Causes:
1. **Files in wrong directory** - Most common issue
2. **Incomplete upload** - Some files didn't transfer
3. **Server doesn't support static assets** - Rare but possible
4. **Browser cache** - Old files cached

### Quick Diagnostic:
1. Check if `https://yourdomain.com/_next/static/css/dac8722bcb3350e8.css` loads
2. Check if `https://yourdomain.com/index.html` shows the page source
3. Look for 404 errors in browser console

## 📁 File Upload Checklist
- [ ] Deleted old files from `public_html/`
- [ ] Extracted `website-fixed-v2.zip` on computer
- [ ] Uploaded CONTENTS of extracted folder to `public_html/`
- [ ] Verified `_next/` folder exists in `public_html/`
- [ ] Checked that CSS file loads at direct URL
- [ ] Cleared browser cache
- [ ] Added `.htaccess` if needed

Your website should now load properly with all content visible!
