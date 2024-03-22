const express = require("express");
const app = express();
const port = 8081;
const handlebars = require("express-handlebars").engine;
const bodyParser = require("body-parser");
const post = require("./models/post");

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/consultar", function (req, res) {
  res.render("consultar");
});

app.get("/atualizar", function (req, res) {
  res.render("atualizar");
});

app.post("/cadastrar", function (req, res) {
  post
    .create({
      nome: req.body.nome,
      telefone: req.body.telefone,
      origem: req.body.origem,
      dataContato: req.body.dataContato,
      observacao: req.body.observacao,
    })
    .then(function () {
      res.redirect("/");
    })
    .catch(function (erro) {
      res.send("Falha ao cadastrar os dados: " + erro);
    });
});

app.listen(port, function () {
  console.log(`Servidor online na porta ${port}`);
});
