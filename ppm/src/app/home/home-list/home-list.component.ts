import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { TaskService } from './../../task.service';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { HomeComponent } from './../home.component'
@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {
polls = []
id;
lastscore;
user = {
  name: ' '
}
    query = {
      title: '',
    };
  constructor(private _taskService: TaskService, private _r: Router) { 
     
  	this.showAllPolls()
    
  }
 //  checker(){
 //    console.log(this.query.name)
 //  }
 //  checklastscore(){
 //    this._taskService.showlastscore(this.user, function(data,err){
 //      console.log('data', data)
 //      console.log('err', err)
 //    })
 //  }
    showUser(){
    this._taskService.showUser(function(data, user){
      console.log('this is user', user)
      console.log('this is data', data)
      if(!data){
        this._r.navigateByUrl('/')
      }
      this.user = data
    }.bind(this))
  }
 showAllPolls(){
     console.log('lets show all polls!')
    this._taskService.pollsShowAll(function(err, data){
      console.log(data)
      console.log('----------------------')
      console.log(err)
      if(err){
        console.log('somehow true statement is ERROR, lol')
        console.log(err)
        this.polls = err
      }
      if(data){
        console.log('data!!!!!')
        this.polls = data
      }
    }.bind(this))
  }
  delete(id){
    console.log('deleting', id)
    this._taskService.deletePoll(id)
    this.showAllPolls()
  }
  logout(){
    this._taskService.logout()
    this._r.navigateByUrl('/')
  }
  ngOnInit() {
    this.showUser()
    this.showAllPolls()
  }

}