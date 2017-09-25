import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { TaskService } from './../../task.service';

import { HomeComponent } from './../home.component'
@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {
users = []
id;
lastscore;
user
  constructor(private _taskService: TaskService, private _r: Router) { 
    this.showUser()
  	this.showAllUsers()
    
  }
  checklastscore(){
    this._taskService.showlastscore(this.user, function(data,err){
      console.log('data', data)
      console.log('err', err)
    })
  }
    showUser(){
    this._taskService.showUser(function(data, user){
      console.log('this is user', user)
      console.log('this is data', data)
      this.user = data
    }.bind(this))
    this.checklastscore()
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
  game(){
    this._r.navigateByUrl('lets_play')
  }
  ngOnInit() {
  }

}