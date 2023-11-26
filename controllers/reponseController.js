const REP = require("../model/Reponse");
const Question = require('../model/Question');
const moment = require("moment")

const get_reponses = async(req,res)=>{
    try {
        const questionId = req.params.id;

        // Utilisez populate pour obtenir les détails de l'utilisateur et des réponses
        const question = await Question.findById(questionId).populate('user_id');
        const reponse = await REP.find({ question_id: questionId }).populate('user_id');

        res.render("question", { question, reponse, user: req.session.user,moment:moment });
    } catch (err) {
        console.log(err);
        res.status(500).render('question', { error: err.message });
    }
    }
   


const add_reponses = (req,res)=>{
    const reponse = new REP(req.body);
    reponse.save().then(async(result)=>{
        try {
            const questionId = result.question_id;
            // Utilisez populate pour obtenir les détails de l'utilisateur et des réponses
            const question = await Question.findById(questionId).populate('user_id');
            const reponse = await REP.find({ question_id: questionId }).populate('user_id');
    
            res.render("question", { question, reponse, user: req.session.user,moment:moment });
        } catch (err) {
            console.log(err);
            res.status(500).render('question', { error: err.message });
        }

         
    }).catch((err)=>{
        console.log(err)
    });
}

module.exports = {get_reponses,add_reponses};