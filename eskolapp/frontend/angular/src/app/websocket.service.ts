import { Injectable, Inject } from "@angular/core";
//import * as Rx from "rxjs/Rx";
import { Observable } from "rxjs/Rx";
import { WebSocketSubject } from "rxjs/observable/dom/WebSocketSubject";
import { UserService } from './auth/user.service';

//const CHAT_URL = "ws://echo.websocket.org/";
const CHAT_URL = "ws://localhost:8000/ws/chat/test/";

@Injectable()
export class WebsocketService {

	// Subject is an observable and observer to a WebSocket connection
	private _subject: WebSocketSubject<any>;
	private url: string;

	constructor(public user: UserService) {}

	public get subject(): WebSocketSubject<any> {
		this.url = CHAT_URL;
		const closed = !this._subject || this._subject.closed;
		if (closed) {
			//this._subject = this.create(this.url);
			this._subject = new WebSocketSubject({
				url: this.url,
				protocol: ['JWT', `${this.user.token}`]
			});
			console.log("Connected!");
		}
		return this._subject;
	}

	send(data: Object) {
		this.subject.next(data);
	}
}