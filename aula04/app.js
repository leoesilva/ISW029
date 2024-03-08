const SEQUELIZE = require("sequelize");
const sequelize = new SEQUELIZE ({
    dialect: "sqlite",
    storage: "dwII.db"
})

sequelize.authenticate().then(function() {
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log(erro)
})