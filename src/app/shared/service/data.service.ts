import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private afs: AngularFirestore) {}

  // doktor hozzáadása
  addDoctor(doctor : any){
    doctor.id = this.afs.createId();
    return this.afs.collection("Doctor/").add(doctor);
  }
  
   // doktorok lekérdezése
  getAllDoctors() {
    return this.afs.collection("Doctor/").snapshotChanges();
  }

  // doktorok felülírása
  updateDoctor(doctor : any) {
    return this.afs.doc("Doctor/" + doctor.id).update(doctor);
  }

  // doktorok törlése
  deleteDoctor(id : string) {
    return this.afs.doc("Doctor/" + id).delete();
  }

  // doktorok lekérése ID szerint
  getDoctorById(id : string) {
    return this.afs.doc("Doctor/" + id).valueChanges();
  }

   // páciens hozzáadása
   addPatient(patient : any) {
    patient.patient_id = this.afs.createId();
    return this.afs.collection("Patient/").add(patient);
  }

  // páciensek lekérdezése
  getAllPatients() {
    return this.afs.collection("Patient/").snapshotChanges();
  }

  getPatientById(id : any) {
    return this.afs.doc("Patient/"+id).valueChanges();
  }
}
