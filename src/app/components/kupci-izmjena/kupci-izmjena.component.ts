import { Component, Input, OnInit } from '@angular/core';
import { Kupac } from 'src/app/models/kupac';
import { KupciService } from 'src/app/services/kupci.service';

@Component({
  selector: 'app-kupci-izmjena',
  templateUrl: './kupci-izmjena.component.html',
  styleUrls: ['./kupci-izmjena.component.css']
})
export class KupciIzmjenaComponent implements OnInit {
  @Input()

  kupac: Kupac = {
    id: 1,
    ime: "",
    prezime: "",
    email: ""
  }


  constructor(public kupacServis: KupciService) { }

  ngOnInit(): void {
  }

  izmijeni(){
    this.kupacServis.update(this.kupac.id, {...this.kupac})
    console.log(this.kupac)
  }

}
