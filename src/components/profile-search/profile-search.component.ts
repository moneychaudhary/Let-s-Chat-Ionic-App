import {Component, EventEmitter, Output} from '@angular/core';
import {FirebaseService} from "../../providers/firebase.serivce";
import {Profile} from "../../models/profile.interface";

@Component({
  selector: 'app-profile-search',
  templateUrl: 'profile-search.component.html'
})
export class ProfileSearchComponent {

  query: string;
  profileList:Profile[];

  @Output() selectedProfileEvent:EventEmitter<Profile>;

  constructor(private firebaseService:FirebaseService) {
    this.selectedProfileEvent =  new EventEmitter<Profile>();
  }


  searchUser(query:string)
  {
    let trimmedQuery = this.query.trim();
    if (trimmedQuery ===this.query)
    {
      this.firebaseService.searchUser(query).subscribe(profiles=>{
        this.profileList = profiles;
      });
    }
  }


  selectProfile(profile:Profile)
  {
    this.selectedProfileEvent.emit(profile);
  }

}
