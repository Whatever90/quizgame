var mongoose = require('mongoose');
// 

var anonpostSchema = new mongoose.Schema({
    text:  { type: String, required: [true, 'Text is required'], minlength: [2, 'Name IS TOO SHORT']},

}, {timestamps: true });

var Anonpost = mongoose.model('Anonpost', anonpostSchema) 
