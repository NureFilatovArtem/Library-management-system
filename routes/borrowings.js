const express = require('express');
const router = express.Router();
const { Borrowing, Reader, Book } = require('../models').sequelize.models;

// Get all borrowings
router.get('/', async (req, res) => {
  try {
    const borrowings = await Borrowing.findAll();
    res.json(borrowings);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch borrowings' });
  }
});

router.post('/', async (req, res) => {
    try {
      console.log('Request Body:', req.body); // Логируем входящий запрос
  
      const { reader_id, book_id, borrow_date, return_date } = req.body;
  
      // Проверяем, существует ли читатель с данным reader_id
      const reader = await Reader.findByPk(reader_id);
      if (!reader) {
        console.error(`Reader with ID ${reader_id} not found.`);
        return res.status(400).json({ error: 'Reader does not exist' });
      }
  
      // Проверяем, существует ли книга с данным book_id
      const book = await Book.findByPk(book_id);
      if (!book) {
        console.error(`Book with ID ${book_id} not found.`);
        return res.status(400).json({ error: 'Book does not exist' });
      }
  
      // Если проверки пройдены, создаем borrowing
      const borrowing = await Borrowing.create({
        reader_id,
        book_id,
        borrow_date,
        return_date,
      });
  
      console.log('Borrowing created successfully:', borrowing); // Лог успешного создания
  
      res.status(201).json(borrowing);
    } catch (error) {
      console.error('Error creating borrowing:', error); // Логируем ошибку
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