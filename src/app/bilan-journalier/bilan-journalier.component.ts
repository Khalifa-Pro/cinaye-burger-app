import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PaiementsService } from '../Services/paiements.service';
import { error } from 'console';
import { AuthService } from '../Auth/auth.service';
import { CommandesService } from '../Services/commandes.service';

@Component({
  selector: 'app-bilan-journalier',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './bilan-journalier.component.html',
  styleUrl: './bilan-journalier.component.css'
})
export class BilanJournalierComponent {

    montant_total: number;
    ncc: number;

    constructor(
      private servicePaiment: PaiementsService,
      private authService: AuthService,
      private router: Router,
      private serviceCommande: CommandesService
    ){}

    ngOnInit(){
      this.montantTotal();
      this.nbCommandesEnCours();
    }

    public logout(){
      this.authService.logout();
      this.router.navigate(['/login']);
    }

    montantTotal(){
      this.servicePaiment.bilan()
      .subscribe({
        next: (data)=>{
          this.montant_total = data.montant_total
          console.log("MONTANT_TOTAL_DU_JOUR: ",this.montant_total);
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

}
