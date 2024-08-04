import { Routes } from '@angular/router';
import { ListeBurgersComponent } from './Burger/liste-burgers/liste-burgers.component';
import { CreerBurgersComponent } from './Burger/creer-burgers/creer-burgers.component';
import { ModifierBurgersComponent } from './Burger/modifier-burgers/modifier-burgers.component';
import { ListeCommandesComponent } from './Commande/liste-commandes/liste-commandes.component';
import { PasserCommandesComponent } from './Commande/passer-commandes/passer-commandes.component';
import { ValiderCommandeComponent } from './Commande/valider-commande/valider-commande.component';
import { AnnulerCommandeComponent } from './Commande/annuler-commande/annuler-commande.component';
import { CommandesEnCoursComponent } from './Commande/commandes-en-cours/commandes-en-cours.component';
import { CommandesValideesComponent } from './Commande/commandes-validees/commandes-validees.component';
import { CommandesAnnuleesComponent } from './Commande/commandes-annulees/commandes-annulees.component';
import { ListePaiementsComponent } from './Paiement/liste-paiements/liste-paiements.component';
import { PayerComponent } from './Paiement/payer/payer.component';
import { ContentComponent } from './Layouts/content/content.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { BilanJournalierComponent } from './bilan-journalier/bilan-journalier.component';
import { LivraisonComponent } from './livraison/livraison.component';

export const routes: Routes = [

    /***
     * ENTREE ADMIN ROUTE
     */
    { path: 'admin', component: ListeBurgersComponent },
    /***
     * ROUTES BURGERS
     */
    { path: 'cinaye-burger', component: ContentComponent },
    { path: 'liste-burgers', component: ListeBurgersComponent },
    { path: 'creer-burgers', component: CreerBurgersComponent },
    { path: 'modifier-burgers/{id}', component: ModifierBurgersComponent },

    /***
     * ROUTES COMMANDES
     */
    { path: 'liste-commandes', component: ListeCommandesComponent },
    { path: 'creer-commande', component: PasserCommandesComponent },
    { path: 'valider-commande', component: ValiderCommandeComponent },
    { path: 'annuler-commande', component: AnnulerCommandeComponent },
    { path: 'commandes-en-cours', component: CommandesEnCoursComponent },
    { path: 'commandes-validees', component: CommandesValideesComponent },
    { path: 'commandes-annulees', component: CommandesAnnuleesComponent },

    /***
     * ROUTES PAIEMENTS
     */
    { path: 'liste-paiements', component: ListePaiementsComponent },
    { path: 'payer-commande', component:  PayerComponent},

     /***
     * ROUTES STATISTIQUES
     */
     { path: 'liste-livraison', component: LivraisonComponent },
     { path: 'statistiques', component: StatistiqueComponent },
     { path: 'bilan', component:  BilanJournalierComponent}

    
];
