import { Component, OnInit } from '@angular/core';
import { ChatService } from "../chat.service";
import { WebsocketService } from "../websocket.service";

@Component({
	selector: 'app-chat-window',
	templateUrl: './chat-window.component.html',
	styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {

	messages: any[];

	constructor(private chatService: ChatService) {
		this.messages = this.chatService.messageList;
	}

	ngOnInit() {
		this.chatService.onMessage$.subscribe(
			// Called whenever there is a message from the chat service.
			(msg) => {
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

	public sendMessage(msg) {
		console.log('yay', msg);
		//console.log("new message from client to websocket: ", this.message);
		//this.chatService.messages.next(this.message);
		//this.message.message = "";
	}

}
