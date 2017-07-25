import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {Profile} from "../../models/profile.interface";
import {AuthService} from "../../providers/auth.serivce";
@IonicPage()

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  existingProfile:Profile;

  constructor(public navCtrl: NavController,private authService:AuthService) {
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

  signOut()
  {
  this.authService.signOut();
  this.navCtrl.setRoot('LoginPage');
  }

}
