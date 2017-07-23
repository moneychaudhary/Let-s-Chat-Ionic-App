import { Component } from '@angular/core';
import {NavController} from "ionic-angular";

@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {

  constructor(private navCtrl : NavController) {
  }


  public navigationToPage(page:string) :void {
    page === 'TabsPage' ? this.navCtrl.setRoot(page):this.navCtrl.push(page);
  }
}
