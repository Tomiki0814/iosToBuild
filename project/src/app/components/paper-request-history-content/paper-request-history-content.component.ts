import { Component, Input, OnInit, inject } from '@angular/core';
import { Platform } from '@ionic/angular';
import { PaperRequestHistory } from 'src/app/models/paper-request-history.model';

@Component({
  selector: 'app-paper-request-history-content',
  templateUrl: './paper-request-history-content.component.html',
  styleUrls: ['./paper-request-history-content.component.scss'],
})
export class PaperRequestHistoryContentComponent implements OnInit {
  @Input() paperRequestHistoryItem?: PaperRequestHistory;
  constructor() { }

  ngOnInit() { }

}
