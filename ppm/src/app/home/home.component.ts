import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { TaskService } from '../task.service';
import { HomeListComponent } from './home-list/home-list.component';
import { HomeNewComponent } from './home-new/home-new.component';
import { User } from './../user';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	 users = [];
  error;
  errormessage;
  products;
  product;
  length;
  user = new User();
  constructor(private _taskService: TaskService, private _r: Router, ) { 
    //this.showAllUsers()
  }
   showUser(){
    this._taskService.showUser(function(data, user){
      console.log('this is user', user)
      console.log('this is data', data)
      if(data){
        console.log(data)
        this.user = data
        this._r.navigateByUrl('/dashboard')
      }else if(data == undefined){
        this._r.navigateByUrl('/')
      }
      
    }.bind(this))
  }


  onSubmit(){
    console.log(this.user)
    const person = this.user
      
      this._taskService.create(this.user, function(data, user){
        console.log('onSubmit(): data =>',data)
        console.log('onSubmit(): user =>',user)
        if(!data){
          console.log('something wrong. going to login')
          console.log('homeComp onSubmit(): if(!data)',person)
          this.login(person)
        }
        if(data){
          console.log('exellent!')
          console.log(data)
          this.storeUser(data)
          this.user = new User();
          this._r.navigateByUrl('/dashboard')
        }
      }.bind(this))
    
  }
  login(loginUser){
    console.log('homeComp login(): loginuser =>', loginUser)
    this._taskService.login(loginUser, function(data){
      console.log(data)
      if(!data){
        console.log('failed to login')
      }
      if(data){
        this.storeUser(data)
        console.log('logining was successful!')
        this.user = new User();
        this._r.navigateByUrl('/dashboard')
      }
    }.bind(this))
  }
  storeUser(user){
    console.log('ok, saving the user')
    this._taskService.storeUs(user)
  }
  ngOnInit() {
    this.showUser()
  }

}
