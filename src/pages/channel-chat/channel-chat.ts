import { Component } from '@angular/core';
import {IonicPage, NavParams} from 'ionic-angular';
import {Channel} from "../../models/channel.interface";
import {ChatService} from "../../providers/chat.service";
import {FirebaseListObservable} from "angularfire2/database";
import {ChannelMessage} from "../../models/channel-message.interface";
import {Profile} from "../../models/profile.interface";
import {FirebaseService} from "../../providers/firebase.serivce";

@IonicPage()
@Component({
  selector: 'page-channel-chat',
  templateUrl: 'channel-chat.html',
})
export class ChannelChatPage {

  channel:Channel;
  channelMessage:FirebaseListObservable<ChannelMessage[]>;
  userProfile  =  {} as Profile;

  constructor(private chatService:ChatService, private navParams: NavParams,private firebaseService:FirebaseService) {
    this.channel =  this.navParams.get('channel');
  }

  ionViewDidLoad() {
    this.firebaseService.getAuthenticatedUserProfile().subscribe(profile => {
      this.userProfile =  profile.val();
      this.userProfile.$key = profile.key;
      this.channelMessage=this.chatService.getChannelChatRef(this.channel.$key);
    });
  }

  sendMessage(message:string)
  {
    let channelMessage:ChannelMessage={
        content:message,
        firstName:this.userProfile.firstName,
        lastName:this.userProfile.lastName,
        userKey : this.userProfile.$key,
        avatar:this.userProfile.avatar,

    };

    this.chatService.sendChannelChatMessage(channelMessage,this.channel.$key);
  }

}
