require('dotenv').config()

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const helmet = require('helmet')
const connect = require('./db/connect')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const articleRouter = require('./routes/article')
const uploadRouter = require('./routes/upload')

connect()
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(helmet())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/articles', articleRouter);
app.use('/upload', uploadRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  
  // render the error page
  res.status(err.status || 500);
  // res.render('error');
  res.json({
    message : err.message,
    error : req.app.get('env') === 'development' ? err : {}
  })
});

module.exports = app;
