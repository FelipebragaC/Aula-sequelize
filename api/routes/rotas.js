const express =require ('express');
const bodyParser = require('body-parser');
const rotapessoa = require ('./pessoaRoutes.js');



const rotas = (app) => {
    
    app.route("/")
    .get((req,res)=>{
        res.status(200).send({titulo: "curso de node"})
        })

        app.use(
            bodyParser.json(),
            rotapessoa
            
        );
}

module.exports = rotas;