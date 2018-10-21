var express = require('express');
var app = express();
var db = require('./db');
var timeout = require('connect-timeout');

app.use(timeout('5s'));

var UserController = require('./user/UserController');
app.use('/users', UserController);

var AccountController = require('./account/AccountController');
app.use('/accounts', AccountController);

module.exports = app;