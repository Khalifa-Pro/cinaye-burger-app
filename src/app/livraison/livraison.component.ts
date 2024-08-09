import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../Auth/auth.service';
import { CommandesService } from '../Services/commandes.service';

@Component({
  selector: 'app-livraison',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './livraison.component.html',
  styleUrl: './livraison.component.css'
})
export class LivraisonComponent {

  ncc: number;

  ngOnInit(){
    this.nbCommandesEnCours();
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
}
