import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PaiementsService } from '../Services/paiements.service';
import { error } from 'console';

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

    constructor(
      private servicePaiment: PaiementsService
    ){}

    ngOnInit(){
      this.montantTotal();
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

}
