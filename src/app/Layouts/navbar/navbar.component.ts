import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

    underBurger(){
      window.scrollTo(700,700);
    }

    underFooter(){
      window.scrollTo(1500,1500);
    }

}
