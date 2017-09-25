import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeListComponent } from './home-list/home-list.component';
import { HomeNewComponent } from './home-new/home-new.component';

const routes: Routes = [
	{ path: 'players/list', component: HomeListComponent },
	{ path: 'players/addplayer', component: HomeNewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
