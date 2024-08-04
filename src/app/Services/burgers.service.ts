import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Urls } from '../Constantes/Urls';
import { Burger } from '../Models/Burger';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BurgersService {

  
  constructor(private http: HttpClient) { }

  /**
   * listeBurgers
   */
  public liste() {
    return this.http.get<Array<Burger>>(Urls.LISTE_BURGERS);
  }

  /**
   * details
   * $id   
   * */
  // details(id: string): Observable<Burger> {
  //   return this.http.get<Burger>(`${Urls.DETAILS_BURGERS}/${id}`);
  // }

  /**
   * Rcettes Journalieres
   */
  public recetteJournaliers() {
    return this.http.get<Array<Burger>>(Urls.RECETTES_JOURNALIERS);
  }

  /**
   * ajouterBurger
   * burger: Burger
   */
  public ajouter(buger: FormData): Observable<any> {
    return this.http.post<Burger>(Urls.AJOUTER_BURGERS,buger);
  }

  /**
   * archiver
   * id:Number   
   * */
  public archiver(id:number) {
    // Concaténer l'ID à l'URL de base
    const url = `${Urls.ARCHIVER_BURGERS}${id}`;
    // Envoyer une requête POST avec un corps vide
    return this.http.post(url, {});
  }

  /**
   * desarchiver
   * id:Number   
  **/
  public desarchiver(id:Number) {
    return this.http.post(Urls.DESARCHIVER_BURGERS,id);
  }

  /**
   * modifier
   *id:Number
  **/
  public modifier(id:Number) {
    return this.http.put(Urls.MODIFIER_BURGERS,id);
  }

}
