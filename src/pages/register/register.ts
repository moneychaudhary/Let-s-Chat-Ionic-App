import { Component } from '@angular/core';
import {IonicPage, NavController, ToastController} from 'ionic-angular';
import {FirebaseService} from "../../providers/firebase.serivce";



@IonicPage()

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(private toastController:ToastController,private firebaseSerivce:FirebaseService,private navCtrl:NavController) {
  }

  register(event : any)
  {
    if (!event.error)
    {
      this.firebaseSerivce.getAuthenticatedUserProfile().subscribe(
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
