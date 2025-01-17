import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Paiement } from '../../Models/Paiement';
import { PaiementsService } from '../../Services/paiements.service';
import { error } from 'console';
import { AuthService } from '../../Auth/auth.service';
import { CommandesService } from '../../Services/commandes.service';

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
  ncc: number;

  constructor(
    private servicePaiement: PaiementsService,
    private authService: AuthService,
    private router: Router,
    private serviceCommande: CommandesService
  ) { }
  

  ngOnInit(): void {
    this.listePaiements();
    this.nbCommandesEnCours();
  }

  public logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
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

  nbCommandesEnCours(){
    this.serviceCommande.nombreCommandesEnCours()
    .subscribe({
      next: (data)=>{
        this.ncc = data.nombre_commandes_en_cours;
        console.log("NOMBRE_COMMANDES_EN_COURS: ",this.ncc);
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
