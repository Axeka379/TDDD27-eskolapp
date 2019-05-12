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

	public selectedServerId: any;

	constructor(private chatService: ChatService, private route: ActivatedRoute) {
		this.selectedServerId = 1;

		/*this.router.events.subscribe(
			(event) => {
				if(event instanceof NavigationEnd){
					console.log(event.id);
				}
				this.route.params.subscribe(
					params => this.user$ = params.id
				)
			}
		);*/
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
		return this.chatService.messageList[this.selectedServerId];
	}

}
