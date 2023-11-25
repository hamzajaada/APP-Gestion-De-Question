const express = require("express");
const routerReponse = express.Router();
const reponseController = require("../controllers/reponseController")
const Reponse = require("../model/Reponse");
const { appendFile } = require("fs");

module.exports = routerReponse;
