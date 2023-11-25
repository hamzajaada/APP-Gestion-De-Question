const express = require('express');
const Question = require('../model/Question');

// const question_home_get = (req, res) => {
//     Question.find()
//         .then((result) => {
//             res.render("home", { question: result, user: req.session.user });
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// };

const question_question_get = (req, res) => {
    Question.findById(req.params.id)
        .then((result) => {
            res.render("question", { question: result});
        })
        .catch((err) => {
            console.log(err);
        });
};

const question_add_post = (req, res) => {
    const question = new Question(req.body);
    question.save()
        .then((result) => {
            res.render("home", { question: result, user: req.session.user });
        })
        .catch((err) => {
            console.log(err);
        });
};

const question_adit_post = (req, res) => {
    Question.updateOne({_id: req.params._id}, req.body)
        .then((result) => {
            res.render("question", { question: result});
        })
        .catch((err) => {
            console.log(err);
        });
};

const question_delete = (req,res) => {
    Question.deleteOne({_id: req.params._id})
        .then((result) => {
            res.render("home", { question: result});
        })
        .catch((err) => {
            console.log(err);
        });
}

module.exports = {question_question_get,question_add_post, question_adit_post, question_delete};