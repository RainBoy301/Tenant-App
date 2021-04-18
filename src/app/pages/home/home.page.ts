import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';

import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

//import { CallNumber } from '@ionic-native/call-number/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';

//email
import { EmailComposer } from '@ionic-native/email-composer/ngx';

//text
import { SMS } from '@ionic-native/sms/ngx';

//firestore
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { listing } from 'src/app/models/listing.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  listingRef: AngularFirestoreCollection<listing>;
  listing$: Observable<listing[]>;

  public list: any[];
  public loadedlist: any[];

  constructor(
    private alert: AlertController,
    public router: Router,
    public storage: Storage,
    public firebaseService: FirebaseService,
    public db: AngularFirestore,
    public callNumber: CallNumber,
    public emailComposer: EmailComposer,
    public sms: SMS) {
      this.listingRef = this.db.collection('publicListings');
      this.listingRef.valueChanges({ idField: 'docId' }).subscribe(v => {
        this.list = v;
        this. loadedlist = v;
      })
    }

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
      this.showAlert("Login required", "Please login first")
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

  initializeListings(): void {
    this.list = this.loadedlist;
  }

  getListing(event) {
    const searchString = event.target.value;

    this.initializeListings();
    if(!searchString) {
      return;
    }

    this.list = this.list.filter(currentListing => {
      if (currentListing.city && searchString) {
        if (currentListing.city.toLowerCase().indexOf(searchString.toLowerCase()) > -1) {
          return true;
        }
          return false;
      }
    })
  }

  call(phone_number) {
    this.callNumber.callNumber(phone_number, true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }

  email(contact_email, contact_name) {
    let email = {
      to: contact_email,
      subject: 'I am interested your property!',
      body: 'Hello ' + contact_name + 'I am interested in your listing!',
      isHtml: true
    }

    this.emailComposer.open(email);
  }

  text(phone_number)
  {
    this.sms.send(phone_number, 'Hi! I am interested in your listing(s)');
  }
}
