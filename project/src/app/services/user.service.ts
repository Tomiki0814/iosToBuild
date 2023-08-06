import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api_url_spring } from 'src/environments/environment';
import { ToolsService } from './tools.service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private https: HttpClient, private toolsService: ToolsService) { }

  register(input: User) {
    const options = this.toolsService.formOption();
    return this.https.post(api_url_spring + 'register', input, options);
  }

  login(input: any) {
    const options = this.toolsService.formOption();
    return this.https.post(api_url_spring + 'login', input, options);
  }

  logout() {
    localStorage.setItem("token", JSON.stringify(null));
  }
}
