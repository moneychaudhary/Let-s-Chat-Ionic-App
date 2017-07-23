import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseObjectObservable} from "angularfire2/database";
import {User} from "firebase/app";
import {Profile} from "../models/profile.interface";


@Injectable()
export class FirebaseService {

  private profileObject : FirebaseObjectObservable<Profile>;

  constructor(private firbaseDatabase: AngularFireDatabase) {
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
