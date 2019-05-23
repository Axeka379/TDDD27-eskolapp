import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../data.service';


interface LogoutResponse {
	token: string,
	user: any,
}


@Component({
	selector: 'app-logout',
	templateUrl: './logout.component.html',
	styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
	title = 'logout';

	form = {
	}

	constructor(
		public activeModal: NgbActiveModal,
		private http: HttpClient,
		private data: DataService,
	) {}

	ngOnInit() {}

	onSubmit() {
		this.data.logout();
		console.log('Logged out!');
		localStorage.setItem("token", null);
		this.activeModal.close();
	}

}