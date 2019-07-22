const express = require("express");
const multer = require("multer");

const multerConfig = require("./config/multer");
const PetController = require("./controllers/PetController");
const FileController = require("./controllers/FileController");
const routes = express.Router();
routes.get("/pets", PetController.index);
routes.post("/pets", PetController.store);
routes.get("/pets/:id", PetController.show);

routes.post(
  "/pets/:id/files",
  multer(multerConfig).single("file"),
  FileController.store
);

module.exports = routes;