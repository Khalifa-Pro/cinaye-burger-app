import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilanJournalierComponent } from './bilan-journalier.component';

describe('BilanJournalierComponent', () => {
  let component: BilanJournalierComponent;
  let fixture: ComponentFixture<BilanJournalierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BilanJournalierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BilanJournalierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
