import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    constructor(
      private router: Router,
      private authService: AuthService,
      private toastr: ToastrService
    ){}

    /***
     * Ajout d'un groupe de forme
     */
    protected loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })

    showError()
    {
      this.toastr.error(
        "Nom d'utilisateur ou mot de passe incorrect!", "Erreur", {
            positionClass : "toast-top-right",
      });
    }

    showSuccess()
    {
      this.toastr.success(
        "Utilisateur créé avec succès!", "Succès", {
            positionClass : "toast-top-right",
      });
    }

    /***
     * Methode de soumission de connexion
     */
    onSubmit() {
      if (this.loginForm.valid) {
        console.log(this.loginForm.value);
        this.authService.login(this.loginForm.value).subscribe({
          next: (data: any) => {
            console.log(data);
            if (this.authService.isLoggedIn()) {
              this.router.navigate(['/liste-burgers']);
            } else {
              this.showError();
            }
          },
          error: (err) => {
            console.error('Login error:', err);
            this.showError();
          }
        });
      }
    }
    

}
