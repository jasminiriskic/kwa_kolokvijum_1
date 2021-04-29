import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KupovineIzmjenaComponent } from './kupovine-izmjena.component';

describe('KupovineIzmjenaComponent', () => {
  let component: KupovineIzmjenaComponent;
  let fixture: ComponentFixture<KupovineIzmjenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KupovineIzmjenaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KupovineIzmjenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
