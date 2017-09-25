var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    path = require('path'),
    port = 8000,
    app = express();

// Set up body-parser to parse form data
app.use(bodyParser.urlencoded({extended: false}));

// Set up database connection, Schema, model
mongoose.connect('mongodb://localhost/uuuusers');

var UserSchema = new mongoose.Schema({
  name: String,
  age: Number
});

var User = mongoose.model('Users', UserSchema);

// Point server to views
app.set('views', path.join(__dirname, './views'));
// We're using ejs as our view engine
app.set('view engine', 'ejs');

// Here are our routes!
app.get('/', function(req, res){
  Users.find({}, function(err, results){
    if(err) { res.render('index');
     }
    res.render('index', { users: results });
  });
});



// END OF ROUTING...

app.listen(port);