const user = require("../model/User")
const Question = require("../model/Question");
const bcrypt = require('bcrypt');
const moment = require("moment")

const addUser = async (req, res) => {
    try {
        if (req.body.password === req.body.confirmpassword) {
            // Hasher le mot de passe
            const hashedPassword = await bcrypt.hash(req.body.password, 10);

            // Créer un nouvel utilisateur avec le mot de passe haché
            const User = new user({...req.body,password: hashedPassword});

            // Sauvegarder l'utilisateur
            await User.save();

            console.log("Created !!!");
            res.redirect("/user/Login");
        } else {
            res.render("register", { error: "Le mot de passe est incorrect" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Erreur lors de la création de l'utilisateur");
}}

const get_login = (req,res)=>{
    res.render("login")
};

const get_register = (req,res)=>{
    res.render("register")
};

const get_home = async (req,res)=>{
    if(req.session.user) {
        try {
            const question= await Question.find().populate('user_id'); // Utilisez populate pour obtenir les détails de l'utilisateur
            res.render("home", { question :question , user: req.session.user, moment : moment  });
        } catch (err) {
            console.log(err);
        } 
    }
    else {
        try {
            const question= await Question.find().populate('user_id'); // Utilisez populate pour obtenir les détails de l'utilisateur
            res.render("home", { question :question, moment: moment });
        } catch (err) {
            console.log(err);
        } 
    }
    
}

const get_logout = async (req, res) => {
    req.session.destroy();
    try {
        const question= await Question.find().populate('user_id'); // Utilisez populate pour obtenir les détails de l'utilisateur
        res.render("home", { question :question , moment : moment  });
    } catch (err) {
        console.log(err);
    } 

}

const post_login = async (req, res) => {
    try {
        const question= await Question.find().populate('user_id'); // Utilisez populate pour obtenir les détails de l'utilisateur
        res.render("home", { question :question , user: req.session.user, moment: moment });
    } catch (err) {
        console.log(err);
       
    }
};




module.exports = {addUser, get_login, get_register, get_home, get_logout,post_login};