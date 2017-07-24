import {Component, OnInit} from '@angular/core';
import {FirebaseService} from "../../providers/firebase.serivce";
import {AuthService} from "../../providers/auth.serivce";
import {User} from "firebase/app";
import {Profile} from "../../models/profile.interface";
import {Loading, LoadingController} from "ionic-angular";


@Component({
  selector: 'app-profile-view',
  templateUrl: 'profile-view.component.html'
})
export class ProfileViewComponent implements OnInit{

  profile:Profile;
  loading:Loading;

  ngOnInit(): void {
    this.loading.present();
    this.authService.getAuthenticatedUser().subscribe((user:User)=>
    {

      this.firebaseService.getProfile(user).subscribe((profile)=>{
        this.profile = <Profile>profile.val();
        this.profile.email = user.email;
        this.loading.dismiss();
       });
    });
  }


  constructor(private firebaseService:FirebaseService, private authService:AuthService,private loadingCtrl:LoadingController) {
    this.loading=  this.loadingCtrl.create({
      content:'Profile Loading...'
    });
  }

}
