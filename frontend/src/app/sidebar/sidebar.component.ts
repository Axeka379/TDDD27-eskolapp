import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  currentUrl: string;


  constructor(private router: Router) {
    router.events
      .pipe( filter( e => e instanceof NavigationEnd ) )
      .subscribe( (event: NavigationEnd) => {
        this.currentUrl = event.url;
      }
    );
  }

  ngOnInit() {
  }

}
