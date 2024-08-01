import { Component } from '@angular/core';
import { DetailsComponent } from '../../Burger/details/details.component';

@Component({
  selector: 'app-menu-burger',
  standalone: true,
  imports: [
    DetailsComponent
  ],
  templateUrl: './menu-burger.component.html',
  styleUrl: './menu-burger.component.css'
})
export class MenuBurgerComponent {

}
