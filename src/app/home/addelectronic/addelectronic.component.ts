import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';

import { ElectonicService } from 'src/app/service/electonic.service';
@Component({
  selector: 'app-addelectronic',
  templateUrl: './addelectronic.component.html',
  styleUrls: ['./addelectronic.component.scss']
})
export class AddelectronicComponent implements OnInit {

  constructor(public db:AngularFirestore, public router:Router,public eletronicService:ElectonicService) { }

  ngOnInit() {
  }
  addProperty(addForm:NgForm){
 
    console.log(addForm.value)
    this.eletronicService.addelectronic(addForm.value).then(data=>{
     console.log(data.id)
     
        addForm.reset()
     //this.isPropertyAdded=true
    }).catch(err=>{
      console.log(err)
    })  

  }

  photoselected(event:any ){
    const file:File=event.target.files[0];
    console.log(file.name);

const metadata={'contentType':file.type};
const storageref:firebase.storage.Reference=firebase.storage().ref().child('path/image');
 storageref.put(file,metadata);
 console.log( "uploading",file.name);
}

}
