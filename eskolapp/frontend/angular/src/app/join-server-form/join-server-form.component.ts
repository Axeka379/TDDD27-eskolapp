import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../data.service';
import { ChatService } from '../chat/chat.service';
import { Router } from '@angular/router';


@Component({
	selector: 'app-join-server-form',
	templateUrl: './join-server-form.component.html',
	styleUrls: ['./join-server-form.component.scss']
})
export class JoinServerFormComponent implements OnInit {
	serverTypes = ['Private', 'Group'];

	constructor(
		public activeModal: NgbActiveModal,
		private router: Router,
		private chat: ChatService,
		private data: DataService
	) {}


	ngOnInit() {}
	onSubmit(formData): void {
		let key = formData.form.value.serverKey;

		this.data.joinServer(key).subscribe(
			( result: {'server': any}) => {
				console.log('joinServer', result);

				let server = this.chat.addServer(result.server);
				this.router.navigate(['/chat', server.id]);
				this.activeModal.close();
			},
			error => { console.warn(error.error); }
		);
	}
}
