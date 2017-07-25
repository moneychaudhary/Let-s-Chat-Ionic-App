import {Component, OnInit} from '@angular/core';
import {FirebaseService} from "../../providers/firebase.serivce";
import {FirebaseListObservable} from "angularfire2/database";
import {Profile} from "../../models/profile.interface";
import {NavController} from "ionic-angular";

/**
 * Generated class for the OnlineUsersComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'app-online-users',
  templateUrl: 'online-users.component.html'
})
export class OnlineUsersComponent implements OnInit{
  ngOnInit(): void {
    this.setUserOnline();
    this.getOnlineUsers();
  }

  onlineUsers:FirebaseListObservable<Profile[]>;


  constructor(private firbaseService:FirebaseService,private navCtrl:NavController) {

  }


  setUserOnline()
  {
    this.firbaseService.getAuthenticatedUserProfile().subscribe(profile =>{

      this.firbaseService.setUserOnline(profile.val(),profile.key);
    });

  }


  getOnlineUsers()
  {
    this.onlineUsers =  this.firbaseService.getOnlineUsers();
    console.log(this.onlineUsers);
  }


  openChat(profile:Profile)
  {
    this.navCtrl.push('MessagePage',{
      profile:profile
    })
  }

}
