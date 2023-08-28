import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api_url_springsecurity } from 'src/environments/environment';
import { ToolsService } from './tools.service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private https: HttpClient, private toolsService: ToolsService) { }

  register(input: User) {
    const options = this.toolsService.formOption();
    return this.https.post(api_url_springsecurity + 'register', input, options);
  }

  login(input: any) {
    const options = this.toolsService.formOption();
    return this.https.post(api_url_springsecurity + 'login', input, options);
  }

  // params data
  getAllRegion() {
    const options = this.toolsService.formOption();
    return this.https.get(api_url_springsecurity + 'utils/region', options);
  }

  getDistrictByIdRegion(idRegion: number) {
    const options = this.toolsService.formOption();
    return this.https.get(api_url_springsecurity + 'utils/district/' + idRegion, options);
  }

  getCommuneByIdDistrict(idDistrict: number) {
    const options = this.toolsService.formOption();
    return this.https.get(api_url_springsecurity + 'utils/commune/' + idDistrict, options);
  }
  // 
}
