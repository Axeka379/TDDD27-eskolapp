import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { UserService } from './user.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

	constructor(public user: UserService) {}

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

		request = request.clone({
			setHeaders: {
				Authorization: `JWT ${this.user.getToken()}`
			}
		});

		return next.handle(request).do((event: HttpEvent<any>) => {
			if (event instanceof HttpResponse) {
				console.log("TokenInterceptor: Success!");
				// do stuff with response if you want
			}
		}, (err: any) => {
			if (err instanceof HttpErrorResponse) {
				if (err.status === 401) {
					console.log("TokenInterceptor: Oof!");
					// redirect to the login route
					// or show a modal
				}
			}
		});
	}
}