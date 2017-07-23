import {User} from "./user.interface";

export interface Message{
  User:User;
  date :Date;
  lastMessage:string;
}
