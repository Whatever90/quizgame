var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs')
const session = require('express-session')

var Option = mongoose.model('Option');
//console.log(User)
let currentuser;
let lastscores;
module.exports = {
   showAll: function(req, res){
    Option.find({})
        .sort("-votes")
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                console.log(err);
            });
  },
}