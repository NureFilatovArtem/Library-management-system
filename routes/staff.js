const express = require('express');
const router = express.Router();
const { Staff } = require('../models').sequelize.models;

// Get all staff members
router.get('/', async (req, res) => {
  try {
    const staff = await Staff.findAll();
    res.json(staff);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch staff members' });
  }
});

// Add a new staff member
router.post('/', async (req, res) => {
  try {
    const staffMember = await Staff.create(req.body);
    res.status(201).json(staffMember);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create staff member' });
  }
});

// Update a staff member
router.put('/:id', async (req, res) => {
  try {
    const updated = await Staff.update(req.body, {
      where: { staff_id: req.params.id },
    });
    res.json({ updated });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update staff member' });
  }
});

// Delete a staff member
router.delete('/:id', async (req, res) => {
  try {
    await Staff.destroy({ where: { staff_id: req.params.id } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete staff member' });
  }
});

module.exports = router;
