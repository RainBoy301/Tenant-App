import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
//angular fire authentication
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  email: string = ""
  constructor(
    public auth: AngularFireAuth,
    public alert: AlertController,
    public router: Router) {

  }


  ngOnInit() {
  }

  async recovery(){
    const {email} = this
    try{
      const res = await this.auth.sendPasswordResetEmail(email)
      this.showAlert("Password Recovery", "An reset password link has been sent to your email")
      this.router.navigate(['/login'])
    }catch(err){
      this.showAlert("Error", "The email you provided is invalid, or the account does not exist")
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
