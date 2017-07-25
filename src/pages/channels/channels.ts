import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController} from 'ionic-angular';
import {ChatService} from "../../providers/chat.service";
import {Channel} from "../../models/channel.interface";
import {FirebaseListObservable} from "angularfire2/database";

@IonicPage()
@Component({
  selector: 'page-channels',
  templateUrl: 'channels.html',
})
export class ChannelsPage {

  constructor(private navCtrl:NavController,private chatService:ChatService, private alertCtrl: AlertController) {
  }

  channelList:FirebaseListObservable<Channel[]>;

  ionViewDidLoad() {
    this.getChannels();
  }

  showAddChannelDialog() {
    this.alertCtrl.create({
      title: 'Channel Name',
      inputs: [{
        name: 'channelName'
      }],
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      },
        {
          text: 'Add',
          handler : data =>{
            this.chatService.addChannel(data.channelName);
          }

        }]
    }).present();
  }

  getChannels()
  {
    this.channelList=this.chatService.getChannelsListRef();
  }

  selectChannel(channel:Channel)
  {
    this.navCtrl.push('ChannelChatPage',{
      channel:channel
    })
  }

}
