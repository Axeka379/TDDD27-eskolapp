import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class DataService {

	constructor(private http: HttpClient) {}

	getUsers() {
		return this.http.get('https://jsonplaceholder.typicode.com/users')
	}

	getUser(userId) {
		return this.http.get('http://localhost:8000/live/fetch_server_users' + userId)
	}

	getPosts() {
		return this.http.get('https://jsonplaceholder.typicode.com/posts')
	}

	createServer() {
		return this.http.get('http://localhost:8000/chat')
	}
}
