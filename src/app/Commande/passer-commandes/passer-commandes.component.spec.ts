import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasserCommandesComponent } from './passer-commandes.component';

describe('PasserCommandesComponent', () => {
  let component: PasserCommandesComponent;
  let fixture: ComponentFixture<PasserCommandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasserCommandesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasserCommandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
