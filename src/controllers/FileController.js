const File = require("../models/File");
const Pet = require("../models/Pet");

class FileController {
  async store(req, res) {
    const pet = await Pet.findById(req.params.id);
    const file = await File.create({
      title: req.file.originalname,
      path: req.file.key
    });

    pet.files.push(file);
    await pet.save();

    req.io.sockets.in(box._id).emit("file", file);
    return res.json(file);
  }
}

module.exports = new FileController();