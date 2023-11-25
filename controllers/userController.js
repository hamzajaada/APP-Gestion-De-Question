const user = require("../model/User")
const question = require("../model/Question");
const bcrypt = require('bcrypt');

const addUser = async (req, res) => {
    try {
        console.log(req.body.password);

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

const get_home = (req,res)=>{
    if(req.session.user) {
        question.find()
        .then((result) => {
            res.render("home", { question: result, user : req.session.user });
        })
        .catch((err) => {
            console.log(err);
        });
    }
    else {
        question.find()
        .then((result) => {
            res.render("home", { question: result });
        })
        .catch((err) => {
            console.log(err);
        });
    }
    
}

const get_logout = (req, res) => {
    req.session.destroy();
    res.render("home");
}

const post_login = (req,res)=>{
    res.render("home", { user: req.session.user });
};



module.exports = {addUser, get_login, get_register, get_home, get_logout,post_login};