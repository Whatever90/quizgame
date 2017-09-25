// require mongoose
var mongoose = require('mongoose');
// require the fs module for loading model files
var fs = require('fs');
// require path for getting the models path
var path = require('path');
console.log('HEY')
console.log('HEY')

// connect to mongoose!
mongoose.connect('mongodb://localhost/basic_mongoose');
var models_path = path.join(__dirname, './../models');
fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') >= 0) {
  	// console.log('HEY')
  	// console.log('HEY')
  	// console.log('HEY')
  	// console.log('HEY')
  	// console.log('HEY')
  	// console.log('HEY')
  	// console.log('HEY')
    require(models_path + '/' + file);
  }
});