const express = require("express");
const routerUser = express.Router();
const auththentification = require("../midellwares/auth")
const userController = require("../controllers/userController")


// router get user
routerUser.get("/Login",userController.get_login);
routerUser.get("/register",userController.get_register);
routerUser.get("/home",userController.get_home);
routerUser.get("/logout",userController.get_logout);

// router post user
routerUser.post("/login",auththentification.auth,userController.post_login)
routerUser.post("/register",userController.addUser);

module.exports = routerUser;

