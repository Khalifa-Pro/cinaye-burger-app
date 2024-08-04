import { Component } from '@angular/core';
import { LigneCommande } from '../../Models/LigneCommande';
import { CommandesService } from '../../Services/commandes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-commandes-annulees',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './commandes-annulees.component.html',
  styleUrl: './commandes-annulees.component.css'
})
export class CommandesAnnuleesComponent {

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
