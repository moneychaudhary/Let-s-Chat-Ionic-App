import {Injectable} from "@angular/core";
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import {Channel} from "../models/channel.interface";
import {ChannelMessage} from "../models/channel-message.interface";
import {Message} from "../models/message.interface";
import {AuthService} from "./auth.serivce";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/first";
import "rxjs/add/observable/forkJoin";

@Injectable()
export class ChatService{

  constructor(private database:AngularFireDatabase,private authService:AuthService)
  {

  }

  addChannel(channelName:string)
  {
    this.database.list('/channels-name/').push({
      name:channelName
    });
  }

  getChannelsListRef():FirebaseListObservable<Channel>
  {
    return this.database.list('channels-name');
  }

  getChannelChatRef(channelKey:string)
  {
    return this.database.list('channels-name/'+channelKey+'/data');

  }


  async sendChannelChatMessage(message:ChannelMessage,key:string)
  {
    await this.database.list('channels-name/'+key+'/data').push(message);
  }

  async sendChat(message:Message)
  {
    await this.database.list('/messages/').push(message);
  }

  getChat(userTwoId:string)
  {
    return this.authService.getAuthenticatedUser().
    map(auth => auth.uid).
      mergeMap(uid =>this.database.list('/user-messages/'+uid+'/'+userTwoId)).
      mergeMap(chats=> {
        return Observable.forkJoin(
          chats.map(chat=>this.database.object('/messages/'+chat.$key).first()),
          (...vals:Message[])=>{
            console.log(vals);
            return vals;
          }
        )
    })
    ;
  }

  getLastMessagesForUser():Observable<Message[]>{
    return this.authService.getAuthenticatedUser().
      map(auth=>auth.uid).
      mergeMap(authId=>this.database.list('/last-message/'+authId)).
      mergeMap(messageIds =>{
        return Observable.forkJoin(messageIds.map(message=>{
          return this.database.object('/messages/'+message.key).first()
        }),
          (...vals)=>{
          return vals;
          }
        )
    })
  }
}
