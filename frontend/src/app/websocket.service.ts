import { Injectable, Inject } from "@angular/core";
//import * as Rx from "rxjs/Rx";
import { Observable } from "rxjs/Rx";
import { WebSocketSubject } from "rxjs/observable/dom/WebSocketSubject";

//const CHAT_URL = "ws://echo.websocket.org/";
const CHAT_URL = "ws://localhost:8000/ws/chat/test/";

@Injectable()
export class WebsocketService {

	// Subject is an observable and observer to a WebSocket connection
	private _subject: WebSocketSubject<any>;
	private url: string;

	constructor() {}

	public get subject(): WebSocketSubject<any> {
		this.url = CHAT_URL;
		const closed = !this._subject || this._subject.closed;
		if (closed) {
			//this._subject = this.create(this.url);
			this._subject = new WebSocketSubject(this.url);
			console.log("Successfully connected: " + this.url);
		}
		return this._subject;
	}

	/*
	get onMessage$(): Observable<MessageEvent> {
		return this.subject.asObservable();
	}
	*/

	send(data: Object) {
		console.log(this.subject);
		this.subject.next(data);
	}

	/*
	private create(url): Rx.Subject<MessageEvent> {
		let ws = new WebSocket(url);

		let observable = Rx.Observable.create((obs: Rx.Observer<MessageEvent>) => {
			ws.onmessage = obs.next.bind(obs);
			ws.onerror = obs.error.bind(obs);
			ws.onclose = obs.complete.bind(obs);
			return ws.close.bind(ws);
		});
		let observer = {
			next: (data: Object) => {
				if (ws.readyState === WebSocket.OPEN) {
					ws.send(JSON.stringify(data));
				}
			}
		};
		return Rx.Subject.create(observer, observable);
	}
	*/
}