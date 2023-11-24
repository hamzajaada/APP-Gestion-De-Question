const express = require("express");
const routerUser = express.Router();
const Login = require("../midellwares/auth")
const app = express();
const addUser = require("../controllers/userController")
const user = require("../model/User")
routerUser.post("/register",addUser);
routerUser.post("/Login",Login);
module.exports = routerUser;

