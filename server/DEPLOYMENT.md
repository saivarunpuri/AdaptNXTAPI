# 🚀 Deployment Guide

## **Option 1: Render (Recommended - Free & Easy)**

### **Step 1: Prepare Your Repository**

1. Push your code to GitHub
2. Make sure your repository is public or you have a Render account

### **Step 2: Deploy to Render**

1. Go to [render.com](https://render.com)
2. Sign up/Login with GitHub
3. Click "New +" → "Web Service"
4. Connect your GitHub repository
5. Configure the service:
   - **Name**: `your-ecommerce-api`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free

### **Step 3: Set Environment Variables**

In Render dashboard, go to your service → Environment:

```
PORT=10000
MONGO_URI=mongodb+srv://your_username:your_password@cluster.mongodb.net/ADAPTNXTAPIDB
JWT_SECRET=your_super_secret_jwt_key_here_change_this_in_production
```

### **Step 4: Get MongoDB Atlas**

1. Go to [mongodb.com](https://mongodb.com)
2. Create free account
3. Create new cluster
4. Get connection string
5. Replace `MONGO_URI` in Render

---

## **Option 2: Railway**

### **Step 1: Deploy to Railway**

1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Railway will auto-detect Node.js

### **Step 2: Add MongoDB**

1. In Railway dashboard, click "New"
2. Select "Database" → "MongoDB"
3. Copy the connection string
4. Add as environment variable `MONGO_URI`

### **Step 3: Set Environment Variables**

```
PORT=3000
MONGO_URI=your_railway_mongodb_connection_string
JWT_SECRET=your_super_secret_jwt_key_here_change_this_in_production
```

---

## **Option 3: Heroku**

### **Step 1: Install Heroku CLI**

```bash
npm install -g heroku
```

### **Step 2: Deploy**

```bash
# Login to Heroku
heroku login

# Create app
heroku create your-ecommerce-api

# Add MongoDB addon
heroku addons:create mongolab:sandbox

# Set environment variables
heroku config:set JWT_SECRET=your_super_secret_jwt_key_here_change_this_in_production

# Deploy
git add .
git commit -m "Deploy to Heroku"
git push heroku main
```

---

## **Option 4: Vercel**

### **Step 1: Deploy to Vercel**

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Import your repository
4. Configure:
   - **Framework Preset**: Node.js
   - **Build Command**: `npm install`
   - **Output Directory**: `server`
   - **Install Command**: `npm install`

### **Step 2: Set Environment Variables**

In Vercel dashboard → Settings → Environment Variables:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_jwt_key_here_change_this_in_production
```

---

## **🔧 Environment Variables for All Platforms**

### **Required Variables:**

```
PORT=3000 (or platform default)
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/ADAPTNXTAPIDB
JWT_SECRET=your_super_secret_jwt_key_here_change_this_in_production
```

### **MongoDB Atlas Setup:**

1. Create account at [mongodb.com](https://mongodb.com)
2. Create new cluster (free tier)
3. Create database user
4. Get connection string
5. Replace `username`, `password`, `cluster` in connection string

---

## **✅ Post-Deployment Checklist**

1. **Test API Endpoints:**

   - `GET /` - Should return "E-commerce API is running!"
   - `POST /api/auth/register` - Register new user
   - `GET /api/products` - Get products

2. **Test Frontend:**

   - Visit your deployed URL
   - Test all features

3. **Check Logs:**

   - Monitor deployment logs
   - Check for any errors

4. **Update Documentation:**
   - Update API base URL in frontend
   - Share deployed URL

---

## **🌐 Your Deployed URLs**

After deployment, you'll get URLs like:

- **Render**: `https://your-ecommerce-api.onrender.com`
- **Railway**: `https://your-ecommerce-api.railway.app`
- **Heroku**: `https://your-ecommerce-api.herokuapp.com`
- **Vercel**: `https://your-ecommerce-api.vercel.app`

---

## **🎯 Quick Start (Render)**

1. **Push to GitHub**
2. **Go to render.com**
3. **Connect GitHub repo**
4. **Set environment variables**
5. **Deploy!**

**Your API will be live in minutes!** 🚀
