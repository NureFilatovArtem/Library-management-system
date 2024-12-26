const express = require('express');
const router = express.Router();
const { sequelize } = require('../models');
const { Book } = sequelize.models;

// GET: Отримати всі книги
router.get('/books', async (req, res) => {
  try {
    const books = await Book.findAll();
    console.log('Fetched books:', books);
    res.json(books);
  } catch (error) {
    console.error('Error fetching books:', error.message);
    res.status(500).json({ error: 'Failed to fetch books' });
  }
});

// POST: Додати нову книгу
router.post('/', async (req, res) => {
  try {
    const { title, author, genre, publish_year, description, price } = req.body;
    const newBook = await Book.create({ title, author, genre, publish_year, description, price });
    res.status(201).json(newBook);
  } catch (error) {
    console.error('Error adding book:', error.message);
    res.status(500).json({ error: 'Failed to add book' });
  }
});

// PUT: Оновити інформацію про книгу за ID
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, genre, publish_year, description, price } = req.body;
    const book = await Book.findByPk(id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    await book.update({ title, author, genre, publish_year, description, price });
    res.json(book);
  } catch (error) {
    console.error('Error updating book:', error.message);
    res.status(500).json({ error: 'Failed to update book' });
  }
});

// DELETE: Видалити книгу за ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    await book.destroy();
    res.json({ message: 'Book deleted successfully' });
  } catch (error) {
    console.error('Error deleting book:', error.message);
    res.status(500).json({ error: 'Failed to delete book' });
  }
});

module.exports = router;