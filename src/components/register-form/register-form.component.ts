import {Component, EventEmitter, Output} from '@angular/core';
import {Account} from "../../models/account.interface";
import {AuthSerivce} from "../../providers/auth/auth.serivce";
import {LoginResponse} from "../../models/login-response.interface";

@Component({
  selector: 'app-register-form',
  templateUrl: 'register-form.component.html'
})
export class RegisterFormComponent {

  account = {} as Account;
  @Output() registerStatus:EventEmitter<LoginResponse>;

  constructor(private authService: AuthSerivce) {
    this.registerStatus = new EventEmitter<LoginResponse>();
  }


  async onSignUp() {
      const result = await this.authService.signUpWithEmailandPassword(this.account);
      this.registerStatus.emit(result);
  }

}
