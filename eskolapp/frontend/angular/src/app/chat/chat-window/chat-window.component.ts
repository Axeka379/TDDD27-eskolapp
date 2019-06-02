import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from "../chat.service";

@Component({
	selector: 'app-chat-window',
	templateUrl: './chat-window.component.html',
	styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {

	constructor(
		private chatService: ChatService,
		private route: ActivatedRoute
	) {
		this.route.params.subscribe(
			(params) => {
				if (params.server_id) {
					this.chatService.selectedServerId = parseInt(params.server_id);
				}
			}
		);
	}

	ngOnInit() {
	}

	public get messages(): any {
		return this.chatService.messages;
	}

}
