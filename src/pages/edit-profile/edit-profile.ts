import { Component } from '@angular/core';
import {IonicPage, NavController, ToastController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  constructor(public navCtrl: NavController, private toastCtrl:ToastController) {
  }

  editProfile(event :Boolean)
  {
    if(event)
    {
      this.navCtrl.setRoot('TabsPage');
    }
    else {
      this.toastCtrl.create({
        message:'Something went wrong',
        duration:3000
      }).present();
    }
  }

}
