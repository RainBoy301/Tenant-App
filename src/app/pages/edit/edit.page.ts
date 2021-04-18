import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { listing } from 'src/app/models/listing.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  listingRef: AngularFirestoreCollection<listing>;
  listing$: Observable<listing[]>;

  private slug: string;

  constructor( 
    private route: ActivatedRoute,
    private db: AngularFirestore,
    private router: Router,
    private alert: AlertController
    ) { }

  ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get('id');
    this.listingRef = this.db.collection('publicListings', ref => {
      return ref.where('id', '==', this.slug)
    });
      
    this.listing$ = this.listingRef.valueChanges({ idField: 'docId' });
  }

  edit() {
    this.showAlert("Sorry!", "This is not functional");
    //save inputs from html to these variables
    
    //send the listing to a collection called "creationRequests"
    // this.db.collection("editRequests").doc().set({
    //   description: this.description,
    //   price_per_month: this.price_per_month,
    //   number_of_bathrooms: this.number_of_bathrooms,
    //   number_of_bedrooms: this.number_of_bedrooms,
    //   address_line_1: this.address_line_1,
    //   address_line_2: this.address_line_2,
    //   city: this.city,
    //   state: this.state,
    //   zip_code: this.zip_code,
    //   contact_name: this.contact_name,
    //   contact_phone_number: this.contact_phone_number,
    //   contact_email: this.contact_email
    // })

    // this.showAlert("Success!", "Your edit has been sent to a Moderator for review!")
    // this.router.navigate(['/your-listings'])
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
