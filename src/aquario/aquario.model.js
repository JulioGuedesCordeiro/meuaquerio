var bookshelf = require("../db");

var Aquario = bookshelf.Model.extend(
  {
    tableName: "aquario",
  },
  {
    async listar() {
      const query = Aquario.query(() => {});
      return query.orderBy("id", "desc").fetchAll();
    },
    async obter(id) {
      return this.forge({ id: id }).fetch();
    },
    async deletar() {
      return this.where('id', '!=', '0').destroy().then((resposta) => {console.log('Resposta da Deleção', resposta.toJSON())});
    }
  }
);

module.exports = Aquario;
