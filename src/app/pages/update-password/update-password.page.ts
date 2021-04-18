import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
//angular fire authentication
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
//angular fire store
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';

import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.page.html',
  styleUrls: ['./update-password.page.scss'],
})
export class UpdatePasswordPage implements OnInit {


  newPassword: string = ""
  confirmPassword: string = ""
  constructor(
    public auth: AngularFireAuth,
    public alert: AlertController,
    public router: Router,
    public db: AngularFirestore,
    public storage: Storage ) { }

  ngOnInit() {

  }
  async updatePassword() {

    const {  newPassword, confirmPassword } = this

    if(newPassword !== confirmPassword) {
      this.showAlert("Whoops!", "Passwords don't match!")
      return console.error("Passwords do not match.")
    }else{

        this.auth.onAuthStateChanged(function(user) {
          if (user) {
            
            user.updatePassword(newPassword).then(function() {

            }).catch(function(error) {
              console.log(error)
            });

          }else {

          }
        });

        this.showAlert("Success","Password updated")
        this.router.navigate(['/home'])
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
