import {Component, EventEmitter, OnDestroy, Output} from '@angular/core';
import {Profile} from "../../models/profile.interface";
import {FirebaseService} from "../../providers/firebase.serivce";
import {AuthService} from "../../providers/auth.serivce";
import {Subscription} from "rxjs/Subscription";
import {User} from "firebase/app";

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
export class EditProfileFormComponent implements OnDestroy{

  @Output() editProfileResult : EventEmitter<Boolean>;

  profile  = {} as Profile;
  private authenticatedUser$ : Subscription;
  private authenticateUser:User;
  constructor(private firebaseService : FirebaseService, private authService : AuthService) {
    this.editProfileResult =  new EventEmitter<Boolean>();
    this.authenticatedUser$ = this.authService.getAuthenticatedUser().subscribe(
      (user:User)=> this.authenticateUser = user
    );
  }

  async saveProfile()
  {
    if (this.authenticateUser)
    {
      const result = await this.firebaseService.saveProfile(this.authenticateUser,this.profile);
      this.editProfileResult.emit(result);
    }

  }

  ngOnDestroy()
  {
    this.authenticatedUser$.unsubscribe();
  }
}
