import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../data.service';

@Component({
	selector: 'app-create-server-form',
	templateUrl: './create-server-form.component.html',
	styleUrls: ['./create-server-form.component.scss']
})
export class CreateServerFormComponent implements OnInit {
	serverTypes = ['Private', 'Group'];

	constructor(
		public activeModal: NgbActiveModal,
		private data: DataService
	) {}

	ngOnInit() {}

	onSubmit(formData): void {
		let server_name = formData.form.value.serverName;

		this.data.createServer(server_name).subscribe(
			result => {
				console.log('createServer', result);
				this.activeModal.close();
			},
			error => { console.warn(error); }
		);
	}
}
