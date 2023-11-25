// reponse.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const reponseShema = new Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  question_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
  reponse_id:String,
  date:Date
})

const reponse = mongoose.model("Reponse",reponseShema)
module.exports = reponse;