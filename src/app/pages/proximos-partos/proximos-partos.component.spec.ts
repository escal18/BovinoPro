import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximosPartosComponent } from './proximos-partos.component';

describe('ProximosPartosComponent', () => {
  let component: ProximosPartosComponent;
  let fixture: ComponentFixture<ProximosPartosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProximosPartosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProximosPartosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
