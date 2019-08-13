const File = require("../models/File");
const Pet = require("../models/Pet");
const path = require("path");
class FileController {
  async index(req, res) {
    const files = await File.find({});
    return res.json(files);
  }
  async store(req, res) {
    const pet = await Pet.findById(req.params.id);
    const file = await File.create({
      title: req.file.originalname,
      path: req.file.key
    });

    pet.files.push(file);
    await pet.save();

    req.io.sockets.in(file._id).emit("file", file);
    return res.json(file);
  }
  async show(req, res) {
    var file = req.params.id;
    var fileLocation = path.join("./tmp", file);
    return res.download(fileLocation, file);
  }
}

module.exports = new FileController();
