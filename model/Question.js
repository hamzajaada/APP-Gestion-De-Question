const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const questionSchema = new Schema({

  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  question: String,
  
},{ timestamps: true });

const question = mongoose.model('Question', questionSchema);
module.exports = question;