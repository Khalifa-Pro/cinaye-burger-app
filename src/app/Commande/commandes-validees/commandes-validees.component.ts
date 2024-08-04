import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LigneCommande } from '../../Models/LigneCommande';
import { CommandesService } from '../../Services/commandes.service';

@Component({
  selector: 'app-commandes-validees',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './commandes-validees.component.html',
  styleUrl: './commandes-validees.component.css'
})
export class CommandesValideesComponent {

  commandes: Array<LigneCommande>;

  constructor(
    private serviceCommande: CommandesService
  ) { }
  

  ngOnInit(): void {
    this.listeCommandesValidees();
  }

  /***
   * Liiste burgers
   */
  listeCommandesValidees(): void {
    this.serviceCommande.commandesValidees()
        .subscribe({
          next: (data)=>{
            this.commandes = data;
          },
          error: (error)=>{

          }
    })
  }

}
