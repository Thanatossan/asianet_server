const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");
const uploadController = require("../controllers/upload_domain");

let routes = app => {
  router.get("/", homeController.getHome);

  router.post("/upload_domain", uploadController.multipleUpload);
  router.post("/upload_gallery", uploadController.multipleUpload);
  router.post("/upload_meettest", uploadController.multipleUpload);

  return app.use("/", router);
};

module.exports = routes;