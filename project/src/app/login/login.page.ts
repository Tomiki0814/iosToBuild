import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { userConnected } from 'src/environments/environment';
import { ToolsService } from '../services/tools.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: any = 'onjampandresenatsiorinanahary@gmail.com';
  password: any = 'test';
  message: any = '';
  constructor(private userService: UserService, private route: Router) { }

  ngOnInit() {
  }

  login() {
    const input = {
      email: this.email,
      password: this.password
    }

    const success = (response: any) => {
      this.message = "Ok";
      /*userConnected.id = response["id"];
      userConnected.token = response["jwttoken"];
      userConnected.nom = response["nom"];
      userConnected.prenom = response["prenom"];
      userConnected.email = response["email"];*/
      userConnected.token = response["jwttoken"];
      localStorage.setItem("token", response["jwttoken"]);

      this.email = "";
      this.password = "";
      this.route.navigateByUrl("/home");
    }

    const error = (response: any) => {
      this.message = response["message"];
    }

    try {
      this.userService.login(input).subscribe(success, error);
    } catch (err) {
      this.message = err;
    } finally {

    }
  }
}



