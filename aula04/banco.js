const Sequelize = require("sequelize");
const sequelize = new Sequelize("exemplo_aula", "root", "alunofatec", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(function () {
    console.log("Banco de dados conectado com sucesso!");
  })
  .catch(function (erro) {
    console.error("Falha ao conectar: " + erro);
  });

const agendamentos = sequelize.define("agendamentos", {
  nome: {
    type: Sequelize.STRING,
  },
  endereco: {
    type: Sequelize.STRING,
  },
  bairro: {
    type: Sequelize.STRING,
  },
  cep: {
    type: Sequelize.STRING,
  },
  cidade: {
    type: Sequelize.STRING,
  },
  estado: {
    type: Sequelize.STRING,
  },
  observacao: {
    type: Sequelize.STRING
  }
})

//  agendamentos.sync({force: true})

module.exports = agendamentos;