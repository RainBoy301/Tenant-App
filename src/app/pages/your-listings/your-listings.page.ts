import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { listing } from 'src/app/models/listing.model';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-your-listings',
  templateUrl: './your-listings.page.html',
  styleUrls: ['./your-listings.page.scss'],
})
export class YourListingsPage implements OnInit {
  listingRef: AngularFirestoreCollection<listing>;
  listing$: Observable<listing[]>;
  

  constructor(
    private alert: AlertController,
    public router: Router,
    public storage: Storage,
    public firebaseService: FirebaseService,
    public db: AngularFirestore) {

      this.storage.get('email').then((val) => {
        console.log('Your email is', val);
        this.listingRef = this.db.collection('publicListings', ref => {
          return ref.where('id', '==', val)
        });

        this.listing$ = this.listingRef.valueChanges({ idField: 'docId' });
      });
    }

  async presentAlert() {
    const alert = await this.alert.create({
      header: 'Alert',
      message: 'This functionality is not yet implemented',
      buttons: ['OK']
    });

    await alert.present();
  }

  ngOnInit() {this.storage.get('email').then((val) => {
    if (val == null){
      this.showAlert("Log in required", "Please login first")
      this.router.navigate(['/login'])
      }
    });
  }

  edit(id) {
    this.router.navigate(['/edit/' + id]);
  }

  remove(id) {
    this.db.collection("publicListings").doc(id).delete().then(function() {
      console.log("Document successfully deleted!");
      this.showAlert("Success!", "Listing has been successfully deleted.");
  }).catch(function(error) {
      console.error("Error removing document: ", error);
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
