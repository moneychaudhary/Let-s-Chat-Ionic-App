import {Component, EventEmitter, Output} from '@angular/core';
import {Account} from "../../models/account.interface";
import {AuthService} from "../../providers/auth.serivce";
import {LoginResponse} from "../../models/login-response.interface";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register-form',
  templateUrl: 'register-form.component.html'
})
export class RegisterFormComponent {

  account = {} as Account;
  @Output() registerStatus:EventEmitter<LoginResponse>;
  registerFormGroup:FormGroup;

  constructor(private authService: AuthService,private formBuilder:FormBuilder) {
    this.registerStatus = new EventEmitter<LoginResponse>();
    this.registerFormGroup = this.formBuilder.group({
      email : ['',Validators.compose([Validators.required,Validators.email])],
      password : ['',Validators.compose([Validators.required,Validators.minLength(6)])],
      confirmPassword : ['',Validators.compose([Validators.required,this.validatePasswordConfirmation.bind(this)])]
    });
  }


  async onSignUp() {
      const result = await this.authService.signUpWithEmailandPassword(this.account);
      this.registerStatus.emit(result);
  }

  validatePasswordConfirmation(control: FormControl): any {
    if(this.registerFormGroup) {
      return control.value === this.registerFormGroup.get('password').value ? null : { notSame: true}
    }
  }

}
