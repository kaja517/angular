import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AdminService } from 'src/app/service/admin.service';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(public db:AngularFireAuth,public user:UserService) { }

  ngOnInit() {
  }
  signin(signinForm:NgForm)
  {
    console.log(signinForm.value)
    this.user.usersignin(signinForm.value.email,signinForm.value.password)
    //signinForm.reset()
  }
}
