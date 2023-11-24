const express = require("express")
const app = express();
const user = require("../model/User")
const session = require("express-session");
app.use(
    session({
      secret: "secret",
      resave: false,
      saveUninitialized: true,
    })
  );
async function login(req,res){
    try {
        const {email,password}=req.body;
        const data = {
            email: email,
            password: password
        }
        const User = await user.findOne({email: email});

        if(User){
                if(data.password===User.password){
                    console.log('Connected!');
                    req.session.user = User;
                    console.log(req.session.user)
                    res.render("home",{user:req.session.user})
                }
                else{
                    console.log("erreur de authentification")
                }
                
            }
    } catch (error) {
        res.send(error);
    }
}
module.exports = login;

   
