import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Kupovina } from 'src/app/models/kupovina';
import { KupovineService } from 'src/app/services/kupovine.service';

@Component({
  selector: 'app-kupovine',
  templateUrl: './kupovine.component.html',
  styleUrls: ['./kupovine.component.css']
})
export class KupovineComponent implements OnInit {
  @Output()
  kupovinaIzmjena: EventEmitter<Kupovina> = new EventEmitter<Kupovina>();

  constructor(public kupovineServis: KupovineService) { }

  ngOnInit(): void {
  }

  izmijeni(kupovina: Kupovina){
    this.kupovinaIzmjena.emit({...kupovina})
  }
}
