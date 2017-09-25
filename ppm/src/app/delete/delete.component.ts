import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
users = []
  constructor(private _taskService: TaskService) { 
    // this.showAll()
  }
  // showAll(){
  //   this._taskService.show(function(data){
  //      this.users = data
  //   }.bind(this))
  // }
  // status(stat, id){
  //   console.log(id, stat)
  // this._taskService.update3(stat, id);
  
  // this.showAll()
  
  // }
  // colorchange1(x){
  //   if(x=='ready'){
  //     return 'green'
  //   }else{
  //     return 'white'
  //   }
  // }
  //   colorchange2(x){
  //     if(x=='notready'){
  //     return 'red'
  //   }else{
  //     return 'white'
  //   }
  // }
  //   colorchange3(x){
  //     if(x=='undecided' || x=='Undecided'){
  //     return 'yellow'
  //   }else{
  //     return 'white'
  //   }
  // }
  ngOnInit() {

  }

}