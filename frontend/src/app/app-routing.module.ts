import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { PostsComponent } from './posts/posts.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';

const routes: Routes = [
	{
		path: '',
		component: ChatWindowComponent
	},
	{
		path: 'details/:id',
		component: DetailsComponent
	},
	{
		path: 'posts',
		component: PostsComponent
	},
	{
		path: 'users',
		component: UsersComponent
	},
	{
		path: '**',
		redirectTo: ''
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
