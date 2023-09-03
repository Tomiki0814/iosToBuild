import { Component, OnInit } from '@angular/core';
import { Notification } from '../models/notification.model';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  notifications: Notification[] = [];
  spinner: boolean = true;

  constructor(private notificationService: NotificationService) { }

  getDate(date: string) {
    let dateSplit = date.split('-');

    return dateSplit[2] + '-' + dateSplit[1] + '-' + dateSplit[0];
  }

  ngOnInit() {
    this.notificationService.getNotificationList().subscribe((data: any) => {
      this.spinner = false;
      data.forEach((item: any) => {
        this.notifications.push({
          libelle: item["libelle"],
          date: this.getDate(item["date"].split('T')[0]),
        });
      });
      // update status notif
      this.notificationService.updateStatusNotification().subscribe((data: any) => {

      });
      //
    });
  }

}
