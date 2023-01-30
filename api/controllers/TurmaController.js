const database = require('../models')

class TurmaController{

    static async PegarTodasAsTurmas (req, res){
        
        try {
            const todasAsTurmas = await database.Turmas.findAll();
            return res.status(200).json(todasAsTurmas);
            
        } catch (error) {
            return res.status(500).json(error.message);
        };
    };

    static async PegarUmaTurma (req, res){
        const { id } = req.params;
        
        try {
            const umaTurma = await database.Turmas.findOne({
                where:{id: Number(id)}
            });
            res.status(200).json(umaTurma);
            
        } catch (error) {
            return res.status(500).json(error.message);
        };
    };

    static async CriarTurma (req, res){
        const novaTurma = req.body

        try {
            const novaTurmaCriada = await database.Turmas.create(novaTurma)
            return res.status(200).json(novaTurmaCriada)
        } catch (error) {
             return res.status(500).json(error.message);
        };
    };

    static async AtualizarTurma (req,res){
        const { id } = req.params;
        const novasInfos = req.body;

        
        try {
            await database.Turmas.update(novasInfos, {where:{id: Number(id)}})
            const TurmaAtualizada = await database.Turmas.findOne({where: {id: Number(id)}})
            return res.status(200).json(TurmaAtualizada)
            
        } catch (error) {
             return res.status(500).json(error.message);
        };
    };

    static async DeletarTurma (req, res){
        const { id } = req.params;

        try {
            await database.Turmas.destroy({where:{id: Number(id)}})
            res.status(200).send({message:"Turma deletada"})
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
};

module.exports = TurmaController;