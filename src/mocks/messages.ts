import {User} from "../models/user.interface";
import {Message} from "../models/message.interface";

const userList: User[] = [
  {
    firstName: 'Money',
    lastName: 'Chaudahry',
    avatar: 'assets/img/avatar.png',
    email: 'money@gmail.com'
  },
  {
    firstName: 'Robin',
    lastName: 'Saharan',
    avatar: 'assets/img/avatar.png',
    email: 'robin@gmail.com'
  }, {
    firstName: 'Adarsh',
    lastName: 'Singh',
    avatar: 'assets/img/avatar.png',
    email: 'adarsh@gmail.com'
  }, {
    firstName: 'Akhilesh',
    lastName: 'Yadav',
    avatar: 'assets/img/avatar.png',
    email: 'akhislesh@gmail.com'
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
