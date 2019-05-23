import { User } from './user';
import { Message } from './message';

export class Server {
	public id: number;
	public name: string;
	public owner: number;
	public created: number;

	public users: [User];
	public messages: [Message];

	constructor(server: { id:number, name:string, owner:number, created:number }) {
		this.id = server.id;
		this.name = server.name;
		this.owner = server.owner;
		this.created = server.created;
	}
}
