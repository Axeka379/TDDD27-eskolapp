import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../data.service';


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
	title = 'login';

	form = {
		username: '',
		password: ''
	}

	constructor(
		public activeModal: NgbActiveModal,
		private http: HttpClient,
		private data: DataService,
	) {}

	ngOnInit() {}

	onSubmit() {
		this.data.authToken(this.form.username, this.form.password).subscribe(
			result => {
				console.log('Logged in!');
				localStorage.setItem("token", result.token);
				this.activeModal.close();
			},
			error => { console.warn(error); }
		);
	}

}