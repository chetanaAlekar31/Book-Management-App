const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  type: { type: String, required: true },
  genre: { type: String, required: true },
  publication: { type: String, required: true },
  pages: { type: Number, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  isActive: { type: Boolean, default: true }
});

module.exports = mongoose.model('Book', bookSchema);
