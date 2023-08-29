import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { Region } from '../models/region.model';
import { District } from '../models/district.model';
import { Commune } from '../models/commune.model';

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
  // new field
  idRegion: number = 0;
  regions: Region[] = [];

  idDistrict: number = 0;
  districts: District[] = [];

  idCommune: number = 0;
  communes: Commune[] = [];

  sexe: string = '';
  adresse: string = '';
  telephone: string = '034 XX XXX XX'; // atao +261 
  cin: string = '0000 - 0000 - 0000';
  // new field

  message: any = '';

  constructor(private userService: UserService, private route: Router) { }

  ngOnInit() {
    // regions
    this.userService.getAllRegion().subscribe((data: any) => {
      data.forEach((item: any) => {
        this.regions.push({
          id: item.id,
          nom: item.nom
        });
      });
    });
    // 
    // districts
    this.userService.getDistrictByIdRegion(11).subscribe((data: any) => {
      data.forEach((item: any) => {
        this.districts.push({
          id: item.id,
          nom: item.nom
        });
      });
    });
    // 
    // communes
    this.userService.getCommuneByIdDistrict(101).subscribe((data: any) => {
      data.forEach((item: any) => {
        this.communes.push({
          id: item.id,
          nom: item.nom
        });
      });
    });
    //
  }

  // handleChangeRegion 
  handleChangeRegion() {
    this.districts = [];
    this.userService.getDistrictByIdRegion(this.idRegion).subscribe((data: any) => {
      data.forEach((item: any) => {
        this.districts.push({
          id: item.id,
          nom: item.nom
        });
      });
    });
  }

  // handleChangeDistrict 
  handleChangeDistrict() {
    this.communes = [];
    this.userService.getCommuneByIdDistrict(this.idDistrict).subscribe((data: any) => {
      data.forEach((item: any) => {
        this.communes.push({
          id: item.id,
          nom: item.nom
        });
      });
    });
  }

  register() {
    const input = {
      nom: this.nom,
      prenom: this.prenom,
      dateNaissance: this.dateNaissance,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword,
      // new field
      sexe: this.sexe,
      adresse: this.adresse,
      telephone: this.telephone,
      cin: this.cin,
      commune: {
        id: this.idCommune
      }
    }

    const success = (response: any) => {
      this.message = "";

      localStorage.setItem("token", response["jwttoken"]);
      localStorage.setItem("user_infos", response["prenom"] + " " + response["nom"]);

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
      this.userService.register(input).subscribe(success, error);
    } catch (err) {
      this.message = err;
    } finally {

    }
  }

}
