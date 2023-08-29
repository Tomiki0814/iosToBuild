import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor() { }

  formOption() {
    const options = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    return options;
  }

  formOptionWithSecurity() {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
    };
    return options;
  }
}
