import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KupovineComponent } from './kupovine.component';

describe('KupovineComponent', () => {
  let component: KupovineComponent;
  let fixture: ComponentFixture<KupovineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KupovineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KupovineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
