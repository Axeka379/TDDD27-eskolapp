import { Injectable } from '@angular/core';
import { decode, tokenNotExpired } from 'jwt-decode';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	constructor() { }

	public get token(): string {
		return localStorage.getItem('token');
	}

	public get httpOptions() {
		return {
			headers: new HttpHeaders({
				'Content-Type': 'application/json',
				'Authorization': 'JWT ' + this.token
			})
		}
	}

	public isAuthenticated(): boolean {
		// get the token
		const token = this.token;
		// return a boolean reflecting
		// whether or not the token is expired
		return tokenNotExpired(null, token);
	}
}
