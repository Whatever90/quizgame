import { Component, OnInit } from '@angular/core';
import { Question } from './../../question';
import { Answer } from './../../answer';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
import { TaskService } from './../../task.service';
import { HomeComponent } from './../home.component'

@Component({
  selector: 'app-home-game',
  templateUrl: './home-game.component.html',
  styleUrls: ['./home-game.component.css']
})
export class HomeGameComponent implements OnInit {

temp = []
user;
score = 0;
send;
send2;
id;
poll= {
	name: ' '
};
poll_id;
option_votes;
  constructor(private _route: ActivatedRoute, private _taskService: TaskService, private _r: Router) { 
		
	}; 
	getPoll(id){
		this._taskService.getPoll(id, function(data, user){
		      console.log('this is user', user)
		      console.log('this is data', data)
		      this.poll = data
		      this.poll_id = this.poll._id
    	}.bind(this))
	}
	votefor(voting, amount){
		let send = {
			voting: voting,
			id: this.poll_id,
			amount: amount + 1
		}
		
		console.log(send)

		this._taskService.votePoll(send, function(data, user){
		      console.log('this is user', user)
		      console.log('this is data', data)
		      if(data){
		      	this.getPoll(this.id)
		      }
    	}.bind(this))
	}
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
	
  ngOnInit() {
  	this._route.paramMap.subscribe( params => {
       	       console.log(params.get('id'));
       	       this.id = params.get('id')
       	       })
		this.getPoll(this.id)
  }

}
