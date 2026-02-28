# 🌐 NGrok Setup - Share Your App Online

## ⚡ Quick Setup (5 minutes)

### Step 1: Install NGrok
```powershell
choco install ngrok
```

If you don't have Chocolatey:
- Download from: https://ngrok.com/download
- Or install Chocolatey first: https://chocolatey.org/install

### Step 2: Create Free NGrok Account
1. Go to: https://ngrok.com/signup
2. Sign up with email (takes 30 seconds)
3. Verify email
4. Log in to dashboard

### Step 3: Get Your Auth Token
1. After login, go to: https://dashboard.ngrok.com/auth/your-authtoken
2. Copy your auth token (looks like: `2Yxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`)
3. Keep it safe!

### Step 4: Configure NGrok with Your Token
```powershell
ngrok config add-authtoken YOUR_AUTH_TOKEN_HERE
```

Replace `YOUR_AUTH_TOKEN_HERE` with the token from step 3.

**Example:**
```powershell
ngrok config add-authtoken 2Yxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### Step 5: Share Your App Online

**Terminal 1 - Keep your server running:**
```powershell
cd d:\NEXTCRM
npm run start:server
# Runs on http://localhost:5000
```

**Terminal 2 - Start ngrok tunnel:**
```powershell
ngrok http 5000
```

### Step 6: Get Your Public URL

NGrok will show something like:
```
Forwarding     https://abc123def456.ngrok.io -> http://localhost:5000
```

**Share this URL with your friend:**
```
https://abc123def456.ngrok.io
```

Your friend can visit it from ANYWHERE in the world! 🌍

---

## 📋 Complete Workflow

```powershell
# Terminal 1: Start your server
cd d:\NEXTCRM
npm run start:server

# Terminal 2: Start ngrok tunnel
ngrok http 5000

# Terminal 3 (optional): Monitor traffic
# You can watch ngrok dashboard at:
# https://dashboard.ngrok.com/endpoints/status
```

**Share the ngrok URL with friend:**
```
https://abc123def456.ngrok.io
```

---

## 🔑 Important Notes

### Your Auth Token
- **Keep it secret!** It's like a password
- Never share it with anyone
- Used only on your computer for setup

### NGrok URLs
- Change every time you restart ngrok
- Last 2-8 hours (free plan)
- Free plan allows 1 tunnel per account
- Perfect for sharing temporarily

### Your Server
- Still runs locally on `http://localhost:5000`
- You can access it anytime
- Friend accesses via ngrok URL

---

## 🚀 Step-by-Step Commands

```powershell
# 1. One-time setup (after installing ngrok):
ngrok config add-authtoken YOUR_TOKEN

# 2. Every time you want to share:
# Terminal 1:
cd d:\NEXTCRM
npm run start:server

# Terminal 2:
ngrok http 5000

# 3. Copy the URL that appears
# 4. Share with friend!
```

---

## 💡 Tips & Tricks

### Check Your Public URL
```powershell
# NGrok shows it in the terminal, or:
# Visit: https://dashboard.ngrok.com/endpoints/status
```

### Monitor Requests
NGrok shows all requests in the terminal:
```
POST /api/data 200 OK
GET /inventory 200 OK
POST /customers 200 OK
```

### Restart with New URL
```powershell
# Press Ctrl+C to stop ngrok
# The old URL stops working
# Run `ngrok http 5000` again
# Get a new URL
```

### Multiple Tunnels
```powershell
# You can tunnel multiple ports if needed
ngrok http 5000
ngrok http 3000  # Different terminal
```

---

## ❓ Troubleshooting

### "ngrok: command not found"
```powershell
# Reinstall or restart PowerShell
choco uninstall ngrok
choco install ngrok

# Or restart PowerShell
```

### "Error: Invalid token"
```powershell
# Get your correct token from:
# https://dashboard.ngrok.com/auth/your-authtoken

# Then run:
ngrok config add-authtoken YOUR_NEW_TOKEN
```

### "Address already in use"
```powershell
# Port 5000 is taken, use different port:
ngrok http 8080

# Or kill Node processes:
Get-Process node | Stop-Process
```

### Friend can't access URL
- URL expires after 2-8 hours
- Restart ngrok for new URL
- Both must have internet connection
- Check firewall isn't blocking

---

## 🎯 Share with Friend

### Send Them:
1. **The ngrok URL** (changes each session)
2. **Instructions:**
   ```
   Hey! My app is live at: https://abc123def456.ngrok.io
   
   Just open it in your browser!
   
   Features:
   - Dashboard with stats
   - Inventory with vehicle images
   - Customer management
   - Sales tracking
   ```

### What They Can Do:
- Open URL in browser
- Use all features
- No installation needed
- Works on any device (phone, tablet, computer)

---

## 🔄 Complete Setup Example

```powershell
# Step 1: Get auth token from https://dashboard.ngrok.com/auth/your-authtoken
# (Copy the long token)

# Step 2: Set up ngrok (one time)
ngrok config add-authtoken 2Yxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Step 3: Start your server
cd d:\NEXTCRM
npm run start:server
# Output: 📍 Local: http://localhost:5000

# Step 4: In new terminal, tunnel it
ngrok http 5000
# Output: Forwarding https://abc123def456.ngrok.io -> http://localhost:5000

# Step 5: Share the ngrok URL with friend
# "Check out my app: https://abc123def456.ngrok.io"

# Step 6: Friend opens it and sees your app! 🎉
```

---

## ✨ You're All Set!

Your NextCRM app is now:
- ✅ Running locally on port 5000
- ✅ Accessible from anywhere via ngrok
- ✅ Ready to share with friends
- ✅ No server hosting needed

**Start sharing:**
```powershell
npm run start:server      # Terminal 1
ngrok http 5000           # Terminal 2 (after setup)
```

Done! 🚀
