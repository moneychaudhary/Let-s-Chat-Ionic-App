import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Channel} from "../../models/channel.interface";
import {ChatService} from "../../providers/chat.service";
import {FirebaseListObservable} from "angularfire2/database";
import {ChannelMessage} from "../../models/channel-message.interface";

@IonicPage()
@Component({
  selector: 'page-channel-chat',
  templateUrl: 'channel-chat.html',
})
export class ChannelChatPage {

  channel:Channel;
  channelMessage:FirebaseListObservable<ChannelMessage[]>

  constructor(private chatService:ChatService,private navCtrl: NavController, private navParams: NavParams) {
    this.channel =  this.navParams.get('channel');
  }

  ionViewDidLoad() {
    this.channelMessage=this.chatService.getChannelChatRef(this.channel.$key);
  }

  sendMessage(message:string)
  {
    let channelMessage:ChannelMessage={
        content:message
    }

    this.chatService.sendChannelChatMessage(channelMessage,this.channel.$key);
  }

}
