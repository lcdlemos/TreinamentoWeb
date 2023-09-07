const conn = require('../db/conn');                         // ADICIONA MÓDULO CONEXÃO EM MONGODB

class Book {                                                // CRIANDO CLASSE BOOK
    constructor(name, price, description) {                 // CONSTRUTOR COM PROPRIEDADES PREENCHIDAS
        this.name = name;
        this.price = price;
        this.description = description;
    };

    save() {                                                            // MÉTODO PARA OPERAR COM O BANCO DE DADOS
        const book = conn.db().collection('bookstore').insertOne({      // INFORMA BANCO E COLLECTION PARA INSERÇÃO
            name: this.name,                                            // SE NÃO EXISTIR, SERÁ CRIADO
            price: this.price,
            description: this.description
        });
    
        return book;
    };
};

module.exports = Book;