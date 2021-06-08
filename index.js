require('./db.js')  //importing database
var express = require('express');
var bodyParser = require('body-parser');
var PostMessageRoutes = require('./controllers/PostMessageController');
var userRegister = require("./controllers/UsersRegister");
var LoginUserVerification = require("./controllers/LoginUserVerification");
var cors = require('cors');

const PORT = 4000;
var app = express();
app.use(cors({origin:true}));   //enabling cors for cross origin
app.use(bodyParser.json());

//PostMEssage Routes
app.use("/postmessages",PostMessageRoutes);
app.use("/users",userRegister);
app.use("/signin",LoginUserVerification);


app.listen(PORT, () => console.log(`server is Running on port : ${PORT}`))

