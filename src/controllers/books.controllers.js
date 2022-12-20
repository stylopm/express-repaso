const Book = require('../models/bookSchema');
const { msjP, respApi, msjPError } = require('../helpers/helpers');

const getBooks = async (req, res) => {
    try {
        msjP('Lista de libros');
        const book = await Book.find({});
        respApi(res, 'success', book)
    } catch {
        msjPError('Error en la consulta');
    }
}

const createBook = async (req, res) => {
    try {
        msjP('Crear libro');
        const book = await Book.create(req.body);
        respApi(res, 'success', book)
    } catch {
        msjPError('Error en la consulta');
    }
}

const updateBook = async (req, res) => {
    try {
        msjP('Actualizar libro');
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true });
        respApi(res, 'success', book)
    } catch {
        msjPError('Error en la consulta');
    }
}

const deleteBook = async(req, res) => {
    try {
        msjP('Eliminar libro');
        const book = await Book.findByIdAndDelete(req.params.id);
        respApi(res, 'success', book)
    } catch {
        msjPError('Error en la consulta');
    }
}

module.exports = {
    getBooks,
    createBook,
    updateBook,
    deleteBook
}