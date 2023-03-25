import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs: AngularFirestore) { }

  
  // doktor hozzáadása Firestore adatbázisba
  addDoctor(doctor : any){
    doctor.id = this.afs.createId();
    return this.afs.collection("Doctor/").add(doctor);
  }
  
   // doktorok lekérése Firestore adatbázisból
  getAllDoctors() {
    return this.afs.collection("Doctor/").snapshotChanges();
  }
}