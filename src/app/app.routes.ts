import { Routes } from '@angular/router';
import { ListeBurgersComponent } from './Burger/liste-burgers/liste-burgers.component';
import { CreerBurgersComponent } from './Burger/creer-burgers/creer-burgers.component';
import { ModifierBurgersComponent } from './Burger/modifier-burgers/modifier-burgers.component';
import { ListeCommandesComponent } from './Commande/liste-commandes/liste-commandes.component';
import { CommandesEnCoursComponent } from './Commande/commandes-en-cours/commandes-en-cours.component';
import { CommandesValideesComponent } from './Commande/commandes-validees/commandes-validees.component';
import { CommandesAnnuleesComponent } from './Commande/commandes-annulees/commandes-annulees.component';
import { ListePaiementsComponent } from './Paiement/liste-paiements/liste-paiements.component';
import { PayerComponent } from './Paiement/payer/payer.component';
import { ContentComponent } from './Layouts/content/content.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { BilanJournalierComponent } from './bilan-journalier/bilan-journalier.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegistreComponent } from './Auth/registre/registre.component';
import { authGuard } from './Auth/auth.guard';

export const routes: Routes = [

    /***
     * AUTHENTIFICATION ROUTE
     */
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegistreComponent },
    /***
     * ROUTES BURGERS CLIENT
     */
    { path: 'cinaye-burger', component: ContentComponent },
    
    /***
     * ROUTES BURGERS GERANT
     */
    { path: 'liste-burgers', component: ListeBurgersComponent, canActivate:[authGuard]},
    { path: 'creer-burgers', component: CreerBurgersComponent, canActivate:[authGuard] },
    { path: 'modifier-burgers/{id}', component: ModifierBurgersComponent, canActivate:[authGuard] },

    /***
     * ROUTES COMMANDES
     */
    { path: 'liste-commandes', component: ListeCommandesComponent , canActivate:[authGuard]},
    { path: 'commandes-en-cours', component: CommandesEnCoursComponent, canActivate:[authGuard] },
    { path: 'commandes-validees', component: CommandesValideesComponent, canActivate:[authGuard] },
    { path: 'commandes-annulees', component: CommandesAnnuleesComponent, canActivate:[authGuard] },

    /***
     * ROUTES PAIEMENTS
     */
    { path: 'liste-paiements', component: ListePaiementsComponent, canActivate:[authGuard] },
    { path: 'payer-commande', component:  PayerComponent, canActivate:[authGuard]},

     /***
     * ROUTES STATISTIQUES
     */
     { path: 'liste-livraison', component: LivraisonComponent, canActivate:[authGuard] },
     { path: 'statistiques', component: StatistiqueComponent, canActivate:[authGuard] },
     { path: 'bilan', component:  BilanJournalierComponent, canActivate:[authGuard]}

    
];
