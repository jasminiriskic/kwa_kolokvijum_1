import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProizvodiDodavanjeComponent } from './proizvodi-dodavanje.component';

describe('ProizvodiDodavanjeComponent', () => {
  let component: ProizvodiDodavanjeComponent;
  let fixture: ComponentFixture<ProizvodiDodavanjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProizvodiDodavanjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProizvodiDodavanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
