import { Component, OnInit } from '@angular/core';
import { User } from './../user';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
	user1 = new User();
	user2 = new User();
	list = [];
	errors = [];
	u1;
	u2;
	constructor(private _route: ActivatedRoute, private _taskService: TaskService, private _r: Router) { 
		
	};
	// onSubmit1(){
	// 	this._taskService.battle(this.user1.name, function(u1){
	//  				this.u1 = u1
 //  				}.bind(this))
	// 		console.log(this.u1)
	// 		this.user1 = new User();
	// }
	// onSubmit2(){
	// 	this._taskService.battle(this.user2.name, function(u2){
	//  				this.u2 = u2
	//  				console.log(u2)
 //  				}.bind(this))
	// 		console.log(this.u2)
	// 		this.user2 = new User()
		
	// }
	// battle(){
	// 	this._taskService.fight(this.u1, this.u2)
	// 	this.u1 = null;
	// 	this.u2 = null;
	// 	this._r.navigateByUrl('results')
	// }
	ngOnInit() {
	}
}
