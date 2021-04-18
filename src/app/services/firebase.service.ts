import { Injectable } from '@angular/core';

//angular firestore (database)
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore,
    public auth: AngularFireAuth) { } 

  //not needed either, DO NOT USE
  getCurrentUID(): Observable<string>
  {
    return new Observable(observer=>
      {
        firebase.auth().onAuthStateChanged(user=>
          {
            console.log(user.uid);
            observer.next(user.uid);
          })
      })
  }

  //NO LONGER NEEDED. REGISTRATION.TS ALREADY DOES THIS
  createUser(value) {
    const usersCollection = this.db.collection('users').add({
      email: value
    }).catch(error => console.error("Error adding document: ", error))
  }
}
