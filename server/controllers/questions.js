var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs')

let temp = ''


var Question = mongoose.model('Question');
//console.log(User)
module.exports = {
	create: function(req, res) {
		console.log('++++++++++++++++++++')
		console.log('CREATING A NEW QUESTION!', req.body)
	  console.log("++++++++++++++++++++++++++++++++++++")
	    var question = new Question({
	      question: req.body.question,
	      correct: req.body.correct,
	      fake1: req.body.fake1,
	      fake2: req.body.fake2
	    });
	  question.save(function(err, data) {
	    if(err) {
	    	console.log('not saved')
	    	console.log(err)
	        res.json(err)
	      } else {
	      	console.log('saved!')
	        res.json(data)
	      }
	    })
	},
	showAll: function(req, res){
		console.log('cotrollers: questions v stidiyu!')
	    Question.find({})
	        .then(data => {
	                res.json(data);
	            })
	            .catch(err => {
	                console.log(err);
	            });
  	},

	

}