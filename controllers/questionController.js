const express = require('express');
const Question = require('../model/Question');
const user = require("../model/User")
const moment = require("moment")
//fonction ajoute question :
const Ajouter_question = (req, res) => {
    const question = new Question(req.body);
    question.save()
        .then(async (result) => {
            console.log("created question")
            try {
                const question= await Question.find().populate('user_id'); // Utilisez populate pour obtenir les détails de l'utilisateur
                res.render("home", { question :question , user: req.session.user, moment: moment });
            } catch (err) {
                console.log(err);
            }   
        })
        .catch((err) => {
            console.log(err);
        });
};


module.exports = {Ajouter_question};



// const question_adit_post = (req, res) => {
//     Question.updateOne({_id: req.params._id}, req.body)
//         .then((result) => {
//             res.render("question", { question: result});
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// };

// const question_delete = (req,res) => {
//     Question.deleteOne({_id: req.params._id})
//         .then((result) => {
//             res.render("home", { question: result});
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// }

// module.exports = { Ajouter_question, question_adit_post, question_delete};