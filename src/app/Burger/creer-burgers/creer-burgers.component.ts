import { Component, ViewChild, ElementRef } from '@angular/core';
import { AdminContentComponent } from '../../Layouts/AminContent/adminContent';
import { Burger } from '../../Models/Burger';
import { BurgersService } from '../../Services/burgers.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-creer-burgers',
  standalone: true,
  imports: [
    AdminContentComponent,
    CommonModule,
    ReactiveFormsModule,
    
  ],
  templateUrl: './creer-burgers.component.html',
  styleUrl: './creer-burgers.component.css'
})
export class CreerBurgersComponent {

  fg: FormGroup;
  @ViewChild('imageInput') imageInput: ElementRef;

  constructor(
    private burgerService: BurgersService,
    private fb: FormBuilder,
    private route: Router
  ) { }

  ngOnInit() {
    this.fg = this.fb.group({
      nom: ['', Validators.required],
      prix: ['', [Validators.required]],
      image: [''],
      description: ['']
    });
  }

  /***
   * ajouter burger
   */
  onSubmit() {
    if (this.fg.valid) {
      const formData: FormData = new FormData();
      formData.append('nom', this.fg.get('nom').value);
      formData.append('prix', this.fg.get('prix').value);
      formData.append('description', this.fg.get('description').value);

      const imageControl = this.imageInput.nativeElement;
      if (imageControl.files && imageControl.files[0]) {
        formData.append('image', imageControl.files[0]);
      }

      this.burgerService.ajouter(formData).subscribe({
        next: (data) => {
          console.log('SUCCES!');
          this.route.navigateByUrl("/liste-burgers");
        },
        error: (error) => {
          console.error('Erreur:', error);
        }
      });
    } else {
      console.error('Form is invalid');
    }
  }

}
