const express = require("express")
const app = express();
const mongoose = require("mongoose");
// const url ="mongodb://localhost:27017/Forum"
const url ="mongodb://127.0.0.1:27017/Forum"

const routerUser = require("./routes/UsersRoute")
const routerQuestion = require("./routes/questionroute")
const routerReponse = require("./routes/reponseRoute")

const session = require("express-session");
app.use(express.static('public'))
app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(
    session({
        secret: "your-secret-key", // Change this to a random secret key
        resave: false,
        saveUninitialized: true,
    })
);



app.get("/",(req,res)=>{
  res.redirect("/user/home");
})
app.use("/user",routerUser);
app.use("/question",routerQuestion);
app.use("/reponse",routerReponse);

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