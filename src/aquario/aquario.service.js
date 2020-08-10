const bookshelf = require("../db");
const aquarioModel = require("./aquario.model");

const salvar = async (dado) =>
  bookshelf.transaction(async (transacao) => {
    try {
      await aquarioModel.deletar();
      const aquarioCriada = await aquarioModel.forge({
        id: dado.id
      }).save(dado);
      return aquarioCriada;
    } catch (error) {
      throw error;
    }
  });

module.exports = {
  salvar
};
