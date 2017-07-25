import {Component} from '@angular/core';
import {IonicPage, NavController, ToastController} from "ionic-angular";
import {LoginResponse} from "../../models/login-response.interface";
import {FirebaseService} from "../../providers/firebase.serivce";


@IonicPage()

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private toastController : ToastController,private navCtrl:NavController,private firebaseService: FirebaseService) {
  }

  login(event : LoginResponse)
  {
    if (!event.error)
    {
      this.firebaseService.getAuthenticatedUserProfile().subscribe(
        profile=>{
          this.navCtrl.setRoot('TabsPage');
        }
      );
    }
    else {
      this.toastController.create({
        message : event.error.message,
        duration:3000
      }).present();
    }

  }

}
