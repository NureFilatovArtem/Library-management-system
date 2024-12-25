const express = require('express');
const router = express.Router();
const { sequelize } = require('../models');

router.get('/:table', async (req, res) => {
    const { table } = req.params;

    // Перевірка дозволених таблиць
    if (!['books', 'readers', 'staff', 'borrowings'].includes(table)) {
        return res.status(400).json({ error: 'Invalid table name' });
    }

    try {
        // Виконання запиту для підрахунку
        const [result] = await sequelize.query(`SELECT COUNT(*) AS count FROM ${table}`);
        res.json(result[0]); // Повертаємо результат у форматі JSON
    } catch (error) {
        console.error('Error calculating data:', error);
        res.status(500).json({ error: 'Failed to calculate data' });
    }
});

module.exports = router;