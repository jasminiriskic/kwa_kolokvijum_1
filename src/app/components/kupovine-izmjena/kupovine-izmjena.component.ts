import { Component, Input, OnInit } from '@angular/core';
import { Kupovina } from 'src/app/models/kupovina';
import { KupciService } from 'src/app/services/kupci.service';
import { KupovineService } from 'src/app/services/kupovine.service';
import { ProizvodiService } from 'src/app/services/proizvodi.service';

@Component({
  selector: 'app-kupovine-izmjena',
  templateUrl: './kupovine-izmjena.component.html',
  styleUrls: ['./kupovine-izmjena.component.css']
})
export class KupovineIzmjenaComponent implements OnInit {
  @Input()

  kupovina: Kupovina = {
    id: 1,
    datumKupovine: new Date(),
    kolicina: 0,
    kupac: null,
    proizvod: null
    }
  constructor(public kupacServis: KupciService, public proizvodServis: ProizvodiService, private kupovineServis: KupovineService) { }

  ngOnInit(): void {
  }

  izmijeni(){
    this.kupovineServis.update(this.kupovina.id, {...this.kupovina})
  }
}
