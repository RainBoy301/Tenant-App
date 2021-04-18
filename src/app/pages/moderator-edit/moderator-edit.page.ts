import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
@Component({
  selector: 'app-moderator-edit',
  templateUrl: './moderator-edit.page.html',
  styleUrls: ['./moderator-edit.page.scss'],
})
export class ModeratorEditPage implements OnInit {

  constructor(
    private alert: AlertController,
    public router: Router,
    public storage: Storage) { }

  async presentAlert() {
    const alert = await this.alert.create({
      header: 'Alert',
      message: 'This functionality is not yet implemented',
      buttons: ['OK']
    });

    await alert.present();
  }

  ngOnInit() {
    this.storage.get('email').then((val) => {
      if (val == null){
        this.showAlert("Log in required", "Please login first")
        this.router.navigate(['/login'])
      }
    });
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
