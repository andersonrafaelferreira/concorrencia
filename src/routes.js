const express = require("express");

const routes = express.Router();

const OppoController = require("./controllers/opportunityController");
const AttractionController = require("./controllers/attractionController");

const oppos = [
  {
    id: 1,
    status: "Aberta",
    Estilo: "Pagode",
    Cache: "1.200,00",
    Ocasiao: "Bar",
    inicio: "20:00",
    Termino: "22:00",
    Data: "22/03/2020",
    Local: "Vila Olimpia, São Paulo",
    Formacao: "Dupla",
    Infos: "Levar equipamentos"
  },
  {
    id: 2,
    status: "Fechada",
    Estilo: "Samba Rock",
    Cache: "1.300,00",
    Ocasiao: "Bar",
    inicio: "20:00",
    Termino: "22:00",
    Data: "22/03/2020",
    Local: "Vila Olimpia, São Paulo",
    Formacao: "Dupla",
    Infos: "Levar equipamentos"
  },
  {
    id: 3,
    status: "Cancelada",
    Estilo: "Rock",
    Cache: "200,00",
    Ocasiao: "Bar",
    inicio: "20:00",
    Termino: "22:00",
    Data: "22/03/2020",
    Local: "Vila Olimpia, São Paulo",
    Formacao: "Dupla",
    Infos: "Levar equipamentos"
  },
  {
    id: 4,
    status: "Aberta",
    Estilo: "Samba",
    Cache: "120,00",
    Ocasiao: "Bar",
    inicio: "20:00",
    Termino: "22:00",
    Data: "22/03/2020",
    Local: "Vila Olimpia, São Paulo",
    Formacao: "Dupla",
    Infos: "Levar equipamentos"
  }
];

// routes.get("/", (req, res) => {
//   res.render("abertas.html", { oppos });
// });

routes.get("/", OppoController.index);
routes.get("/abertas/:id", OppoController.show);
routes.post("/", AttractionController.store);

// routes.get("/abrir", (req, res) => {
//   res.render("nova.html");
// });

routes.get("/fechadas", OppoController.closed);

routes.get("/abrir", OppoController.index);
routes.post("/abrir", OppoController.store);

//routes.post("/likes/:id", LikeController.store);

// routes.get('/', (req, res) => {
//     return res.send('hello');
// })

module.exports = routes;
