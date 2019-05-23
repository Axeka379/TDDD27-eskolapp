import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../data.service';

@Component({
	selector: 'app-join-server-form',
	templateUrl: './join-server-form.component.html',
	styleUrls: ['./join-server-form.component.scss']
})
export class JoinServerFormComponent implements OnInit {
	serverTypes = ['Private', 'Group'];

	constructor(
		public activeModal: NgbActiveModal,
		private data: DataService
	) {}

	ngOnInit() {}

	onSubmit(formData): void {
		let key = formData.form.value.serverKey;

		this.data.joinServer(key).subscribe(
			result => {
				console.log('joinServer', result);
				this.activeModal.close();
			},
			error => { console.warn(error); }
		);
	}
}
