import { Component } from '@angular/core';
import { HomePage } from './home/home.page';
import { PaperRequestPage } from './paper-request/paper-request.page';
import { PaperRequestHistoryPage } from './paper-request-history/paper-request-history.page';
import { Router } from '@angular/router';
import { SeConnecterPage } from './se-connecter/se-connecter.page';
import { LogoutPage } from './logout/logout.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  // isConnected: boolean = false;
  user_infos: any;
  appPages: any = [
    { title: 'Home', url: '/home', icon: 'home', component: HomePage },
    { title: 'Se connecter', url: '/se-connecter', icon: 'wifi', component: SeConnecterPage },
  ];
  constructor(private route: Router) {
    console.log("MANDALO constructor")
    if (localStorage.getItem("token") != '') {
      // this.isConnected = true;
      this.appPages = [
        { title: 'Home', url: '/home', icon: 'home', component: HomePage },
        { title: 'Faire une demande', url: '/paper-request', icon: 'send', component: PaperRequestPage },
        { title: 'Historique', url: '/paper-request-history', icon: 'list', component: PaperRequestHistoryPage },
        { title: 'Se déconnecter', url: '/logout', icon: 'wifi', component: LogoutPage },
      ];
    }
  }

  ngOnInit() {
    console.log("MANDALO ngOnInit")
    this.user_infos = localStorage.getItem("user_infos");
  }

  logout() {
    localStorage.setItem("token", '');
    localStorage.setItem("user_infos", '');
    // this.isConnected = false;
    this.route.navigateByUrl("/se-connecter");
  }
}
