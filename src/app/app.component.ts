import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

//Import Firebase
import * as firebase from 'firebase';

//Import Angular HttpClient for API
import { HttpClientModule } from '@angular/common/http';

const config = {
  apiKey: "AIzaSyDAVm_7pHVxXSZBLdGsymABU6s-MB1qqW4",
  authDomain: "gamespot-app.firebaseapp.com",
  databaseURL: "https://gamespot-app.firebaseio.com",
  projectId: "gamespot-app",
  storageBucket: "",
  messagingSenderId: "1048793398613",
  appId: "1:1048793398613:web:f41463f1588e57828f43dc",
  measurementId: "G-L41W6ZSY0L"
};

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Articles',
      url: '/articles',
      icon: 'logo-rss'
    },
    {
      title: 'Reviews',
      url: '/reviews',
      icon: 'logo-game-controller-b'
    },
    {
      title: 'Releases',
      url: '/releases',
      icon: 'logo-game-controller-a'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.backgroundColorByHexString("#000");
      this.splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}
