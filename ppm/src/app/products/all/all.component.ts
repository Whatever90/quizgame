import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
import { TaskService } from './../../task.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
products = []
  constructor(private _taskService: TaskService, private _r: Router) { 
	this.checkUser()
    this.showAll()
  }
  checkUser(){
    this._taskService.gimme(function(err, data){
      console.log(err)
      console.log(data)
      if(!err){
        console.log('no user found in session')
        this._r.navigateByUrl('')
      }
      if(data){
        console.log(data)
        console.log('alright, user is here!')
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
  }

}
