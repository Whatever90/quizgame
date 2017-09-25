import { Component, OnInit } from '@angular/core';
import { Question } from './../../question';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
import { TaskService } from './../../task.service';
import { HomeComponent } from './../home.component'
@Component({
  selector: 'app-new',
  templateUrl: './home-new.component.html',
  styleUrls: ['./home-new.component.css']
})
export class HomeNewComponent implements OnInit {
	quest = new Question();
	list;
	errors = []
	constructor(private _route: ActivatedRoute, private _taskService: TaskService, private _r: Router) { 
		
	};
	onSubmit(){
		console.log('we got a new question!')
		this._taskService.newQuest(this.quest)
		this.quest = new Question();
		this._r.navigateByUrl('main')
	}
	ngOnInit() {
	}
}

