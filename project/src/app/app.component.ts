import { Component } from '@angular/core';
import { HomePage } from './home/home.page';
import { PaperRequestPage } from './paper-request/paper-request.page';
import { PaperRequestHistoryPage } from './paper-request-history/paper-request-history.page';
import { Router } from '@angular/router';
import { SeConnecterPage } from './se-connecter/se-connecter.page';
import { LogoutPage } from './logout/logout.page';
import { NotificationService } from './services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  user_infos: any;
  appPages: any = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Se connecter', url: '/se-connecter', icon: 'wifi' },
  ];
  notifCount: any = '';
  constructor(private route: Router, private notificationService: NotificationService) { }

  ngOnInit() {
    this.user_infos = localStorage.getItem("user_infos");

    this.route.events.subscribe((val: any) => {
      //set count of notif
      this.notificationService.getNotificationCount().subscribe((data: any) => {
        this.notifCount = data["count"];
      });
      //
      if (val.url) {
        if (val.url == '/logout') {
          localStorage.setItem("token", '');
          localStorage.setItem("user_infos", '');
          this.route.navigateByUrl("/se-connecter");
        }

      }
      if (localStorage.getItem("token") && localStorage.getItem("token") != '' && localStorage.getItem("token") != null) {
        // this.isConnected = true;
        this.appPages = [
          { title: 'Home', url: '/home', icon: 'home' },
          { title: 'Faire une demande', url: '/paper-request', icon: 'send' },
          { title: 'Historique', url: '/paper-request-history', icon: 'list' },
          { title: 'Feed-back', url: '/feed-back-message', icon: 'chatbubble-ellipses' },
          { title: 'Notification ' + this.notifCount, url: '/notification', icon: 'notifications' },
          { title: 'Se déconnecter', url: '/logout', icon: 'exit' },
        ];
      } else {
        this.appPages = [
          { title: 'Home', url: '/home', icon: 'home' },
          { title: 'Se connecter', url: '/se-connecter', icon: 'log-in' },
        ];
      }
      // }
    });
    // 
  }

  logout() {
    localStorage.setItem("token", '');
    localStorage.setItem("user_infos", '');
    // this.isConnected = false;
    this.route.navigateByUrl("/se-connecter");
  }
}
