import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Listing {
  id?: string,
  address_line_1: string,
  address_line_2: string,
  city: string,
  contact_email: string,
  contact_name: string,
  contact_phone_number: string,
  description: string,
  number_of_bathrooms: string,
  number_of_bedrooms: string,
  price_per_month: string,
  state: string,
  zip_code: string
}

@Injectable({
  providedIn: 'root'
})
export class ListingServiceService {
  private listings: Observable<Listing[]>;
  private listingCollection: AngularFirestoreCollection<Listing>;

  constructor(private afs: AngularFirestore) {
    this.listingCollection = this.afs.collection<Listing>('publicListings');
    this.listings = this.listingCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getListings(): Observable<Listing[]> {
    return this.listings;
  }

  getListing(id: string): Observable<Listing> {
    return this.listingCollection.doc<Listing>(id).valueChanges().pipe(
      take(1),
      map(idea => {
        idea.id = id;
        return idea
      })
    );
  }

  updateIdea(listing: Listing): Promise<void> {
    //return this.ideaCollection.doc(idea.id).update({ name: idea.name, notes: idea.notes });
    return;
  }

  deleteIdea(id: string): Promise<void> {
    return this.listingCollection.doc(id).delete();
  }
}
