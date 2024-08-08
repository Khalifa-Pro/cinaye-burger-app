import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';

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
      private authService: AuthService
    ){}

    /***
     * Ajout d'un groupe de forme
     */
    protected loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })

    /***
     * Methode de soumission de connexion
     */
    onSubmit(){
      if(this.loginForm.valid){
        console.log(this.loginForm.value);
        this.authService.login(this.loginForm.value)
        .subscribe((data: any) => {
          if(this.authService.isLoggedIn()){
            this.router.navigate(['/liste-burgers']);
          }
          console.log(data);
        });
      }
    }

}
