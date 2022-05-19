require("dotenv").config();
var mongoose = require('mongoose');
const port = process.env.SERVER_PORT || 6000;
const mongouser = process.env.MONGO_ROOT_USER || "devroot";
const mongopass = process.env.MONGO_ROOT_PASSWORD || "devroot";
const mongodb = process.env.MONGO_DB || "noname_bbdd";

var express = require("express"),
    app = express(),
    server = require("http").createServer(app),
    path = require("path"),
    bodyParser = require('body-parser'),
    ejs = require('ejs');
const sessions = require('express-session');

sessions
app.use(sessions({
    secret: "secret",
    saveUninitialized:true,
    resave: true
}));

app.use(express.json());
app.use(express.static(__dirname));


//??
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//Start the app listening
server.listen(port, (err, res) => {
    if (err) console.log(`ERROR: Connecting APP ${err}`);
    else console.log(`Server is running on port ${port}`);
});

//Mongoose connection
mongoose.connect(
    `mongodb://devroot:devroot@mongo:27017/noname_bbdd?authSource=admin`,
    { useNewUrlParser: true },
    (err, res) => {
        if (err) console.log(`ERROR: connecting to Database.  ${err}`);
        else console.log(`Database Online: ${process.env.MONGO_DB}`);
    }
);

// Import routes of our app
var routes = require("./routes/app");
var handlerError = require("./routes/handler");

// view engine setup and other configurations
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Define routes using URL path
app.use("/", routes);
app.use(handlerError);

