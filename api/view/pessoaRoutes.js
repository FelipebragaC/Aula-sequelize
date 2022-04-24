const express = require('express');
const pessoaController = require ('../controllers/pessoaController.js');



const Router = express.Router();

Router
.get('/pessoas',pessoaController.listarPessoas);


module.exports = Router
