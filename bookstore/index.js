const express = require('express');                 // IMPORTANDO EXPRESS PARA ROTAS
const exphbs = require('express-handlebars');       // IMPOTANDO HANDLEBARS PARA TEMPLATES DO FRONT

const conn = require('./db/conn');                 // IMPORTANDO CONN DA PASTA DB/CONN

const app = express();                              // INICIALIZANDO EXPRESS

app.engine('handlebars', exphbs.engine());          // CONFIGURAR HANDLEBARS COM ENGINE
app.set('view engine', 'handlebars');               // ATRIBUTO DE VIEW ENGINE FEITO PELO HANDLEBARS

app.use(                                            // MIDDLEWARE PARA LER O BODY
    express.urlencoded({
        extended: true
    })
);

app.use(express.json());                              // LER FORMATO JSON

app.listen(3000);                                     // INICIANDO EXPRESS NA PORTA 3000 PARA ACESSAR PELO NAVEGADOR