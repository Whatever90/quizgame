var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs')
const session = require('express-session')

var User = mongoose.model('User');
//console.log(User)
let currentuser;
let lastscores;
module.exports = {
   showAll: function(req, res){
    User.find({game: 'belt'})
        .sort("-score")
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                console.log(err);
            });
  },
  
create: function(req, res) {

        console.log("++++++++++++++++++++++++++++++++++++")
        console.log('user controller: create() req.body =>', req.body)
        console.log('+++++++++++++++++++')
        User.findOne({name: req.body.name})
          .then(data => {
            if(data) {
                console.log('user is here!', data)
                res.json(false)
                //this.login(req.body)
            } else {
              console.log('creating')
              var user = new User({
                name: req.body.name
              });
          user.save()
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
login: function(req, res) {

        console.log("++++++++++++++++++++++++++++++++++++")
        console.log('controller login():', req.body)
        console.log('+++++++++++++++++++')
        User.findOne({name: req.body.name})
          .then(data => {
            if(data) {
                console.log(data)
                console.log("user found!")
                res.json(data)
                
            } else {
                console.log('no such user in db')
                res.json(false)
            }
          })
},
contact: function(req, res){

    User.find({_id: req.body.user})
        .then(data => {
                res.json(data);
            })
            .catch(err => {
                console.log(err);
            });
  },
lastscoreadd: function(req, res){
  this.lastgame[req.body.id] = req.body.score
  res.json(this.lastgame)
},
lastscoreshow: function(req, res){
  console.log(req.body._id)
  console.log(this.lastgame[req.body._id])
  res.json(this.lastgame)
},
store: function(req, res){
  console.log('we r in users.js controller', req.body._id)
  this.currentuser = req.body
  console.log('now this user is in session =>', this.currentuser)
  res.json(true)
  },
showuser: function(req, res){
  console.log('this user in session:', this.currentuser)
  if(!this.currentuser){
      res.json(false)
  }else{
    User.findOne({_id: this.currentuser._id})
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                console.log(err);
            });
    
  }
  
},
logout: function(req, res){
  console.log('users.js controller: say bye bye to', this.currentuser.name)
    User.update({_id: this.currentuser._id}, {$set: {lastscore: null}}, function(err, data){
    if(err){
      console.log('failed to logout')
       this.currentuser = null
      res.json(err);
      }
      if(data){
      console.log("succesful logout")
       this.currentuser = null
      res.json(data);
    }
  })
  this.currentuser = null
  //res.json(this.currentuser)
},

score: function(req, res){

  console.log('adding points to ',req.body.id)
  console.log('++++++++++++++++++++++++++++++++++++++++')
  console.log(req.body)
  console.log('++++++++++++++++++++++++++++++++++++++++')
  User.update({_id: req.body.id}, {$set: {score: req.body.score, lastscore: req.body.lastscore, gameamount: req.body.gameamount}}, function(err, data){
    if(err){
      console.log('failed to add score')
      res.json(err);
      }else{
      console.log("score added")
      res.json(data);
    }
  })
      
  }, 
  // })
          // User.update({login: req.body.login}, {$set: {score: req.body.score}}, function(err, data){
          //   if(err){
          //     console.log('Not in DB')
          //     var user = new User({
          //         login: req.body.login,
          //         score: req.body.score,
          //         photo: req.body.photo
          //       });
          //     user.save(function(err, data) {
          //         if(err) {
          //           console.log('failed')
          //           res.json(err)
          //         } else {
          //           console.log("saved")
          //           res.json(data)
          //         }
          //     })
          //   }else{
          //     console.log('updated')
          //     res.json(data)
          //   }
          // })
        
  //   var user = new User({
  //     login: req.body.login,
  //     score: req.body.score,
  //     photo: req.body.photo
  //   });
  // user.save(function(err, data) {
  //     if(err) {
  //       console.log('failed')
  //       res.json(err)
  //     } else {
  //       console.log("saved")
  //       res.json(data)
  //     }
  // })
    
  
//   checker(log){
//     let x = log
//     User.find({login: x}, function(err, user){
//       if(err){
//         console.log('not found')
//         return false
//       }
//       if(user){
//         console.log(user.length)
//         if(user.length==0){
//           return true
//           console.log("nope, user isn't here", x)
          
//         }
//         console.log('yep, user is here', x)
//         return false
//       }
//     })
//   },
// update: function(req, res){

//   console.log(req.body.status)
//   console.log('here')
//   User.update({_id: req.body.id}, {$set: {game1: req.body.status}}, function(err, data){
//     if(err){
//       console.log('failed to delete')
//       res.json(err);
//       }else{
//       console.log("deleted")
//       res.json(data);
//     }
//   })
      
//   },  
// update2: function(req, res){

//   console.log(req.body.status)
//   console.log('here')
//   User.update({_id: req.body.id}, {$set: {game2: req.body.status}}, function(err, data){
//     if(err){
//       console.log('failed to delete')
//       res.json(err);
//       }else{
//       console.log("deleted")
//       res.json(data);
//     }
//   })
      
//   },  
// update3: function(req, res){

//   console.log(req.body.status)
//   console.log('here')
//   User.update({_id: req.body.id}, {$set: {game3: req.body.status}}, function(err, data){
//     if(err){
//       console.log('failed to delete')
//       res.json(err);
//       }else{
//       console.log("deleted")
//       res.json(data);
//     }
//   })
      
//   }, 

// delete: function(req, res){

//   console.log(req.body.id)
//   console.log('here')

//   User.remove({_id: req.body.id}, function(err, data){
//     if(err){
//       console.log('failed to delete')
//       res.json(err);
//       }else{
//       console.log("deleted")
//       res.json(data);
//     }
//   })
      
//   },
//   show_user: function(req, res){
//    console.log(req.params.id)
//    User.find({_id: req.params.id}, function(err, data){
//       if(err){
//       console.log('failed to delete')
//       res.json(err);
//       }else{
//       console.log("deleted")
//       res.json(data);
//     }
//     })
//   },
}
