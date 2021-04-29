import { Component, OnInit } from '@angular/core';
import { Proizvod } from 'src/app/models/proizvod';
import { ProizvodiService } from 'src/app/services/proizvodi.service';

@Component({
  selector: 'app-proizvodi-dodavanje',
  templateUrl: './proizvodi-dodavanje.component.html',
  styleUrls: ['./proizvodi-dodavanje.component.css']
})
export class ProizvodiDodavanjeComponent implements OnInit {

  proizvod: Proizvod = {
    id: 1,
    naziv: "",
    opis: "",
    cena: 0
  }

  constructor(private prozivodServis: ProizvodiService) { }

  ngOnInit(): void {
  }

  dodaj(){
    this.prozivodServis.create({...this.proizvod})
  }
}
