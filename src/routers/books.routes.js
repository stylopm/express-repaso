const { Router } = require('express');
const { getbooks } = require('../controllers/books.controllers')
const routers = Router();
// localhost:5000/books
// localhost:5000/books/
routers.get('/', getbooks)
module.exports = routers