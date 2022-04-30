const express = require('express');
const pessoaController = require ('../controllers/pessoaController.js');



const Router = express.Router();

Router
.get('/pessoas',pessoaController.listarPessoas)
.get('/pessoas/nome',pessoaController.listarPessoa)
.post('/pessoascriar',pessoaController.criarPessoas)
.delete('/pessoas',pessoaController.deletaPessoa)
.put('/pessoas/:id',pessoaController.atualizaPessoa);
module.exports = Router
