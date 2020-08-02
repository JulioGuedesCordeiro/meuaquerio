const aquarioService = require('./aquario.service');
const aquarioModel = require('./aquario.model');
const { NotFound, BadRequest } = require('../exceptions');


module.exports.listar = async (req, res, next) => {
  try {
    const lista = await aquarioModel.listar();
    const { models } = lista;
    const temperatura =  JSON.parse(JSON.stringify(models))[0].temperatura;
    const umidade = JSON.parse(JSON.stringify(models))[0].umidade;
    const datahora = JSON.parse(JSON.stringify(models))[0].criado_em;
    const hora = new Date(datahora).getHours() - 3;
    const minutos = new Date(datahora).getMinutes();
    const segundos = new Date(datahora).getSeconds();
    return res.status(200).json({ message: `A hora da ultima medição foi realizada ás ${hora}:${minutos}:${segundos} com temperatura de ${temperatura} C e umidade de ${umidade}%` });
  } catch (erro) {
    return next(erro);
  }
};

module.exports.obter = async (req, res, next) => {
  try {
    const resposta = await aquarioModel.obter(req.params.id);
    if (resposta === null) {
      throw new NotFound(`A aquario ${req.params.id} não foi encontrada`);
    }
    return res.status(200).json({ data: resposta });
  } catch (erro) {
    return next(erro);
  }
};

module.exports.salvar = async (req, res, next) => {
  try {
    const resposta = await aquarioService.salvar(req.body);
    return res.status(200).json({ data: resposta, message: 'Aquario cadastrado com sucesso' });
  } catch (erro) {
    return next(erro);
  }
};


module.exports.editar = async (req, res, next) => {
  try {
    const resposta = await aquarioService.salvar(value);
    return res.status(200).json({ data: resposta, message: 'tutorial Atualizado com Sucesso' });
  } catch (erro) {
    return next(erro);
  }
};

