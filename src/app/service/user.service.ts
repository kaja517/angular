import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth"
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public firebaseauth:AngularFireAuth,public router:Router) { }


  usersignin(email,password)
  {
this.firebaseauth.auth.signInWithEmailAndPassword(email,password).then(data=>{
  console.log(data)
  this.router.navigateByUrl('/home')
}).catch(err=>{
  // this.iserr=true;
  console.log(err)
})
  }
  usersignup(email,password)
  {
    this.firebaseauth.auth.createUserWithEmailAndPassword(email,password).then(data=>{
      console.log(data)
      this.router.navigateByUrl('/home')
    }).catch(err=>{
      // this.iserr=true;
      console.log(err)
   // console.log('mohith')
    //this.toastr.error('error', 'invalidemailform');
    })
  }
}
