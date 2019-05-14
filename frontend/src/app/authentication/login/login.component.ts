import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';


interface LoginResponse {
	token: string,
	user: any,
}


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	baseUrl: string = "http://localhost:8000";
	title = 'login';

	form = {
		username: '',
		password: ''
	}

	constructor(
		public activeModal: NgbActiveModal,
		private http: HttpClient
	) {}

	ngOnInit() {}

	onSubmit() {
		this.http.post<LoginResponse>(
			this.baseUrl + '/login/',
			this.form)
		.subscribe(
			result => {
				if (result.token) {
					let token = result.token;
					console.log("Saved token", token);
					localStorage.setItem('token', token);
				}
				if (result.user) {
					let user = result.user;
					console.log("Saved user", user);
					localStorage.setItem('user', user);
				}
				console.log('I logged in', result)
			}
		);
	}

}