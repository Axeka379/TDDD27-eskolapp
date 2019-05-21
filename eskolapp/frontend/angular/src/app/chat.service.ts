import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs/Rx";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WebsocketService } from "./websocket.service";

export interface Message {
	author: string;
	message: string;
}

@Injectable()
export class ChatService {
	public rootUrl: string = "";

	public serverList: any[] = [];
	public selectedServerId: any;

	public messageList: any; // <Message>
	private messageSubject: Subject<any>;


	constructor(
		private wsService: WebsocketService,
		private http: HttpClient
	) {
		this.messageList = {};

		this.serverList.push({
			id: 1,
			name: 'first server'
		});
		this.messageList[1] = [];
		this.serverList.push({
			id: 2,
			name: 'my new server'
		});
		this.messageList[2] = [];

		this.selectedServerId = 1;


		this.messageSubject = new Subject<any>();

		wsService.subject.subscribe(
			// Called whenever there is a message from the server.
			(msg) => {
				console.log("chat.service received", msg);
				this.onData(msg);
				//this.messageSubject.next("hello");
			},
			// Called if at any point WebSocket API signals some kind of error.
			(err: Event) => {
				console.warn('socket error:', err);
				// reconnect
			},
			// Called when connection is closed (for whatever reason).
			() => {
				console.warn('connection closed');
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

	public postTest() {
		let token = localStorage.getItem('token');

		let data = {
			server_id: 1,
			test: "yes",
			token: token,
			csrfmiddlewaretoken: token
		};

		let httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json',
			})
		};

		this.http.post<{token:string}>(
			this.rootUrl + '/api-token-auth/',
			{ username: "Golen", password: "1234" },
			httpOptions)
		.subscribe(
			result => {
				console.log('/api-token-auth/ success:', result);
				localStorage.setItem("token", result.token);
				// (1) --------

				this.http.post<{token:string}>(
					this.rootUrl + '/api-token-refresh/',
					{ token: localStorage.getItem("token") },
					httpOptions)
				.subscribe(
					result => {
						console.log('/api-token-refresh/ success:', result);
						localStorage.setItem("token", result.token);
						// (2) --------

						this.http.post(
							this.rootUrl + '/fetch_server_users/',
							{ server_id: this.selectedServerId },
							httpOptions)
						.subscribe(
							result => {
								console.log("/fetch_server_users/ success:", result);
							},
							error => {
								console.warn(error);
							}
						);

						// (2) --------
					}
				);

				// (1) --------
			}
		);
	}

	public get messages(): any {
		return this.messageList[this.selectedServerId];
	}

	public get onMessage$(): Observable<MessageEvent> {
		return this.messageSubject.asObservable();
	}

	public sendMessage(message: string) {
		this.wsService.send(
			{
				"type": "message",
				"server_id": this.selectedServerId,
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

		this.messageList[server_id].push({
			type,
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

		this.messageList[server_id].push({
			type,
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

		this.messageList[server_id].push({
			type,
			author,
			msg_id,
			timestamp,
		});
	}
}
