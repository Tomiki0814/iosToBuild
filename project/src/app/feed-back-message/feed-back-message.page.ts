import { Component, OnInit } from '@angular/core';
import { FeedBackService } from '../services/feed-back.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed-back-message',
  templateUrl: './feed-back-message.page.html',
  styleUrls: ['./feed-back-message.page.scss'],
})
export class FeedBackMessagePage implements OnInit {
  commentaire: string = "";
  message: any = "";
  spinner: boolean = false;

  constructor(private route: Router, private feedBackService: FeedBackService) { }

  ngOnInit() {
  }

  send() {
    this.spinner = true;
    const success = (response: any) => {
      this.message = "";
      // this.route.navigateByUrl("/feed-back-message-list");
      this.route.navigateByUrl("/home");
    }

    const error = (response: any) => {
      this.message = response["error"]["message"];
    }

    try {
      if (this.commentaire == '') {
        this.message = "Veuillez compléter les informations manquantes";
      } else {
        this.feedBackService.sendFeedBack({
          "commentaire": this.commentaire
        }).subscribe(success, error);
      }

    } catch (err) {
      this.message = "Exception : " + err;
    } finally {
      this.commentaire = '';
      this.spinner = false;
    }

  }
}
