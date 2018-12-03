var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs')
const session = require('express-session')

var Poll = mongoose.model('Poll');

module.exports = {
   showAll: function(req, res){
    Poll.find({})
        .then(data => {
                res.json(data);
            })
            .catch(err => {
                console.log(err);
            });
  },
givemeone: function(req, res){
    console.log('polls givemeone(): req.body =>', req.body)
    Poll.findOne({_id: req.body.id})
        .then(data => {
                res.json(data);
            })
            .catch(err => {
                console.log(err);
            });
  },

deletepoll: function(req, res){
    console.log('deleting poll id =>', req.body)
    Poll.remove({_id: req.body.id})
        .then(data => {
                res.json(data);
            })
            .catch(err => {
                console.log(err);
            });
},
  votepoll: function(req, res){
    console.log('polls votepoll(): req.body =>', req.body)
    let x = req.body.voting
    let y = req.body.amount
    if(x=='option1_votes'){
        Poll.update({_id: req.body.id}, {$set: {option1_votes: y}}, function(err, data){
      if(err){
        console.log("++++++++++++++++++++++++++++++++++++")
        res.json(err)
        console.log("++++++++++++++++++++++++++++++++++++")
      }else{
        console.log('WORKS!!!!!!!!!!!!!!!!!!!!!!!!!!')
        console.log(data)
        res.json(data)
      }
    })
    } else if(x=='option2_votes'){
        Poll.update({_id: req.body.id}, {$set: {option2_votes: y}}, function(err, data){
      if(err){
        console.log("++++++++++++++++++++++++++++++++++++")
        res.json(err)
        console.log("++++++++++++++++++++++++++++++++++++")
      }else{
        console.log('WORKS!!!!!!!!!!!!!!!!!!!!!!!!!!')
        console.log(data)
        res.json(data)
      }
    })
    }else if(x=='option3_votes'){
        Poll.update({_id: req.body.id}, {$set: {option3_votes: y}}, function(err, data){
      if(err){
        console.log("++++++++++++++++++++++++++++++++++++")
        res.json(err)
        console.log("++++++++++++++++++++++++++++++++++++")
      }else{
        console.log('WORKS!!!!!!!!!!!!!!!!!!!!!!!!!!')
        console.log(data)
        res.json(data)
      }
    })
    }else if(x=='option4_votes'){
        Poll.update({_id: req.body.id}, {$set: {option4_votes: y}}, function(err, data){
      if(err){
        console.log("++++++++++++++++++++++++++++++++++++")
        res.json(err)
        console.log("++++++++++++++++++++++++++++++++++++")
      }else{
        console.log('WORKS!!!!!!!!!!!!!!!!!!!!!!!!!!')
        console.log(data)
        res.json(data)
      }
    })
    }
    
  },



  create: function(req, res) {

        console.log("++++++++++++++++++++++++++++++++++++")
        console.log('Poll controller: create() req.body =>', req.body)
        console.log('+++++++++++++++++++')
        Poll.findOne({name: req.body.title})
          .then(data => {
            if(data) {
                console.log('poll is here!', data)
                res.json(false)
                //this.login(req.body)
            } else {
              console.log('creating')
              var poll = new Poll({
                title: req.body.title,
                option1: req.body.option1,
                option2: req.body.option2,
                option3: req.body.option3,
                option4: req.body.option4,
                option1_votes: 0,
                option2_votes: 0,
                option3_votes: 0,
                option4_votes: 0,
                creater_name: req.body.creater_name,
                creater_id: req.body.creater_id
              });
          poll.save()
            .then(saved => {
              console.log('saved!')
              res.json(saved)
            })
            .catch(err => {
              console.log('saving failed')
              res.json(err)
            })
            }
          })
},
}