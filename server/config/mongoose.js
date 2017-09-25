var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');
console.log('HEY, this is mongo')

mongoose.connect('mongodb://localhost/basic_mongoose');
var models_path = path.join(__dirname, './../models');
fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') >= 0) {
  	console.log('HEY, step in file.indexOf')
    require(models_path + '/' + file);
  }
  console.log('HEY, step after file.indexOf')
});