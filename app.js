require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');
const logger = require('./middlewares/logger');
const calculateRoutes = require('./routes/calculate');
const exceptionRoutes = require('./routes/exception');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: ['http://127.0.0.1:5500', 'http://localhost:5500', 'http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    // credentials: true
}));

app.use(bodyParser.json());
// app.use(express.json()); // Для обробки JSON у POST/PUT
// app.use(express.urlencoded({ extended: true })); // Для обробки form-data

// Exceptions

app.use('/exception', exceptionRoutes);



// Підключення маршрутів
app.use('/books', require('./routes/books'));
app.use('/readers', require('./routes/readers'));
app.use('/staff', require('./routes/staff'));
app.use('/borrowings', require('./routes/borrowings'));
app.use('/calculate', require('./routes/calculate'));
// мб удалить app.use('/calculate', calculateRoutes);

// Логгер (корисний під час розробки)
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});



// const express = require('express');
// const path = require('path');
// const app = express();
// app.use(express.static(path.join(__dirname, 'public')));
// const calculateRoutes = require('./routes/calculate');
// app.use('/calculate', calculateRoutes);

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, ...);