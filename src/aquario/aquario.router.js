const express = require("express");
const controller = require("./aquario.controller");

const api = express.Router();

api.get("/aquario/:id", controller.obter);
api.get("/aquario", controller.listar);
api.post("/aquario", controller.salvar);
api.put("/aquario/:id", controller.editar);

module.exports = api;