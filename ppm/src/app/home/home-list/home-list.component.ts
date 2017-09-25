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
  constructor(private _taskService: TaskService) { 
  	this.showAll()
  }
  showAll(){
  	this._taskService.show(function(data){
	 		this.users = data
  	}.bind(this))
  }
  confirm(id) {
    var r = confirm("Are you sure?");
    this.id = id
    if (r == true) {
        this.delete(this.id)
    } else {
     console.log('deletion has been canceled')   
    }
}
  delete(id){
  	this._taskService.delete(id)
  	this.showAll()
  }
  ngOnInit() {
  }

}