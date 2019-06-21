import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AdminService } from 'src/app/service/admin.service';
@Component({
  selector: 'app-adminsignin',
  templateUrl: './adminsignin.component.html',
  styleUrls: ['./adminsignin.component.scss']
})
export class AdminsigninComponent implements OnInit {

  constructor(public admin:AdminService, public db:AngularFireAuth) { }

  ngOnInit() {
  }
  adminsignin(adminsigninForm:NgForm)
  {
console.log(adminsigninForm.value)
this.admin.adminsignin(adminsigninForm.value.email,adminsigninForm.value.password)
adminsigninForm.reset()
  }
}
