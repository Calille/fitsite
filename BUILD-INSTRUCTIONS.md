# Build Instructions for cPanel Deployment

## Quick Start

If you encounter build errors due to locked files in the `out/` directory:

### Option 1: Manual Clean (Recommended)
1. Close any programs that might be using files in the `out/` directory (VS Code, file explorer, etc.)
2. Manually delete the `out/` folder
3. Run: `npm run build`
4. After build completes, copy `public/.htaccess` to `out/.htaccess`

### Option 2: Use Deployment Script
1. Run: `.\deploy.ps1` (PowerShell)
2. The script will attempt to clean and build automatically

### Option 3: Change Output Directory Temporarily
If `out/` is locked, you can temporarily change the output directory in `next.config.mjs`:
```javascript
distDir: 'dist', // Change from 'out' to 'dist'
```

---

## Build Command

```bash
npm run build
```

## After Build

1. **Copy .htaccess**: Copy `public/.htaccess` to `out/.htaccess`
2. **Verify Build**: Check that `out/` contains:
   - `index.html`
   - `_next/` folder
   - All page folders
   - `.htaccess` file

## Upload to cPanel

Upload all contents of the `out/` directory to your `public_html/` folder in cPanel.

See `DEPLOYMENT-INSTRUCTIONS.md` for detailed upload instructions.


