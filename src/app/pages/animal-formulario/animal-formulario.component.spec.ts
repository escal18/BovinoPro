import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalFormularioComponent } from './animal-formulario.component';

describe('AnimalFormularioComponent', () => {
  let component: AnimalFormularioComponent;
  let fixture: ComponentFixture<AnimalFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalFormularioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
