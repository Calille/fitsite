# cPanel Deployment Guide for TP Health & Fitness

## 🚀 Pre-Deployment Checklist

### 1. Build the Project
```bash
npm run build
```

### 2. Files to Upload
Upload the entire contents of the `out/` folder to your cPanel public_html directory.

### 3. File Structure on cPanel
```
public_html/
├── index.html
├── _next/
├── about/
├── admin/
├── blog/
├── book/
├── cart/
├── contact/
├── more/
├── privacy/
├── services/
├── team/
├── terms/
├── img/
├── blog/
├── team/
├── hero-video.webm
├── hero1.webp
├── hero2.webp
├── ... (all other hero images)
├── .htaccess
└── favicon.ico
```

## 🔧 cPanel Configuration

### 1. Upload .htaccess File
- Upload the provided `.htaccess` file to the root of your public_html directory
- This handles routing, compression, and security

### 2. Set File Permissions
- Set all files to 644
- Set all directories to 755
- Set .htaccess to 644

### 3. Enable Compression (if not already enabled)
- Go to cPanel → Software → Optimize Website
- Enable "Compress all content"

## 🎥 Video Optimization

### Hero Video Issues
- The hero-video.webm file is 11MB - this might be too large for some hosting
- If video doesn't load, the site will fallback to hero1.webp background image
- Consider compressing the video further if needed

### Video Compression (Optional)
```bash
# Compress video for better loading
ffmpeg -i hero-video.webm -c:v libvpx-vp9 -crf 30 -b:v 0 -b:a 128k -c:a libopus hero-video-compressed.webm
```

## 🖼️ Image Optimization

### All images are now using relative paths (./)
- This ensures they work regardless of subdirectory structure
- Images are optimized for web delivery

## 🔗 Iframe Integration

### Momence Integration
- Booking iframe: https://momence.com/appointments/55732
- Gift card iframe: https://momence.com/gcc/55732
- These should work on cPanel, but may be blocked by some hosting providers

### Iframe Fallbacks
- If iframes don't load, fallback contact forms will appear
- Users can still contact you directly

## 🚨 Common Issues & Solutions

### 1. Video Not Loading
- **Cause**: File too large or unsupported format
- **Solution**: Site will show background image instead

### 2. Images Not Loading
- **Cause**: Incorrect file paths
- **Solution**: All paths are now relative (./) - should work

### 3. Iframes Not Loading
- **Cause**: CORS or CSP restrictions
- **Solution**: Fallback forms will appear

### 4. Routing Issues
- **Cause**: Client-side routing not working
- **Solution**: .htaccess file handles this

## 📊 Performance Optimization

### 1. Enable Gzip Compression
- Already configured in .htaccess

### 2. Set Cache Headers
- Static assets cached for 1 year
- Videos cached for 1 month

### 3. Optimize Images
- All images are WebP format for better compression
- Lazy loading enabled where appropriate

## 🔍 Testing Checklist

After deployment, test:
- [ ] Homepage loads with hero video/image
- [ ] Navigation works on all pages
- [ ] Teal colors display correctly
- [ ] Booking page iframe loads (or shows fallback)
- [ ] Gift card page iframe loads (or shows fallback)
- [ ] All images load properly
- [ ] Contact forms work
- [ ] Mobile responsiveness

## 📞 Support

If you encounter issues:
1. Check browser console for errors
2. Verify all files uploaded correctly
3. Check file permissions
4. Test on different browsers
5. Contact hosting provider if iframes are blocked

## 🎯 Success Indicators

✅ Site loads without errors
✅ Hero section displays (video or image)
✅ All teal colors visible
✅ Navigation works
✅ Forms are functional
✅ Mobile responsive
