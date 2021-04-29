import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Proizvod } from 'src/app/models/proizvod';
import { ProizvodiService } from 'src/app/services/proizvodi.service';

@Component({
  selector: 'app-proizvodi',
  templateUrl: './proizvodi.component.html',
  styleUrls: ['./proizvodi.component.css']
})
export class ProizvodiComponent implements OnInit {
  @Output()
  proizvodIzmjena: EventEmitter<Proizvod> = new EventEmitter<Proizvod>();

  constructor(public proizvodiServis: ProizvodiService) { }

  ngOnInit(): void {
  }

  izmijeni(proizvod: Proizvod){
    this.proizvodIzmjena.emit({...proizvod})
  }
}
