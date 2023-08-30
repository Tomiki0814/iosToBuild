import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-back-message',
  templateUrl: './feed-back-message.page.html',
  styleUrls: ['./feed-back-message.page.scss'],
})
export class FeedBackMessagePage implements OnInit {

  text: string = "";

  constructor() { }

  ngOnInit() {
  }

  send() {

  }
}
