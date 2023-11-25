const express = require('express');
const Question = require('../model/Question');
const user = require("../model/User")
//fonction ajoute question :
    const Ajouter_question = (req, res) => {
        const question = new Question(req.body);
        question.save()
            .then(async (result) => {
                    console.log("created question")
                    try {
                        const question= await Question.find().populate('user_id'); // Utilisez populate pour obtenir les détails de l'utilisateur
                
                        res.render("home", { question :question , user: req.session.user });
                    } catch (err) {
                        console.log(err);
                    }   
            })
            .catch((err) => {
                console.log(err);
            });
    };


module.exports = {Ajouter_question};



















// const getQuestionWithUser = async (req, res) => {
//     try {
//         const questionId = req.params.questionId;

//         const question = await Question.findById(questionId).populate('user_id');

//         if (!question) {
//             return res.status(404).render('home', { error: 'Question not found' });
//         }

//         const user = question.user_id;

//         // Rendez le modèle Pug avec les données nécessaires
//         console.log(question.question);
//         console.log(question.createdAt);
//         console.log(user.username);
//         console.log(user.email);
//         res.render('home', {
//             question: question.question,
//             date: question.createdAt,
//             userName: user.username,
//             userEmail: user.email,
//         });
//     } catch (error) {
//         res.status(500).render('home', { error: error.message });
//     }
// };
// // const question_home_get = (req, res) => {
// //     Question.find()
// //         .then((result) => {
// //             res.render("home", { question: result, user: req.session.user });
// //         })
// //         .catch((err) => {
// //             console.log(err);
// //         });
// // };

// const question_question_get = (req, res) => {
//     Question.findById(req.params.id)
//         .then((result) => {
//             res.render("question", { question: result});
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// };

// const question_add_post = (req, res) => {
//     const question = new Question(req.body);
//     question.save()
//         .then((result) => {
//             res.render("home", { question: result, user: req.session.user });
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// };

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

// module.exports = { getQuestionWithUser ,question_question_get,question_add_post, question_adit_post, question_delete};