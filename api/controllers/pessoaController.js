const database = require('../models')



class pessoaController {
    static cadastrarPessoas = (req,res)=>{
        let pessoa = new Pessoas(req.body)
        pessoa.save(
            (err)=>{
                if (err){
                res.status(500).send({message:`${err.message} erro ao cadastrar`})
            } else{
                    res.status(201).send(pessoa.toJSON())}
            })
    }

    static async listarPessoas(req,res){
        try{
      const pessoas = await database.Pessoas.findAll()
      return res.status(201).json(pessoas)
      }
      catch(error){
          return res.status(500).json(error.message)
      }

    }



}


module.exports = pessoaController;
