import { Component, OnInit, ViewChild } from '@angular/core';
import { ChatService } from "../chat.service";

@Component({
	selector: 'app-chat-form',
	templateUrl: './chat-form.component.html',
	styleUrls: ['./chat-form.component.scss']
})
export class ChatFormComponent implements OnInit {
	//@ViewChild("chatInput") chatInput: ElementRef;

	constructor(private chatService: ChatService) { }

	ngOnInit() {
		//this.chatInput.nativeElement.focus();
	}

	onSubmit($event, formData): void {
		let message = formData.form.value.chatInput;
		$event.preventDefault();
		formData.reset();
		this.chatService.sendMessage(message);
	}

}
