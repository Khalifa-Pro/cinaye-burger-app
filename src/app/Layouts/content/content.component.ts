import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { DetailsComponent } from '../../Burger/details/details.component';
import { FooterComponent } from '../footer/footer.component';
import { MenuBurgerComponent } from '../../Menu/menu-burger/menu-burger.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    NgOptimizedImage,
    DetailsComponent,
    FooterComponent,
    MenuBurgerComponent
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  backgroundImageUrl: string = '../../../assets/hero-bg.jpg';
}
