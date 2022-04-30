const { Op } = require("sequelize");
const database = require('../models')



class pessoaController {
    static async criarPessoas(req, res) {
        const novapessoa = req.body
        try {
            const novapessoacriada = await database.Pessoas.create(novapessoa)
            res.status(201).json(novapessoacriada)
        }

        catch (error) { return res.status(500).json(error.message) }

    }


    static async listarPessoas(req, res) {
        try {
            const pessoas = await database.Pessoas.findAll()
            return res.status(201).json(pessoas)
        }
        catch (error) {
            return res.status(500).json(error.message)
        }

    }


    static async listarPessoa(req, res) {
        const query = `%${req.body.Nome}%`
        try {
            const pessoas = await database.Pessoas.findOne({ attributes: ['Nome'], where: { Nome: { [Op.like]: query } } })
            return res.status(201).json(pessoas)
        }
        catch (error) {
            return res.status(500).json(error.message)
        }

    }

    static async deletaPessoa(req, res) {
        try {
            const deletar = req.body.id;
            const idToRemove = await database.Pessoas.findByPk(req.body.id);

            if (!idToRemove) res.send("registro não encontrado");

            const pessoas = await database.Pessoas.destroy({ where: { id: deletar } })
            return res.status(201).send("item deletado com sucesso")
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaPessoa(req, res) {
        const idToUpdate = req.params
        const novosdados = req.body
        try {
             await database.Pessoas.update(novosdados,{ where:idToUpdate })
            return res.status(201).send("item atualizado com sucesso")
        }
        catch(error) { return res.status(500).json(error.message) }
    }



}


module.exports = pessoaController;

