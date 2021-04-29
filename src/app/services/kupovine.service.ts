import { Injectable } from '@angular/core';
import { Kupovina } from '../models/kupovina';
import { KupciService } from './kupci.service';
import { ProizvodiService } from './proizvodi.service';

@Injectable({
  providedIn: 'root'
})
export class KupovineService {
  private kupovine: Kupovina[] = []

  constructor(private kupacServis: KupciService, private proizvodServis: ProizvodiService) { 
    this.kupovine.push({
      id: 1,
      datumKupovine: new Date,
      kolicina: 2,
      kupac: kupacServis.getOne(2),
      proizvod: proizvodServis.getOne(1)
    })
  }

  getAll(){
    return this.kupovine;
  }

  getOne(id: number){
    for(let k of this.kupovine){
      if(k.id == id){
        return k;
      }
    }
    return null;
  }

  create(kupovina: Kupovina){
    if(this.getOne(kupovina.id) == null){
      this.kupovine.push(kupovina);
    }else{
      console.log("Kupovina vec postoji!")
    }
  }

  update(id: number, kupovina: Kupovina){
    for(let i = 0; i < this.kupovine.length; i++){
      if(this.kupovine[i].id == id){
        this.kupovine[i] = kupovina;
        return true;
      }
    }
    return false;
  }

  delete(id: number){
    let index = null;
    for(let i = 0; i < this.kupovine.length; i++){
      if(this.kupovine[i].id == id){
        index = i;
      }
    }
    if(index != null){
      this.kupovine.splice(index, 1);
    }
  }


}
