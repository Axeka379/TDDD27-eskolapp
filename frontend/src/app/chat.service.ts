import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs/Rx";
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WebsocketService } from "./websocket.service";

export interface Message {
	author: string;
	message: string;
}

@Injectable()
export class ChatService {
	public rootUrl: string = "http://localhost:8000";

	public serverList: any[] = [];
	public selectedServerId: any;

	public messageList: any; // <Message>
	private messageSubject: Subject<any>;


	constructor(
		private wsService: WebsocketService,
		private route: ActivatedRoute,
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

		this.route.params.subscribe(
			(params) => {
				this.selectedServerId = params.server_id;
			}
		);


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
		//this.http.defaults.xsrfCookieName = 'csrftoken';
		//this.http.defaults.xsrfHeaderName = 'X-CSRFToken';

		let token = localStorage.getItem('token');

		let data = {
			server_id: 1,
			test: "yes",
			token: token,
			csrfmiddlewaretoken: token
		};

		var headers_object = new HttpHeaders();
		headers_object.append('Content-Type', 'application/json');
		headers_object.append("Authorization", "Token " + token);
		headers_object.append("Authorization", "Bearer " + token);

		const httpOptions = {
			headers: headers_object
		};

		this.http.get(this.rootUrl + '/user/')
		.subscribe(
			result => {
				console.log('yay', result)
			}
		);

		/*
		this.http.post(
			this.rootUrl + '/fetch_server_users/',
			JSON.stringify(data)
		)
		.subscribe(
			result => {
				console.log('fetch_server_users', result)
			},
			error => {
				console.warn('fetch_server_users', error);
			}
		);
		*/

		/*
		var res = this.http.post(
			this.rootUrl + '/fetch_server_users/',
			data,
			httpOptions)
		.subscribe(
			res => {
				console.log("Success!", res)
				return res;
			},
			error => {console.warn(error);}
		)*/
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