import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
	item;
	prod = new Product();
	list;
	index;
  constructor(private _route: ActivatedRoute, private _taskService: TaskService, private _r: Router) { 
  	// this._route.paramMap
   //    .subscribe(params => {
   //      console.log("HERE ->", params.get('id'));
   //      this.index = params.get('id');
   //      this.item = this._taskService.getItem(params.get('id'))
   //      console.log(this.item)
   //      return this.item;
   //  })
  }
  onSubmit(){
		// this._taskService.update(this.index, this.prod);
		// this.prod = new Product();
		// this._r.navigateByUrl('products')
		
	}

  ngOnInit() {
  }
  delete(){
  	this._taskService.delete(this.index)
  }

}
