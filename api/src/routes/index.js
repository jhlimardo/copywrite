const express = require('express');
const router = express.Router();

// Llamo a la función getText definida en controllers
const { 
    getText,
} = require('../controllers/index.js');

router.get('/iecho', getText); // defino la ruta iecho según lo pedido

module.exports = router;