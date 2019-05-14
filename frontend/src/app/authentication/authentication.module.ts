import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { UserService } from './user.service';


@NgModule({
	declarations: [LoginComponent, SignupComponent],
	imports: [
		CommonModule,
		FormsModule
	],
	exports: [
		LoginComponent,
		SignupComponent
	],
	entryComponents: [
		LoginComponent,
		SignupComponent
	],
	providers: [
		UserService
	]
})
export class AuthenticationModule { }
