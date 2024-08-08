import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../Auth/auth.service';

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

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  public logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
