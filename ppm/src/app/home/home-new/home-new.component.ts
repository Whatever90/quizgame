import { Component, OnInit } from '@angular/core';
import { Poll } from './../../poll';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
import { TaskService } from './../../task.service';
import { HomeComponent } from './../home.component'
import { HomeListComponent } from './../home-list/home-list.component'
@Component({
  selector: 'app-new',
  templateUrl: './home-new.component.html',
  styleUrls: ['./home-new.component.css']
})
export class HomeNewComponent implements OnInit {
	poll = new Poll();
	list;
	errors = []
	user;
	constructor(private _route: ActivatedRoute, private _taskService: TaskService, private _r: Router, private _h: HomeListComponent) { 
		
	};
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
	onSubmit(){
		console.log('we got a new poll!')
		this.poll.creater_name = this.user.name
		this.poll.creater_id = this.user._id
		console.log(this.poll)
		this._taskService.newPoll(this.poll)
		this.poll = new Poll();
		this._h.showAllPolls()
		this._r.navigateByUrl('dashboard')
	}
	ngOnInit() {
		this.showUser()
	}
}

