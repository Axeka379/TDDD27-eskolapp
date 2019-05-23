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
import { CreateRoomFormComponent } from './create-room-form/create-room-form.component';

import { WebsocketService } from './websocket.service';
import { AuthModule } from './auth/auth.module';
import { ChatModule } from './chat/chat.module';
import { TokenInterceptor } from './auth/token.interceptor';


@NgModule({
	declarations: [
		AppComponent,
		SidebarComponent,
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
		AuthModule,
		ChatModule
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
		WebsocketService
	],
	bootstrap: [AppComponent],
	entryComponents: [
		CreateRoomFormComponent,
	]
})
export class AppModule { }
