import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AdminContentComponent } from '../../Layouts/AminContent/adminContent';
import {DataTablesModule} from 'angular-datatables';
import { BurgersService } from '../../Services/burgers.service';
import { Burger } from '../../Models/Burger';
import { error } from 'console';
import {Subject} from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { AuthService } from '../../Auth/auth.service';

@Component({
  selector: 'app-liste-burgers',
  standalone: true,
  imports: [
    AdminContentComponent,
    RouterLink,
    DataTablesModule,
    CommonModule,
    RouterOutlet
  ],
  templateUrl: './liste-burgers.component.html',
  styleUrl: './liste-burgers.component.css'
})
export class ListeBurgersComponent {
    
    burgers: Burger[];

    constructor(
      private serviceBurger: BurgersService,
      private toast: ToastrService,
      private router: Router,
      private authService: AuthService
    ) { }

    ngOnInit(): void {
      this.listeBurgers();
    }

  showSuccess()
  {
    this.toast.success(
      "Suppression réussie!", "Succès", {
          positionClass : "toast-top-right",
    });
  }

  showErrorAjout(){
    this.toast.error(
      "Problème d'ajout", "Erreur", {
          positionClass : "toast-top-right",
    });
  }

  showErrorSuppression(){
    this.toast.error(
      "Problème de suppression", "Erreur", {
          positionClass : "toast-top-right",
    });
  }

    /***
     * Liiste burgers
     */
    listeBurgers(): void {
      this.serviceBurger.liste()
          .subscribe({
            next: (data)=>{
              this.burgers = data;
            },
            error: (error)=>{

            }
      })
    }

    confirmBox(id: number) {
      Swal.fire({
        title: 'Êtes-vous sûr de vouloir supprimer?',
        text: "Vous ne pourrez pas restaurer cette action.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Oui, supprimer',
        cancelButtonText: 'Non, annuler'
      }).then((result) => {
        if (result.isConfirmed) {
          this.archiverBurger(id);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Annulé',
            'Votre burger est en sécurité :)',
            'error'
          );
        }
      });
    }
    
    archiverBurger(id: number) {
      this.serviceBurger.archiver(id).subscribe({
        next: (data) => {
          Swal.fire(
            'Supprimé!',
            'Votre burger a été archivé avec succès.',
            'success'
          );
          console.log("Archivé!: " + id);
          window.scrollTo(0, 0);
          this.showSuccess();
          this.listeBurgers();
        },
        error: (error) => {
          console.error("Erreur lors de l'archivage:", error);
          this.showErrorSuppression();
        }
      });
    }
    
  /***
   * Logout
   */
  public logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
