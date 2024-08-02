import { Component, OnInit } from '@angular/core';
import { Burger } from '../../Models/Burger';
import { BurgersService } from '../../Services/burgers.service';
import { CommandesService } from '../../Services/commandes.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Commande } from '../../Models/Commande'; // Assurez-vous que le chemin est correct
import { exit } from 'process';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-burger',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './menu-burger.component.html',
  styleUrls: ['./menu-burger.component.css']
})
export class MenuBurgerComponent implements OnInit {
  
  burgers: Array<Burger>;
  selectedBurger: Burger;
  form: FormGroup;
  submitted = false;

  constructor(
    private burgerService: BurgersService,
    private commandeService: CommandesService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      telephone: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.email]],
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

    const commande: Commande = {
      nom: this.form.value.nom,
      prenom: this.form.value.prenom,
      telephone: this.form.value.telephone,
      email: this.form.value.email
    };

    if (this.selectedBurger) {
      this.commandeService.commander(commande, this.selectedBurger.id).subscribe(
        response => {
          console.log('Commande envoyée avec succès', response);
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
