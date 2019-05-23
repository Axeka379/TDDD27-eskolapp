import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateRoomFormComponent } from '../create-room-form/create-room-form.component';
import { LoginComponent } from '../auth/login/login.component';
import { SignupComponent } from '../auth/signup/signup.component';
import { LogoutComponent } from '../auth/logout/logout.component';
import { ChatService } from "../chat/chat.service";
import { DataService } from '../data.service';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

	currentUrl: string;

	constructor(
		private router: Router,
		private modalService: NgbModal,
		private chat: ChatService,
		private data: DataService
	) {
		router.events
			.pipe( filter( e => e instanceof NavigationEnd ) )
			.subscribe( (event: NavigationEnd) => {
				this.currentUrl = event.url;
			}
		);
	}

	ngOnInit() {}

	private get serverList(): any {
		return this.chat.serverList;
	}


	openCreateRoomModal() {
		this.modalService.open(CreateRoomFormComponent);
	}

	openLoginModal() {
		this.modalService.open(LoginComponent);
	}

	openSignupModal() {
		this.modalService.open(SignupComponent);
	}

	openLogoutModal() {
		this.modalService.open(LogoutComponent);
	}


	test() {
		this.data.createServerInvite(this.chat.selectedServerId).subscribe(
			result => { console.log('createServerInvite', result); },
			error => { console.warn(error); }
		);
	}
}
