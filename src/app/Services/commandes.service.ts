import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Urls } from '../Constantes/Urls';
import { Commande } from '../Models/Commande';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandesService {

  constructor(private http: HttpClient) { }

  /**
   * commander
   *id: number
  */
  public commander(commande: Commande, id: number): Observable<Commande> {
    const url = `${Urls.COMMANDER_BURGERS}${id}`;
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<Commande>(url, commande, { headers: headers, responseType: 'Commande' as 'json' });
  }
}
