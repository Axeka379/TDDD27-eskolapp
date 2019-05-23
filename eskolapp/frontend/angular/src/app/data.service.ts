import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class DataService {
	httpOptions: object;

	constructor(private http: HttpClient) {
		this.httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json',
			})
		};
	}


	authToken(username, password) {
		return this.http.post<{token:string}>(
			'/api-token-auth/',
			{ username, password },
			this.httpOptions
		);
	}

	verifyToken() {
		return this.http.post<{token:string}>(
			'/api-token-verify/',
			{ token: localStorage.getItem("token") },
			this.httpOptions
		)
	}

	refreshToken() {
		this.http.post<{token:string}>(
			'/api-token-refresh/',
			{ token: localStorage.getItem("token") },
			this.httpOptions
		)
		.subscribe(
			result => {
				console.log('/api-token-refresh/ success:', result);
				localStorage.setItem("token", result.token);
			}
		);
	}


	login(username, password) {
		return this.http.post<{token:string}>(
			'/login/',
			{ username, password },
			this.httpOptions
		);
	}

	logout() {
		localStorage.setItem("token", null);
	}

	register() {
		console.log("not implemented yet");
	}

	resetPassword() {
		console.log("not implemented yet");
	}

	changePassword() {
		console.log("not implemented yet");
	}

	deleteAccount() {
		console.log("not implemented yet");
	}


	createServer(server_name) {
		return this.http.post(
			'/create_new_server/',
			{ server_name },
			this.httpOptions
		);
	}

	fetchUserInfo() {
		return this.http.post(
			'/fetch_user_info/',
			{},
			this.httpOptions
		);
	}

	fetchUsersFromServer(server_id) {
		return this.http.post(
			'/fetch_server_users/',
			{ server_id },
			this.httpOptions
		);
	}

	fetchMessagesFromServer(server_id) {
		return this.http.post(
			'/fetch_server_messages/',
			{ server_id },
			this.httpOptions
		);
	}
}
