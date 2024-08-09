import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LigneCommande } from '../../Models/LigneCommande';
import { CommandesService } from '../../Services/commandes.service';
import { error } from 'console';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { AuthService } from '../../Auth/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-liste-commandes',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    FormsModule
  ],
  templateUrl: './liste-commandes.component.html',
  styleUrl: './liste-commandes.component.css'
})
export class ListeCommandesComponent {

  commandes: Array<LigneCommande> = [];
  filteredCommandes: Array<LigneCommande> = [];
  searchTerm: string = '';

  isPayed :number = 0;
  ncc: number;

  constructor(
    private serviceCommande: CommandesService,
    private toast: ToastrService,
    private authService: AuthService,
    private router: Router
  ) { }
  
  public logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    this.listeCommandes();
    this.nbCommandesEnCours();
  }

  showSuccessPayer()
  {
    this.toast.success(
      "Paiement réussi!", "Succès", {
          positionClass : "toast-top-right",
    });
  }

  showSuccessValider()
  {
    this.toast.success(
      "Validation réussie!", "Succès", {
          positionClass : "toast-top-right",
    });
  }

  showSuccessAnnuler()
  {
    this.toast.error(
      "Annulation réussie!", "Succès", {
          positionClass : "toast-top-right",
    });
  }

  /***
   * Liiste burgers
   */
  listeCommandes(): void {
    this.serviceCommande.commandes().subscribe({
      next: (data) => {
        this.commandes = data;
        this.filteredCommandes = data;  // Initialize the filtered list
      },
      error: (error) => {
        console.error('Erreur lors du chargement des commandes', error);
      }
    });
  }


  filterCommandes(): void {
    this.filteredCommandes = this.commandes.filter((commande) => {
      const searchStr = this.searchTerm.toLowerCase();
      return commande.burger_nom.toLowerCase().includes(searchStr) ||
             commande.nom.toLowerCase().includes(searchStr) ||
             commande.prenom.toLowerCase().includes(searchStr) ||
             commande.etat.toLowerCase().includes(searchStr) ||
             commande.updated_at.toLowerCase().includes(searchStr);
    });
  }

  valider(id:number){
    this.serviceCommande.valider(id)
    .subscribe({
      next: (data)=>{
        console.log("Validée!");
        window.scrollTo(0,0);
        this.showSuccessValider();
        this.listeCommandes();
        
      },
      error: (error)=>{

      }
    })
  }

  annuler(id:number){
    this.serviceCommande.annuler(id)
    .subscribe({
      next: (data)=>{
        console.log("Annulee!");
        window.scrollTo(0,0);
        this.showSuccessAnnuler();
        this.listeCommandes();
        
      },
      error: (error)=>{
        
      }
    })
  }

  payer(id:number, montant:number){
    this.serviceCommande.payer(id,montant)
    .subscribe({
      next: (data)=>{
        console.log("Payer!");
        this.isPayed = 1;
        window.scrollTo(0,0);
        this.showSuccessPayer();
        this.listeCommandes();
        
      },
      error: (error)=>{
        
      }
    })
  }

  archiver(id:number){
    this.serviceCommande.archiver(id)
    .subscribe({
      next: (data)=>{
        console.log("Archivé!");
        this.isPayed = 1;
        window.scrollTo(0,0);
        this.showSuccessPayer();
        this.listeCommandes();
        
      },
      error: (error)=>{
        
      }
    })
  }

  confirmBox(id: number) {
    Swal.fire({
      title: 'Êtes-vous sûr de vouloir annuler?',
      text: "Vous ne pourrez pas restaurer cette action.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, annuler',
      cancelButtonText: 'Non, conserver'
    }).then((result) => {
      if (result.isConfirmed) {
        this.annuler(id);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Conservé',
          'Votre commande est en sécurité :)',
          'error'
        );
      }
    });
  }

  confirmBoxArchive(id: number) {
    Swal.fire({
      title: 'Êtes-vous sûr de vouloir supprimer?',
      text: "Vous ne pourrez pas restaurer cette action.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimer',
      cancelButtonText: 'Non, annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        this.archiver(id);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Annulé',
          'Votre commande est en sécurité :)',
          'error'
        );
      }
    });
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
