var mongoose = require('mongoose');
// 

var pollSchema = new mongoose.Schema({
    title:  { type: String, required: [true, 'Name is required'], minlength: [2, 'NAME IS TOO SHORT']},
    option1:  { type: String, required: [true, 'Name is required'], minlength: [2, 'NAME IS TOO SHORT']},
    option2:  { type: String, required: [true, 'Name is required'], minlength: [2, 'NAME IS TOO SHORT']},
    option3:  { type: String, required: [true, 'Name is required'], minlength: [2, 'NAME IS TOO SHORT']},
    option4:  { type: String, required: [true, 'Name is required'], minlength: [2, 'NAME IS TOO SHORT']},
    option1_votes:  { type: Number, required: [true, 'Name is required']},
    option2_votes:  { type: Number, required: [true, 'Name is required']},
    option3_votes:  { type: Number, required: [true, 'Name is required']},
    option4_votes:  { type: Number, required: [true, 'Name is required']},
    creater_name:  { type: String, required: [true, 'Name is required'], minlength: [2, 'creater NAME IS TOO SHORT']},
    creater_id:  { type: String, required: [true, 'Name is required'], minlength: [2, 'creater id IS TOO SHORT']},
}, {timestamps: true });

var Poll = mongoose.model('Poll', pollSchema) 
