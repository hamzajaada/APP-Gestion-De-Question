const express = require("express")
const app = express();
const mongoose = require("mongoose");
const url ="mongodb://localhost:27017/Forum"
const routerUser = require("./routes/UsersRoute")
app.use(express.static('public'))
app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));

app.get("/login",(req,res)=>{
    res.render("login")
})
app.get("/register",(req,res)=>{
    res.render("register")
})
app.get("/",(req,res)=>{
    res.render("home")
})

app.use("/user",routerUser);

// Connection de MongoDB :
mongoose
.connect(url)
  .then(() => {
    console.log("connecting to database");
  })
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.listen("3000",()=>{
    console.log('running!!!!!')
})