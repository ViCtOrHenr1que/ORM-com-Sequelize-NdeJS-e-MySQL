const { Router } = require("express");
const TurmaController = require("../controllers/TurmaController.js");


const router = Router();

router 
    .get('/turmas', TurmaController.PegarTodasAsTurmas)
    .get('/turmas/:id', TurmaController.PegarUmaTurma)
    .post('/turmas', TurmaController.CriarTurma)
    .put('/turmas/:id', TurmaController.AtualizarTurma)
    .delete('/turmas/:id', TurmaController.DeletarTurma)
    


module.exports = router;
