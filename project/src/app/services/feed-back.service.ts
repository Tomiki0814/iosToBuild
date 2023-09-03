import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToolsService } from './tools.service';
import { api_url_springsecurity } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeedBackService {

  constructor(private https: HttpClient, private toolsService: ToolsService) { }

  getFeedBackMessageList() {
    const options = this.toolsService.formOptionWithSecurity();
    return this.https.get(api_url_springsecurity + 'feedback', options);
  }

  sendFeedBack(input: any) {
    const options = this.toolsService.formOptionWithSecurity();
    return this.https.post(api_url_springsecurity + 'feedback', input, options);
  }
}
