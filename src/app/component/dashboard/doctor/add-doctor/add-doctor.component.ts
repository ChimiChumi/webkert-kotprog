import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.scss']
})
export class AddDoctorComponent implements OnInit {

  form !: FormGroup;
  title !: string;
  name !: string;
  mobile !: string;
  email !: string;
  gender !: string;
  department !: string;
  birthdate !: Date;
  qualification !: string;

  departments : string[] = ['Anesthesiology', 'Cardiac surgery', 'Cardiology', 'Casualty department', 'Clinical pathology', 'Emergency medicine', 'Gastroenterology', 'General surgery', 'Geriatrics', 'Gynaecology', 'Hematology', 'Infectious diseases', 'Intensive care', 'Internal medicine', 'Neonatology', 'Nephrology', 'Neurology', 'Neurosurgery', 'Nuclear medicine', 'Oncology', 'Ophthalmology', 'Orthopedics', 'Otorhinolaryngology', 'Outpatient department', 'Pathology', 'Pediatrics', 'Physical medicine and rehabilitation', 'Psychiatry', 'Pulmonology', 'Radiology', 'Surgery', 'Urology', 'Vascular surgery'];

  constructor(
    private fb : FormBuilder,
    @Inject(MAT_DIALOG_DATA) data : any,
    private dialogRef : MatDialogRef<AddDoctorComponent>
  ) { 
    this.title = data.title;
  }

  ngOnInit(): void { 
    this.form = this.fb.group({
      id : ['', []],
      name : ['', [Validators.required]],
      mobile : ['', [Validators.required, Validators.pattern(/^\+?\d+$/),Validators.maxLength(15), Validators.minLength(10)]],
      email : ['', [Validators.required]],
      gender : ['', [Validators.required]],
      department : ['', [Validators.required]],
      birthdate : ['', [Validators.required]],
      qualification : ['', [Validators.required]]
    })
  }

  // cancel gomb event
  cancelRegistration(){
    this.dialogRef.close();
  }

  // regisztráló gomb event
  registerDoctor(){
    this.dialogRef.close(this.form.value);
  }

}
