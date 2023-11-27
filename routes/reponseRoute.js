const express = require("express");
const routerReponse = express.Router();
const reponseController = require("../controllers/reponseController")


routerReponse.get("/:id",reponseController.get_reponses);
routerReponse.post("/addReponse",reponseController.add_reponses);


module.exports = routerReponse;