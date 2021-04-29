import { Injectable } from '@angular/core';
import { Proizvod } from '../models/proizvod';

@Injectable({
  providedIn: 'root'
})
export class ProizvodiService {

  private proizvodi: Proizvod[] = [
    {id: 1, naziv: "Item1", opis: "Something1", cena: 10},
    {id: 2, naziv: "Item2", opis: "Something2", cena: 15},
    {id: 3, naziv: "Item3", opis: "Something3", cena: 20}
  ]

  constructor() { }

  getAll(){
    return this.proizvodi;
  }

  getOne(id: number){
    for(let k of this.proizvodi){
      if(k.id == id){
        return k;
      }
    }
    return null;
  }

  create(proizvod: Proizvod){
    if(this.getOne(proizvod.id) == null){
      this.proizvodi.push(proizvod);
    }else{
      console.log("Proizvod vec postoji!")
    }
  }

  update(id: number, proizvod: Proizvod){
    for(let i = 0; i < this.proizvodi.length; i++){
      if(this.proizvodi[i].id == id){
        this.proizvodi[i] = proizvod;
        return true;
      }
    }
    return false;
  }

  delete(id: number){
    let index = null;
    for(let i = 0; i < this.proizvodi.length; i++){
      if(this.proizvodi[i].id == id){
        index = i;
      }
    }
    if(index != null){
      this.proizvodi.splice(index, 1);
    }
  }
}
