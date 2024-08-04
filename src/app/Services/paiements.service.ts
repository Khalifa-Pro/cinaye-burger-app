import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Urls } from '../Constantes/Urls';
import { Paiement } from '../Models/Paiement';

@Injectable({
  providedIn: 'root'
})
export class PaiementsService {

  constructor(private http: HttpClient) { }

  /**
   * paiements
   */
  public paiements() {
    return this.http.get<Array<Paiement>>(Urls.LISTE_PAIMENTS);
  }

  /**
   * payer
   *id: number
   */
  public payer(id: number) {
    const url = `${Urls.PAYER_COMMANDE}${id}`;
  // Envoyer une requête POST avec un corps vide
    return this.http.post(url, {});
  }

  /**
   * bilan
   */
  public bilan() {
    return this.http.get<any>(Urls.BILAN_JOUNALIER);
  }

}
