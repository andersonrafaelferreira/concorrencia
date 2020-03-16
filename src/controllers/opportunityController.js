const Oppo = require("../models/opportunities");
const Attraction = require("../models/attraction");

class OppoController {
  async index(req, res) {
    const opportunities = await Oppo.find({});

    // return res.render("fechadas.html", { opportunities });
    return res.render("abertas.html", { opportunities });
  }

  async closed(req, res) {
    const opportunities = await Oppo.find({});

    return res.render("fechadas.html", { opportunities });
    // return res.render("abertas.html", { opportunities });
  }

  async store(req, res) {
    const { number, status } = req.body;

    console.log(req.body.id);
    const newOppo = await Oppo.create({
      number,
      status
    });

    return res.send(newOppo);
  }

  async show(req, res) {
    const { id } = req.params;

    const opportunity = await Oppo.findOne({
      number: id
    });
    const att = await Attraction.find({
      opportunity_number: id
    });

    console.log(opportunity, att);
    return res.render("oportunidade.html", { opportunity, att });
  }

  async update(req, res) {
    const { id } = req.params;

    const opportunity = await Oppo.findOne({
      number: id
    });
    const att = await Attraction.find({
      opportunity_number: id
    });

    console.log(opportunity, att);
    return res.render("editar.html", { opportunity, att });
  }
}

module.exports = new OppoController();
