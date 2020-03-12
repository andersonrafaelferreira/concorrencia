const mongoose = require("mongoose");

const Opportunities = new mongoose.Schema(
  {
    id: Number,
    status: String
    // Estilo: "Pagode",
    // Cache: "1.200,00",
    // Ocasiao: "Bar",
    // inicio: "20:00",
    // Termino: "22:00",
    // Data: "22/03/2020",
    // Local: "Vila Olimpia, São Paulo",
    // Formacao: "Dupla",
    // Infos: "Levar equipamentos",
    // author: String,
    // content: String
    // likes: {
    //   type: Number,
    //   default: 0
    // }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Opportunities", Opportunities);
