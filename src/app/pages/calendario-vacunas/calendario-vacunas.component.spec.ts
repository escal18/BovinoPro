import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioVacunasComponent } from './calendario-vacunas.component';

describe('CalendarioVacunasComponent', () => {
  let component: CalendarioVacunasComponent;
  let fixture: ComponentFixture<CalendarioVacunasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarioVacunasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarioVacunasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
