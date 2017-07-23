import { Injectable } from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import {LoginResponse} from "../../models/login-response.interface";
import {Account} from "../../models/account.interface";


@Injectable()
export class AuthSerivce {

  constructor(public afAuth: AngularFireAuth) {
  }

  async signInWithEmailandPassword(account:Account)
  {
    try{
      return <LoginResponse>{
        result : await this.afAuth.auth.signInWithEmailAndPassword(account.email,account.password)
      };

    }catch (e)
    {
      return <LoginResponse>{
        error : e
      };
    }
  }

  async signUpWithEmailandPassword(account:Account)
  {
    try{
      return <LoginResponse>{
        result : await this.afAuth.auth.createUserWithEmailAndPassword(account.email,account.password)
      };

    }catch (e)
    {
      return <LoginResponse>{
        error : e
      };
    }
  }
}
