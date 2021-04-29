import { Component, Input, OnInit } from '@angular/core';
import { Proizvod } from 'src/app/models/proizvod';
import { ProizvodiService } from 'src/app/services/proizvodi.service';

@Component({
  selector: 'app-proizvodi-izmjena',
  templateUrl: './proizvodi-izmjena.component.html',
  styleUrls: ['./proizvodi-izmjena.component.css']
})
export class ProizvodiIzmjenaComponent implements OnInit {  
  @Input()

  proizvod: Proizvod = {
    id: 1,
    naziv: "",
    opis: "",
    cena: 0
  }


  constructor(public proizvodServis: ProizvodiService) { }

  ngOnInit(): void {
  }

  izmijeni(){
    this.proizvodServis.update(this.proizvod.id, {...this.proizvod})
  }
}
