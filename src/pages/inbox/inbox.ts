import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html',
})
export class InboxPage {

  // messageList:Message[] = MESSAGE_LIST;
  searchUserPage:string='SearchUserPage';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}
