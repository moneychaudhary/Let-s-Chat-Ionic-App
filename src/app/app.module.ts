import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {AngularFireModule} from "angularfire2";

let firebaseConfig = {
  apiKey: "AIzaSyDzgC5gopEz2JIFzfbLK7nXnv_yOmIBqOE",
  authDomain: "lets-chat-2c103.firebaseapp.com",
  databaseURL: "https://lets-chat-2c103.firebaseio.com",
  projectId: "lets-chat-2c103",
  storageBucket: "",
  messagingSenderId: "144672964471"
};

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
