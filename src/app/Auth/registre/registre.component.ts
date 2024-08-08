import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';

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
    private router: Router,
    private authService: AuthService
  ){}

  /***
   * Ajout d'un forme groupe
   */
  public signupForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  /***
   * Methode de soummision de'inscription
   */
  public onSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      this.authService.register(this.signupForm.value)
        .subscribe({
          next: (data: any) => {
            console.log(data);
            this.router.navigate(['/login']);
          },
          error: (err) => console.log(err)
        });
    }
  }
  
}
