const express = require('express');                                 // IMPORTANDO EXPRESS PARA ROTAS
const router = express.Router();                                    // INVOCA O ROUTER DO EXPRESS

const BookController = require('../controllers/BookController');    // IMPORTA O BOOK CONTROLLER

router.get('/', BookController.showBooks);                     // ROTA DE EXIBIÇÃO DOS BOOKS CADASTRADOS

module.exports = router;