const Oppo = require("../models/opportunities");

class OppoController {
  async index(req, res) {
    const allOppo = await Oppo.find({});

    res.send(allOppo);
  }
  async store(req, res) {
    // const { id, status } = req.body;

    // console.log("aqui");
    const newOppo = await Oppo.create({
      id: 1,
      status: "aberta"
    });

    res.send(newOppo);
  }
}

module.exports = new OppoController();
