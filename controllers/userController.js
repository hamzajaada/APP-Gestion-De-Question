const user = require("../model/User")

const addUser = (req,res)=>{  
  console.log(req.body.password);
  
  const User = new user(req.body) 
  if(req.body.password === req.body.confirmpassword){ 
    User.save().then((result)=>{
    console.log("Created !!!");
    res.redirect("/Login") 
  })
  .catch((err)=>{
    console.log(err);
  })
  }
  else{
    res.render("register",{ error : "le motepass est incorect"})
  }
   
}
module.exports = addUser;