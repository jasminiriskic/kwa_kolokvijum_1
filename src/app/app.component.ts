import { Component } from '@angular/core';
import { Kupac } from './models/kupac';
import { Kupovina } from './models/kupovina';
import { Proizvod } from './models/proizvod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kol1';

  kupacZaIzmjenu: Kupac = {
     id: 1,
     ime: "",
     prezime: "",
     email: ""
  };

  proizvodZaIzmjenu: Proizvod = {
    id: 1,
    naziv: "",
    opis: "",
    cena: 0
  }

  kupovinaZaIzmjenu: Kupovina = {
    id: 1,
    datumKupovine: new Date(),
    kolicina: 0,
    kupac: null,
    proizvod: null

  }

  izmijeniKupca(kupac: Kupac){
    this.kupacZaIzmjenu = kupac;
  }

  izmijeniProizvod(proizvod: Proizvod){
    this.proizvodZaIzmjenu = proizvod;
  }

  izmijeniKupovinu(kupovina: Kupovina){
    this.kupovinaZaIzmjenu = kupovina;
  }
}
