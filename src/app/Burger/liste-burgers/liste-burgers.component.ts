import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AdminContentComponent } from '../../Layouts/AminContent/adminContent';
import {DataTablesModule} from 'angular-datatables';
import { BurgersService } from '../../Services/burgers.service';
import { Burger } from '../../Models/Burger';
import { error } from 'console';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-liste-burgers',
  standalone: true,
  imports: [
    AdminContentComponent,
    RouterLink,
    DataTablesModule,
    CommonModule
  ],
  templateUrl: './liste-burgers.component.html',
  styleUrl: './liste-burgers.component.css'
})
export class ListeBurgersComponent {
    
    burgers: Burger[];

    constructor(
      private serviceBurger: BurgersService
    ) { }

    ngOnInit(): void {
      this.listeBurgers();
    }

    /***
     * Liiste burgers
     */
    listeBurgers(): void {
      this.serviceBurger.liste()
          .subscribe({
            next: (data)=>{
              this.burgers = data;
            },
            error: (error)=>{

            }
      })
    }

    archiverBurger(id: number){
      this.serviceBurger.archiver(id)
      .subscribe({
        next: (data)=>{
          console.log("Archive!: "+id);
          this.listeBurgers();
        },
        error: (error)=>{

        }
      })
    }

}
