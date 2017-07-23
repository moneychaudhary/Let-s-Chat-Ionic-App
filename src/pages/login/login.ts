import {Component} from '@angular/core';
import {IonicPage, NavController, ToastController} from "ionic-angular";
import {LoginResponse} from "../../models/login-response.interface";


@IonicPage()

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private toastController : ToastController,private navCtrl:NavController) {
  }

  login(event : LoginResponse)
  {
    if (!event.error)
    {
      this.toastController.create({
        message : "Welcome to Let's Chat, "+event.result.email,
        duration:3000
      }).present();
     this.navCtrl.setRoot('ProfilePage');
    }
    else {
      this.toastController.create({
        message : event.error.message,
        duration:3000
      }).present();
    }

  }

}
