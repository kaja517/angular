import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllelectronicComponent } from './home/allelectronic/allelectronic.component';
import { AddelectronicComponent } from './home/addelectronic/addelectronic.component';
import { BlogComponent } from './blog/blog.component';
import { AdminComponent } from './admin/admin.component';

import { AdminsigninComponent } from './admin/adminsignin/adminsignin.component';
import { AuthComponent } from './admin/auth/auth.component';
import { SigninComponent } from './admin/auth/signin/signin.component';
import { SignupComponent } from './admin/auth/signup/signup.component';
import { AdminauthgardService } from './service/adminauthgard.service';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:' ',component:AllelectronicComponent},
  {path:'addelectronic', canActivate:[AdminauthgardService], component:AddelectronicComponent},
  {path:'blog',component:BlogComponent},
 { path: 'admin', component: AdminComponent},
 
  {path:'admin/adminsignin' , component:AdminsigninComponent },
{path:'auth',component:AuthComponent},
{path:'auth/signin' , component:SigninComponent },
  {path:'auth/signup' , component:SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
