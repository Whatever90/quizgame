var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs')

let temp = ''


var Product = mongoose.model('Product');
//console.log(User)
module.exports = {
  showAll: function(req, res){
    console.log("Hello there! Ill bring you all products!")
    Product.find({}, function(err, data){
      if(err){
        console.log("++++++++++++++++++++++++++++++++++++")
        res.json(err)
        console.log("++++++++++++++++++++++++++++++++++++")
      }else{
        res.json(data)
      }
    })
  },
  mylist: function(req, res){
    console.log("Hello there! Ill bring you all your products! your id is", req.body.id)
    Product.find({seller: req.body.id}, function(err, data){
      if(err){
        res.json(err)
      }else{
        res.json(data)
      }
    })
  },

  
create: function(req, res) {
  console.log("++++++++++++++++++++++++++++++++++++")
    var product = new Product({
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
      location: req.body.location,
      image: req.body.image,
      seller: req.body.seller
    });
  product.save(function(err, data) {
    if(err) {
        res.json(err)
      } else {
        res.json(data)
      }
    })
  },
  update: function(req, res){
    console.log("Let's update product with id#", req.body.id)
    Product.update({_id: req.body.id}, {$set: {title: req.body.title, description: req.body.description, price: req.body.price, location: req.body.location, image: req.body.image}}, function(err, data){
      if(err){
        console.log("++++++++++++++++++++++++++++++++++++")
        res.json(err)
        console.log("++++++++++++++++++++++++++++++++++++")
      }else{
        console.log('WORKS!!!!!!!!!!!!!!!!!!!!!!!!!!')
        res.json(data)
      }
    })
  },  
  delete: function(req, res){
    console.log("DELETING product with id#", req.body.id)
    Product.remove({_id: req.body.id}, function(err, data){
      if(err){
        console.log("++++++++++++++++++++++++++++++++++++")
      }else{
        console.log('WORKS!!!!!!!!!!!!!!!!!!!!!!!!!!')
        res.json(data)
      }
    })
  },    
}
// login: function(req, res){
//   //req.query.id
//   console.log(req.body.login_email)
//   //var x = User.find({email: req.body.login_email})
//   console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
//       User.find({email: req.body.login_email}, function(err, data){
//         if(err){
//           console.log('failed to find')
          
//         }else{
//           console.log(data.length)
//           if(!data.length){
//             console.log('no such user')
//             return res.render('./../client/views/index', {regerrors: "failed to login"})
//           }else{
//             if(bcrypt.compareSync(req.body.login_password, data[0].password)){
//               console.log()
//               console.log(data[0]._id)
//               req.session._id = data[0]._id
//               res.redirect('/success')
//             }else{
//               console.log('no')
//               res.render('./../client/views/index', {regerrors: "failed to login"})
//               }
//             }
//           }
        
//     })
//   console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
//   },
//   success: function(req, res){
//       if(req.session._id != undefined){
//         console.log(`WELCOME ${req.session._id}`)
//         res.render('./../client/views/user')
//       } else{
//         res.redirect('/')
//       }
      
//   },
//   logout: function(req, res){
//     console.log('session ', req.session._id);
//     req.session.destroy(function(err){
//       if(err){
//         console.log(err)
//       }else{
//         console.log(`LOGOUT!!!!!!! `)
//         res.redirect('/')
//       }
//     })
   
    
//   },


  
  //   user_destroy: function(req, res){

  // console.log(req.params.id)

  // User.remove({_id: req.params.id}, function(err, data){
  //   if(err){
  //     console.log('failed to delete')
  //     res.json(err);
  //     }else{
  //     console.log("deleted")
  //     res.json(data);
  //   }
  // })
      
  // },
  // show_user: function(req, res){
  //  console.log(req.params.id)
  //  User.find({_id: req.params.id}, function(err, data){
  //     if(err){
  //     console.log('failed to delete')
  //     res.json(err);
  //     }else{
  //     console.log("deleted")
  //     res.json(data);
  //   }
  //   })
  // },















 //  create: function(req, res) {
  		
 //   if(parseInt(req.body.age)>0){
 //      console.log('creating a user')  
 //    var user = new User({
 //      name: req.body.name,
 //      age: req.body.age
 //    });
 //  user.save(function(err) {
 //      if(err) {
 //        console.log("++++++++++++++++++++++++++++++++++++")
 //        console.log(err)
 //        console.log("++++++++++++++++++++++++++++++++++++")
 //        res.redirect('/', {title: 'you have errors!', errors: user.errors})
 //      } else { // else console.log that we did well and then redirect to the root route
 //        console.log('successfully added a user!');
 //        res.redirect('/');
 //      }
 //  })
 //   }else{
 //    res.render('./../client/views/create.ejs', {title: 'you have errors!', errors: "valid number"})
 //   }
    
 //  },
 //  show_user: function(req, res){
 //  	console.log("+++++++++++++++++")
 //  	//console.log(req.params.id)
 //  	console.log("+++++++++++++++++")
 //  	User.find({_id:req.params.id}, function(err, arr){
	//     if(err){
	//       console.log(err)
	//     }else{
	//       res.render('./../client/views/user.ejs', {user: arr})
	//     }
	//   })
 //  },
 //  show_user_edit: function(req, res){
 //  	User.find({_id:req.params.id}, function(err, arr){
	//     if(err){
	//       console.log(err)
	//     }else{
	//       res.render('./../client/views/user_edit.ejs', {user: arr})
	//     }
	//   })
 //  },
 //  user_update: function(req, res){
 //  	User.update({_id: req.params.id}, {$set: {name: req.body.name, age: req.body.age}}, function(err, arr){
 //    if(err){
 //      var rer = err
 //      //console.log(err)
 //      User.find({_id: req.params.id}, function(err, arr){
 //              if(err){
 //            console.log(err)
 //            console.log('+++++++++++++++++++++++++++++++++++++++')
 //          }else{
 //            //var temp = '/users/edit/'+req.params.id
 //            console.log('PEREHOD! OWIBKA!@')
 //            res.render('./../client/views/user_edit', {user: arr, errors: rer})
 //          }
 //        })//console.log(err)
 //    }else{
 //    console.log(req.body.name)
 //    console.log(req.body.age)
 //      res.redirect('/')
 //  		}
	// })
 //  },
 //  user_destroy: function(req, res){

 //  console.log(req.params.id)
 //  User.remove({_id: req.params.id}, function(err, arr){
 //    if(err){
 //      console.log(err)
 //    }else{
 //      console.log("deleted")
 //      res.redirect('/')
 //    }
 //  })
      
 //  }

