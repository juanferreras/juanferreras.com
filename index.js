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

app.listen(8080, function(){
  console.log("Express server listening on port 8080");
});