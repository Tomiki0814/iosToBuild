import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { userConnected } from 'src/environments/environment';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  nom: string = '';
  prenom: string = '';
  dateNaissance: Date = new Date();
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  message: any = '';

  constructor(private userService: UserService, private route: Router) { }

  ngOnInit() {
  }

  register() {
    const input = {
      nom: this.nom,
      prenom: this.prenom,
      dateNaissance: this.dateNaissance,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
    }

    const success = (response: any) => {
      this.message = "Ok";
      console.log("Response data ===> ", response);
      userConnected.id = response["id"];
      userConnected.token = response["token"];
      userConnected.nom = response["nom"];
      userConnected.prenom = response["prenom"];
      userConnected.email = response["email"];

      localStorage.setItem("token", response["token"]);

      this.nom = "";
      this.prenom = "";
      this.dateNaissance = new Date();
      this.email = "";
      this.password = "";
      this.confirmPassword = "";
      this.route.navigateByUrl("/home");
    }

    const error = (response: any) => {
      this.message = response["message"];
    }

    try {
      console.log("input ===> ", input)
      this.userService.register(input).subscribe(success, error);
    } catch (err) {
      this.message = err;
    } finally {

    }
  }

}
