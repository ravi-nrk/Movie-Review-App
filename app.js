var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var https = require('https');
var validator = require('validator');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());


require('./api/routes')(app);
app.use(function(req, res) {
    res.sendfile(__dirname + '/client/index.html');
});

app.listen(3900);
console.log('Running on Port 3900...');