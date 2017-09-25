import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { TaskService } from '../task.service';
import { Anonpost } from "./../anonpost";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
	users = []
  constructor(private _taskService: TaskService) { 
  	// this.showAll()
  }
  // showAll(){
  // 	this._taskService.show(function(data){
	 // 		this.users = data
  // 	}.bind(this))
  // }

  ngOnInit() {

  }

}
