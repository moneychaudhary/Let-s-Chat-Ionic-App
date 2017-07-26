import {Component, EventEmitter, Inject, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Profile} from "../../models/profile.interface";
import {AuthService} from "../../providers/auth.serivce";
import {Subscription} from "rxjs/Subscription";
import {User} from "firebase/app";
import {Camera} from "@ionic-native/camera";
import {UtilProvider} from "../../providers/util-provider";
import * as firebase from 'firebase/app';
import {FirebaseService} from "../../providers/firebase.serivce";





@Component({
  selector: 'app-edit-profile-form',
  templateUrl: 'edit-profile-form.component.html'
})
export class EditProfileFormComponent implements OnInit, OnDestroy {

  imageUrl: string;



  ngOnInit(): void {
    if (!this.profile) {
      this.profile = {} as Profile;
      this.profile.avatar = 'assets/img/image.png'
    }
  }

  @Output() editProfileResult: EventEmitter<Boolean>;

  @Input() profile: Profile;
  private authenticatedUser$: Subscription;
  private authenticateUser: User;

  constructor(private utilProvide:UtilProvider,private firebaseService: FirebaseService,private authService: AuthService, private camera: Camera) {
    this.editProfileResult = new EventEmitter<Boolean>();
    this.authenticatedUser$ = this.authService.getAuthenticatedUser().subscribe(
      (user: User) => this.authenticateUser = user
    );
  }

  async saveProfile() {
    if (this.authenticateUser) {
      let storageRef = firebase.storage().ref();
      // Create a timestamp as filename
      const filename = Math.floor(Date.now() / 1000);

      // Create a reference to 'images/todays-date.jpg'
      const imageRef = storageRef.child(`images/${filename}.jpg`);

      imageRef.putString(this.imageUrl, firebase.storage.StringFormat.DATA_URL).then((snapshot)=> {
        this.imageUrl = snapshot.downloadURL;
        this.profile.avatar =  snapshot.downloadURL;
        this.firebaseService.saveProfile(this.authenticateUser,this.profile).then((result)=>{
         this.editProfileResult.emit(result);
       });
      });
    }

  }


  ngOnDestroy() {
    this.authenticatedUser$.unsubscribe();
  }

  captureImage() {
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      destinationType: this.camera.DestinationType.DATA_URL,
      allowEdit: true, // here it allow to edit pic.
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    }).then((imageData) => {
      this.imageUrl = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
    });
  }
}
