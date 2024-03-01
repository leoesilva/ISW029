const SEQUELIZE = require("sequelize");
const sequelize = new SEQUELIZE ("dwII", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function() {
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log(erro)
})