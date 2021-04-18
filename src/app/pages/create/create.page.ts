import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

//storage
import { Storage} from '@ionic/storage';

//firebase storage
import {storage, initializeApp} from 'firebase';

//firestore
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  description: string = ""
  price_per_month: string = ""
  number_of_bathrooms: string = ""
  number_of_bedrooms: string = ""
  address_line_1: string = ""
  address_line_2: string = ""
  city: string = ""
  state: string = ""
  zip_code: string = ""
  contact_name: string = ""
  contact_phone_number: string = ""
  contact_email: string = ""

  owner_of_account_email: string = ""

  currentImage: any;


    constructor(
      private alertController: AlertController,
      public storage: Storage,
      public db: AngularFirestore,
      public router: Router,
      public alert: AlertController,
      public camera : Camera
      ) {       }

    async presentAlert() {
      const alert = await this.alertController.create({
        header: 'Create Alert',
        message: 'Your listing will be notified to an admin for review',
        buttons: ['OK']
      });

      await alert.present();
    }

  ngOnInit() {
    this.storage.get('email').then((val) => {
      this.owner_of_account_email = val
      if (val == null){
        this.showAlert("Login required", "Please login first")
        this.router.navigate(['/login'])
      }
    });
  }
  
//Camera
  takePicture() {
  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };

  this.camera.getPicture(options).then((imageData) => {
    this.currentImage = 'data:image/jpeg;base64,' + imageData;
  }, (err) => {
    // Handle error
    console.log("Camera issue:" + err);
  });
}

  createListing() {
    //save inputs from html to these variables
    const { description, price_per_month, number_of_bathrooms, number_of_bedrooms, address_line_1, address_line_2, city, state, zip_code, contact_name, contact_phone_number, contact_email } = this

    //send the listing to a collection called "creationRequests"
    this.db.collection("creationRequests").doc(this.owner_of_account_email).set({
      description: this.description,
      price_per_month: this.price_per_month,
      number_of_bathrooms: this.number_of_bathrooms,
      number_of_bedrooms: this.number_of_bedrooms,
      address_line_1: this.address_line_1,
      address_line_2: this.address_line_2,
      city: this.city,
      state: this.state,
      zip_code: this.zip_code,
      contact_name: this.contact_name,
      contact_phone_number: this.contact_phone_number,
      contact_email: this.contact_email,
      id: this.owner_of_account_email
    })

    this.showAlert("Success!", "Your listing has been sent to a Moderator for review!")
    this.router.navigate(['/home'])
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
