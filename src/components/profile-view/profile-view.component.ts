import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FirebaseService} from "../../providers/firebase.serivce";
import {Profile} from "../../models/profile.interface";
import {Loading, LoadingController} from "ionic-angular";


@Component({
  selector: 'app-profile-view',
  templateUrl: 'profile-view.component.html'
})
export class ProfileViewComponent implements OnInit{

  profile:Profile;
  loading:Loading;
  imageUrl:String;

  @Output() existingProfile:EventEmitter<Profile>;

  ngOnInit(): void {
    this.imageUrl = 'assets/img/image.png';
    this.loading.present();
    this.firebaseService.getAuthenticatedUserProfile().subscribe((profile)=>
    {
      this.profile = <Profile>profile.val();
      this.imageUrl = this.profile.avatar;
        this.existingProfile.emit(this.profile);
      this.loading.dismiss();
    },(error)=>{
      this.loading.dismiss();
    });
  }


  constructor(private firebaseService:FirebaseService,private loadingCtrl:LoadingController) {
    this.existingProfile =  new EventEmitter<Profile>();
    this.loading=  this.loadingCtrl.create({
      content:'Profile Loading...'
    });
  }

}
