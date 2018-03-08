import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Events } from 'ionic-angular';

/* import { HomePage } from '../pages/home/home'; */

import { FirstTabPage } from '../pages/first-tab/first-tab';
import {MainpagePage} from '../pages/mainpage/mainpage' ;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = FirstTabPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public events: Events) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    events.subscribe('user:login', () => {
      this.loggedIn();
    });
  }
  

  loggedIn(){
    this.rootPage = MainpagePage;
  }

}

