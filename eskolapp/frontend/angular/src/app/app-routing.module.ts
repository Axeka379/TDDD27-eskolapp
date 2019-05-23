import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatWindowComponent } from './chat/chat-window/chat-window.component';

const routes: Routes = [
	{
		path: '',
		component: ChatWindowComponent
	},
	{
		path: 'chat/:server_id',
		component: ChatWindowComponent
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
