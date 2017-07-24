import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Profile} from "../../models/profile.interface";
@IonicPage()

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  existingProfile:Profile;

  constructor(public navCtrl: NavController) {
  }

  getExistingProfile(existingProfile:Profile)
  {
    this.existingProfile=existingProfile;
  }

  navigateToEditProfile()
  {
    this.navCtrl.push('EditProfilePage',{
      existingProfile : this.existingProfile,
      wantBack:true
    })
  }

}
