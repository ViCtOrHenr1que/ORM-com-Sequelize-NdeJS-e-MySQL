const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');

const router = Router();

router
  .get("/pessoas", PessoaController.pegaTodasAsPessoas)
  .get("/pessoas/:id", PessoaController.pegarUmaPessoa)
  .post("/pessoas", PessoaController.criarPessoa)
  .put("/pessoas/:id", PessoaController.atualizarPessoa)
  .delete("/pessoas/:id", PessoaController.deletarPessoa)
  .get("/pessoas/:estudanteId/matriculas/:matriculaId", PessoaController.pegaUmaMatricula)
  .post("/pessoas/:estudanteId/matriculas", PessoaController.criaMatricula)
  .put("/pessoas/:estudanteId/matriculas/:matriculaId", PessoaController.atualizaMatricula)
  .delete("/pessoas/:estudanteId/matriculas/:matriculaId", PessoaController.apagaMatricula)



  module.exports = router;
    