import {Component} from '@angular/core';
import {IonicPage, NavParams} from 'ionic-angular';
import {Profile} from "../../models/profile.interface";
import {Message} from "../../models/message.interface";
import {AuthService} from "../../providers/auth.serivce";
import {FirebaseService} from "../../providers/firebase.serivce";
import {ChatService} from "../../providers/chat.service";
import {Observable} from "rxjs/Observable";

@IonicPage()

@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})

export class MessagePage {

  selectedProfile: Profile;
  messageList:  Observable<Message[]>;
  userId: string;
  profile: Profile;

  constructor(private firebaseService: FirebaseService,public chatService: ChatService, public navParams: NavParams, private auth: AuthService) {
  }

  ionViewWillLoad() {
    this.selectedProfile = this.navParams.get('profile');
    this.auth.getAuthenticatedUser().subscribe(auth => this.userId = auth.uid);
    this.firebaseService.getAuthenticatedUserProfile().subscribe(profile => {
      this.profile = profile.val();
      this.profile.$key = profile.key;
    });
    this.messageList= this.chatService.getChat(this.selectedProfile.$key);

  }

  async send(content: string) {
    try {
      const message: Message = {
        content: content,
        userToId: this.selectedProfile.$key,
        userToProfile: {
          firstName: this.selectedProfile.firstName,
          lastName: this.selectedProfile.lastName,
        },
        userFromId: this.profile.$key,
        userFromProfile: {
          firstName: this.profile.firstName,
          lastName: this.profile.lastName,
        },
      };
      this.chatService.sendChat(message);

    }
    catch (error) {

    }
  }


}
