import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { ToolsService } from '../services/tools.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: any = '';
  password: any = '';
  message: any = '';
  spinner: boolean = false;

  constructor(private userService: UserService, private route: Router) { }

  ngOnInit() {
  }

  login() {
    this.spinner = true;
    const input = {
      email: this.email,
      password: this.password
    }

    const success = (response: any) => {
      this.message = "Ok";

      localStorage.setItem("token", response["jwttoken"]);

      localStorage.setItem("user_infos", response["prenom"] + " " + response["nom"]);
      this.email = "";
      this.password = "";
      this.route.navigateByUrl("/home");
    }

    const error = (response: any) => {
      this.message = response["error"]["message"];
    }

    try {
      this.userService.login(input).subscribe(success, error);
    } catch (err) {
      this.message = err;
    } finally {
      this.spinner = false;
    }
  }
}



