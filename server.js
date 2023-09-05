const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", function(req, res) {
        res.render("home");
});

app.get("/signin", function(req, res) {
        res.render("signin");
});

app.get("/signup", function(req, res) {
        res.render("signup");
});

app.get("/courses", function(req, res) {
        res.render("courses");
});

app.get("/memeblog", function(req, res) {
        res.render("memeblog");
});


app.get("/stories", function(req, res) {
        res.render("stories");
});

app.get("/titfortat", function(req, res) {
        res.render("titfortat");
});

app.get("/game", function(req, res) {
        res.render("game");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
