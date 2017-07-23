import {Profile} from "./profile.interface";

export interface Message{
  User:Profile;
  date :Date;
  lastMessage:string;
}
