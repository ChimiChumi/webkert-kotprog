import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  displayedColumns: string[] = ['name', 'mobile', 'gender','prescription','action'];
  dataSource!: MatTableDataSource<Patient>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(
    private route : ActivatedRoute,
    private dataApi : DataService,
    private dialog : MatDialog,
    private _snackBar : MatSnackBar
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}