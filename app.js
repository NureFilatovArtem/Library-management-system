require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('./middlewares/logger');
const calculateRoutes = require('./routes/calculate');
const exceptionRoutes = require('./routes/exception');


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
    origin: ['http://127.0.0.1:5500', 'http://localhost:5500'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.use(bodyParser.json());


app.use('/exception', exceptionRoutes);

// Логгер (корисний під час розробки)
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Підключення маршрутів
app.use('/books', require('./routes/books'));
app.use('/readers', require('./routes/readers'));
app.use('/staff', require('./routes/staff'));
app.use('/borrowings', require('./routes/borrowings'));
app.use('/calculate', require('./routes/calculate'));


// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});