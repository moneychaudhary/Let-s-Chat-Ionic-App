import {Component} from '@angular/core';
import {NavController, ToastController} from "ionic-angular";
import {Account} from "../../models/account.interface";
import {AngularFireAuth} from "angularfire2/auth";

@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {


  account = {}  as Account;

  constructor(private toastController: ToastController, private navCtrl: NavController, private afAuth: AngularFireAuth) {
  }


  public navigationToPage(page: string): void {
    page === 'TabsPage' ? this.navCtrl.setRoot(page) : this.navCtrl.push(page);
  }


  async onLogin() {
    try {
      const result =
        await this.afAuth.auth.signInWithEmailAndPassword(
          this.account.email,
          this.account.password);
      this.toastController.create({
        message: 'Login Successfully',
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
