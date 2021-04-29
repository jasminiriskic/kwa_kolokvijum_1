import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Kupac } from 'src/app/models/kupac';
import { KupciService } from 'src/app/services/kupci.service';

@Component({
  selector: 'app-kupci',
  templateUrl: './kupci.component.html',
  styleUrls: ['./kupci.component.css']
})
export class KupciComponent implements OnInit {
  @Output()
  kupacIzmjena: EventEmitter<Kupac> = new EventEmitter<Kupac>();

  constructor(public kupciServis: KupciService) { }

  ngOnInit(): void {
  }

  izmijeni(kupac: Kupac){
    this.kupacIzmjena.emit({...kupac})
  }
}
