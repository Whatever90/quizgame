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
  answers;
  lastgame;
  id;
   constructor(private _r: Router, private _http: Http) {

   };
   showlastscore(user, callback){
     this._http.post('/users/lastscoreshow', user)
     .map(data => data)
     .subscribe(data=> callback(data))
   }
   /////////////////////////////-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
   addScore(send){
     
     this._http.post('/user/score', send).subscribe(
         (data) => data = data.json(),
         (err) => console.log(err)
      )
   }
   //////////////////////////////-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
   lastscoreadd(last){
     this._http.post('/user/lastscoreadd', last).subscribe(
         (data) => data = data.json(),
         (err) => console.log(err)
      )
   }/////////////////////////////DON'T NEED LASTSCORE FUNCTION
   newPoll(poll){
      console.log('taskservice: creating a new poll')
      console.log(poll)
      this._http.post('/polls/new', poll).subscribe(
         (data) => data = data.json(),
         (err) => console.log(err)
      )
   }

   
   pollsShowAll(callback){
     this._http.post('/polls/all', 'lol')
     .map(data => data.json())
     .subscribe(data=> callback(data))
   }
   getPoll(id, callback){
     this.id = {
       id:id
     }
     console.log('taskService getPoll(): this.id =>', this.id)
     this._http.post('/polls/givemeone', this.id)
     .map(data => data.json())
     .subscribe(data=> callback(data))
   }
   votePoll(vote, callback){
     
     console.log('taskService votePoll(): vote =>', vote)
     this._http.post('/polls/votepoll', vote)
     .map(data => data.json())
     .subscribe(data=> callback(data))
   }
   deletePoll(id){
       let key = {
         id: id
       }
       console.log(key)
     this._http.post('/polls/deletepoll', key)
       .map(data => data.json())
       .subscribe(data=> console.log(data))
   }

//////////////////////////////////////////////////////////////////////////////   
   allQuestions(callback){
     this._http.post('/questions/all', 'lol')
     .map(data => data.json())
     .subscribe(data=> callback(this.threequestions(this.shuffle(data))))
   }
    shuffle(a) {
      for (let i = a.length; i; i--) {
          let j = Math.floor(Math.random() * i);
          [a[i - 1], a[j]] = [a[j], a[i - 1]];
      }
      return a
    }
  threequestions(questions){
    let threequest = []
    for(let i = 0; i <3; i++){
      threequest.push(questions[i])
    }
    console.log('taskservice threequestions returns =>', threequest)
    return threequest
  }



///////////////////////////////////////////////////////////////////////////////
   showAll(callback){
     this._http.post('/users/all', 'lol')
     .map(data => data.json())
     .subscribe(data=> callback(data))
   }
   create(user, callback){
     console.log('craeting user =>', user)
    this._http.post("/user/new", user).subscribe(
          (data) => callback(data.json()), 
          (err) => console.log('taskservice create(): err =>', err.json()),
          //callback(data.json()),

        )

        //.map(data => data.json() ) //
        //.subscribe(data => console.log("taskService: create() =>",data, 'and user =>', user))
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
     console.log('taskservice login():', user)
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
     console.log('task service. storeUs: stroing', user)
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







   // show(callback){
   //    console.log('show all!')
   // 	this._http.get("/users").subscribe(
   //       (data) => callback(data.json()),
   //       (err) => console.log(err)
   //    )
   // }
   // add(user){
   //    this.context = user
   //    console.log("service is trying..")
   //    console.log(this.context)
   //   this._http.post("/user/new", this.context)
   //     .map( data => data.json() )
   //     .toPromise();
   //    console.log('did it work?')
   // }
   
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
