import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToolsService } from './tools.service';
import { api_url_springsecurity } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private https: HttpClient, private toolsService: ToolsService) { }

  getNotificationList() {
    const options = this.toolsService.formOptionWithSecurity();
    return this.https.get(api_url_springsecurity + 'notification/list', options);
  }

  getNotificationCount() {
    const options = this.toolsService.formOptionWithSecurity();
    return this.https.get(api_url_springsecurity + 'notification/news', options);
  }
  // temp
  updateStatusNotification() {
    const options = this.toolsService.formOptionWithSecurity();
    return this.https.put(api_url_springsecurity + 'notification/', null, options);
  }
}
