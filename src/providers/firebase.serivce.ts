import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2/database";
import {database, User} from "firebase/app";
import {Profile} from "../models/profile.interface";
import "rxjs/add/operator/take";
import {AuthService} from "./auth.serivce";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";


@Injectable()
export class FirebaseService {

  private profileObject : FirebaseObjectObservable<Profile>;

  constructor(private firbaseDatabase: AngularFireDatabase,private authService:AuthService) {
  }

  getAuthenticatedUserProfile()
  {
    return this.authService.getAuthenticatedUser().map(user => user.uid).
      mergeMap(uid => this.firbaseDatabase.object('/profile/'+uid,{preserveSnapshot:true}))
      .take(1);
  }

  async saveProfile(user:User,profile:Profile)
  {
    this.profileObject =  this.firbaseDatabase.object('/profile/'+user.uid);
    profile.email = user.email;
    try{
      await this.profileObject.set(profile);
      return true;
    }
    catch (e)
    {
      console.error(e);
      return false;
    }

  }

   searchUser(firstName:string)
  {
    const query = this.firbaseDatabase.list('/profile',{
      query:{
        orderByChild:'firstName',
        equalTo:firstName
      }
    });

    return query.take(1);
  }


  setUserOnline(profile:Profile,key)
  {
    const ref = database().ref('online-users/'+key);
    try
    {
      ref.update({...profile});
      ref.onDisconnect().remove();
    }
    catch (error)
    {
      console.error(error);
    }
  }

  getOnlineUsers():FirebaseListObservable<Profile[]>
  {
   return this.firbaseDatabase.list('online-users');
  }
}
