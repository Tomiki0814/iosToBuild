import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule, Platform } from '@ionic/angular';
import { DataService, Message } from '../services/data.service';
import { NewsService } from '../services/news.service';
import { New } from '../models/new.model';

@Component({
  selector: 'app-new-detail',
  templateUrl: './new-detail.page.html',
  styleUrls: ['./new-detail.page.scss'],
})
export class NewDetailPage implements OnInit {
  private platform = inject(Platform);
  private activatedRoute = inject(ActivatedRoute);

  new: New = {
    id: '0',
    titre: 'Pas de nouvel',
    paragraphes: 'Bonjour, pas de nouvel'
  };
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    // New
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.newsService.getNew(id).subscribe((data: any) => {
      this.new.id = data["_id"];
      this.new.titre = data["titre"];
      this.new.paragraphes = data["paragraphes"].join("");
    });
  }

}
