import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs/Rx";
import { WebsocketService } from "./websocket.service";

export interface Message {
	author: string;
	message: string;
}

@Injectable()
export class ChatService {
	public serverList: string[] = [];
	public selectedServer: string;

	public messageList: any[] = []; // <Message>
	private messageSubject: Subject<any>;


	constructor(private wsService: WebsocketService) {
		this.serverList.push("Server 1");
		this.serverList.push("My Thing");
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
				this.onData(msg);
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

	public sendMessage(message: string) {
		this.wsService.send(
			{
				"type": "message",
				"content": message
			}
		);
	}


	// TODO: Move to service?
	private getUserName(user_id) {
		return "Name#" + user_id;
	}
	private getUserImage(user_id) {
		let url = "http://identicon.org/?t={id}&s=256";
		url = url.replace("{id}", user_id);
		//url = url.replace("{size}", Math.max(element.width, element.height));
		return url;
	}

	private onData(message) {
		let type = message.type;
		if (type == 'message') {
			this.onMessage(message);
		}
		else if (type == 'join') {
			this.onJoin(message);
		}
		else if (type == 'leave') {
			this.onLeave(message);
		}
	}

	private onMessage(message) {
		let type = message.type;
		let server_id = message.server_id;
		let author = this.getUserName(message.user_id);
		let msg_id = message.msg_id;
		let timestamp = message.timestamp;
		let content = message.content || "<content>";

		let image = this.getUserImage(message.user_id);

		this.messageList.push({
			type,
			server_id,
			author,
			msg_id,
			image,
			timestamp,
			content,
		});
	}

	private onJoin(message) {
		let type = message.type;
		let server_id = message.server_id;
		let author = this.getUserName(message.user_id);
		let msg_id = message.msg_id;
		let timestamp = message.timestamp;

		this.messageList.push({
			type,
			server_id,
			author,
			msg_id,
			timestamp,
		});
	}

	private onLeave(message) {
		let type = message.type;
		let server_id = message.server_id;
		let author = this.getUserName(message.user_id);
		let msg_id = message.msg_id;
		let timestamp = message.timestamp;

		this.messageList.push({
			type,
			server_id,
			author,
			msg_id,
			timestamp,
		});
	}
}