import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseObjectObservable} from "angularfire2/database";
import {User} from "firebase/app";
import {Profile} from "../models/profile.interface";
import "rxjs/add/operator/take";


@Injectable()
export class FirebaseService {

  private profileObject : FirebaseObjectObservable<Profile>;

  constructor(private firbaseDatabase: AngularFireDatabase) {
  }

  getProfile(user:User)
  {
    this.profileObject =  this.firbaseDatabase.object('/profile/'+user.uid,{preserveSnapshot:true});
    return this.profileObject.take(1);
  }

  async saveProfile(user:User,profile:Profile)
  {
    this.profileObject =  this.firbaseDatabase.object('/profile/'+user.uid);

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
}
