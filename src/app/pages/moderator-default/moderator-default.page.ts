import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-moderator-default',
  templateUrl: './moderator-default.page.html',
  styleUrls: ['./moderator-default.page.scss'],
})
export class ModeratorDefaultPage implements OnInit {

  constructor(
  public router: Router,
  public storage: Storage,
  private alert: AlertController) { }

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
