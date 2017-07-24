import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {Profile} from "../../models/profile.interface";

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  profile = {} as Profile;
  private sendBack:Boolean = false;

  constructor(private navParams: NavParams, private toastCtrl:ToastController,private navCtrl:NavController ) {
    this.profile =  this.navParams.get('existingProfile');
    this.sendBack = this.navParams.get('wantBack');
  }

  editProfile(event :Boolean)
  {
    if(event)
    {
      if (this.sendBack)
      {
        this.navCtrl.pop();
      }else {
        this.navCtrl.setRoot('TabsPage');
      }
    }
    else {
      this.toastCtrl.create({
        message:'Something went wrong',
        duration:3000
      }).present();
    }
  }

}
