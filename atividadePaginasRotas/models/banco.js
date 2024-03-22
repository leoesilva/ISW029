const Sequelize = require("sequelize");
const sequelize = new Sequelize("sistemaweb", "root", "alunofatec", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
};
