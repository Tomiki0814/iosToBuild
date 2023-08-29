import { Component, inject } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { NewsService } from '../services/news.service';
import { New } from '../models/new.model';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  news: New[] = [];
  spinner: boolean = true;
  isConnected: boolean = false;

  constructor(private newsService: NewsService, private userService: UserService, private route: Router) { }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  ngOnInit() {

    if (localStorage.getItem("token") != '') {
      this.isConnected = true;
    }

    // News
    this.newsService.getNews().subscribe((data: any) => {
      this.spinner = false;
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

}
