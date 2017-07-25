import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {Profile} from "../../models/profile.interface";

@IonicPage()

@Component({
  selector: 'page-search-user',
  templateUrl: 'search-user.html',
})
export class SearchUserPage {

  constructor(public navCtrl: NavController) {
  }


  openChat(profile:Profile)
  {
    this.navCtrl.push('MessagePage',{profile:profile})
  }

}
