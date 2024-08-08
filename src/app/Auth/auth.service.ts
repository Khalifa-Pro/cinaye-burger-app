import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/User';
import { Urls } from '../Constantes/Urls';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  /***
   * Inscription
   */
  register(user: User) {
    return this.http.post(`${Urls.REGISTER}`,user);
  }

  /***
   * Connexion
  */
  login(user: User) {
    return this.http.post(`${Urls.LOGIN}`, user)
      .pipe(tap((result) => {
        localStorage.setItem('authUser', JSON.stringify(result));
      }));
  }

  /***
   * Deconnecter
   */
  logout() {
    localStorage.removeItem('authUser');
  }

  /***
   * User authentifié
   */
  isLoggedIn() {
    return localStorage.getItem('authUser') !== null;
  }

}
