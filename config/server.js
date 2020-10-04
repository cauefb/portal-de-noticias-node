var express = require("express");
var consign = require("consign");
var bodyParser = require("body-parser");
var expressValidator = require('express-validator');
//const consign = require("consign/lib/consign");

var app = express();

app.use(express.static('./app/public')); //incluindo arquivos estaticos
app.set("view engine", "ejs"); //engine de views
app.set("views", "./app/views");

app.use(bodyParser.urlencoded({extended:true}));
app.use(expressValidator());


consign()
    .include("app/routes")
    .then('config/dbConnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);

module.exports = app;
