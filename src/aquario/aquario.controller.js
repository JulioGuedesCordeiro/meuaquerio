const aquarioService = require("./aquario.service");
const aquarioModel = require("./aquario.model");
const { NotFound, BadRequest } = require("../exceptions");

module.exports.listar = async (req, res, next) => {
  try {
    const lista = await aquarioModel.listar();
    const { models } = lista;
    const temperatura = JSON.parse(JSON.stringify(models))[0].temperatura;
    const umidade = JSON.parse(JSON.stringify(models))[0].umidade;
    const datahora = JSON.parse(JSON.stringify(models))[0].criado_em;
    const hora = new Date(datahora).getHours() - 3;
    const minutos = new Date(datahora).getMinutes();
    const segundos = new Date(datahora).getSeconds();
    res.write(`<!DOCTYPE html>
      <html lang="pt-br">
         <head>
            <meta charset="UTF-8">
            <title>Dados do Aquario</title>
         </head>
         <body>
            <div class="container">
               <div class="box">
                  <div class="card-body">
                     <p class="card-text">
                     <h2>
                     Horario da Medição: </b><i>${hora}:${minutos}:${segundos}</i></b>
                     <h2>
                     </p>
                     <p class="card-text" style="color: #F0F8FF">
                     <h2>
                     Temperatura da água: </b><i>${temperatura}</i> °C</b>
                     <h2>
                     </p>
                     <p class="card-text">
                     <h2>
                     Umidade do quarto: </b><i>${umidade} %</i></b>
                     <h2>
                     </p>
                  </div>
               </div>
            </div>
         </body>
      </html>
      <style>
         body {
         margin: 0px
         }
         .container {
         width: 100vw;
         height: 100vh;
         display: flex;
         flex-direction: row;
         justify-content: center;
         align-items: center
         }
         .box {
          font-color: red;
         width: 420px;
         height: 230px;
         background-color: #f00;
         }
      </style>`);
    res.status(200);
    res.end(); //end the response
    // return res.status(200).json({ message: `A hora da ultima medição foi realizada ás ${hora}:${minutos}:${segundos} com temperatura de <h1>${temperatura}</h1> C e umidade de ${umidade}%` });
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
    return res
      .status(200)
      .json({ data: resposta, message: "Aquario cadastrado com sucesso" });
  } catch (erro) {
    return next(erro);
  }
};

module.exports.editar = async (req, res, next) => {
  try {
    const resposta = await aquarioService.salvar(value);
    return res
      .status(200)
      .json({ data: resposta, message: "tutorial Atualizado com Sucesso" });
  } catch (erro) {
    return next(erro);
  }
};
