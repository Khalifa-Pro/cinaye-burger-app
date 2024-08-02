import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { MenuBurgerComponent } from '../../Menu/menu-burger/menu-burger.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    NgOptimizedImage,
    FooterComponent,
    MenuBurgerComponent
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  backgroundImageUrl: string = '../../../assets/hero-bg.jpg';
}
