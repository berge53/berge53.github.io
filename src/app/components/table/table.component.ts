import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Member } from 'src/app/Member';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() members: Member[] = [];
  displayedColumns = [
    'firstName',
    'lastName',
    'email',
    'company',
    'address',
    'birthday',
    'options',
  ];

  constructor(public dialog: MatDialog) {}

  @ViewChild(MatTable) table!: MatTable<any>;

  ngOnInit(): void {}

  updateTable() {
    this.table.renderRows();
  }

  openEditDialog(member: Member) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '30%',
      data: member,
    });

    dialogRef.afterClosed().subscribe((res) => {
      const index = this.members.map((m) => m.email).indexOf(member.email);
      this.members[index].firstName = res.firstName
        ? res.firstName
        : this.members[index].firstName;
      this.members[index].lastName = res.lastName
        ? res.lastName
        : this.members[index].lastName;
      this.members[index].email = res.email
        ? res.email
        : this.members[index].email;
      this.members[index].company = res.company
        ? res.company
        : this.members[index].company;
      this.members[index].address = res.address
        ? res.address
        : this.members[index].address;
      this.members[index].birthday = res.birthday
        ? res.birthday
        : this.members[index].birthday;

      this.updateTable();
    });
  }
}
