const express = require("express");
const app = express();

app.listen(8081, function () {
    console.log("Servidor online");
});

app.get("/", function (req, res) {
    console.log("Página principal");
    res.send("<h1>Página principal</h1>");
});

app.get("/cadastrar", function (req, res) {
    console.log("Página de cadastro");
    res.send("<h1>Página de cadastro</h1>");
})

app.get("/produtos/:item/:quantidade", function (req, res) {
    console.log("Página de produto");
    res.send("<h1>Produtos</h1>\n<p>Item: " + req.params.item + "</p>\n<p>Quantidade: " + req.params.quantidade + "</p>");
})

app.get("/contato", function (req, res) {
    console.log("Contato");
    res.send("<h1>Contato</h1>");
});