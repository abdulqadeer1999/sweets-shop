const PORT = process.env.PORT || 4000;

var express = require("express");
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var cors = require("cors");
var morgan = require("morgan");
var jwt = require('jsonwebtoken');
var http = require("http");
var socketIO = require('socket.io');
const path = require("path");
const mongoose = require("mongoose");
var bcrypt = require("bcrypt-inzi");
var postmark = require("postmark");
const axios = require('axios')
const fs = require('fs')
const multer = require('multer')
var app = express();
var server = http.createServer(app);
var authRoutes = require("./routes/auth");
// var client = new postmark.Client("postmark");
 var client = new postmark.Client("03d41ca2-fd57-4edd-9e9e-506ac1aaf894");

var {SERVER_SECRET} = require("./core/index")

var io = socketIO(server);
io.on("connection", (user) => {
    console.log("user connected");
})
// var { userModel, tweetModel} = require("./dbrepo/models")


// const storage = multer.diskStorage({ 
//     destination: './uploads/',
//     filename: function (req, file, cb) {
//         cb(null, `${new Date().getTime()}-${file.filename}.${file.mimetype.split("/")[1]}`)
//     }
// })
// var upload = multer({ storage: storage })

// const admin = require("firebase-admin");

// var serviceAccount =  
//     {
//         "type": "service_account",
//         "project_id": "twitter-chat-d564a",
//         "private_key_id": "6ddd83d04d63b4f0677b7c4c141c2d21b7d8a0e2",
//         "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCnAbZ2JkfNc1QU\ndG9zQwF9wxrtjsE1wRzwoxcS5y9j7i5nTYXzChrviGjNmCRfPu/NgxWdjArQW30A\naBZCelyd4781PMMgZfkGUz/2NViz7zUBKu+qJDXBl4SVqtuM0M5clsJINAdJFJ+r\nfwOCs9Pw1pRJ4q/wemcHh6iAOnho1ez2RZswdq/YHlI9HnfPbZnu2tZvftowETmp\nuE7NByKhI0k2hZ7XFeEkT52htqTL5rzZV7FiBJVUpK7EVyhOTV79kA4Ur2BBjg8f\nwy+StsTtN2AYoLbsHY7vd1H1ZjeKW4FO9N+58hfu2IxpVn0ML1qvc8ykZpTb8vlv\nj9QNL5WTAgMBAAECggEAEv22Xnwe6SWGt6a/77b8ae0wWDhGD1NM865QFuW0NWRl\n4Xhm1YreIkP8SvjUlgIlqdSQtjAxIJ1uuwebFGcutgOqgCbPN5Vw+n+oA9rwIdH/\nUIkt5MamWEPfH1flDH/IH65DHIvSEkTmnU1dvFSvsrDr/vTotettYOVTy3UasS0H\ncyE0ej7hoaZyk66kTVoMDvsa5LmwHDOEvTXG0HzxcGT8P1WGEpZ/znk5eCruyfWx\niW6kOSHxOtHtugM9MC69cu7cIoQf5KslV/UOkg8pLw4FgGNbmF5Jh5tKcOzdyUOu\nVkH7nDoFyEfkbTIKg0XfwLr6uaf4yST3gCPUjTRsyQKBgQDSg2YkdEAeYGkwkrfK\nNhRBYY4q4SHcUC0W5vaPU6qrvC7qGFgrJQVORkuFeif5ahWmjmuJ/f7qrQ6RYMOm\nU6cieZ9gge4EmBep8JGy8kpnKnW/AiRHVHsbL3QeY5ZVKY2y+zWCV1LM9esrSdLy\nuREeLOYskxR8pD8Mog71PpzAKQKBgQDLF7wUJly8fbL1qF3rT4RW0PcScV5JFvOC\nhfAjUrC/MP4sgg+Esgcl49ZgEmIikPJfiqeIWpZORq1VmzEETx7jrZR6V9oPOJ5T\n5v28eyChoXaa35ki+2koitxU7x2c81QqfiAiwhz3HIalW6420vV2AoCXM1JATRPc\nsEJp8anvWwKBgQCcLHdenA/leUkQjAhlr/EfACzkitkABUsuLnLEqiF3/sgfS6g9\ned2R0Hy+rX1yf81IH2iQmyq/F1wzZkI/5tebr/cZNctLBTqpDJxK0Y15M/relcws\nTvR1mqLe2Kryyz0gh1WPORFolRi+qKojAEE+zbiFYShVv9Q2nxPRxX2s4QKBgQCL\nkX4RIuPsLT4FEHWqtnSt7OE+bWZsODeUZVNIExWf7p1eHOtpN6ct5Mt4Lmn+czn9\nap4DWK2ekXehMwuWeIEz2iAFi8YxW6mC42VQWBVuvjVx7WOh5MC5ueP9Am6JY7dd\nlFulR1z8fUAS91RcHNHPDZ0tS3mk8tNJgF/Dyu4LrQKBgEYTa6x4MoGjWTLB0P80\nUR3oLIcV92vNauVuKc9eKx7IDjqqHdow4snp5FfsahgehAKuuPxRaKFg42nMPFDy\ngbv6iVSPZatO7PZkigt3ySylz2ihWAJQjDMYVj8XCDTAmzJV5FOkDSK8CpB5a6kA\ntikcXKgKBkD2LFiBFD5Nm+KU\n-----END PRIVATE KEY-----\n",
//         "client_email": "firebase-adminsdk-lhfe2@twitter-chat-d564a.iam.gserviceaccount.com",
//         "client_id": "108969986213665090568",
//         "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//         "token_uri": "https://oauth2.googleapis.com/token",
//         "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//         "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-lhfe2%40twitter-chat-d564a.iam.gserviceaccount.com"
//       };
// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: "https://twitter-chat-d564a-default-rtdb.firebaseio.com/"
// });
// const bucket = admin.storage().bucket("gs://twitter-chat-d564a.appspot.com");



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
        

            if (diff > 300000) {
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

//PROFILE

app.get("/profile", (req, res, next) => {
    console.log(req.body);

    userModel.findById(req.body.jToken.id, 'name email phone gender profilePic createdOn', function (err, doc) {
        if (!err) {
            res.send({
                profile: doc
            })

        } else {
            res.send({
                message: "Server Error",
                status: 500
            });
        }
    });
})

//POST

// app.post("/tweet", (req, res, next) => {
   

//     if (!req.body.jToken.id || !req.body.tweet) {
//         res.send({
//             status: 401,
//             message: "Please write tweet"
//         })
//     }
//     userModel.findById(req.body.jToken.id, 'name', function (err, user) {
//         if (!err) {
//             tweetModel.create({
//                 "username": user.name,
//                 "tweet": req.body.tweet
            
//             }, function (err, data) {
//                 if (err) {
//                     res.send({
//                         message: "Tweet DB ERROR",
//                         status: 404
//                     });
//                 }
//                 else if (data) {
//                     console.log("data checking Tweeter ", data);
//                     res.send({
//                         message: "Your Tweet Send",
//                         status: 200,
//                         tweet: data
//                     });
//                     io.emit("NEW_POST", data);

//                     console.log("server checking code tweet ", data.tweet)
//                 } else {
//                     res.send({
//                         message: "Tweets posting error try again later",
//                         status: 500
//                     });
//                 }
//             });

//         } else {
//             res.send({
//                 message: "User Not Found",
//                 status: 404
//             });
//         }
//     });


// });

// // user tweet 



// app.get("/userTweets", (req, res) => {
//     console.log("my tweets user", req.body);
    
    
//     tweetModel.find({email: req.body.jToken.email}, (err, data) => {
//         if (!err) {
//             console.log("user email", req.body.jToken.email)
        
//         console.log("current user tweets==>", data );
//         res.send({
//           tweet: data,
//         });
//       } else {
//         console.log("error: ", err);
//         res.status(500).send({});
//       }
//     });
//   });


  // get tweet



  
// app.get("/tweet-get", (req, res, next) => {
//     tweetModel.find({}, function (err, data) {
//         if (err) {
//             res.send({
//                 message: "Error :" + err,
//                 status: 404
//             });
//         } else if (data) {
//             res.send({
//                 tweet: data,
//                 status: 200
//             });
//         } else {
//             res.send({
//                 message: "User Not Found"
//             });
//         }
//     });
// });



//PROFILE PICTURE 


// app.post("/upload", upload.any(), (req, res, next) => {
//     console.log("req.body: ", JSON.parse(req.body.myDetails));
//     let userEmail = JSON.parse(req.body.myDetails)
//     console.log("req.files: ", req.files);
  
//     console.log("uploaded file name: ", req.files[0].originalname);
//     console.log("file type: ", req.files[0].mimetype);
//     console.log("file name in server folders: ", req.files[0].filename);
//     console.log("file path in server folders: ", req.files[0].path);
  
//     bucket.upload(
//       req.files[0].path,
//       //
//       function (err, file, apiResponse) {
//         if (!err) {
       
  
//           file
//             .getSignedUrl({
//               action: "read",
//               expires: "03-09-2491",
//             })
//             .then((urlData, err) => {
//               if (!err) {
//                 console.log("public downloadable url: ", urlData[0]); // this is public downloadable url
//                 userModel.findOne(
//                   { email: userEmail.email },
//                   (err, data) => {
//                     if (!err) {
//                       console.log("user data ====>", data);
//                       tweetModel.updateMany({email:userEmail.email},{profilePic:urlData[0]},(err,tweet)=>{
//                         if(!err){
//                           console.log("tweet model updated");
//                         }
//                       })
//                     } else {
//                       console.log("user not found");
//                     }
//                     data.update(
//                       { profilePic: urlData[0] },
                      
//                       (err, updatedUrl) => {
//                         if (!err) {
//                           res.status(200).send({
//                             message: "profile picture updated succesfully",
//                             url: urlData[0],
//                           });
//                         } else {
//                           res.status(500).send({
//                             message: "an error occured",
//                           });
//                         }
//                       }
//                     );
                    
                    
                    
//                   }
//                 );
  
//               }
//             });
//         } else {
//           console.log("err: ", err);
//           res.status(500).send();
//         }
//       }
//     );
//   });
//SERVER

server.listen(PORT, () => {
    console.log("server is running on: ", PORT);
})