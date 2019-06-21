import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AdminsigninComponent } from './admin/adminsignin/adminsignin.component';
import { AuthComponent } from './admin/auth/auth.component';
import { SigninComponent } from './admin/auth/signin/signin.component';
import { SignupComponent } from './admin/auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AddelectronicComponent } from './home/addelectronic/addelectronic.component';
import { AllelectronicComponent } from './home/allelectronic/allelectronic.component';
import { SingleelectronicComponent } from './home/allelectronic/singleelectronic/singleelectronic.component';
import { BlogComponent } from './blog/blog.component';
import { AddblogComponent } from './blog/addblog/addblog.component';
import { EnquiresComponent } from './enquires/enquires.component';
import { IndexComponent } from './home/index/index.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

//import { FlexLayoutModule } from "@angular/flex-layout";
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminsigninComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    AddelectronicComponent,
    AllelectronicComponent,
    SingleelectronicComponent,
    BlogComponent,
    AddblogComponent,
    EnquiresComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
   // FlexLayoutModule,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
