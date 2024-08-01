import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerBurgersComponent } from './creer-burgers.component';

describe('CreerBurgersComponent', () => {
  let component: CreerBurgersComponent;
  let fixture: ComponentFixture<CreerBurgersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreerBurgersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreerBurgersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
