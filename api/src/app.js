const express = require('express'); // Importamos librería express
const bodyParser = require('body-parser'); // Importamos librería body-parser
const textRoute = require('./routes/index.js');
const cors = require('cors') // importamos librería cors para permitir las peticiones de origen cruzado

const app = express(); //invocamos al objeto para crear la app express

app.use(cors()); // habilito todas las solicitudes cors
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
//Seteamos headres para la respuesta que le enviamos al cliente
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Permite las peticiones de origen cruzado para cualquier dominio
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });
  
app.use('/', textRoute);

// enware para manejo de errores
app.use((err, req, res, next) => {
    const message = err.message || err;
    console.error(err);
    res.status(status).send({message});
  });

module.exports = app;
