import { Injectable } from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import {LoginResponse} from "../models/login-response.interface";
import {Account} from "../models/account.interface";


@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth) {
  }

  getAuthenticatedUser()
  {
    return this.afAuth.authState;
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
        response : await this.afAuth.auth.createUserWithEmailAndPassword(account.email,account.password)
      };
    }catch (e)
    {
      return <LoginResponse>{
        error : e
      };
    }
  }


  signOut()
  {
    this.afAuth.auth.signOut();
  }
}
