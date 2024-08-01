import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnulerCommandeComponent } from './annuler-commande.component';

describe('AnnulerCommandeComponent', () => {
  let component: AnnulerCommandeComponent;
  let fixture: ComponentFixture<AnnulerCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnulerCommandeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnulerCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
