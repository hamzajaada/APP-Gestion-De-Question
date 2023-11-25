const express = require("express");
const routerReponse = express.Router();
const reponseController = require("../controllers/reponseController")
const Reponse = require("../model/Reponse");
const { appendFile } = require("fs");
routerReponse.get("/reponses/:id",reponseController.get_reponses);
routerReponse.post("/addReponse",reponseController.add_reponses);
module.exports = routerReponse;
