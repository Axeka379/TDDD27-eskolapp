import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	title = 'login';

	creds = {
		username: '',
		password: ''
	}

	constructor(
		public activeModal: NgbActiveModal,
		private http: HttpClient
	) {}

	ngOnInit() {}

	onSubmit() {
		this.http.post('http://127.0.0.1:8000/login/', this.creds)
			.subscribe(
				result => {
					console.log('I logged in', result)
				}
			);
	}

}