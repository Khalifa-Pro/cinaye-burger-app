import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Urls } from '../Constantes/Urls';
import { Observable } from 'rxjs';
import { LigneCommande } from '../Models/LigneCommande';

@Injectable({
  providedIn: 'root'
})
export class CommandesService {

  constructor(private http: HttpClient) { }

  /**
   * commander
   *id: number
  */
  public commander(commande: LigneCommande, id: number): Observable<LigneCommande> {
    const url = `${Urls.COMMANDER_BURGERS}${id}`;
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<LigneCommande>(url, commande, { headers: headers, responseType: 'Commande' as 'json' });
  }

  /***
   * liste des commandes
   */
  public commandes(){
    return this.http.get<Array<LigneCommande>>(Urls.LISTE_COMMANDES);
  }

  /**
   * valider commande
   *id: number   
   */
  public valider(id: number) {
      // Concaténer l'ID à l'URL de base
    const url = `${Urls.VALIDER_COMMANDE}${id}`;
    // Envoyer une requête POST avec un corps vide
    return this.http.post(url, {});
  }

  /**
   * annuler commande
   *id: number   
   */
   public annuler(id: number) {
    // Concaténer l'ID à l'URL de base
  const url = `${Urls.ANNULER_COMMANDE}${id}`;
  // Envoyer une requête POST avec un corps vide
  return this.http.post(url, {});
}


}
