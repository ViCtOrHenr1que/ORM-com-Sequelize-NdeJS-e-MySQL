const { Router } = require("express");
const NiveisController = require('../controllers/NivelController.js')

const router = Router()

router 
    .get('/niveis', NiveisController.PegarTodosOsNiveis)
    .get('/niveis/:id', NiveisController.PegarUmNivel)
    .post('/niveis', NiveisController.CriarNivel)
    .put('/niveis/:id', NiveisController.AtualizarNivel)
    .delete('/niveis/:id', NiveisController.DeletarNivel)




module.exports = router;
