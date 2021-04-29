import { Component, OnInit } from '@angular/core';
import { Kupac } from 'src/app/models/kupac';
import { KupciService } from 'src/app/services/kupci.service';

@Component({
  selector: 'app-kupci-dodavanje',
  templateUrl: './kupci-dodavanje.component.html',
  styleUrls: ['./kupci-dodavanje.component.css']
})
export class KupciDodavanjeComponent implements OnInit {

  kupac: Kupac = {
    id: 1,
    ime: "",
    prezime: "",
    email: ""
  }

  constructor(private kupacServis: KupciService) { }

  ngOnInit(): void {
  }
  
  dodaj(){
    this.kupacServis.create({...this.kupac})
    console.log(this.kupac)
  }
}
