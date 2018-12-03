var mongoose = require('mongoose');
// 

var userSchema = new mongoose.Schema({
    name:  { type: String, required: [true, 'Name is required'], minlength: [2, 'NAME IS TOO SHORT']}
}, {timestamps: true });

var User = mongoose.model('User', userSchema) 
