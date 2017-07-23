import { Component } from '@angular/core';
import {IonicPage, ToastController} from 'ionic-angular';



@IonicPage()

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(private toastController:ToastController) {
  }

  register(event : any)
  {
    if (!event.error)
    {
      this.toastController.create({
        message : "Account Created:"+event.result.email,
        duration:3000
      }).present();
    }
    else {
      this.toastController.create({
        message : event.error.message,
        duration:3000
      }).present();
    }
  }

}
