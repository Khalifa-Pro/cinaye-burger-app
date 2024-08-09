import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../Auth/auth.service';
import { CommandesService } from '../Services/commandes.service';

@Component({
  selector: 'app-statistique',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './statistique.component.html',
  styleUrl: './statistique.component.css'
})
export class StatistiqueComponent {

    ncc: number;
    ncv: number;
    nca: number;
    nrj: number;

    ngOnInit(){
      this.nbCommandesEnCours();
      this.nbCommandesValidess();
      this.nbCommandesAnnulees();
      this.nbRecettesJournalieres();
    }

    constructor(
      private authService: AuthService,
      private router: Router,
      private serviceCommande: CommandesService
    ){}

    public logout(){
      this.authService.logout();
      this.router.navigate(['/login']);
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
  
    nbCommandesValidess(){
      this.serviceCommande.nombreCommandesValidees()
      .subscribe({
        next: (data)=>{
          this.ncv = data.nombre_commandes_validees;
          console.log("NOMBRE_COMMANDE_VALIDEES: ",this.ncv);
        },
        error: (error)=>{
          
        }
      })
    }
  
    nbCommandesAnnulees(){
      this.serviceCommande.nombreCommandesAnnulees()
      .subscribe({
        next: (data)=>{
          this.nca = data.nombre_commandes_annulees;
          console.log("NOMBRE_COMMANDES_ANNULEES: ",this.nca);
        },
        error: (error)=>{
          
        }
      })
    }

    nbRecettesJournalieres(){
      this.serviceCommande.nombreRecettesJournalieres()
      .subscribe({
        next: (data)=>{
          this.nrj = data.nombre_recettes_jounalieres;
          console.log("NOMBRE_RECETTES_JOURNALIERES: ",this.nrj);
        },
        error: (error)=>{
          
        }
      })
    }
}
