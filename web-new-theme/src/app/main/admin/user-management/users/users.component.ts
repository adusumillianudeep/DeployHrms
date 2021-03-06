import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { SaveComponent } from './save/save.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UsersComponent implements OnInit {

  Users: User[] = [
    { username: "Anudeep01", userrole: 'Admin', employeename: "Anudeep", status: "Enabled" },
    { username: "Raghavendra02", userrole: 'Supervisor', employeename: "Raghavendra", status: "Enabled" },
    { username: "Sowjana04", userrole: 'Lead', employeename: "Sowjana", status: "Enabled" },
    { username: "Anudeep01", userrole: 'Admin', employeename: "Anudeep", status: "Enabled" },
    { username: "Raghavendra02", userrole: 'Supervisor', employeename: "Raghavendra", status: "Enabled" },
    { username: "Sowjana04", userrole: 'Lead', employeename: "Sowjana", status: "Enabled" },
    { username: "Anudeep01", userrole: 'Admin', employeename: "Anudeep", status: "Enabled" },
    { username: "Raghavendra02", userrole: 'Supervisor', employeename: "Raghavendra", status: "Enabled" },
    { username: "Sowjana04", userrole: 'Lead', employeename: "Sowjana", status: "Enabled" },
    { username: "Anudeep01", userrole: 'Admin', employeename: "Anudeep", status: "Enabled" },
    { username: "Raghavendra02", userrole: 'Supervisor', employeename: "Raghavendra", status: "Enabled" },
    { username: "Sowjana04", userrole: 'Lead', employeename: "Sowjana", status: "Enabled" },
    { username: "Anudeep01", userrole: 'Admin', employeename: "Anudeep", status: "Enabled" },
    { username: "Raghavendra02", userrole: 'Supervisor', employeename: "Raghavendra", status: "Enabled" },
    { username: "Sowjana04", userrole: 'Lead', employeename: "Sowjana", status: "Enabled" },
    { username: "Anudeep01", userrole: 'Admin', employeename: "Anudeep", status: "Enabled" },
    { username: "Raghavendra02", userrole: 'Supervisor', employeename: "Raghavendra", status: "Enabled" },
    { username: "Sowjana04", userrole: 'Lead', employeename: "Sowjana", status: "Enabled" }
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  save(): void {
    const dialogRef = this.dialog.open(SaveComponent, {
      width: '60%',
      height: '60%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

export interface User {
  username: string;
  userrole: string;
  employeename: string;
  status: string;
}

