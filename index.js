var express = require('express');
var bodyParser = require('body-parser');
var route = require('./app/route');

var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public_html'));
app.use('/contact', route);

var server = app.listen(8080, function () {
   var host = server.address().address;
   var port = server.address().port;

   console.log('Example app listening at http://%s:%s', host, port);
});
