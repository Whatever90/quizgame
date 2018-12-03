var mongoose = require('mongoose');
// 

var optionSchema = new mongoose.Schema({
    title:  { type: String, required: [true, 'Name is required'], minlength: [2, 'NAME IS TOO SHORT']},
    votes:  { type: Number, required: [true, 'vote is required']},
    poll_id: 	{ type: String, required: [true, 'poll is required'], minlength: [2, 'poll id IS TOO SHORT']},
}, {timestamps: true });

var Option = mongoose.model('Option', optionSchema) 
