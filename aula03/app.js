const express = require("express");
const app = express();

app.listen(8081, function () {
    console.log("Servidor online");
});

app.get("/", function (req, res) {
    console.log("Página principal");
    res.send("<h1>Página principal</h1>");
});

app.get("/contato", function (req, res) {
    console.log("Contato");
    res.send("<h1>Contato</h1>");
});

app.get("/produtos/:item", function (req, res) {
    console.log("Página de produto");
    res.send("<h1>Produtos</h1>\n<p>" + req.params.item + "</p>");
});

app.get("/produtos/:categoria/:subcategoria/:item", function (req, res) {
    console.log("Página de produto");
    res.send("<h1>Produtos</h1>\n<p>Categoria: " + req.params.categoria + "</p>\n<p>Subcategoria: " + req.params.subcategoria + "</p>\n<p>Item: " + req.params.item + "</p>");
});