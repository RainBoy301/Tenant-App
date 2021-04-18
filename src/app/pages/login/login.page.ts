import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

//angular fire authentication
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

//app->firestore communication
import * as firebase from 'firebase/app';

//storage
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  email: string = ""
  password: string = ""

  constructor(
    public auth: AngularFireAuth,
    public alert: AlertController,
    public router: Router,
    public storage: Storage) {

  }


  ngOnInit() {
  }

  async login() {
    const { email, password } = this
    try {
      const res = await this.auth.signInWithEmailAndPassword(email, password)
      if (email == "moderator@findaplace.com") {
        await this.storage.set('email', email)
        this.showAlert("Welcome back Moderator!", "now get back to work...")
        this.router.navigate(['/moderator-default'])
      }
      else {
        this.showAlert("Welcome!", "Feel free to browse!")

        await this.storage.set('email', email);

        this.router.navigate(['/home'])

        //testing get variable
        this.storage.get('email').then((val) => {
          console.log('Your email is', val);
        });

      }
    } catch(err) {
      this.showAlert("Whoops!", "The email or password you provided is invalid, or the account does not exist")
      console.dir(err)
    }
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["Ok"]
    })

    await alert.present();
  }

}
