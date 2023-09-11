const express = require('express');                                 // IMPORTANDO EXPRESS PARA ROTAS
const router = express.Router();                                    // INVOCA O ROUTER DO EXPRESS

const BookController = require('../controllers/BookController');    // IMPORTA O BOOK CONTROLLER

router.get('/add', BookController.addBook);                         // ROTA DE ADIÇÃO DOS BOOKS CADASTRADOS
router.post('/add', BookController.addBookPost);                         // ROTA DE ADIÇÃO DOS BOOKS CADASTRADOS

router.post('/remove/:id', BookController.removeBook);                         // ROTA DE REMOÇÃO DO BOOK ÚNICO
router.get('/:id', BookController.getBook);                         // ROTA DE EXIBIÇÃO DO BOOK ÚNICO

router.get('/', BookController.showBooks);                          // ROTA DE EXIBIÇÃO DOS BOOKS CADASTRADOS

module.exports = router;