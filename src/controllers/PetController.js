const Pet = require("../models/Pet");

class PetController {
  async index(req, res) {
    const pets = await Box.find({});
    return res.json(pets);
  }
  async store(req, res) {
    const pet = await Pet.create(req.body);
    return res.json(pet);
  }

  async show(req, res) {
    return res.json(
      await Pet.findById(req.params.id).populate({
        path: "files",
        options: { sort: { createdAt: -1 } }
      })
    );
  }
}

module.exports = new PetController();