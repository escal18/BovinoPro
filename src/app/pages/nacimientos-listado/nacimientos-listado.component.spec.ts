import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NacimientosListadoComponent } from './nacimientos-listado.component';

describe('NacimientosListadoComponent', () => {
  let component: NacimientosListadoComponent;
  let fixture: ComponentFixture<NacimientosListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NacimientosListadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NacimientosListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
