# Campus Navigation System

A web-based campus navigation system with authentication and pathfinding algorithms (Dijkstra's algorithm for shortest path).

## Features

- 🔐 Secure user authentication with MongoDB
- 🗺️ Interactive campus map navigation
- 🚀 Shortest path calculation using Dijkstra's algorithm
- 🔄 Alternative route finding
- 📊 Graph visualization
- 🎨 Modern UI with cyan/white theme

## Tech Stack

**Frontend:**
- HTML5, CSS3, JavaScript
- Responsive design with glassmorphism effects

**Backend:**
- Node.js + Express
- MongoDB + Mongoose
- bcryptjs for password hashing
- express-validator for input validation

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)

## Installation

1. Install dependencies:
```bash
npm install
```

2. Set up MongoDB:
   - Install MongoDB locally, OR
   - Create a free MongoDB Atlas account at https://www.mongodb.com/cloud/atlas
   - Update the `MONGODB_URI` in `.env` file

3. Configure environment variables:
   - Edit `.env` file if needed
   - Default MongoDB URI: `mongodb://localhost:27017/campus_navigation`

## Running the Application

1. Start MongoDB (if using local installation):
```bash
mongod
```

2. Start the server:
```bash
npm start
```

Or for development with auto-reload:
```bash
npm run dev
```

3. Open your browser and navigate to:
```
http://localhost:3000
```

## Usage

1. **Register**: Create a new account with email and password
2. **Login**: Sign in with your credentials
3. **Select Route**: Click on rooms to select start and destination
4. **Find Path**: Click "Find Shortest Path" or "Find Alternative Path"
5. **View Results**: See step-by-step directions and distance

## API Endpoints

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

## Project Structure

```
├── models/
│   └── User.js           # User model with password hashing
├── routes/
│   └── auth.js           # Authentication routes
├── index.html            # Frontend HTML
├── style.css             # Styling
├── script.js             # Frontend JavaScript
├── server.js             # Express server
├── package.json          # Dependencies
└── .env                  # Environment variables
```

## Security Features

- Password hashing with bcryptjs
- Input validation with express-validator
- Email format validation
- Minimum password length requirement
- CORS enabled for API security

## Future Enhancements

- JWT token-based authentication
- Session management
- Admin panel for managing rooms/connections
- Real-time updates with WebSockets
- Mobile app integration
- User preferences and saved routes

## License

ISC
