import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { TaskService } from '../task.service';
import { HomeListComponent } from './home-list/home-list.component';
import { HomeNewComponent } from './home-new/home-new.component';
import { User } from './../user';
import { LoginUser } from './../loginUser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	 users = [];
  user = new User();
  loginUser = new LoginUser()
  error;
  errormessage;
  products;
  product;
  length;

  constructor(private _taskService: TaskService, private _r: Router) { 
  	
    this.showOne()
  }
  showAll(){
     console.log('lets show all!')
    this._taskService.showMe(function(err, data){
      console.log(data)
      console.log('----------------------')
      console.log(err)
      if(err){
        console.log('somehow true statement is ERROR, lol')
        console.log(err)
        this.products = err
        console.log(this.products.length)
        this.product = this.products[Math.floor(Math.random()*this.products.length)]
      }
      if(data){
        console.log('yes!!!!!!!!!!!!!!')
        this.products = data
      }
    }.bind(this))
  }
  showOne(){
    this.showAll()
    this.length = 1
    console.log('=====================')
    console.log(this.products)
    console.log('=====================')
    // var x = Math.floor(Math.random()*length)
    // this.product = this.product[x]

  }
  onSubmit(){
      console.log(this.user)
      this._taskService.create(this.user, function(data){
        console.log(data)
        if(!data){
          console.log('something wrong')
          alert('email is already used by another user')
        }
        if(data){
          console.log('exellent!')
          console.log(data)
          this.storeUser(data)
          this.errormessage = ''
          this._r.navigateByUrl('browse/all')
        }
      }.bind(this))
      this.user = new User();
    
  }
  login(){
    this._taskService.login(this.loginUser, function(data){
      console.log(data)
      if(!data){
        console.log('failed to login')
        alert('wrong email or password')
      }
      if(data){
        this.storeUser(data)
        console.log('logining')
        this._r.navigateByUrl('browse/all')
      }
    }.bind(this))
    this.loginUser = new LoginUser
  }
  storeUser(user){
    this._taskService.storeUs(user)
  }
  ngOnInit() {
  }

}
