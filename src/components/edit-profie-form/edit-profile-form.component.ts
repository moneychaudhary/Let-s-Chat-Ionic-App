import { Component } from '@angular/core';
import {Profile} from "../../models/profile.interface";

/**
 * Generated class for the EditProfieFormComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'app-edit-profile-form',
  templateUrl: 'edit-profile-form.component.html'
})
export class EditProfileFormComponent {


  profile  = {} as Profile;
  constructor() {

  }

  saveProfile()
  {

  }
}
