import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KupciIzmjenaComponent } from './kupci-izmjena.component';

describe('KupciIzmjenaComponent', () => {
  let component: KupciIzmjenaComponent;
  let fixture: ComponentFixture<KupciIzmjenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KupciIzmjenaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KupciIzmjenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
