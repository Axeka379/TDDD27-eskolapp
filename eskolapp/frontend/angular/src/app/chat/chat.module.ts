import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ChatWindowComponent } from './chat-window/chat-window.component';
import { ChatFormComponent } from './chat-form/chat-form.component';

//import {MatSnackBarModule} from '@angular/material/snack-bar';

import { ChatService } from './chat.service';


@NgModule({
	declarations: [
		ChatWindowComponent,
		ChatFormComponent
	],
	imports: [
		CommonModule,
		FormsModule
	],
	providers: [
		ChatService
	]
})
export class ChatModule { }
