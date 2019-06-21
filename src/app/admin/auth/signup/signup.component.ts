import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AdminService } from 'src/app/service/admin.service';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(public db:AngularFireAuth,public user:UserService) { }

  ngOnInit() {
  }
signup(signupForm:NgForm)
{
  console.log(signupForm.value)
  this.user.usersignup(signupForm.value.email,signupForm.value.password)
  signupForm.reset()
}
}
