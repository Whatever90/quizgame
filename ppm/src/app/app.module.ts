import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { TaskService } from './task.service';
import { DeleteComponent } from './delete/delete.component';
import { PostsComponent } from './posts/posts.component';

import { HomeListComponent } from './home/home-list/home-list.component';
import { HomeNewComponent } from './home/home-new/home-new.component';
import { ProductNewComponent } from './products/product-new/product-new.component';
import { ProductMylistComponent } from './products/product-mylist/product-mylist.component';

import { ProductsAllComponent } from './products/products-all/products-all.component';
// import { Routes, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    EditComponent,
    NewComponent,
    DeleteComponent,
    PostsComponent,
    HomeListComponent,
    HomeNewComponent,
    ProductNewComponent,
    ProductMylistComponent,
    ProductsAllComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
