const express = require("express");
const multer = require("multer");

const multerConfig = require("./config/multer");
const PetController = require("./controllers/PetController");
const FileController = require("./controllers/FileController");
const routes = express.Router();

routes.get("/files", FileController.index);

routes.get("/files/:id", FileController.show);

routes.post(
  "/files/:id",
  multer(multerConfig).single("file"),
  FileController.store
);

routes.get("/pets", PetController.index);
routes.post("/pets", PetController.store);
routes.get("/pets/:id", PetController.show);

module.exports = routes;

// routes.get("/files/:id", (req, res) => {
//   var file = req.params.id;
//   var fileLocation = path.join("./tmp", file);
//   res.download(fileLocation, file);
// });
