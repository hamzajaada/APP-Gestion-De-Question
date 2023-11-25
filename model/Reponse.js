// reponse.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const reponseShema = new Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  question_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
  reponse:String,
},{ timestamps: true })

const reponse = mongoose.model("Reponse",reponseShema)
module.exports = reponse;