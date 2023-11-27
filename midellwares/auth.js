
const User = require("../model/User");
const bcrypt = require('bcrypt');

async function auth(req, res,next) {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });

        if (user) {
            const match = await bcrypt.compare(password, user.password);

            if (match) {
                console.log('Connected!');
                req.session.user = user;
                next();
            } else {
                console.log("Erreur d'authentification");
            }
        } else {
            console.log("Utilisateur non trouvé");
        }
    } catch (error) {
        console.log(error)
    }
}


module.exports = {auth};