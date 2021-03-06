import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../data.service';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
	title = 'login';

	form = {
		"username": "",
		"email": "",
		"password1": "",
		"password2": ""
	}

	constructor(
		public activeModal: NgbActiveModal,
		private http: HttpClient,
		private data: DataService
	) {}

	ngOnInit() {}

	onSubmit() {
		this.data.register(this.form).subscribe(
			result => {
				console.log('Registered!', result);
				//login!!
				this.activeModal.close();
			},
			error => { console.warn(error.error); }
		);
		/*
		this.http.post('http://127.0.0.1:8000/register/', this.form)
			.subscribe(
				(result) => {
					console.log('I signed up', result)
				},
				(error: Event) => {
					console.log(error);
				},
			);
		*/
	}

}
