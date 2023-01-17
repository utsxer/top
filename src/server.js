"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    res.render('top');
});
app.listen(8080, function () {
    console.log('Start on port 8080.');
});
