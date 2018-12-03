var mongoose = require('mongoose');
//var Quote = mongoose.model('Quote');
var user = require('./../controllers/users.js');
var option = require('./../controllers/options.js')
var poll = require('./../controllers/polls.js')
var session = require('express-session');
// original code:
var express = require('express')
var path = require('path')
//var app = express();
// more new code:
//app.use(session({secret: 'codingdojorocks'})); 
console.log('GELLO!')
module.exports = function(app) {
  ////////////////////////////
app.post('/users/all', (req, res, next)=>{
	console.log("let's show all players!")
  	user.showAll(req, res)
    });
app.post('/polls/new', (req, res, next)=>{
  console.log("routes: new poll")
    poll.create(req, res)
    })
app.post('/polls/all', (req, res, next)=>{
  console.log("routes: all polls")
    poll.showAll(req, res)
    })

app.post('/polls/givemeone', (req, res, next)=>{
  console.log("routes: /polls/givemeone")
    poll.givemeone(req, res)
    })
app.post('/polls/votepoll', (req, res, next)=>{
  console.log("routes: /polls/votepoll")
    poll.votepoll(req, res)
    })
app.post('/polls/deletepoll', (req, res, next)=>{
  console.log("routes: /polls/deletepoll", req.body)
    poll.deletepoll(req, res)
    })





app.post('/questions/all', (req, res, next)=>{
  console.log("routes: let's show all questions!")
    question.showAll(req, res)
    });
app.post('/questions/answers', (req, res, next)=>{
  console.log("routes: let's show all questions!")
    question.answers(req, res)
    });

app.post('/user/score', (req, res, next)=>{
  console.log("let's chenge the score players!")
    user.score(req, res)
    });
app.post('/user/lastscoreadd', (req, res, next)=>{
  console.log("let's add the last score!")
    user.lastscoreadd(req, res)
    });
app.post('/user/lastscoreshow', (req, res, next)=>{
  console.log("let's add the last score!")
    user.lastscoreshow(req, res)
    });
///////////////////////////////////////////////////////////////
/////////////////////////!!!!!!!///////////////////////////////
/////////////////////////!!!!!!!///////////////////////////////
///////////////////////////////////////////////////////////////
app.post('/user/new', (req, res, next)=>{
  console.log('recieve, registraion!!!!!!!!!!')
  console.log('----------------------------------')
  user.create(req, res)
});
app.post('/user/login', (req, res, next)=>{
  console.log('recieve, login!!!!!!!!!!')
  console.log('----------------------------------')
  user.login(req, res)
});
app.post('/user/store', (req, res, next)=>{
  console.log('routes.js: storing user in session!!!!!!!!!!')
  console.log('----------------------------------')
  user.store(req, res)
});
app.post("/user/showuser", (req, res, next)=>{
  console.log('routes.js: checking user in session!!!!!!!!!!')
  console.log('----------------------------------')
  user.showuser(req, res)
});
app.post("/user/logout", (req, res, next)=>{
  console.log('routes.js: logouting user in session!!!!!!!!!!')
  console.log('----------------------------------')
  user.logout(req, res)
});



app.post('/products/all', (req, res, next)=>{
  console.log('we r in routes.js/products/all')
  product.showAll(req, res)
})
app.post('/products/mylist', (req, res, next)=>{
  console.log('we r in routes.js/products/mylist')
  product.mylist(req, res)
})
app.post('/products/new', (req, res, next)=>{
  console.log('we r in routes.js/products/creating a product')
  product.create(req, res)
})

app.post('/user/contact', (req, res, next)=>{
  console.log('recieve, contact!!!!!!!!!!')
  console.log('----------------------------------')
  user.contact(req, res)
});
app.post('/products/update', (req, res, next)=>{
  console.log('recieve, contact!!!!!!!!!!')
  console.log('----------------------------------')
  product.update(req, res)
});
app.post('/products/delete', (req, res, next)=>{
  console.log('recieve, contact!!!!!!!!!!')
  console.log('----------------------------------')
  product.delete(req, res)
});


///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
/////////////////////////!!!!!!!///////////////////////////////
/////////////////////////!!!!!!!///////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

app.post('/posts', (req, res, next)=>{
 res.json(true)
   });

app.post("/user/delete/", (req, res, next)=>{
    console.log('delete')
  //console.log(req)
  user.delete(req, res)
   });
app.post('/user/update/', (req, res, next)=>{
  user.update(req, res)
});
app.post('/user/update/2', (req, res, next)=>{
  user.update2(req, res)
})
app.post('/user/update/3', (req, res, next)=>{
  user.update3(req, res)
})
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
