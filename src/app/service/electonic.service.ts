import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class ElectonicService {

  constructor(public db:AngularFirestore) { }
  addelectronic(myproject){
    let createdOn = new Date()
    return this.db.collection('myproject').add({createdOn,...myproject})
  }
}
