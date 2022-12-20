const { Router } = require('express');
const { getBooks, createBook, updateBook, deleteBook } = require('../controllers/books.controllers')
const routers = Router();
// localhost:5000/books
// localhost:5000/books/
routers.get('/', getBooks);
routers.post('/', createBook);
// localhost:5000/books/5
routers.put('/:id', updateBook );
routers.delete('/:id', deleteBook);
module.exports = routers