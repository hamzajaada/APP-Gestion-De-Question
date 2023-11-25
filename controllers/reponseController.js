const REP = require("../model/Reponse");

async function add_reponse(req,res){
    const reponse = new REP(req.body);
    reponse.save().then((result)=>{
        res.redirect("/")
    }).catch((error)=>{
            console.log(error);
    })
}

module.exports = {add_reponse};