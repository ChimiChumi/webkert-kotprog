import { AddPatientComponent } from './add-patient/add-patient.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from 'src/app/shared/service/data.service';
import { AddDoctorComponent } from '../doctor/add-doctor/add-doctor.component';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private dataApi : DataService,
    private _snackBar : MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  // páciens hozzáadása
  addPatient() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      title: 'Register Patient',
      buttonName : 'Register'
    }

    const dialogRef = this.dialog.open(AddPatientComponent, dialogConfig);

    // sikeres adatátvitel esetén üzenetet kapunk és a service-nek átpasszoljuk ami feltölti Firebase-re  
    dialogRef.afterClosed().subscribe(data => {
      if(data) {
        this.dataApi.addPatient(data);
        this.openSnackBar("Patient registered successfully.", "OK");
      }
    })
  }

   // felugró alsó üzenet megjelenítése
   openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
