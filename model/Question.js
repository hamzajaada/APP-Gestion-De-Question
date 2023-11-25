const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionShema = new Schema({
  user_id:String,
  question:String
},{ timestamps: true })

const question = mongoose.model("Question",questionShema)
module.exports = question;