import { Component, OnInit } from '@angular/core';
import { ChatService } from "../chat.service";
import { WebsocketService } from "../websocket.service";

@Component({
	selector: 'app-chat-window',
	templateUrl: './chat-window.component.html',
	styleUrls: ['./chat-window.component.scss'],
	providers: [WebsocketService, ChatService]
})
export class ChatWindowComponent implements OnInit {

	messages: any[] = [];

	constructor(private chatService: ChatService) {
		this.messages = [
			{ author: "Golen", message: "Hello world" },
			{ author: "Golen", message: "This is a test" },
			{ author: "Golen", message: "Exercitation irure elit sit occaecat esse dolore laboris anim labore sed sed nisi elit quis et." },
			{ author: "Golen", message: "A few messages" },
		];

		/*chatService.messages.subscribe(msg => {
			console.log("Response from websocket: " + msg);
		});*/
	}

	ngOnInit() {
		this.chatService.onMessage$.subscribe(
			// Called whenever there is a message from the chat service.
			(msg) => {
				this.messages.push(msg);
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




	/*
	private message = {
		author: "hatibu",
		message: "this is a test message"
	};

	sendMsg() {
		console.log("new message from client to websocket: ", this.message);
		this.chatService.messages.next(this.message);
		this.message.message = "";
	}
	*/

}
