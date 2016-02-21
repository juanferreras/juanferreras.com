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
  req.i18n.setLocaleFromQuery();
  next();
});

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.set('views', './views')
app.set('view engine', 'jade')
app.use('/', route);

var server = app.listen(8080, function () {
   var host = server.address().address;
   var port = server.address().port;
   console.log('Express listening at http://%s:%s', host, port);
});
