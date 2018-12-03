import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { ProductsComponent } from './products/products.component';
import { DeleteComponent } from './delete/delete.component';
import { PostsComponent } from './posts/posts.component';
import { HomeListComponent } from './home/home-list/home-list.component';
import { HomeNewComponent } from './home/home-new/home-new.component';
import { HomeGameComponent } from './home/home-game/home-game.component';
import { AllComponent } from './products/all/all.component';
import { ProductsAllComponent } from './products/products-all/products-all.component';
import { ProductMylistComponent } from './products/product-mylist/product-mylist.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	// { path: 'browse', component: ProductsComponent , children:[
	// 	{path: 'all', component: ProductsAllComponent },
	// 	{path: 'listings', component: ProductMylistComponent}
	// ]},
	{ path: 'dashboard', component: HomeListComponent },
	{ path: 'create', component: HomeNewComponent },
	{ path: 'poll/:id', component: HomeGameComponent },
	// { path: 'players/addplayer', component: HomeNewComponent },
	// { path: 'players/delete/:id', component: HomeNewComponent },
	
	// { path: 'status/game/2', component: ProductsComponent },
	// { path: 'status/game/3', component: DeleteComponent },
	// { path: 'products/edit/:id', component: EditComponent },
	// { path: 'products/new', component: NewComponent },
	// { path: 'products/delete/:id', component: DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
