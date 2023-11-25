const express = require("express");
const routerQuestion = express.Router();
const questionController = require("../controllers/questionController")


routerQuestion.get("/:id", questionController.question_question_get);
routerQuestion.post("/add_question", questionController.question_add_post);
routerQuestion.put("/edit_question", questionController.question_adit_post);
routerQuestion.delete("/delete_question", questionController.question_delete);


module.exports = routerQuestion;
