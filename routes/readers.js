const express = require('express');
const router = express.Router();
const { Reader } = require('../models').sequelize.models;

// Get all readers
router.get('/', async (req, res) => {
  try {
    const readers = await Reader.findAll();
    res.json(readers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch readers' });
  }
});

// Add a new reader
router.post('/', async (req, res) => {
  try {
    const reader = await Reader.create(req.body);
    res.status(201).json(reader);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create reader' });
  }
});

// Update a reader
router.put('/:id', async (req, res) => {
  try {
    const updated = await Reader.update(req.body, {
      where: { reader_id: req.params.id },
    });
    res.json({ updated });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update reader' });
  }
});

// Delete a reader
router.delete('/:id', async (req, res) => {
  try {
    await Reader.destroy({ where: { reader_id: req.params.id } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete reader' });
  }
});

module.exports = router;
