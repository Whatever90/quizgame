var mongoose = require('mongoose');
//var Quote = mongoose.model('Quote');
var products = require('./../controllers/products.js');
var session = require('express-session');
// original code:
var express = require('express')
var path = require('path')
//var app = express();
// more new code:
//app.use(session({secret: 'codingdojorocks'})); 

module.exports = function(app) {
app.get('/products', (req, res, next)=>{
	products.showAll(req, res)
});
app.get('/products/:id', (req, res, next)=>{
  products.showOne(req, res)
   });
app.post('/products/new', (req, res, next)=>{
    products.create(req, res)
});
app.post('/products', (req, res, next)=>{
 res.json(true)
   });

app.delete('/products/:id', (req, res, next)=>{
  res.json(true)
   });
app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./ppm/dist/index.html"))
    });
}
// app.post('/login', function(req, res, next)=>{
//  res.json(true)
//    });

// app.get('/success', function(req, res, next)=>{
//   ures.json(true)
//    });
// app.post('/logout', function(req, res, next)=>{
//   res.json(true)
//    });




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
