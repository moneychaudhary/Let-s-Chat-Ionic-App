import {Component, EventEmitter, Output} from '@angular/core';
import {Account} from "../../models/account.interface";
import {LoginResponse} from "../../models/login-response.interface";
import {AuthService} from "../../providers/auth.serivce";

@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {


  account = {}  as Account;
  registerPage:string = 'RegisterPage';

  @Output() loginStatus: EventEmitter<LoginResponse>;

  constructor(private authService: AuthService) {
    this.loginStatus = new EventEmitter<LoginResponse>();
  }


  async onLogin() {
      const result: LoginResponse = await this.authService.signInWithEmailandPassword(this.account);
      this.loginStatus.emit(result);
  }
}
