import { Injectable } from '@angular/core';

import { Router } from "@angular/router";
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth"
@Injectable({
  providedIn: 'root'
})
export class AdminService {
userdetails=null;
  constructor(public firebaseauth:AngularFireAuth,public router:Router) { 
    this.firebaseauth.authState.subscribe(user=>{
      if(user)
      {
        this.userdetails=user
      }
    })
  }


  adminsignin(email,password)
  {
    this.firebaseauth.auth.signInWithEmailAndPassword(email,password).then(data=>{
      console.log(data)
      this.router.navigateByUrl('/addelectronic')
    }).catch(err=>{
      // this.iserr=true;
      console.log(err)
    })
  }

isauthenticated()
{
if(this.userdetails)
{
  return true;
}
else{
  return false;
}
}

}
