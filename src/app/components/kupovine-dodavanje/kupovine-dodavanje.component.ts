import { Component, OnInit } from '@angular/core';
import { Kupovina } from 'src/app/models/kupovina';
import { KupciService } from 'src/app/services/kupci.service';
import { KupovineService } from 'src/app/services/kupovine.service';
import { ProizvodiService } from 'src/app/services/proizvodi.service';

@Component({
  selector: 'app-kupovine-dodavanje',
  templateUrl: './kupovine-dodavanje.component.html',
  styleUrls: ['./kupovine-dodavanje.component.css']
})
export class KupovineDodavanjeComponent implements OnInit {
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

  dodaj(){
    this.kupovineServis.create({...this.kupovina})
  }

}
