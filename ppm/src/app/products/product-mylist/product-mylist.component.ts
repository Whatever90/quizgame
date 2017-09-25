import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
import { TaskService } from './../../task.service';
import { Product } from './../../product';
import { updateProduct } from './../../updateProduct';

@Component({
  selector: 'app-product-mylist',
  templateUrl: './product-mylist.component.html',
  styleUrls: ['./product-mylist.component.css']
})
export class ProductMylistComponent implements OnInit {
	products = []
	product = new Product()
	updateProduct = new updateProduct()
	user;
  constructor(private _taskService: TaskService, private _r: Router) { 
  	this.checkUser()
  		
  }
  newProduct(){
  	
  	this.product.seller = this.user
  	console.log("the seller is", this.product.seller)
  	this._taskService.newProduct(this.product)
  	this.product = new Product()
  	this.showMine()
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
        this.user = user
        console.log(this.user)
        console.log('alright, user is here!')
        this.showMine()
      }
    }.bind(this))
  }
  showMine(){
  	console.log('SHOW ME ALL PRODUCTS OF THIS USER =>')
  	console.log(this.user)
    this._taskService.showMylist(this.user._id ,function(err, data){
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
  update(id, updateForm){
  	console.log('hey')
  	console.log(id)
  	console.log(updateForm.form._value)
  	this.updateProduct.title = updateForm.form._value.up_title
  	this.updateProduct.description = updateForm.form._value.up_description
  	this.updateProduct.image = updateForm.form._value.up_image
  	this.updateProduct.location = updateForm.form._value.up_location
  	this.updateProduct.price = updateForm.form._value.up_price
  	this.updateProduct.seller = this.user._id
  	this.updateProduct.id = id;
  	console.log(this.updateProduct)
  	this._taskService.updateProduct(this.updateProduct)
  	this.showMine()
  }
  deleteProduct(id){
  	console.log(id)
  	this._taskService.deleteProduct(id)
  	this.showMine()
  }

  ngOnInit() {
  }

}
