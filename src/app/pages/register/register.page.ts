import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

//angular fire authentication
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

//angular fire store
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  email: string = ""
  password: string = ""
  confirmPassword: string = ""

  constructor(
    public auth: AngularFireAuth,
    public alert: AlertController,
    public router: Router,
    public db: AngularFirestore) { }

  ngOnInit() {
  }

  async register() {

    const { email, password, confirmPassword } = this

    if(password !== confirmPassword) {
      this.showAlert("Whoops!", "Passwords don't match!")
      return console.error("Passwords do not match.")
    }

    try {
      //CREATE USER IN AUTHENTICATION AND ALSO CREATE A DOCUMENT IN COLLECTION 'USERS' WITH THE DOCUMENT NAME 'email'
      const res = await this.auth.createUserWithEmailAndPassword(email, password).then(async user=>{
        this.db.collection("users").doc(email).set({
          email: this.email
        })
      })
        this.auth.signOut()
      this.showAlert("Success!", "Your account has been created.")
      this.router.navigate(['/login'])
      console.log(res)
    } catch(error) {
      console.dir(error)
      this.showAlert("Error", error.message)
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
