const express = require('express');
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Other imports and middleware setups

// Define routes
const authRoutes = require('./routes/authRoutes');
const leaveRoutes = require('./routes/leaveRoutes');

// Use routes
app.use('/auth', authRoutes); // Use authRoutes middleware for /auth routes
app.use('/leave', leaveRoutes); // Use leaveRoutes middleware for /leave routes

// Main page route
app.get('/', (req, res) => {
    res.render('index'); // Render the index.html page
});

// Dashboard route
app.get('/dashboard', (req, res) => {
    res.render('dashboard'); // Render the dashboard.html page
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
