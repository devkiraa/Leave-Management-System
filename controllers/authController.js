// Example of a simple login controller

const users = [
    { id: 1, email: 'user1@example.com', password: 'password1' },
    { id: 2, email: 'user2@example.com', password: 'password2' }
];

exports.login = (req, res) => {
    const { email, password } = req.body;
    const user = users.find(user => user.email === email && user.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }
    // For simplicity, in a real-world scenario, you would generate and send a JWT token here
    res.json({ message: 'Login successful', user });
};
