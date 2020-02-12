const router = require('express').Router();
const Book = require('../../models/Book');

/**
 * @route   POST /books
 * @desc    Register new book
 * @access  Public
 */
router.post('/', async (req, res) => {
  const book = new Book(req.body);
  try {
    await book.save();
    res.status(201).send(book);
  } catch (e) {
    res.status(400).send(e);
  }
});

/**
 * @route   GET /books
 * @desc    Get all books
 * @access  Private
 */
router.get('/', async (req, res) => {
  try {
    const books = await Book.find({});
    res.send(books);
  } catch (e) {
    res.status(400).send(e);
  }
});

/**
 * @route   GET /books/:id
 * @desc    Get book by id
 * @access  Private
 */
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    return !book ? res.sendStatus(404) : res.send(book);
  } catch (e) {
    return res.sendStatus(400);
  }
});

/**
 * @route   PATCH /books/:id
 * @desc    Update book by id
 * @access  Private
 */
router.patch('/:id', async (req, res) => {
  const validationErrors = [];
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    'title',
    'description',
    'categories',
    'authors',
    'publisher',
    'year',
    'pages',
    'ISBN-10',
    'ISBN-13',
  ];
  const isValidOperation = updates.every(update => {
    const isValid = allowedUpdates.includes(update);
    if (!isValid) validationErrors.push(update);
    return isValid;
  });

  if (!isValidOperation)
    return res.status(400).send({ error: `Invalid updates: ${validationErrors.join(',')}` });

  try {
    const _id = req.params.id;
    const book = await Book.findById(_id);
    if (!book) return res.sendStatus(404);
    updates.forEach(update => {
      book[update] = req.body[update];
    });
    await book.save();
    return res.send(book);
  } catch (e) {
    return res.status(400).send(e);
  }
});

/**
 * @route   DELETE /books/:id
 * @desc    Delete book by id
 * @access  Private
 */
router.delete('/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const book = await Book.findByIdAndDelete(_id);
    if (!book) return res.sendStatus(404);

    return res.send({ message: 'Book Deleted' });
  } catch (e) {
    return res.sendStatus(400);
  }
});

module.exports = router;
