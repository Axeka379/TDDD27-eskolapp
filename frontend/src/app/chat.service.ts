import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs/Rx";
import { WebsocketService } from "./websocket.service";

export interface Message {
	author: string;
	message: string;
}

@Injectable()
export class ChatService {
	public messages: Subject<Message>;
	private messageSubject: Subject<any>;

	constructor(private wsService: WebsocketService) {
		//wsService.connect(CHAT_URL);
		/*
		wsService.onMessage$.subscribe(
			data => {
				console.log(data);
			}
		);*/

		this.messageSubject = new Subject<any>();
		//this.messageSubject.next("hello");

		wsService.subject.subscribe(
			// Called whenever there is a message from the server.
			(msg) => {
				this.messageSubject.next(msg);
			},
			// Called if at any point WebSocket API signals some kind of error.
			(err: Event) => {
				console.log('socket error:', err);
				// reconnect
			},
			// Called when connection is closed (for whatever reason).
			() => {
				console.log('connection closed');
			}
		);

		this.sendMessage("golen", "hello world");
		/*this.messages = <Subject<Message>>wsService.connect(CHAT_URL).map(
			(response: MessageEvent): Message => {
				let data = JSON.parse(response.data);
				return {
					author: data.author,
					message: data.message
				};
			}
		);*/
	}

	public get onMessage$(): Observable<MessageEvent> {
		return this.messageSubject.asObservable();
	}

	public sendMessage(author: string, message: string) {
		this.wsService.send(
			{
				"author": author,
				"message": message
			}
		);
	}

	listenToMessages
}