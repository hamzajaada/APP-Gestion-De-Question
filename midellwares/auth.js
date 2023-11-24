
const User = require("../model/User");
const bcrypt = require('bcrypt');

async function login(req, res) {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });

        if (user) {
            const match = await bcrypt.compare(password, user.password);

            if (match) {
                console.log('Connected!');
                req.session.user = user;
                res.render("home", { user: req.session.user });
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


// async function login(req, res) {
//     // try {
//         const { email, password } = req.body;
//         const data = {
//             email: email,
//             password: password,
//         };
//         const User = await user.findOne({ email: email });

//         if (User) {
//             if (data.password === User.password) {
//                 console.log('Connected!');
//                 req.session.user = User; // Stocker l'utilisateur dans la session
               
//                 res.render("home",{user:req.session.user});
//             } else {
//                 console.log("Erreur d'authentification");
//             }
//         } else {
//             console.log("Utilisateur non trouvé");
//         }
//     // } catch (error) {
//     //     res.send(error);
//     // }
// }

module.exports = login;
