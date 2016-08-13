var express = require('express');
var bodyParser = require('body-parser');
var route = require('./app/route');
var i18n = require('i18n-2');

var app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));

i18n.expressBind(app, {
  locales: ['en', 'es']
});

app.use(function(req, res, next) {
  if (req.query.lang){
    req.i18n.setLocaleFromQuery();
  } else{
    var languages = req.headers['accept-language'];
    if (typeof languages !== "undefined"){
      if(languages.indexOf("es")>-1) req.i18n.setLocale("es")
      else req.i18n.setLocale("en")
    }
  }
  next();
});

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.set('views', './views')
app.set('view engine', 'pug')
app.use('/', route);

var port = process.env.PORT || 8080;

var server = app.listen(port, function () {
   var port = server.address().port;
   console.log('Express listening at port %s', port);
});
