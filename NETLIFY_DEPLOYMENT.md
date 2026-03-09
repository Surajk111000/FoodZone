# Netlify Deployment Guide for FoodZone

## 🚀 Automatic Deployment Steps

### Step 1: Push Code to GitHub ✅
Your code is already pushed. Latest commit: See your GitHub repo.

### Step 2: Connect to Netlify

1. **Go to [netlify.com](https://netlify.com)**
2. **Click "Sign Up"** (or Sign In if you have account)
3. **Choose GitHub** as your provider
4. **Authorize Netlify** to access your GitHub
5. **Select your repository**: `FoodZone`
6. **Click "Deploy Site"**

### Step 3: Configure Build Settings (Optional - Already Set)

- **Build Command**: `cd app && npm run build`
- **Publish Directory**: `app/dist`
- **Node Version**: 18.x (Recommended)

### Step 4: Set Environment Variables (If Needed)

In Netlify Dashboard → Site Settings → Build & Deploy → Environment:
```
VITE_API_URL = your-backend-url.com
```

### Step 5: Done! 🎉

Your site will be live at: `https://your-site-name.netlify.app`

---

## 📋 What to Do Right Now

1. Go to https://netlify.com
2. Sign up with GitHub
3. Click "New site from Git"
4. Select your `FoodZone` repository
5. Leave default settings (Netlify auto-detects from `netlify.toml`)
6. Click "Deploy Site"

**That's it!** Your app deploys automatically every time you push to GitHub.

---

## 🔗 Backend Deployment

Your backend needs separate deployment. Use one of these FREE services:

- **Railway**: https://railway.app (Recommended)
- **Render**: https://render.com
- **Fly.io**: https://fly.io

After deploying backend, update the `VITE_API_URL` environment variable in Netlify.

---

## ✅ Final Checklist

- [x] Code pushed to GitHub
- [x] netlify.toml created
- [ ] Sign up on Netlify
- [ ] Connect GitHub repository
- [ ] Deploy backend separately
- [ ] Set environment variables
- [ ] Share your live URL!
