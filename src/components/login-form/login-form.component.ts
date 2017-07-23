import {Component, EventEmitter, Output} from '@angular/core';
import {Account} from "../../models/account.interface";
import {AngularFireAuth} from "angularfire2/auth";
import {LoginResponse} from "../../models/login-response.interface";

@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {


  account = {}  as Account;
  registerPage:string = 'RegisterPage';

  @Output() loginStatus: EventEmitter<LoginResponse>;

  constructor(private afAuth: AngularFireAuth) {
    this.loginStatus = new EventEmitter<LoginResponse>();
  }


  async onLogin() {
    try {
      const result: LoginResponse = {
        result: await this.afAuth.auth.signInWithEmailAndPassword(
          this.account.email,
          this.account.password)
      };
      this.loginStatus.emit(result);
    }
    catch (e) {
      const err:LoginResponse = {
        error: e
      };
      this.loginStatus.emit(err);
    }

  }
}
