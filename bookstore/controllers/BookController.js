const Book = require('../models/Book');             // IMPORTANDO MODELO DO BOOK

module.exports = class BookController {
    static showBooks(req, res) {                    // REQUISIÇÃO E RESPOSTA DO MÉTODO
        res.render('books/all');                    // RENDERIZAR A VIEW ALL BOOKS
    }
};