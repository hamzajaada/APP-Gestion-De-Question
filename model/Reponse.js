const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reponseShema = new Schema({
  user_id:String,
  question_id:String,
  reponse_id:String,
  date:Date
})

const reponse = mongoose.model("Reponse",reponseShema)
module.exports = reponse;