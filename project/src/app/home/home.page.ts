import { Component, inject } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { NewsService } from '../services/news.service';
import { New } from '../models/new.model';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { userConnected } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  news: New[] = [];
  connexionButtonLabel: string = 'Se connecter';

  constructor(private newsService: NewsService, private userService: UserService, private route: Router) { }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  ngOnInit() {
    // log userConnected
    console.log("userConnected object ===> ", userConnected)
    console.log("token ===> ", localStorage.getItem("token"))
    // 
    // if (localStorage.getItem("token") !== null) {
    //   this.connexionButtonLabel = 'Se déconnecter';
    // }
    // News
    this.newsService.getNews().subscribe((data: any) => {
      console.log("News ===> ", data);
      data.forEach((item: any) => {
        this.news.push({
          id: item["_id"],
          titre: item["titre"],
          paragraphes: item["paragraphes"].join(""),
        });
      });
    });
    // 
  }

  connexionButtonAction() {
    if (this.connexionButtonLabel == 'Se déconnecter') {
      this.userService.logout();
      this.connexionButtonLabel = 'Se connecter';
    } else {
      this.route.navigateByUrl("/se-connecter");
    }
  }
}
