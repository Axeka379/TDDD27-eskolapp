import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ChatService } from "../chat.service";
import { DataService } from '../../data.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Createinvitationlink} from '../../create-invitation-link/create-invitation-link.component';


@Component({
	selector: 'app-chat-form',
	templateUrl: './chat-form.component.html',
	styleUrls: ['./chat-form.component.scss']
})
export class ChatFormComponent implements OnInit {

	constructor(private chatService: ChatService,
				private modalService: NgbModal,
				private data: DataService,
				private chat: ChatService) {}

	ngOnInit() {}

	onSubmit($event, formData): void {
		$event.preventDefault();
		let message = formData.form.value.chatInput;
		formData.reset();
		this.chatService.sendMessage(message);
	}

	openCreateInvitationLinkModal() {
		this.modalService.open(Createinvitationlink);
	}

}
