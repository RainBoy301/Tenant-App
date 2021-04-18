import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
//firestore
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { listing } from 'src/app/models/listing.model';



@Component({
  selector: 'app-moderator-create',
  templateUrl: './moderator-create.page.html',
  styleUrls: ['./moderator-create.page.scss'],
})
export class ModeratorCreatePage implements OnInit {
  creationRequestRef: AngularFirestoreCollection<listing>;
  creationRequest$: Observable<listing[]>;

  document: Observable<listing[]>;

  address_line_1: string
  address_line_2: string
  city: string
  contact_email: string
  contact_name: string
  contact_phone_number: string
  description: string
  number_of_bathrooms: string
  price_per_month: string
  state: string
  zip_code: string
  docId: string

  obj: Object

  constructor(
    private alertController: AlertController,
    private alert: AlertController,
    private db: AngularFirestore,
    public router: Router,
    public storage: Storage) {
      this.creationRequestRef = this.db.collection('creationRequests');
      this.creationRequest$ = this.creationRequestRef.valueChanges({ idField: 'docId' });
    }

  async presentAlert() {
    const alert = await this.alertController.create({
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
  reject(id) {
      this.db.collection("creationRequests").doc(id).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
  }

  approve(id) {
    this.db.collection("creationRequests").doc(id).get().subscribe(doc=>
      {
        this.db.collection("publicListings").doc(id).set(
          doc.data()
        )

        this.deleteDocumentAfterApproval(id)
      }
    )
  }

  deleteDocumentAfterApproval(id) {
      this.db.collection("creationRequests").doc(id).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
  }

}
