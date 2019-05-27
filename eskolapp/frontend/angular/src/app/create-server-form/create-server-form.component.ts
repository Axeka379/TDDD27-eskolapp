import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../data.service';
import { ChatService } from '../chat/chat.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-create-server-form',
	templateUrl: './create-server-form.component.html',
	styleUrls: ['./create-server-form.component.scss']
})
export class CreateServerFormComponent implements OnInit {
	serverTypes = ['Private', 'Group'];

	constructor(
		public activeModal: NgbActiveModal,
		private router: Router,
		private chat: ChatService,
		private data: DataService
	) {}

	ngOnInit() {}

	onSubmit(formData): void {
		let server_name = formData.form.value.serverName;

		this.data.createServer(server_name).subscribe(
			(result: {'server': any}) => {
				console.log('Created server!');

				let server = this.chat.addServer(result.server);
				this.router.navigate(['/chat', server.id]);
				this.activeModal.close();
			},
			error => { console.warn(error.error); }
		);
	}
}
