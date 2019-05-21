import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class DataService {

	constructor(private http: HttpClient) {}

	getUsers() {
		return this.http.get('https://jsonplaceholder.typicode.com/users')
	}

	getUser(userId) {
		return this.http.get('https://jsonplaceholder.typicode.com/users/' + userId)
	}

	getPosts() {
		return this.http.get('https://jsonplaceholder.typicode.com/posts')
	}


	createServer(name) {
		let httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json',
			})
		};

		this.http.post(
			'/create_new_server/',
			{server_name: name},
			httpOptions)
		.subscribe(
			result => {
				console.log("/fetch_server_users/ success:", result);
			},
			error => {
				console.warn(error);
			}
		);
	}
}
