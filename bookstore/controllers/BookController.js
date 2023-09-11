const Book = require('../models/Book');             // IMPORTANDO MODELO DO BOOK

module.exports = class BookController {
    static async showBooks(req, res) {                      // REQUISIÇÃO E RESPOSTA DO MÉTODO
        const books = await Book.getBooks();                // BOOKS ESPERA A CONSULTA AO BANCO
        res.render('books/all', {books});                   // RENDERIZAR PASSANDO DADOS DE BOOKS PARA VIEW
    };

    static addBook(req, res) {
        res.render('books/add');                            // RENDERIZAR PÁGINA DE ADIÇÃO DOS BOOKS
    };

    static addBookPost(req, res) {
        const name = req.body.name;                         // PEGANDO DADOS DO BODY PARA ESCREVER NO BANCO
        const image = req.body.image;                       // PRÂMETROS PELO POST
        const price = req.body.price;
        const description = req.body.description;
        
        const book = new Book(name, image, price, description);    // INSTÂNCIA DE BOOK COM OS DADOS NA ORDEM DO CONSTRUTOR

        book.save();                                        // SALVAR OS DADOS DO BOOK NO BANCO PELO MÉTODO SAVE

        res.redirect('/books');                             // REDIRECIONA PARA PÁGINA DE TODOS OS LIVROS
    };

    static async getBook(req, res) {
        const id = req.params.id;                            // PARÂMETROS PELA URL

        const book = await Book.getBookById(id);

        res.render('books/book', {book});
    };

    static async removeBook(req, res) {
        const id = req.params.id;
        Book.removeBookById(id);
        res.redirect('/books');
    }
};