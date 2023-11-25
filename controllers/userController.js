const user = require("../model/User")
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
            res.redirect("/Login");
        } else {
            res.render("register", { error: "Le mot de passe est incorrect" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Erreur lors de la création de l'utilisateur");
}}

module.exports = addUser;