import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// Firebase
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule,AngularFireDatabase,} from "@angular/fire/database";
import { AngularFireAuthModule } from "@angular/fire/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyBqTlsjVvUTvBSOqq2DqwR12IzA_MR1AXA",
  authDomain: "fir-ionic-c7779.firebaseapp.com",
  databaseURL: "https://fir-ionic-c7779.firebaseio.com",
  projectId: "fir-ionic-c7779",
  storageBucket: "fir-ionic-c7779.appspot.com",
  messagingSenderId: "999120183",
  appId: "1:999120183:web:3fbcdc3d9f4f6bbb9f0eb2",
};

@NgModule({
  declarations: [MyApp, HomePage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ],
})
export class AppModule {}
