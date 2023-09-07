const Book = require('../models/Book');             // IMPORTANDO MODELO DO BOOK

module.exports = class BookController {
    static showBooks(req, res) {                            // REQUISIÇÃO E RESPOSTA DO MÉTODO
        res.render('books/all');                            // RENDERIZAR A VIEW ALL BOOKS
    };

    static addBook(req, res) {
        res.render('books/add');                            // RENDERIZAR PÁGINA DE ADIÇÃO DOS BOOKS
    };

    static addBookPost(req, res) {
        const name = req.body.name;                         // PEGANDO DADOS DO BODY PARA ESCREVER NO BANCO
        const price = req.body.price;
        const description = req.body.description;
        
        const book = new Book(name, price, description);    // INSTÂNCIA DE BOOK COM OS DADOS NA ORDEM DO CONSTRUTOR

        book.save();                                        // SALVAR OS DADOS DO BOOK NO BANCO PELO MÉTODO SAVE

        res.redirect('/books');                             // REDIRECIONA PARA PÁGINA DE TODOS OS LIVROS
    };
};