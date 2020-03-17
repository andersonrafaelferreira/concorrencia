const mongoose = require("mongoose");

const Opportunities = new mongoose.Schema(
  {
    number: Number,
    status: String,
    cliente: String,
    name: String,
    phone: String,
    email: String,
    local: String,
    city: String,
    zone: String,
    genre: String,
    occasion: String,
    modality: String,
    date: String,
    start: String,
    end: String,
    min: String,
    max: String,
    informations: String,
    winner: String,
    reason: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Opportunities", Opportunities);
