var mongoose = require('mongoose');
// 

var questionSchema = new mongoose.Schema({
    question:  { type: String, required: [true, 'Name is required']},
    correct:  { type: String, required: [true, 'Price is required']},
    fake1: { type: String, required: [true, 'description is required']},
    fake2: { type: String, required: [true, 'location is required']}
}, {timestamps: true });

var Question = mongoose.model('Question', questionSchema) 
