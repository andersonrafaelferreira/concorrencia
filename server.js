const express = require("express");
const mongoose = require("mongoose");

const server = express();

mongoose.connect(
  "mongodb+srv://rafael:rafael4455@@@cluster0-umxyp.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);

server.use(express.static("public"));

const nunjucks = require("nunjucks");

nunjucks.configure("src", {
  express: server,
  noCache: true
});

const oppos = [
  {
    id: 1,
    status: "Aberta"
  },
  {
    id: 2,
    status: "Fechada"
  },
  {
    id: 3,
    status: "Cancelada"
  }
];

server.get("/", (req, res) => {
  res.render("abertas.html");
});
server.get("/abrir", (req, res) => {
  res.render("nova.html");
});

server.get("/fechadas", (req, res) => {
  res.render("fechadas.html", { oppos });
});

server.listen(3000);
