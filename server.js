var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const jsonParser = require('body-parser').json();
app.use(bodyParser.json()); 
var mongoose = require('mongoose');
require('./server/config/mongoose.js');
var session = require('express-session')
app.use(session({secret: 'codingdojorocks'}));
app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
app.use(express.static(path.join(__dirname, '/ppm/dist')));
var routes_setter = require('./server/config/routes.js');
routes_setter(app);
mongoose.connect('mongodb://localhost/basic_mongoose');
app.listen(8000, function() {
	console.log("listening on port 8000");
})
