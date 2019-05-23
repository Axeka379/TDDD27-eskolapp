export class Message {
	private _id: number;
	private _server: number;
	private _user: number;
	private _content: string;
	private _created: number;
	private _updated: number;

	constructor(message: { id:number, server:number, user:number, content:string, created:number, updated:number }) {
		this._id = message.id;
		this._server = message.server;
		this._user = message.user;
		this._content = message.content;
		this._created = message.created;
		this._updated = message.updated;
	}


	public get id() {
		return this._id;
	}

	public get server() {
		return this._server;
	}

	public get user() {
		return "Name#" + this._user;
	}

	public get content() {
		return this._content;
	}

	public get created() {
		return this._created;
	}

	public get updated() {
		return this._updated;
	}


	public get image() {
		let url = `http://identicon.org/?t=${this._user}&s=256`;
		return url;
	}
}
