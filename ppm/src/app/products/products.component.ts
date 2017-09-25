import { Component, OnInit } from '@angular/core';
import { Anonpost } from '../anonpost';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products = []
user;
  constructor(private _taskService: TaskService, private _r: Router) { 
    this.checkUser()
    
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
        this.showAll()
      }
    }.bind(this))
  }
  logout(){
    console.log('products. logout function')
    this._taskService.logout()
    this._r.navigateByUrl('')
  }
  showAll(){
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

  ngOnInit() {
    this.checkUser()
  }

}
