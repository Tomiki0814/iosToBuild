import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToolsService } from './tools.service';
import { api_url_spring } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaperRequestService {
  constructor(private https: HttpClient, private toolsService: ToolsService) { }

  getPapersType() {
    const options = this.toolsService.formOption();
    return this.https.get(api_url_spring + 'papier', options);
  }

  requestPaper(input: any) {
    const options = this.toolsService.formOption();
    return this.https.post(api_url_spring + 'demande', input, options);
  }

  getPaperRequestHistory(id: number) {
    const options = this.toolsService.formOption();
    return this.https.get(api_url_spring + 'demande/history/' + id, options);
  }
}
