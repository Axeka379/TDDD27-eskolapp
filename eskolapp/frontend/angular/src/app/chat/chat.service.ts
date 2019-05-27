import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs/Rx";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WebsocketService } from "../websocket.service";
import { DataService } from '../data.service';
import { Server } from './server';
import { User } from './user';
import { Message } from './message';


@Injectable()
export class ChatService {
	//private servers: [Server] = [];
	//private users: [User] = [];

	private user: User;

	public serverList: any = [];
	public selectedServerId: any;

	public messageList: any; // <Message>
	private messageSubject: Subject<any>;


	constructor(
		private socket: WebsocketService,
		private data: DataService,
		private http: HttpClient,
	) {
		this.messageList = {};

		this.messageSubject = new Subject<any>();

		this.fetchUserInfo();
	}


	private connectSocket() {
		this.socket.subject.subscribe(
			// Called whenever there is a message from the server.
			(msg) => {
				this.onData(msg);
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
	}

	private fetchUserInfo() {
		this.data.fetchUserInfo().subscribe(
			(result: {'user': any, 'servers': any}) => {
				this.user = new User(result.user);
				console.log(this.user);

				for (let i=0; i<result.servers.length; i++) {
					let server = result.servers[i];
					this.addServer(server);
				}
				this.connectSocket();
			}
		);
	}

	private fetchMessages(serverId) {
		this.data.fetchMessagesFromServer(serverId).subscribe(
			(result: {'messages': any}) => {
				for (let i=0; i<result.messages.length; i++) {
					let message = result.messages[i];
					this.addMessage(new Message(message));
				}
			}
		);
	}

	public addServer(server_data: any) {
		let server = new Server(server_data);
		console.log(server);

		this.serverList.push(server);
		this.messageList[server.id] = [];
		this.fetchMessages(server.id);

		return server;
	}

	private addMessage(message) {
		message.type = "message";
		this.messageList[message.server].push(message);
	}


	public get messages(): any {
		return this.messageList[this.selectedServerId];
	}

	public sendMessage(content: string) {
		/*this.addMessage(
			new Message({
				id: -1,
				server: this.selectedServerId,
				user: this.user.id,
				content: content,
				created: new Date().getTime(),
				updated: new Date().getTime()
			})
		);*/

		this.socket.send({
			"type": "message",
			"server_id": this.selectedServerId,
			"content": content
		});
	}


	private onData(message) {
		let type = message.type;
		console.log(message);

		if (type == 'message') {
			this.addMessage(new Message(message.data));
		}
		else if (type == 'join') {
			console.log('Joined', message.data);
		}
		else if (type == 'leave') {
			console.log('Left', message.data);
		}
	}

}
