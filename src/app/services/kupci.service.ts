import { Injectable } from '@angular/core';
import { Kupac } from '../models/kupac';

@Injectable({
  providedIn: 'root'
})
export class KupciService {
  private kupci: Kupac[] = [
    {id: 1, ime: "Name1", prezime: "LastName1", email:"email1@email.com"},
    {id: 2, ime: "Name2", prezime: "LastName2", email:"email2@email.com"},
    {id: 3, ime: "Name3", prezime: "LastName3", email:"email3@email.com"},
  ]

  constructor() { }

  getAll(){
    return this.kupci;
  }

  getOne(id: number){
    for(let k of this.kupci){
      if(k.id == id){
        return k;
      }
    }
    return null;
  }

  create(kupac: Kupac){
    if(this.getOne(kupac.id) == null){
      this.kupci.push(kupac);
    }else{
      console.log("Kupac vec postoji!")
    }
  }

  update(id: number, kupac: Kupac){
    for(let i = 0; i < this.kupci.length; i++){
      if(this.kupci[i].id == id){
        this.kupci[i] = kupac;
        return true;
      }
    }
    return false;
  }

  delete(id: number){
    let index = null;
    for(let i = 0; i < this.kupci.length; i++){
      if(this.kupci[i].id == id){
        index = i;
      }
    }
    if(index != null){
      this.kupci.splice(index, 1);
    }
  }


}
