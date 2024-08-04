import { Component } from '@angular/core';
import { LigneCommande } from '../../Models/LigneCommande';
import { CommandesService } from '../../Services/commandes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-annuler-commande',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './annuler-commande.component.html',
  styleUrl: './annuler-commande.component.css'
})
export class AnnulerCommandeComponent {
  commandes: Array<LigneCommande>;

  constructor(
    private serviceCommande: CommandesService
  ) { }
  

  ngOnInit(): void {
    this.listeCommandesAnnulees();
  }

  /***
   * Liiste burgers
   */
  listeCommandesAnnulees(): void {
    this.serviceCommande.commandesAnnulees()
        .subscribe({
          next: (data)=>{
            this.commandes = data;
          },
          error: (error)=>{

          }
    })
  }
}
