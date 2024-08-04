import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LigneCommande } from '../../Models/LigneCommande';
import { CommandesService } from '../../Services/commandes.service';
import { error } from 'console';

@Component({
  selector: 'app-liste-commandes',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './liste-commandes.component.html',
  styleUrl: './liste-commandes.component.css'
})
export class ListeCommandesComponent {
  commandes: Array<LigneCommande>;

  constructor(
    private serviceCommande: CommandesService
  ) { }
  

  ngOnInit(): void {
    this.listeCommandes();
  }

  /***
   * Liiste burgers
   */
  listeCommandes(): void {
    this.serviceCommande.commandes()
        .subscribe({
          next: (data)=>{
            this.commandes = data;
          },
          error: (error)=>{

          }
    })
  }

  valider(id:number){
    this.serviceCommande.valider(id)
    .subscribe({
      next: (data)=>{
        console.log("Validée!");
        
      },
      error: (error)=>{

      }
    })
  }

  annuler(id:number){
    this.serviceCommande.annuler(id)
    .subscribe({
      next: (data)=>{
        console.log("Validée!");
        
      },
      error: (error)=>{
        
      }
    })
  }

}
