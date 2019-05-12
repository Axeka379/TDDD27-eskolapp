import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../data.service';

@Component({
	selector: 'app-create-room-form',
	templateUrl: './create-room-form.component.html',
	styleUrls: ['./create-room-form.component.scss']
})
export class CreateRoomFormComponent implements OnInit {
	serverTypes = ['Private', 'Group'];

	constructor(
		public activeModal: NgbActiveModal,
		private data: DataService
	) {}

	ngOnInit() {}

	onSubmit(formData): void {
		let name = formData.form.value.serverName;

		this.data.createServer().subscribe(
			data => {
				console.log('Create Server:', data);
			}
		);
		this.activeModal.close();
	}
}
