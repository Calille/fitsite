# cPanel Deployment Guide for TP Health & Fitness Website

This guide provides step-by-step instructions for deploying your Next.js fitness studio website to cPanel hosting.

## Deployment Options Overview

**🔹 Option 1: Static Export (Recommended for most cPanel hosts)**
- Upload contents of `out/` folder to `public_html/`
- Works on any shared hosting with HTML support
- Fastest loading times
- No server-side processing required

**🔹 Option 2: Dynamic Next.js App (SSR + API Routes)**
- Requires Node.js support in cPanel
- Enables server-side rendering and API routes
- Only available on hosts that support Node.js apps

**🔹 Option 3: Hybrid Approach**
- Static export + external services for dynamic features
- Best of both worlds for most use cases

## Prerequisites

- cPanel hosting account with File Manager access
- Node.js installed locally (for building the project)
- FTP/SFTP client (optional, for large file uploads)
- Check if your host supports Node.js apps (for dynamic deployment)

## 🔹 OPTION 1: Static Export Deployment (Recommended)

### Step 1: Build the Static Site

Since you already have an `out/` folder, your static export is ready! If you need to rebuild:

```bash
npm install
npm run build
npm run export
```

### Step 2: Upload to cPanel

**Important**: Upload the **contents** of `out/` folder, not the folder itself.

#### Method A: cPanel File Manager (Easy)
1. Log into your cPanel
2. Open **"File Manager"**
3. Navigate to `public_html/` directory
4. Delete existing files (if fresh deployment)
5. Select all files **inside** the `out/` folder
6. Upload them directly to `public_html/`
7. Extract if you uploaded as a zip

**Final structure should be:**
```
public_html/
├── index.html              ← NOT out/index.html
├── about/index.html
├── services/index.html
├── _next/                  ← All JS/CSS bundles
├── img/                    ← Your images
├── team/
└── ...etc
```

#### Method B: FTP/SFTP (For large files)
1. Connect to your hosting via FTP client
2. Navigate to `public_html/` directory
3. Upload all contents from `out/` folder
4. Ensure file permissions: 755 for folders, 644 for files

#### Method C: Zip Upload (Fast)
1. Zip the **contents** of `out/` folder (not the folder itself)
2. Upload zip to `public_html/` via File Manager
3. Extract in place
4. Delete the zip file

### Step 3: Verify Deployment
- Visit your domain
- Test all pages: `/about`, `/services`, `/team`, etc.
- Check that images and videos load correctly

---

## 🔹 OPTION 2: Dynamic Next.js App (Node.js Required)

**⚠️ Requirements**: Your host must support Node.js apps in cPanel

### Step 1: Check Node.js Support
1. In cPanel, look for **"Setup Node.js App"** or **"Node.js Selector"**
2. If not available, use static export instead

### Step 2: Create Node.js App
1. Go to **"Setup Node.js App"** in cPanel
2. Click **"Create Application"**
3. Set:
   - **Node.js Version**: 18.x or higher
   - **Application Mode**: Production
   - **Application Root**: `fitsite` (or your preferred folder)
   - **Application URL**: Your domain or subdomain
   - **Application Startup File**: `server.js`

### Step 3: Upload Project Files
1. Upload your entire project (except `node_modules/` and `out/`)
2. Upload to the application root folder you specified
3. Your structure should be:
```
your-app-folder/
├── src/
├── public/
├── package.json
├── next.config.mjs
└── ...all project files
```

### Step 4: Install Dependencies & Build
1. Open **"Terminal"** in cPanel (if available) or use SSH
2. Navigate to your app folder
3. Run:
```bash
npm install
npm run build
```

### Step 5: Start the Application
1. Go back to **"Setup Node.js App"**
2. Click **"Run NPM Install"** 
3. Click **"Restart"** to start the app
4. Your app should now be running with SSR and API routes

---

## 🔹 OPTION 3: Hybrid Approach

Use static export + external services for dynamic features:

### For Forms:
- **Formspree**: `https://formspree.io/`
- **Netlify Forms**: For contact forms
- **EmailJS**: Client-side email sending

### For Authentication:
- **Auth0**: `https://auth0.com/`
- **Firebase Auth**: `https://firebase.google.com/`

### For Database:
- **Supabase**: `https://supabase.com/`
- **PlanetScale**: `https://planetscale.com/`
- **MongoDB Atlas**: `https://www.mongodb.com/atlas`

This gives you static speed with dynamic functionality.

---

## Domain & Subdirectory Configuration

### Main Domain Deployment
- Upload contents of `out/` directly to `public_html/`
- Your site will be accessible at `https://yourdomain.com`

### Subdomain Deployment
1. Create subdomain in cPanel (**Subdomains** section)
2. Upload contents to the subdomain's folder (usually `public_html/subdomain/`)
3. Site accessible at `https://subdomain.yourdomain.com`

### Subfolder Deployment
1. Create folder in `public_html/` (e.g., `public_html/fitness/`)
2. Upload contents to that folder
3. Site accessible at `https://yourdomain.com/fitness/`

**Note**: For subfolder deployment, you may need to update the `basePath` in `next.config.mjs`

## Post-Deployment Checklist

### ✅ Essential Tests
- [ ] **Homepage loads** - `https://yourdomain.com`
- [ ] **All pages work** - Test `/about`, `/services`, `/team`, `/blog`, `/contact`, `/schedule`, `/book`
- [ ] **Images display** - Check logo, team photos, service images
- [ ] **Video plays** - Test hero video on homepage
- [ ] **Mobile responsive** - Test on phone/tablet
- [ ] **SSL certificate** - Ensure HTTPS works

### ✅ Functionality Tests  
- [ ] **Contact form** - Submit test message
- [ ] **Admin panel** - Login at `/admin` (if using static export, this is demo only)
- [ ] **Booking widget** - Test Momence integration
- [ ] **Navigation** - All menu links work
- [ ] **404 page** - Test invalid URL shows custom 404

### ✅ Performance & SEO
- [ ] **Page speed** - Test with PageSpeed Insights
- [ ] **Meta tags** - Check title/description in source
- [ ] **Favicon** - Icon shows in browser tab
- [ ] **Social sharing** - Test Open Graph tags

## Troubleshooting Common Issues

### 🔴 "404 Not Found" for pages
**Problem**: Sub-pages like `/about` show 404 error

**Solutions**:
1. **Missing .htaccess**: Ensure `.htaccess` file is uploaded to root
2. **URL Rewriting**: Check your host supports Apache mod_rewrite
3. **File structure**: Verify you uploaded contents of `out/`, not the folder itself

### 🔴 Images not loading
**Problem**: Broken image icons or missing photos

**Solutions**:
1. **File paths**: Check image URLs in browser developer tools
2. **File permissions**: Set 755 for directories, 644 for files
3. **Case sensitivity**: Ensure filename cases match (Linux hosting is case-sensitive)

### 🔴 Video not playing  
**Problem**: Hero video doesn't load/play

**Solutions**:
1. **File size**: 11.7MB video may be too large for some hosts
2. **Format support**: Test `.webm` format compatibility
3. **Alternative**: Host video on YouTube/Vimeo and embed

### 🔴 Contact form not submitting
**Problem**: Form shows success but no emails received

**Solutions**:
1. **Static limitation**: Contact forms need server-side processing
2. **Use Formspree**: Add `action="https://formspree.io/f/YOUR_ID"` to form
3. **PHP alternative**: Create PHP handler if host supports it

### 🔴 Admin panel not working
**Problem**: Can't login to `/admin` dashboard

**Solutions**:
1. **Static export**: Admin is demo-only in static version
2. **For real admin**: Use dynamic deployment (Option 2) or external CMS
3. **Authentication**: Implement with Auth0, Firebase, or similar service

### 🔴 Slow loading times
**Problem**: Site loads slowly

**Solutions**:
1. **Compress images**: Use tools like TinyPNG
2. **External video hosting**: Move large video to YouTube/Vimeo  
3. **CDN**: Use Cloudflare or similar
4. **Enable compression**: Ensure GZIP is working

## Performance & Security Notes

### 📊 File Size Optimization
- **Total site**: ~138MB
- **Large files**: `hero-video.webm` (11.7MB)
- **Recommendation**: Host videos externally for better performance

### 🔒 Security Considerations
- **Admin demo**: Current admin is hardcoded for demonstration
- **Production admin**: Use external authentication services
- **HTTPS**: Ensure SSL certificate is active
- **Regular updates**: Keep backups and monitor for issues

### ⚡ Performance Tips
- **Browser caching**: `.htaccess` includes caching headers
- **Image optimization**: All images are already optimized
- **GZIP compression**: Enabled via `.htaccess`
- **Lazy loading**: Consider implementing for below-fold images

## Quick Reference Commands

### Build Commands
```bash
# Install dependencies
npm install

# Build for production
npm run build

# Generate static export (creates out/ folder)
npm run export

# Development server
npm run dev
```

### File Upload Checklist
```
✅ Upload CONTENTS of out/ folder (not the folder itself)
✅ Upload to public_html/ (or subdomain folder)  
✅ Ensure .htaccess is in root directory
✅ Set file permissions: 755 for folders, 644 for files
✅ Test all pages and functionality
```

### Emergency Rollback
If deployment fails:
1. Restore previous backup from cPanel File Manager
2. Or re-upload working files
3. Check error logs in cPanel for details

---

## ✅ TL;DR - Quick Deploy

**For most cPanel hosts (static export):**

1. Your `out/` folder is ready ✅
2. Upload **contents** of `out/` to `public_html/`
3. Don't upload the `out/` folder itself
4. Test your site at your domain
5. Done! 🎉

**If you need dynamic features later:**
- Check if host supports Node.js apps
- Or use external services (Formspree, Auth0, etc.)

---

**Last Updated**: December 2024  
**Site Version**: 1.0.0  
**Deployment Type**: Static Export Ready  
**Framework**: Next.js 14+ with App Router

