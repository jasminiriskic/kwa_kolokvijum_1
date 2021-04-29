import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KupovineDodavanjeComponent } from './kupovine-dodavanje.component';

describe('KupovineDodavanjeComponent', () => {
  let component: KupovineDodavanjeComponent;
  let fixture: ComponentFixture<KupovineDodavanjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KupovineDodavanjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KupovineDodavanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
