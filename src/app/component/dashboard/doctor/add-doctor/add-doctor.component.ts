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
  id !: string;
  buttonName !: string;

  departments : string[] = ['Anesthesiology', 'Cardiac surgery', 'Cardiology', 'Casualty department', 'Clinical pathology', 'Emergency medicine', 'Gastroenterology', 'General surgery', 'Geriatrics', 'Gynaecology', 'Hematology', 'Infectious diseases', 'Intensive care', 'Internal medicine', 'Neonatology', 'Nephrology', 'Neurology', 'Neurosurgery', 'Nuclear medicine', 'Oncology', 'Ophthalmology', 'Orthopedics', 'Otorhinolaryngology', 'Outpatient department', 'Pathology', 'Pediatrics', 'Physical medicine and rehabilitation', 'Psychiatry', 'Pulmonology', 'Radiology', 'Surgery', 'Urology', 'Vascular surgery'];

  constructor(
    private fb : FormBuilder,
    @Inject(MAT_DIALOG_DATA) data : any,
    private dialogRef : MatDialogRef<AddDoctorComponent>
  ) { 
    this.title = data.title;
    this.id = data.id;
    this.name = data.name;
    this.mobile = data.mobile;
    this.email = data.email;
    this.gender = data.gender;
    this.department = data.department;
    this.birthdate = data.birthdate;
    this.qualification = data.qualification;
    this.buttonName = data.buttonName;
  }

  ngOnInit(): void {  
    this.form = this.fb.group({
      id : [this.id, []],
      name : [this.name, [Validators.required]],
      mobile : [this.mobile, [Validators.required, Validators.pattern(/^\+?\d+$/),Validators.maxLength(15), Validators.minLength(10)]],
      email : [this.email, [Validators.required]],
      gender : [this.gender, [Validators.required]],
      department : [this.department, [Validators.required]],
      birthdate : [this.birthdate, [Validators.required]],
      qualification : [this.qualification, [Validators.required]]
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
