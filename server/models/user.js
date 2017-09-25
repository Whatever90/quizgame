var mongoose = require('mongoose');
// 

var userSchema = new mongoose.Schema({
    name:  { type: String, required: [true, 'Name is required'], minlength: [2, 'NAME IS TOO SHORT']},
    score:  { type: Number, required: [true, 'number is required']},
    game:  { type: String, required: [true, 'number is required']},
}, {timestamps: true });

var User = mongoose.model('User', userSchema) 
