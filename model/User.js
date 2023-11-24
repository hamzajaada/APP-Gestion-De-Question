const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userShema = new Schema({
  username:String,
  email:String,
  password:String,
})

const user = mongoose.model("User",userShema)
module.exports = user;