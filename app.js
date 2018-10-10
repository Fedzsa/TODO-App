var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var bodyparser = require('body-parser');

var indexRouter = require('./routes/index');
var editRouter = require('./routes/edit');

var app = express();

app.use(cors());
app.use(bodyparser.json())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/edit', editRouter);

module.exports = app;
