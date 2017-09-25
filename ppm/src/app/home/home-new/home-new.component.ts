import { Component, OnInit } from '@angular/core';
import { User } from './../../user';
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
	user = new User();
	list;
	errors = []
	constructor(private _route: ActivatedRoute, private _taskService: TaskService, private _r: Router) { 
		
	};
	onSubmit(){
		this._taskService.add(this.user);
		console.log(this.user)
		this.user = new User();
		this._r.navigateByUrl('players/list')
	}
	ngOnInit() {
	}
}

