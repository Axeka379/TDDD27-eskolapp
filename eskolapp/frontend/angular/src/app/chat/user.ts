export class User {
	public id: number;
	public username: string;
	public first_name: string;
	public last_name: string;

	constructor(user: { id:number, username:string, first_name:string, last_name:string }) {
		this.id = user.id;
		this.username = user.username;
		this.first_name = user.first_name;
		this.last_name = user.last_name;
	}

	public get name() {
		return this.username;
	}
}
