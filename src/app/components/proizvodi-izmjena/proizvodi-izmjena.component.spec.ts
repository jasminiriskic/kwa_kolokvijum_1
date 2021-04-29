import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProizvodiIzmjenaComponent } from './proizvodi-izmjena.component';

describe('ProizvodiIzmjenaComponent', () => {
  let component: ProizvodiIzmjenaComponent;
  let fixture: ComponentFixture<ProizvodiIzmjenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProizvodiIzmjenaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProizvodiIzmjenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
