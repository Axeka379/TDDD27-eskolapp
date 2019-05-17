import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { ChatFormComponent } from './chat-form/chat-form.component';
import { CreateRoomFormComponent } from './create-room-form/create-room-form.component';

import { ChatService } from './chat.service';
import { WebsocketService } from './websocket.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { TokenInterceptor } from './authentication/token.interceptor';


@NgModule({
	declarations: [
		AppComponent,
		SidebarComponent,
		PostsComponent,
		UsersComponent,
		DetailsComponent,
		ChatWindowComponent,
		ChatFormComponent,
		CreateRoomFormComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		HttpClientXsrfModule.withOptions({
			cookieName: 'My-Xsrf-Cookie',
			headerName: 'My-Xsrf-Header',
		}),
		BrowserAnimationsModule,
		FormsModule,
		NgbModule,
		AuthenticationModule
	],
	providers: [
		{
			provide: LocationStrategy,
			useClass: HashLocationStrategy
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: TokenInterceptor,
			multi: true
		},
		WebsocketService,
		ChatService
	],
	bootstrap: [AppComponent],
	entryComponents: [
		CreateRoomFormComponent,
	]
})
export class AppModule { }
