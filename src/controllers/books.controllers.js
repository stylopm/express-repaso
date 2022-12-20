const getBooks = (req, res) => {
    res.send('Estoy aqui en books')
}

const createBook = (req, res) => {
    res.send('Estoy creando libro')
}

const updateBook = (req, res) => {
    res.send('Estoy actualizando libro')
}

const deleteBook = (req, res) => {
    res.send('Estoy actualizando libro')
}

module.exports = {
    getBooks,
    createBook,
    updateBook,
    deleteBook
}