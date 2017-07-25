import {Component, OnInit} from '@angular/core';
import {ChatService} from "../../providers/chat.service";
import {Message} from "../../models/message.interface";
import {Observable} from "rxjs/Observable";
import {NavController} from "ionic-angular";

@Component({
  selector: 'app-last-message',
  templateUrl: 'last-message.component.html'
})
export class LastMessageComponent implements OnInit{

  messageList$:Observable<Message[]>;

  ngOnInit(): void {
    this.messageList$ =  this.chatService.getLastMessagesForUser();
  }


  constructor(private chatService:ChatService,private navCtrl:NavController) {

  }


  navigateToMessage(message:Message){
    const selectedProfile = {
      $key:message.userToId,
      firstName:message.userToProfile.firstName,
      lastName:message.userToProfile.lastName
    };
      this.navCtrl.push('MessagePage',{
        profile:selectedProfile
      })
  }

}
