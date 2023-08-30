import { Component, OnInit } from '@angular/core';
import { FeedBackMessage } from '../models/feed-back-message';
import { FeedBackService } from '../services/feed-back.service';

@Component({
  selector: 'app-feed-back-message-list',
  templateUrl: './feed-back-message-list.page.html',
  styleUrls: ['./feed-back-message-list.page.scss'],
})
export class FeedBackMessageListPage implements OnInit {
  spinner: boolean = true;
  feedbacks: FeedBackMessage[] = [];

  constructor(private feedBackService: FeedBackService) { }

  ngOnInit() {
    this.feedBackService.getFeedBackMessageList().subscribe((data: any) => {
      this.spinner = false;
      data.forEach((item: any) => {
        this.feedbacks.push({
          commentaire: item["commentaire"],
          status: item["status"],
          statuslibelle: item["statuslibelle"],
        });
      });
    });
  }

}
