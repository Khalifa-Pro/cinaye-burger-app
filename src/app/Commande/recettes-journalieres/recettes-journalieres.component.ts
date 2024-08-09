import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Burger } from '../../Models/Burger';
import { LigneCommande } from '../../Models/LigneCommande';
import { BurgersService } from '../../Services/burgers.service';
import { CommandesService } from '../../Services/commandes.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-recettes-journalieres',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink
  
  ],
  templateUrl: './recettes-journalieres.component.html',
  styleUrl: './recettes-journalieres.component.css'
})
export class RecettesJournalieresComponent {

  burgers: Array<Burger>;
  selectedBurger: Burger;
  form: FormGroup;
  submitted = false;

  constructor(
    private burgerService: BurgersService,
    private commandeService: CommandesService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.form = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      telephone: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  /***
   * toast success
   */
  showSuccess()
  {
    this.toastr.success(
      "Votre commande a été envoyée!", "Succès", {
          positionClass : "toast-top-right",
    });
  }

  /***
   * toast Error
   */
  showError()
  {
    this.toastr.error(
      "Votre commande a été échouée!", "Erreur", {
          positionClass : "toast-top-right",
    });
  }

  ngOnInit(): void {
    this.recettesJournalieres();
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  openModal(burger: Burger): void {
    this.selectedBurger = burger;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    const commande: LigneCommande = {
      nom: this.form.value.nom,
      prenom: this.form.value.prenom,
      telephone: this.form.value.telephone,
      email: this.form.value.email
    };

    if (this.selectedBurger) {
      this.commandeService.commander(commande, this.selectedBurger.id).subscribe(
        response => {
          console.log('Commande envoyée avec succès', response);
          window.scrollTo(0, 0); // Scroll to top
          this.onReset();
          this.router.navigateByUrl("/liste-burger");
        },
        error => {
          console.error('Erreur lors de l\'envoi de la commande', error);
        }
      );
    }
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

  recettesJournalieres(): void {
    this.burgerService.recetteJournaliers().subscribe({
      next: (data) => {
        this.burgers = data;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des recettes journalières', error);
      }
    });
  }
}
