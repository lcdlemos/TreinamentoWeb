const conn = require('../db/conn');                         // ADICIONA MÓDULO CONEXÃO EM MONGODB

class Book {                                                // CRIANDO CLASSE BOOK
    constructor(name, image, price, description) {                 // CONSTRUTOR COM PROPRIEDADES PREENCHIDAS
        this.name = name;
        this.image = image;
        this.price = price;
        this.description = description;
    };

    save() {                                                            // MÉTODO PARA OPERAR COM O BANCO DE DADOS
        const book = conn.db().collection('bookstore').insertOne({      // INFORMA BANCO E COLLECTION PARA INSERÇÃO
            name: this.name,                                            // SE NÃO EXISTIR, SERÁ CRIADO
            image: this.image,
            price: this.price,
            description: this.description
        });
    
        return book;
    };

    static getBooks() {
        const books = conn.db().collection('bookstore').find().toArray();      // ACESSA O BANCO E CONVERTE O DADO PARA ARRAY
    
        return books;
    };
};

module.exports = Book;