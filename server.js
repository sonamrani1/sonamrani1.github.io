const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();
const port = 3000;

// Middleware setup
app.use(express.json());
app.use(cookieParser());
app.use(session({
    secret: 'your-secret-key', // Used to sign the session ID cookie
    resave: false,             // Avoid resaving unchanged sessions
    saveUninitialized: true,   // Ensure a session is stored for new users
    cookie: { secure: false }  // Set secure: true if using HTTPS
}));

// Dummy user data (replace with your actual user authentication logic)
const users = [
    { email: 'user@example.com', password: 'password123', id: 1 }
];

// Login route
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        req.session.userId = user.id; // Store user ID in session
        res.json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid email or password' });
    }
});

// Dashboard route (protected)
app.get('/dashboard', (req, res) => {
    if (req.session.userId) {
        res.json({ message: 'Welcome to your dashboard!' });
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
});

// Logout route
app.post('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).json({ message: 'Logout failed' });
        }
        res.json({ message: 'Logout successful' });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
