var mongoose = require('mongoose');
//var Quote = mongoose.model('Quote');
var users = require('./../controllers/users.js');
var session = require('express-session');
// original code:
var express = require('express')
//var app = express();
// more new code:
//app.use(session({secret: 'codingdojorocks'})); 

module.exports = function(app) {
app.get('/', function(req, res) {
    users.page(req, res)
});

app.post('/create', function(req, res) {
  users.create(req, res)
   });

app.post('/login', function(req, res) {
  users.login(req, res)
   });

app.get('/success', function(req, res) {
  users.success(req, res)
   });
app.post('/logout', function(req, res) {
  users.logout(req, res)
   });




// app.post('/users', function(req, res) {
//   users.create(req, res)
// });
// app.get('/users/:id', function(req, res){
//   users.show_user(req, res)
//   //console.log(req.params.id)
//   // User.find({_id: req.params.id}, function(err, arr){
//   //   if(err){
//   //     console.log(err)
//   //   }else{
//   //     res.render('user', {user: arr})
//   //   }
//   // })
  
// })

// app.get('/users/edit/:id', function(req, res){
  
//   // console.log(req.params.id)
//   // User.find({_id: req.params.id}, function(err, arr){
//   //   if(err){
//   //     console.log(err)
//   //     console.log('+++++++++++++++++++++++++++++++++++++++')
//   //   }else{
//   //     res.render('./../client/views/user_edit', {user: arr, errors: err})
//   //   }
//   // })
//   		users.show_user_edit(req, res)
// })
// app.post('/users/:id', function(req, res){
//   // var x = req.params.id
//   // console.log(req.params.id)
// //   User.update({_id: req.params.id}, {$set: {name: req.body.name, age: req.body.age}}, function(err, arr){
// //     if(err){
// //       var rer = err
// //       //console.log(err)
// //       User.find({_id: x}, function(err, arr){
// //               if(err){
// //             console.log(err)
// //             console.log('+++++++++++++++++++++++++++++++++++++++')
// //           }else{
// //             //var temp = '/users/edit/'+req.params.id
// //             console.log('PEREHOD! OWIBKA!@')
// //             res.render('user_edit', {user: arr, errors: rer})
// //           }
// //         })//console.log(err)
// //     }else{
// //     console.log(req.body.name)
// //     console.log(req.body.age)
// //       res.redirect('/')
    
// //   }
// // })
// 			users.user_update(req, res)
// })
// app.get('/users/destroy/:id', function(req, res){
  
//   // console.log(req.params.id)
//   // User.remove({_id: req.params.id}, function(err, arr){
//   //   if(err){
//   //     console.log(err)
//   //   }else{
//   //     console.log("deleted")
//   //     res.redirect('/')
//   //   }
//   // })
      
//     		users.user_destroy(req, res)
//   })
}