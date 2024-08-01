import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierBurgersComponent } from './modifier-burgers.component';

describe('ModifierBurgersComponent', () => {
  let component: ModifierBurgersComponent;
  let fixture: ComponentFixture<ModifierBurgersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierBurgersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierBurgersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
