const express = require("express")
const app = express()
const agendamentos = require("./banco")

app.listen(8081, function(){
    console.log("Servidor online.")
})

app.get("/", function(req, res){
    res.send("<h1>Página principal</h1>")
})

app.get("/cadastrar/:nome/:endereco/:bairro/:cep/:cidade/:estado/:observacao", function(req, res){
    agendamentos.create({
        nome: req.params.nome,
        endereco: req.params.endereco,
        bairro: req.params.bairro,
        cep: req.params.cep,
        cidade: req.params.cidade,
        estado: req.params.estado,
        observacao: req.params.observacao
    })
    res.send("Registro inserido com sucesso")
})