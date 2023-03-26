import { DataService } from 'src/app/shared/service/data.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {

  form !: FormGroup;
  title !: string;
  patient_name !: string;
  mobile !: string;
  gender !: string;
  admission_date !: string;
  prescription !: string;
  patient_id !: string;
  butonName !: string;
  doctor_id !: string;
  doctor_name !: string;

  allDoctors : any[] = [];

  constructor(
    private fb : FormBuilder,
    @Inject(MAT_DIALOG_DATA) data : any,
    private dialogRef : MatDialogRef<AddPatientComponent>,
    private dataApi : DataService
  ) { 
    this.title = data.title;
    this.patient_id = data.id;
    this.patient_name = data.name;
    this.mobile = data.mobile;
    this.gender = data.gender;
    this.admission_date = data.admission_date;
    this.prescription = data.prescription;
    this.butonName = data.butonName;
    this.doctor_id = data.doctor_id;
    this.doctor_name = data.doctor_name;
  }

  ngOnInit(): void {
    this.getAllDoctors();
  }

  getAllDoctors() {
    this.dataApi.getAllDoctors().subscribe(res => {
      this.allDoctors = res.map((e:any) => {
        const data = e.payload.doc.data();
        const doctor = {
          doctor_name : data.name,
          doctor_id : e.payload.doc.id
        }
        return doctor;
      })
      console.log(this.allDoctors);
    })
  }  

}
