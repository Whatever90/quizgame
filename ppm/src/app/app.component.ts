import { Component } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { TaskService } from './task.service';
import { Anonpost } from './anonpost';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  errors = []
	check = [];
  	constructor(private _taskService: TaskService, private _r: Router) {

};
logout(){
  this._taskService.logout()
  this._r.navigateByUrl('/')
}
onSubmit(){
	};
showAll(){
}
  ngOnInit() {
  }
}
