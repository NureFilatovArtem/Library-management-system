require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const logger = require('./middlewares/logger');
const calculateRoutes = require('./routes/calculate');
const exceptionRoutes = require('./routes/exception');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
    origin: ['http://127.0.0.1:5500', 'http://localhost:5500'], // Дозволені домени для фронтенда
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.use(express.json()); // Для обробки JSON у запитах
app.use(express.urlencoded({ extended: true })); // Для обробки form-data



// Serve static files (if needed for your front-end)

app.use(express.static(path.join(__dirname, 'public')));


// Routes
app.use('/exception', exceptionRoutes);
app.use('/books', require('./routes/books'));
app.use('/readers', require('./routes/readers'));
app.use('/staff', require('./routes/staff'));
app.use('/borrowings', require('./routes/borrowings'));
app.use('/calculate', calculateRoutes);


// Logger
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

