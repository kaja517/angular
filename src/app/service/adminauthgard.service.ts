import { Injectable } from '@angular/core';
import { AdminService } from './admin.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminauthgardService {

  constructor(public adminservice:AdminService,public router:Router) { }

canActivate():boolean{
  if(this.adminservice.isauthenticated()){
    return true;
  }
  else{
    this.router.navigateByUrl('/admin/adminsignin')
    return false;
  }
}

}

