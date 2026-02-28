# 🖥️ Local Deployment Guide - NextCRM

**No GitHub. No Cloud. Just Your Computer. 100% Private.**

---

## ✨ What This Does

Serves your NextCRM app from your personal computer on your local network.

- ✅ **Private** - Only accessible on your network
- ✅ **Instant Deploy** - One command: `npm run server`
- ✅ **No internet needed** - Works offline
- ✅ **Access from other devices** - Phone, tablet, other computers
- ✅ **Total control** - Your data stays on your machine

---

## 🚀 Quick Start

### 1. Start the Server (One Command)
```powershell
npm run server
```

Output:
```
🚀 NextCRM Server Running!

📍 Local:   http://localhost:5000
📍 Network: http://192.168.1.174:5000

✅ Press Ctrl+C to stop
```

### 2. Open in Browser
- **From this computer:** `http://localhost:5000`
- **From other devices on your network:** `http://192.168.1.174:5000`

### 3. Stop the Server
Press `Ctrl+C` in the terminal

---

## 📍 Network Access

Your app is accessible from:

### Same Computer
```
http://localhost:5000
```

### Other Computers on Your Network
```
http://192.168.1.174:5000
```
(Replace `192.168.1.174` with your computer's IP address shown in the terminal)

### Example Devices
- 📱 **Phone:** Open browser → `http://192.168.1.174:5000`
- 💻 **Laptop:** Open browser → `http://192.168.1.174:5000`
- 🖥️ **Another PC:** Open browser → `http://192.168.1.174:5000`

---

## 📋 Available Commands

| Command | What It Does |
|---------|-------------|
| `npm run server` | **Build + Start** (one command) |
| `npm run start:server` | Just start server (no rebuild) |
| `npm run dev` | Development mode with hot reload |
| `npm run build` | Create production build only |

---

## 🔄 Workflow

### First Time Setup
```powershell
npm install              # Install dependencies (already done)
npm run server           # Build and start server
```

### Update & Redeploy
```powershell
# Edit your code (components, data, etc.)
# Then rebuild and restart:
npm run server
```

Or if you only changed the server config:
```powershell
npm run start:server     # Just restart without rebuild
```

---

## 📂 How It Works

```
Your Code (components, data, etc.)
    ↓
npm run build
    ↓
Creates dist/ folder (production build)
    ↓
npm run server
    ↓
Express server reads dist/ folder
    ↓
Serves on port 5000
    ↓
Accessible at http://192.168.1.174:5000
```

---

## 🔧 Server Details

**Location:** `server.js` (in your project root)

**What it does:**
- Serves `dist/` folder as static files
- Handles SPA routing (serving index.html for all routes)
- Accessible on entire network via IP:5000
- Port: 5000 (can be changed via PORT env variable)

**Technology:** Node.js + Express

---

## 🌐 Different Port

If port 5000 is busy, use a different port:

```powershell
$env:PORT=8000; npm run server
```

Then access at: `http://192.168.1.174:8000`

---

## 💾 Data Persistence

Your app uses `localStorage` to save data locally:
- Vehicle inventory
- Customer data
- Sales records
- User preferences
- Dark mode setting

**Note:** Each browser/device has its own localStorage copy.

---

## 🔒 Security Notes

- ✅ Only accessible on **your local network**
- ✅ **Not exposed to internet** (unless you port-forward, don't do this!)
- ✅ Data stays on your computer
- ✅ No cloud sync (unless you add it later)

---

## 📱 Mobile Access

### Access from Phone on Same Network

1. **Find your computer's IP address:**
   - Look at terminal output when running `npm run server`
   - Shows something like: `192.168.1.174`

2. **On phone:**
   - Open browser
   - Type: `http://192.168.1.174:5000`
   - Press Enter

3. **App displays on phone!**
   - Fully responsive
   - Touch controls work
   - All features available

---

## 🎯 Common Tasks

### Start Working
```powershell
npm run server
```
- Builds app
- Starts server
- Ready to access

### Make Changes & Update
```powershell
# Edit any component
# Press Ctrl+C to stop server
# Run again:
npm run server
# Refresh browser
```

### Change Port
```powershell
$env:PORT=8080; npm run server
```

### Access from Phone
```
http://<your-computer-ip>:5000
```
Look at terminal for IP when server starts

---

## 🆘 Troubleshooting

### Server won't start
```powershell
Get-Process node | Stop-Process -Force
npm run server
```

### Port already in use
```powershell
$env:PORT=3000; npm run server
```

### Can't access from other device
- Make sure both devices are on **same WiFi network**
- Use IP shown in terminal (e.g., `192.168.1.174`)
- Try: `http://192.168.1.174:5000`
- Check firewall isn't blocking port 5000

### Changes not showing
```powershell
# Press Ctrl+C
npm run server           # Rebuild and restart
# Refresh browser
```

---

## 🚀 Production-Ready

This setup is production-ready for local use:
- ✅ Optimized build
- ✅ Minified assets
- ✅ Fast loading
- ✅ Reliable serving
- ✅ Network accessible

---

## 📚 Files

- **server.js** - Express server configuration
- **dist/** - Production build (auto-generated)
- **package.json** - Scripts and dependencies

---

## 🎉 That's It!

Your app is now:
- ✅ Ready to deploy locally
- ✅ Accessible from your network
- ✅ 100% private
- ✅ Easy to manage

**Start it anytime:**
```powershell
npm run server
```

**Access from any device:**
```
http://192.168.1.174:5000
```

---

*Local deployment = Full control, zero cloud dependencies!*
