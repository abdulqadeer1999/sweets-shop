  
const PORT = process.env.PORT || 4000;

var express = require("express");
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var cors = require("cors");
var morgan = require("morgan");
var jwt = require('jsonwebtoken');
var socketIO = require('socket.io');
const path = require("path");
const mongoose = require("mongoose");
var bcrypt = require("bcrypt-inzi");
var postmark = require("postmark");
const axios = require('axios')
var app = express();
var server = http.createServer(app);
var authRoutes = require("./routes/auth");
 var client = new postmark.Client("03d41ca2-fd57-4edd-9e9e-506ac1aaf894");

var {SERVER_SECRET} = require("./core/index")

var io = socketIO(server);
io.on("connection", (user) => {
    console.log("user connected");
})
var { userModel, tweetModel} = require("./dbrepo/models")




app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({
    origin: "*",
    credentials: true
}));

app.use(morgan('dev'));
app.use("/", express.static(path.resolve(path.join(__dirname, "public"))));
app.use('/', authRoutes)





app.use(function (req, res, next) {

    console.log("req.cookies: ", req.cookies);
    if (!req.cookies.jToken) {
        res.status(401).send("include http-only credentials with every request")
        return;
    }
    jwt.verify(req.cookies.jToken, SERVER_SECRET, function (err, decodedData) {
        if (!err) {

            const issueDate = decodedData.iat * 1000;
            const nowDate = new Date().getTime();
            const diff = nowDate - issueDate; 
        

            if (diff > 300000) { // expire after 5 min (in milis)
                res.status(401).send("token expired")
            } else { 
                var token = jwt.sign({
                    id: decodedData.id,
                    name: decodedData.name,
                    email: decodedData.email,
                   
                }, SERVER_SECRET)
                res.cookie('jToken', token, {
                    maxAge: 86_400_000,
                    httpOnly: true
                });
                req.body.jToken = decodedData
                next();
            }
        } else {
            res.status(401).send("invalid token")
        }
    });
})




//SERVER

server.listen(PORT, () => {
    console.log("server is running on: ", PORT);
})