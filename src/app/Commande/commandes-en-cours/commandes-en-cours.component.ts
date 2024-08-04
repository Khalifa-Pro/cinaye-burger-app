import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LigneCommande } from '../../Models/LigneCommande';
import { CommandesService } from '../../Services/commandes.service';

@Component({
  selector: 'app-commandes-en-cours',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './commandes-en-cours.component.html',
  styleUrl: './commandes-en-cours.component.css'
})
export class CommandesEnCoursComponent {

  commandes: Array<LigneCommande>;

  constructor(
    private serviceCommande: CommandesService
  ) { }
  

  ngOnInit(): void {
    this.listeCommandesEncours();
  }

  /***
   * Liiste burgers
   */
  listeCommandesEncours(): void {
    this.serviceCommande.commandesEnCours()
        .subscribe({
          next: (data)=>{
            this.commandes = data;
          },
          error: (error)=>{

          }
    })
  }

}
