import { NgModule } from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {LoginFormComponent} from "./login-form/login-form.component";
import {RegisterFormComponent} from "./register-form/register-form.component";
import {AngularFireAuthModule} from "angularfire2/auth";


@NgModule({
  declarations: [
    LoginFormComponent,
    RegisterFormComponent
  ],
  imports: [
    IonicModule,
    AngularFireAuthModule
  ],
  exports: [
    LoginFormComponent,
    RegisterFormComponent
  ]
})
export class ComponentsModule {}
