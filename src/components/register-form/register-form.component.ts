import {Component} from '@angular/core';
import {Account} from "../../models/account.interface";
import {ToastController} from "ionic-angular";
import {AngularFireAuth} from "angularfire2/auth";

@Component({
  selector: 'app-register-form',
  templateUrl: 'register-form.component.html'
})
export class RegisterFormComponent {

  account = {} as Account;

  constructor(private toastController: ToastController, private afAuth: AngularFireAuth) {

  }


  async onSignUp() {
    try {

      const result = await this.afAuth.auth.createUserWithEmailAndPassword(
        this.account.email,
        this.account.password
      );
      console.log(result);
      this.toastController.create({
        message: 'Account Created Successfully',
        duration: 3000
      }).present();

    }
    catch (e) {
      this.toastController.create({
        message: e.message,
        duration: 3000
      }).present();
    }

  }

}
