import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Patient } from 'src/app/shared/model/patient';
import { DataService } from 'src/app/shared/service/data.service';

@Component({
  selector: 'app-view-doctor',
  templateUrl: './view-doctor.component.html',
  styleUrls: ['./view-doctor.component.scss']
})
export class ViewDoctorComponent implements OnInit {

  id !: any;
  doctorObj !: any;
  allPatients : Patient[] = [];

  dataSource!: MatTableDataSource<Patient>;


  constructor(
    route : ActivatedRoute,
    private dataApi : DataService    
    ) {
    this.id = route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getDoctorById();
  }

  // kiválasztott doktor lekérése
  getDoctorById() {
    this.dataApi.getDoctorById(this.id).subscribe(res => {
      this.doctorObj = res;
    })
  }

}