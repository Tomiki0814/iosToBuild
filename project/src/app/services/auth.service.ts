import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;
  constructor() { }
  logIn() {
    console.log("ON SE LOGGE")
    this.loggedIn = true;
  }

  logOut() {
    console.log("ON SE DELOGGE")

    this.loggedIn = false;
  }
}

// théoriquement, on devrait passer en paramètre le login
// et le password, cette méthode devrait faire une requête
// vers un Web Service pour vérifier que c'est ok, renvoyer
// un token d'authentification JWT etc.
// elle devrait renvoyer un Observable etc.