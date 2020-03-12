const Attraction = require("../models/attraction");

class AttractionController {
  async index(req, res) {
    const allAttractions = await Attraction.find({});

    return res.render("abertas.html", { allAttractions });
  }
  async store(req, res) {
    const { opportunity_number, name, email, phone, url, video } = req.body;

    console.log(req.body.id);
    const newAttraction = await Attraction.create({
      opportunity_number,
      name,
      email,
      phone,
      url,
      video
    });

    return res.send(newAttraction);
  }
}

module.exports = new AttractionController();
