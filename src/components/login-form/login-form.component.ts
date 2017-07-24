import {Component, EventEmitter, Output} from '@angular/core';
import {Account} from "../../models/account.interface";
import {LoginResponse} from "../../models/login-response.interface";
import {AuthService} from "../../providers/auth.serivce";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {


  account = {}  as Account;
  registerPage:string = 'RegisterPage';
  loginFormGroup:FormGroup;


  @Output() loginStatus: EventEmitter<LoginResponse>;

  constructor(private authService: AuthService, private formBuilder:FormBuilder) {
    this.loginStatus = new EventEmitter<LoginResponse>();
    this.loginFormGroup =  this.formBuilder.group({
      email : ['',Validators.compose([Validators.required,Validators.email])],
      password : ['',Validators.compose([Validators.required,Validators.minLength(6)])]
    });
  }


  async onLogin() {
      const result: LoginResponse = await this.authService.signInWithEmailandPassword(this.account);
    this.loginStatus.emit(result);
  }
}
