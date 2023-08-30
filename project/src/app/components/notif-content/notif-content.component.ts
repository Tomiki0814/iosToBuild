import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notif-content',
  templateUrl: './notif-content.component.html',
  styleUrls: ['./notif-content.component.scss'],
})
export class NotifContentComponent implements OnInit {
  @Input() notification?: any;
  constructor() { }

  ngOnInit() { }

}
