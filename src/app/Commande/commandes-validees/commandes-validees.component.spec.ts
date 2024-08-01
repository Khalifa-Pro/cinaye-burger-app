import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandesValideesComponent } from './commandes-validees.component';

describe('CommandesValideesComponent', () => {
  let component: CommandesValideesComponent;
  let fixture: ComponentFixture<CommandesValideesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommandesValideesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandesValideesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
