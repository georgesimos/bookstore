const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookSchema = Schema(
  {
    title: String,
    description: String,
    categories: [String],
    authors: [String],
    publisher: String,
    year: Number,
    pages: Number,
    'ISBN-10': Number,
    'ISBN-13': Number,
  },
  { timestamps: true }
);

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
