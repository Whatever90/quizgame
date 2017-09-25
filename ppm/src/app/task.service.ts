import { Injectable } from '@angular/core';
import { Product } from './product';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { PostsComponent } from './posts/posts.component';
import "rxjs/Rx";
@Injectable()
export class TaskService {
   context;
   answer;
   user;
   fighter1;
   fighter2;
   key = []
	posts = [];
   constructor(private _r: Router, private _http: Http) {

   };
   create(user, callback){
      console.log('second step of storing')
      this._http.post("/user/new", user)
        .map(data => data.json() ) //
        .subscribe(data => callback(data))
   }
   newProduct(product){
      console.log('taskservice: creating a new product')
      console.log(product)
      this._http.post('/products/new', product).subscribe(
         (data) => data = data.json(),
         (err) => console.log(err)
      )
   }
   login(user, callback){
     console.log('second step of login')
      this._http.post("/user/login", user)
        .map(data => data.json() ) //
        .subscribe(data => callback(data))
   }
   showUser(callback){
     console.log('checking user in session')
      this._http.post("/user/showuser", "lol")
        .map(data => data.json() ) //
        .subscribe(data => callback(data))
   }
   storeUs(user){
     this._http.post('/user/store', user).subscribe(
         (data) => data = data.json(),
         (err) => console.log(err)
      )
   }
   logout(){
      this._http.post('/user/logout', 'lol').subscribe(
         (data) => data = data.json(),
         (err) => console.log(err)
      )
   }
   gimme(callback){
     callback(this.user)
   }
   showMe(callback){
     this._http.post('/products/all', 'lol')
     .map(data => data.json())
     .subscribe(data=> callback(data))
   }
   showMylist(id, callback){
     console.log(id)
     id={
       id: id
     }
     this._http.post('/products/mylist', id)
      .map(data => data.json())
      .subscribe(data=> callback(data))
   }
   getUser(user, callback){
     user={
       user: user
     }
     this._http.post('/user/contact', user)
      .map(data => data.json())
      .subscribe(data=> callback(data))
   }
   updateProduct(product){
     console.log('TASKSERVICE:', product)
     this._http.post('/products/update', product).subscribe(
         (data) => data = data.json(),
         (err) => console.log(err)
      )
   }
   deleteProduct(id){
     id={
       id:id
     }
      this._http.post('/products/delete', id).subscribe(
         (data) => data = data.json(),
         (err) => console.log(err)
      )
   }







   show(callback){
      console.log('show all!')
   	this._http.get("/users").subscribe(
         (data) => callback(data.json()),
         (err) => console.log(err)
      )
   }
   add(user){
      this.context = user
      console.log("service is trying..")
      console.log(this.context)
     this._http.post("/user/new", this.context)
       .map( data => data.json() )
       .toPromise();
      console.log('did it work?')
   }
   
   // update(status, id){
   //    let user ={
   //       id: id,
   //       status: status
   //    }

   //    this._http.post("/user/update/", user)
   //    .map( data => data.json() )
   //     .toPromise();
   // };
   // update1(status, id){
   //    let user ={
   //       id: id,
   //       status: status
   //    }
      
   //    this._http.post("/user/update/2", user)
   //    .map( data => data.json() )
   //     .toPromise();
   // };
   //  update3(status, id){
   //    let user ={
   //       id: id,
   //       status: status
   //    }
      
   //    this._http.post("/user/update/3", user)
   //    .map( data => data.json() )
   //     .toPromise();
   // };
   delete(id){
      console.log(id)
      id = {id: id}
   	this._http.post("/user/delete/", id)
      .map( data => data.json() )
       .toPromise();
      console.log('did it work?')
      
   }

}
