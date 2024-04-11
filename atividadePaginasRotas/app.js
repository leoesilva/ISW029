const express = require("express");
const app = express();
const port = 8081
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

app.get("/consultar", function (req, res) {
  post.findAll().then(function (posts) {
    res.render("consultar", { post: posts });
  });
});

app.get("/atualizar/:id", function (req, res) {
  post.findAll({ where: { id: req.params.id } }).then(function (posts) {
    res.render("atualizar", { post: posts });
  });
});

app.post("/editar", function (req, res) {
  post
    .update(
      {
        nome: req.body.nome,
        telefone: req.body.telefone,
        origem: req.body.origem,
        dataContato: req.body.dataContato,
        observacao: req.body.observacao,
      },
      { where: { id: req.body.id } }
    )
    .then(function () {
      res.redirect("/");
    })
    .catch(function (erro) {
      res.send("Falha ao cadastrar os dados: " + erro);
    });
});

app.get("/excluir/:id", function (req, res) {
  post.destroy({ where: { id: req.params.id } }).then(function () {
    res.redirect("/consultar");
  });
});

app.listen(port, function () {
  console.log(`Servidor online na porta ${port}`);
});
