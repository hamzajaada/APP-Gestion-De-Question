const express = require("express");
const routerQuestion = express.Router();
const questionController = require("../controllers/questionController")
routerQuestion.post("/add_question", questionController.Ajouter_question);








module.exports = routerQuestion;

















// routerQuestion.get("/:id", questionController.getQuestionWithUser );
// routerQuestion.post("/add_question", questionController.question_add_post);
// routerQuestion.put("/edit_question", questionController.question_adit_post);
// routerQuestion.delete("/delete_question", questionController.question_delete);



