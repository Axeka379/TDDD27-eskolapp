import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../data.service';
import { ChatService } from "../chat/chat.service";


@Component({
	selector: 'app-create-invitation-link',
	templateUrl: './create-invitation-link.component.html',
	styleUrls: ['./create-invitation-link.component.scss'],
})
export class Createinvitationlink implements OnInit {

	invitation_link: string = " ";
	constructor(
		public activeModal: NgbActiveModal,
		private data: DataService,
		private chat: ChatService
	) {}

	ngOnInit() {
				this.data.createServerInvite(this.chat.selectedServerId).subscribe(
			(result: {'invite_url': any}) => {
				console.log('createServerInvite', result);
				this.invitation_link = result.invite_url;
			 },
			error => { console.warn(error); }

		);
	}

	copyInputMessage(inputElement){
		inputElement.select();
		document.execCommand('copy');
		inputElement.setSelectionRange(0, 0);
	  }
}
