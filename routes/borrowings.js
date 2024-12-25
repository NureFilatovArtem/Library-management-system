const express = require('express');
const router = express.Router();
const { Borrowing } = require('../models').sequelize.models;

// Get all borrowings
router.get('/', async (req, res) => {
  try {
    const borrowings = await Borrowing.findAll();
    res.json(borrowings);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch borrowings' });
  }
});

// Add a new borrowing
router.post('/', async (req, res) => {
  try {
    const borrowing = await Borrowing.create(req.body);
    res.status(201).json(borrowing);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create borrowing' });
  }
});

// Update a borrowing
router.put('/:id', async (req, res) => {
  try {
    const updated = await Borrowing.update(req.body, {
      where: { borrow_id: req.params.id },
    });
    res.json({ updated });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update borrowing' });
  }
});

// Delete a borrowing
router.delete('/:id', async (req, res) => {
  try {
    await Borrowing.destroy({ where: { borrow_id: req.params.id } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete borrowing' });
  }
});

module.exports = router;
