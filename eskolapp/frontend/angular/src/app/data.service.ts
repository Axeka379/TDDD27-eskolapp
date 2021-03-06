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

	register(form) {
		console.log({ 'username': form.username, 'password': form.password1 },);
		return this.http.post(
			'/register/',
			{ 'username': form.username, 'password': form.password1, 'email': form.email },
			this.httpOptions
		);
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

	createServerInvite(server_id) {
		return this.http.post(
			'/create_server_invite/',
			{ server_id },
			this.httpOptions
		);
	}

	joinServer(key) {
		return this.http.post(
			'/join_server/',
			{ key },
			this.httpOptions
		);
	}

	leaveServer(server_id) {
		return this.http.post(
			'/leave_server/',
			{ server_id },
			this.httpOptions
		);
	}

	deleteServer(server_id) {
		return this.http.post(
			'/delete_server/',
			{ server_id },
			this.httpOptions
		);
	}

}
