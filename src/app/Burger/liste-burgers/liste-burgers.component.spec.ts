import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeBurgersComponent } from './liste-burgers.component';

describe('ListeBurgersComponent', () => {
  let component: ListeBurgersComponent;
  let fixture: ComponentFixture<ListeBurgersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeBurgersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeBurgersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
