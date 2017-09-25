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
  user;
  loginUser = new LoginUser()
  error;
  errormessage;
  products;
  product;
  length;

  constructor(private _taskService: TaskService, private _r: Router, ) { 
    //this.showAllUsers()
  }
myFunction() {
    var person = prompt(`Login`)
    if (person.length>1) {
        console.log('hello', person)
        this.user = person
        this.onSubmit1()
    }else{
      this.myFunction()
    }
}

  showAllUsers(){
     console.log('lets show all users!')
    this._taskService.showAll(function(err, data){
      console.log(data)
      console.log('----------------------')
      console.log(err)
      if(err){
        console.log('somehow true statement is ERROR, lol')
        console.log(err)
        this.users = err
      }
      if(data){
        console.log('data!!!!!')
        this.users = data
      }
    }.bind(this))
  }
  // showOne(){
  //   this.showAll()
  //   this.length = 1
  //   console.log('=====================')
  //   console.log(this.products)
  //   console.log('=====================')
  //   // var x = Math.floor(Math.random()*length)
  //   // this.product = this.product[x]

  // }
  onSubmit1(){
      console.log(this.user)
      this._taskService.create(this.user, function(data, user){
        if(!data){
          console.log('something wrong')
          alert(`Welcome back, ${this.user}!`)
          this.login(this.user)
        }
        if(data){
          console.log('exellent!')
          console.log(data)
          this.storeUser(data)
          this._r.navigateByUrl('/main')
        }
      }.bind(this))
    
  }
  login(loginUser){
    this._taskService.login(loginUser, function(data){
      console.log(data)
      if(!data){
        console.log('failed to login')
        this.myFunction()
      }
      if(data){
        this.storeUser(data)
        console.log('logining was successful!')
        this._r.navigateByUrl('/main')
      }
    }.bind(this))
  }
  storeUser(user){
    console.log('ok, saving the user')
    this._taskService.storeUs(user)
  }
  ngOnInit() {
    this.myFunction()
  }

}
