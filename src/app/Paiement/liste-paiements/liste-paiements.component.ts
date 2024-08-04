import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Paiement } from '../../Models/Paiement';
import { PaiementsService } from '../../Services/paiements.service';
import { error } from 'console';

@Component({
  selector: 'app-liste-paiements',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './liste-paiements.component.html',
  styleUrl: './liste-paiements.component.css'
})
export class ListePaiementsComponent {

  paiements: Array<Paiement>;

  constructor(
    private servicePaiement: PaiementsService
  ) { }
  

  ngOnInit(): void {
    this.listePaiements();
  }

  /***
   * Liiste burgers
   */
  listePaiements(): void {
    this.servicePaiement.paiements()
        .subscribe({
          next: (data)=>{
            this.paiements = data;
          },
          error: (error)=>{

          }
    })
  }

  payer(id: number){
    this.servicePaiement.payer(id)
    .subscribe({
      next: (data)=>{
        console.log("Payer!");
      },
      error: (error)=>{
        
      }
    })
    
  }


  // annuler(id:number){
  //   this.serviceCommande.annuler(id)
  //   .subscribe({
  //     next: (data)=>{
  //       console.log("Validée!");
        
  //     },
  //     error: (error)=>{
        
  //     }
  //   })
  // }

}
