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
questions;
threequest = [];
answer = new Answer()
question1;
question2;
question3;
temp = []
user;
score = 0;
send;
send2;
  constructor(private _route: ActivatedRoute, private _taskService: TaskService, private _r: Router) { 
		this.allQuestions()
		this.showUser()
	}; 

	allQuestions(){
		this._taskService.allQuestions(function(err, data){
      
      if(err){
        this.questions = err
        this.threequestions()
      }
      if(data){
        console.log('data!!!!!')
        this.questions = data
      }
    }.bind(this))
	}
	threequestions(){
		for(let i = 0; i <3; i++){
			this.threequest.push(this.questions[i])
		}
		this.threequest = this.shuffle(this.threequest)
		console.log('got 3 q', this.threequest)
	}
	shuffle(a) {
	    for (let i = a.length; i; i--) {
	        let j = Math.floor(Math.random() * i);
	        [a[i - 1], a[j]] = [a[j], a[i - 1]];
	    }
	    return a
	}
	showUser(){
		this._taskService.showUser(function(data, user){
			console.log('this is user', user)
			console.log('this is data', data)
			this.user = data
		}.bind(this))
	}
	onSubmit(){
		this.answer = {
			ans_0: this.temp[0],
			ans_1: this.temp[1],
			ans_2: this.temp[2],
			id: this.temp[4],
			user: this.user._id
		}
		for(let i = 0; i <3; i++){
			if(this.threequest[i].correct==this.temp[i]){
				this.score++
			}
		}
		this.send = {
			score: this.score + this.user.score,
			id: this.user._id
		}
		this.send2 = {
			score: this.score,
			id: this.user._id
		}
		//console.log(this.answer)
		this._taskService.addScore(this.send, this.send2)
		this._r.navigateByUrl('main')
	}
	answer1(ind, ans, id){
		console.log(ind, ans, id)
		this.temp[ind] = ans
		this.temp[3] = id
		console.log(this.temp)
	}
  ngOnInit() {
  }

}
