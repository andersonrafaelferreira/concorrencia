const mongoose = require("mongoose");

const Attraction = new mongoose.Schema(
  {
    opportunity_number: Number,
    name: String,
    email: String,
    phone: String,
    url: String,
    video: {
      type: String,
      default: ""
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Attraction", Attraction);
