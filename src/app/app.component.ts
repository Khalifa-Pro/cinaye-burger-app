import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './Layouts/navbar/navbar.component';
import { ContentComponent } from './Layouts/content/content.component';
import { MenuBurgerComponent } from './Menu/menu-burger/menu-burger.component';
import { CreerBurgersComponent } from './Burger/creer-burgers/creer-burgers.component';
import { ListeBurgersComponent } from './Burger/liste-burgers/liste-burgers.component';
import { ListeCommandesComponent } from './Commande/liste-commandes/liste-commandes.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegistreComponent } from './Auth/registre/registre.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { RecettesJournalieresComponent } from './Commande/recettes-journalieres/recettes-journalieres.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    ContentComponent,
    MenuBurgerComponent,
    CreerBurgersComponent,
    ListeCommandesComponent,
    LoginComponent,
    RegistreComponent,
    StatistiqueComponent,
    RecettesJournalieresComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cinaye-burger-app';
}
