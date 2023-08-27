import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToolsService } from './tools.service';
import { api_url_springsecurity } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaperRequestService {
  constructor(private https: HttpClient, private toolsService: ToolsService) { }

  getPapersType() {
    const options = this.toolsService.formOptionWithSecurity();
    return this.https.get(api_url_springsecurity + 'papier', options);
  }

  requestPaper(input: any) {
    const options = this.toolsService.formOptionWithSecurity();
    return this.https.post(api_url_springsecurity + 'demande', input, options);
  }

  getPaperRequestHistory() {
    const options = this.toolsService.formOptionWithSecurity();
    return this.https.get(api_url_springsecurity + 'demande/history', options);
  }

  getPaperQrCode(id: string) {
    const options = this.toolsService.formOptionWithSecurity();
    return this.https.get(api_url_springsecurity + 'demande/' + id, options);
  }
}
