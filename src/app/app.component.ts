import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate : any;
  constructor(
    public auth: AngularFireAuth,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public storage: Storage
  ) {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  sideMenu()
  {
    this.navigate =
    [
      {
        title : "Home",
        url   : "home",
        icon  : "home"
      },
      {
        title : "Create Listings",
        url   : "create",
        icon  : "add-circle-outline"
      },
      {
        title : "Your Listings",
        url   : "your-listings",
        icon  : "bookmark-outline"
      },
      {
        title: "Change Password",
        url: "update-password",
        icon: "alert-circle-outline"
      },
      {
        title: "Logout",
        url: "login",
        icon: "exit-outline"
      },
      {
        title: "About",
        url: "about",
        icon: "help-circle-outline"
      }
    ]
  }
  logout(title: string){



    if(title == "Logout"){
      this.auth.signOut()
      this.storage.remove('email')
      this.storage.get('email').then((val) => {
        console.log('Your email is', val);
      });
    }
  }
}
