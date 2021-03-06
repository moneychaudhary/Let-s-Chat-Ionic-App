import { NgModule } from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {LoginFormComponent} from "./login-form/login-form.component";
import {RegisterFormComponent} from "./register-form/register-form.component";
import {EditProfileFormComponent} from "./edit-profie-form/edit-profile-form.component";
import {ProfileViewComponent} from "./profile-view/profile-view.component";
import {ProfileSearchComponent} from "./profile-search/profile-search.component";
import {SendMessageBoxComponent} from "./send-message-box/send-message-box.component";
import {ChatMessageComponent} from "./chat-message/chat-message.component";
import {OnlineUsersComponent} from "./online-users/online-users.component";
import {LastMessageComponent} from "./last-message/last-message.component";
import 'firebase/storage';


@NgModule({
  declarations: [
    LoginFormComponent,
    RegisterFormComponent,
    EditProfileFormComponent,
    ProfileViewComponent,
    ProfileSearchComponent,
    SendMessageBoxComponent,
    ChatMessageComponent,
    OnlineUsersComponent,
    LastMessageComponent
  ],
  imports: [
    IonicModule
  ],
  exports: [
    LoginFormComponent,
    RegisterFormComponent,
    EditProfileFormComponent,
    ProfileViewComponent,
    ProfileSearchComponent,
    SendMessageBoxComponent,
    ChatMessageComponent,
    OnlineUsersComponent,
    LastMessageComponent

  ]
})
export class ComponentsModule {}
