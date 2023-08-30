import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-back-message-list-content',
  templateUrl: './feed-back-message-list-content.component.html',
  styleUrls: ['./feed-back-message-list-content.component.scss'],
})
export class FeedBackMessageListContentComponent implements OnInit {
  @Input() feedback?: any;
  constructor() { }

  ngOnInit() { }

}
