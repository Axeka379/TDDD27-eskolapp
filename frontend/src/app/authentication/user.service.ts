import { Injectable } from '@angular/core';
import { decode, tokenNotExpired } from 'jwt-decode';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	constructor() { }

	public getToken(): string {
		return localStorage.getItem('token');
	}

	public isAuthenticated(): boolean {
		// get the token
		const token = this.getToken();
		// return a boolean reflecting 
		// whether or not the token is expired
		return tokenNotExpired(null, token);
	}
}