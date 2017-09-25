import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
import { TaskService } from './../../task.service';
@Component({
  selector: 'app-products-all',
  templateUrl: './products-all.component.html',
  styleUrls: ['./products-all.component.css']
})
export class ProductsAllComponent implements OnInit {
products = []
user;
contactcard;
  constructor(private _taskService: TaskService, private _r: Router) {
    
    this.checkUser()
    this.showAll() 
	}
  checkUser(){
    this._taskService.showUser(function(user, data){
      console.log('products.comp: user =>',user)
      console.log('products.comp: data =>',data)
      if(!user){
        console.log('no user found in session')
        this._r.navigateByUrl('')
      }
      if(user){
        console.log(user)
        this.user = user
        console.log('alright, user is here!')
      }
    }.bind(this))
  }

    showAll(){
      this.checkUser()
    this._taskService.showMe(function(err, data){
      console.log(data)
      console.log('----------------------')
      console.log(err)
      if(err){
        console.log('somehow true statement is ERROR, lol')
        console.log(err)
        this.products = err
      }
      if(data){
        console.log('yes!!!!!!!!!!!!!!')
        this.products = data
      }
    }.bind(this))
  }
  contact(seller){
    console.log(seller)
    this._taskService.getUser(seller, function(user, data){
      console.log('this is err', user)
      console.log('this is data', data)
      if(user){ 

        alert(`Name: ${user[0].first_name}; Email: ${user[0].email}`)
      }
      if(data){
        console.log(data)
      }
    }.bind(this))
  }
  deleteProduct(id, title){
    var r = confirm(`Delete ${title}?`);
    if (r == true) {
      console.log(`deleting ${title} with id: ${id}`)
       this._taskService.deleteProduct(id)
       this.showAll()
    } else {
        console.log('no');
    }
    this.showAll()
  }
  ngOnInit() {
  }

}
