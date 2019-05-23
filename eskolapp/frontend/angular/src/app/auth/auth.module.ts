import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LogoutComponent } from './logout/logout.component';

import { UserService } from './user.service';


@NgModule({
	declarations: [LoginComponent, SignupComponent, LogoutComponent],
	imports: [
		CommonModule,
		FormsModule
	],
	exports: [
		LoginComponent,
		SignupComponent,
		LogoutComponent,
	],
	entryComponents: [
		LoginComponent,
		SignupComponent,
		LogoutComponent,
	],
	providers: [
		UserService
	]
})
export class AuthModule { }
