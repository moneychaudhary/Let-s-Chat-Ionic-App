import {Profile} from "../models/profile.interface";
import {Message} from "../models/message.interface";

const userList: Profile[] = [
  {
    firstName: 'Money',
    lastName: 'Chaudahry',
    avatar: 'assets/img/avatar.png',
    email: 'money@gmail.com',
    dateOfBirth :new Date()
  },
  {
    firstName: 'Robin',
    lastName: 'Saharan',
    avatar: 'assets/img/avatar.png',
    email: 'robin@gmail.com',
    dateOfBirth :new Date()

  }, {
    firstName: 'Adarsh',
    lastName: 'Singh',
    avatar: 'assets/img/avatar.png',
    email: 'adarsh@gmail.com',
    dateOfBirth :new Date()

  }, {
    firstName: 'Akhilesh',
    lastName: 'Yadav',
    avatar: 'assets/img/avatar.png',
    email: 'akhislesh@gmail.com',
    dateOfBirth :new Date()
  }
];

const messagesList: Message[] = [
  {
    User: userList[0],
    date: new Date(),
    lastMessage: 'Hello'
  },
  {
    User: userList[1],
    date: new Date()
    ,
    lastMessage: 'Hello'
  }, {
    User: userList[2],
    date: new Date()
    ,
    lastMessage: 'Hello'
  }, {
    User: userList[3],
    date: new Date(),
    lastMessage: 'Hello'
  }
];

export const MESSAGE_LIST = messagesList;
