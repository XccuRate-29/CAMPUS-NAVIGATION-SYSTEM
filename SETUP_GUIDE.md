# 🚀 Campus Navigation System - Setup Guide

## Quick Start Guide

### Step 1: Install MongoDB

You have two options:

#### Option A: MongoDB Atlas (Cloud - Recommended for beginners)
1. Go to https://www.mongodb.com/cloud/atlas/register
2. Create a free account
3. Create a free cluster (M0 Sandbox)
4. Click "Connect" → "Connect your application"
5. Copy the connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/`)
6. Update `.env` file:
   ```
   MONGODB_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/campus_navigation
   ```

#### Option B: Local MongoDB Installation
**Windows:**
1. Download from: https://www.mongodb.com/try/download/community
2. Run the installer (choose "Complete" installation)
3. MongoDB will run automatically as a service
4. Keep the default `.env` settings:
   ```
   MONGODB_URI=mongodb://localhost:27017/campus_navigation
   ```

**Check if MongoDB is running:**
```bash
mongosh
```
If it connects, you're good to go!

---

### Step 2: Install Node.js Dependencies

Already done! ✅ (npm install completed)

---

### Step 3: Start the Server

```bash
npm start
```

You should see:
```
✅ MongoDB connected successfully
🚀 Server running on http://localhost:3000
```

---

### Step 4: Open the Application

Open your browser and go to:
```
http://localhost:3000
```

---

## 🎯 How to Use

1. **Register**: Create an account with email and password (min 6 characters)
2. **Login**: Sign in with your credentials
3. **Navigate**: 
   - Click rooms to select start (green) and destination (red)
   - Click "Find Shortest Path" for optimal route
   - Click "Find Alternative Path" for second-best route
   - Click "View Graph" to see all connections

---

## 🔧 Troubleshooting

### Error: "Connection error. Make sure the server is running."
- Make sure you ran `npm start`
- Check if server is running on http://localhost:3000

### Error: "MongoDB connection error"
- **Local MongoDB**: Make sure MongoDB service is running
  ```bash
  # Windows - Check if service is running
  net start MongoDB
  ```
- **MongoDB Atlas**: Check your connection string in `.env`
  - Make sure username/password are correct
  - Make sure your IP is whitelisted (or use 0.0.0.0/0 for all IPs)

### Port 3000 already in use
Change the port in `.env`:
```
PORT=3001
```
Then update `script.js`:
```javascript
const API_URL = 'http://localhost:3001/api';
```

---

## 📁 Project Structure

```
campus-navigation-system/
├── models/
│   └── User.js              # MongoDB user model
├── routes/
│   └── auth.js              # Authentication API routes
├── index.html               # Frontend
├── style.css                # Styling
├── script.js                # Frontend logic + API calls
├── server.js                # Express server
├── package.json             # Dependencies
├── .env                     # Configuration
└── README.md                # Documentation
```

---

## 🔐 Security Features

✅ Password hashing with bcryptjs (10 salt rounds)
✅ Email validation
✅ Input sanitization
✅ CORS enabled
✅ MongoDB injection protection

---

## 🌐 API Endpoints

### POST /api/auth/register
Register a new user
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

### POST /api/auth/login
Login existing user
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

---

## 📊 Database Schema

**Users Collection:**
```javascript
{
  _id: ObjectId,
  email: String (unique, lowercase),
  password: String (hashed),
  createdAt: Date
}
```

---

## 🎨 Features

- ✅ Secure authentication with MongoDB
- ✅ Password hashing
- ✅ Dijkstra's shortest path algorithm
- ✅ Alternative route finding (Yen's algorithm)
- ✅ Interactive UI with cyan/white theme
- ✅ Responsive design
- ✅ Real-time validation
- ✅ Graph visualization

---

## 🚀 Next Steps (Optional Enhancements)

- [ ] Add JWT token authentication
- [ ] Add session management
- [ ] Create admin panel to manage rooms
- [ ] Add user profile page
- [ ] Save favorite routes
- [ ] Add real-time notifications
- [ ] Deploy to cloud (Heroku, Vercel, etc.)

---

## 📞 Need Help?

1. Check the console (F12) for error messages
2. Make sure MongoDB is running
3. Make sure server is running (`npm start`)
4. Check `.env` configuration

---

## 🎉 You're All Set!

Your campus navigation system is ready to use with a secure MongoDB backend!
