var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var produtos = require('./routes/produtos');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// adding some 'fake routes' to my angular modules
app.use('/angular', express.static(path.join(__dirname, 'node_modules/angular/')));
app.use('/angular-route', express.static(path.join(__dirname, 'node_modules/angular-route/')));
app.use('/angular-resource', express.static(path.join(__dirname, 'node_modules/angular-resource/')));

// adding a 'fake route' to jquery, bootstrap needs jquery library
app.use('/jquery', express.static(path.join(__dirname, 'node_modules/jquery/dist/')));

// adding a 'fake route' to the materialize css mobile first
app.use('/materialdesign', express.static(path.join(__dirname, 'node_modules/materialize-css/dist/')));

app.use('/', routes);
app.use('/produtos', produtos);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
