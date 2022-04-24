const express =require ("express");
const rotapessoa = require ('./pessoaRoutes.js');



const rotas = (app) => {
    
    app.route("/")
    .get((req,res)=>{
        res.status(200).send({titulo: "curso de node"})
        })

        app.use(
            express.json(),
            rotapessoa
            
        );
}

module.exports = rotas;