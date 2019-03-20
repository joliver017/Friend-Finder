var express = require("express");
var path = require("path");
var app = express();

var PORT = 3005;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var friends = require("./app/data/friends.js")