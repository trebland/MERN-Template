var express = require("express");
var bodyParser = require("body-parser");
var routes = require('./routes');
require('./models');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('../client/build'));

app.use(routes);

var server = app.listen(3001, function () {
    console.log("app running on port.", server.address().port);
});