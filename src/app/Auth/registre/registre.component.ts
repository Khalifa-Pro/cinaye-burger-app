import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registre',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    RouterModule
  ],
  templateUrl: './registre.component.html',
  styleUrl: './registre.component.css'
})
export class RegistreComponent {
  constructor(
    private authService: AuthService,
    private toastr: ToastrService
  ){}

  /***
   * Ajout d'un forme groupe
   */
  public signupForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  showError()
  {
    this.toastr.error(
      "Echec de création de l'utilisateur", "Erreur", {
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
   * Methode de soummision de'inscription
   */
  public onSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      this.authService.register(this.signupForm.value)
        .subscribe({
          next: (data: any) => {
            this.showSuccess();
            console.log(data);
          },
          error: (err) => {
            this.showError();
          }
        });
    }
  }
  
}
