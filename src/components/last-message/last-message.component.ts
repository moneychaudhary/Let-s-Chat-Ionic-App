import {Component, OnInit} from '@angular/core';
import {ChatService} from "../../providers/chat.service";
import {Message} from "../../models/message.interface";
import {Observable} from "rxjs/Observable";
import {NavController} from "ionic-angular";
import {FirebaseService} from "../../providers/firebase.serivce";
import {Profile} from "../../models/profile.interface";

@Component({
  selector: 'app-last-message',
  templateUrl: 'last-message.component.html'
})
export class LastMessageComponent implements OnInit{

  messageList$:Observable<Message[]>;
  userProfile = {}  as Profile;
  fromImage:string;
  toImage:string;

  ngOnInit(): void {
    this.messageList$ =  this.chatService.getLastMessagesForUser();
    this.firebaseService.getAuthenticatedUserProfile().subscribe(profile=>{
      this.userProfile.$key = profile.key;
    });
  }


  constructor(private chatService:ChatService,private firebaseService:FirebaseService,private navCtrl:NavController) {

  }


  navigateToMessage(message:Message) {
    let selectedProfile = {} as Profile;
    if (this.userProfile.$key === message.userFromId) {

     selectedProfile = {
      $key: message.userToId,
      firstName: message.userToProfile.firstName,
      lastName: message.userToProfile.lastName,
       avatar:message.userToProfile.avatar,
    };
  }
  else {
      selectedProfile = {
        $key: message.userFromId,
        firstName: message.userFromProfile.firstName,
        lastName: message.userFromProfile.lastName,
        avatar:message.userFromProfile.avatar,

      };
    }

      this.navCtrl.push('MessagePage',{
        profile:selectedProfile
      })
  }

}
