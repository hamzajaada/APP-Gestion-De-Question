const express = require("express");
const routerQuestion = express.Router();
const questionController = require("../controllers/questionController")
routerQuestion.post("/add_question", questionController.Ajouter_question);


module.exports = routerQuestion;


// routerQuestion.put("/edit_question/:id", questionController.question_adit_post);
// routerQuestion.delete("/delete_question/:id", questionController.question_delete);