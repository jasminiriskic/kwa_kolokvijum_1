import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KupciDodavanjeComponent } from './kupci-dodavanje.component';

describe('KupciDodavanjeComponent', () => {
  let component: KupciDodavanjeComponent;
  let fixture: ComponentFixture<KupciDodavanjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KupciDodavanjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KupciDodavanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
