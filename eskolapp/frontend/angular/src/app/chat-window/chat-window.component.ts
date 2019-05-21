import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from "../chat.service";
import { WebsocketService } from "../websocket.service";

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
					this.chatService.selectedServerId = params.server_id;
				}
			}
		);
	}

	ngOnInit() {
		this.chatService.onMessage$.subscribe(
			// Called whenever there is a message from the chat service.
			(msg) => {
				console.log("chat-window received", msg);
				//this.addMessage(msg);
			},
			// Called if at any point WebSocket API signals some kind of error.
			(err: Event) => {
				console.log('chat window error:', err);
				// reconnect
			},
			// Called when connection is closed (for whatever reason).
			() => {
				console.log('chat window close');
			}
		);
	}

	public get messages(): any {
		return this.chatService.messages;
	}

}
