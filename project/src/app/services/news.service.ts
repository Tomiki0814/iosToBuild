import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api_url_node } from 'src/environments/environment';
import { ToolsService } from './tools.service';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private https: HttpClient, private toolsService: ToolsService) { }
  getNews() {
    const options = this.toolsService.formOption();
    return this.https.get(api_url_node + 'News', options);
  }

  getNew(id: string) {
    const options = this.toolsService.formOption();
    return this.https.get(api_url_node + 'News/' + id, options);
  }
}
