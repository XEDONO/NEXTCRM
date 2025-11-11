# NextCRM - Deployment & Development Guide

## 🚀 What Was Fixed

### Major Changes:
1. **React Router HashRouter** - Switched from state-based view management to proper client-side routing using HashRouter
   - URLs now work as: `http://localhost:3001/#/dashboard`, `http://localhost:3001/#/inventory`, etc.
   - **HashRouter doesn't need server-side routing** - perfect for GitHub Pages!

2. **Simplified Vite Configuration** - Removed `base: '/NEXTCRM/'` from vite.config.ts
   - HashRouter's `basename` prop handles the base path automatically

3. **Bulletproof GitHub Actions Workflow** - Created a clean, simple deployment process
   - Uses `npm ci` (cleaner than npm install)
   - Builds the project
   - Creates `.nojekyll` to disable Jekyll processing
   - Force-pushes to `gh-pages` branch with clean history

4. **Images in Inventory** - Using external Pexels URLs, now loading correctly with proper routing

---

## 📋 Local Development

### Start Development Server
```powershell
npm run dev
```
- Runs on `http://localhost:3001` (port auto-adjusts if in use)
- Hot module reloading enabled
- URL: `http://localhost:3001/#/dashboard`

### Build for Production (Local Testing)
```powershell
npm run build
```
- Creates optimized `dist/` folder
- Ready for deployment

### Preview Production Build Locally
```powershell
npm run preview
```
- Runs on `http://localhost:4173/`
- Tests the exact production build
- URL: `http://localhost:4173/#/dashboard`

### Build + Preview in One Command
```powershell
npm run serve:build
```
- Builds and immediately previews
- Quick way to test production before pushing

---

## 🌐 GitHub Pages Deployment

### One-Time Setup (Already Done ✓)

1. Go to **Settings → Pages**
2. Select:
   - **Source:** Deploy from a branch
   - **Branch:** `gh-pages`
   - **Folder:** `/ (root)`

3. `.nojekyll` file is already in the repo (disables Jekyll processing)

### Automatic Deployment
Every push to the `master` branch automatically:
1. Triggers GitHub Actions workflow
2. Installs dependencies
3. Builds the production bundle
4. Creates a clean `gh-pages` branch
5. Deploys to GitHub Pages

**Your site is live at:** https://XEDONO.github.io/NEXTCRM/

---

## ✅ Testing Checklist

### Local Testing
- [ ] Run `npm run dev` - app loads at `http://localhost:3001`
- [ ] Navigate between Dashboard, Inventory, Customers, etc.
- [ ] Check browser console (F12) for errors
- [ ] Images display correctly in Inventory tab
- [ ] Dark mode toggle works
- [ ] All UI interactions work

### Preview Production Build
```powershell
npm run serve:build
```
- [ ] App loads at `http://localhost:4173`
- [ ] Navigate to all pages (via hash URLs)
- [ ] Images load correctly
- [ ] No console errors
- [ ] Page size is reasonable (~500KB bundle)

### GitHub Pages
- [ ] Visit https://XEDONO.github.io/NEXTCRM/
- [ ] App loads completely
- [ ] Can navigate between all sections
- [ ] Vehicle images display
- [ ] No 404 errors in console
- [ ] No MIME type errors

---

## 🔧 How HashRouter Works

**HashRouter = Browser Hash Navigation (No Server Needed!)**

```
Old (doesn't work on GitHub Pages):
❌ /dashboard → Needs server to serve dashboard.html

New (HashRouter - works everywhere):
✓ /#/dashboard → Browser handles everything client-side
✓ /#/inventory → No server requests for routing
✓ /#/customers → Works on GitHub Pages!
```

---

## 📁 Project Structure

```
d:\NEXTCRM\
├── index.tsx                 # Entry point (updated with HashRouter)
├── index.html               # Main HTML
├── App.tsx                  # Main app component (view switching still works)
├── vite.config.ts          # Build config (base path removed)
├── package.json             # Scripts updated
├── components/              # React components
├── data/                    # Mock data (vehicle images from Pexels)
├── dist/                    # Production build output
├── .github/workflows/
│   └── static.yml          # GitHub Pages deployment workflow
└── .nojekyll               # Disables Jekyll on GitHub Pages
```

---

## 🐛 Troubleshooting

### Page still blank on GitHub Pages?
1. Check browser console (F12) for errors
2. Hard refresh (Ctrl+Shift+R)
3. Wait 2-3 minutes for deployment to complete
4. Check: Settings → Pages → Branch is `gh-pages`

### Images not showing?
- External Pexels URLs require internet connection
- Check browser console for blocked requests
- They work fine - no local image files needed

### Port already in use?
- Dev server auto-switches to next available port
- Check the terminal output for the actual URL
- Or kill the process: `Get-Process node | Stop-Process`

### Build fails?
```powershell
npm install  # Clean install dependencies
npm run build  # Try building again
```

---

## 📝 Files Modified in This Refactor

1. **index.tsx** - Added HashRouter wrapper
2. **vite.config.ts** - Removed base path
3. **.github/workflows/static.yml** - Simplified deployment workflow
4. **package.json** - Added `serve:build` script
5. **package-lock.json** - Added react-router-dom dependency

---

## 🎯 Next Steps (Optional Improvements)

- [ ] Add more vehicle images (currently using external Pexels URLs)
- [ ] Implement proper form validation
- [ ] Add PDF export functionality
- [ ] Add more analytics features
- [ ] Implement dark mode persistence
- [ ] Add service worker for offline support

---

## 📞 Key Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server on port 3001 |
| `npm run build` | Create production build in `dist/` |
| `npm run preview` | Serve production build locally on port 4173 |
| `npm run serve:build` | Build + preview in one command |
| `git push` | Trigger GitHub Pages deployment |

---

**Status:** ✅ Full GitHub Pages integration complete with HashRouter!
