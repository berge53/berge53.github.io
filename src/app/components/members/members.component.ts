import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { Member } from 'src/app/Member';
import { TableComponent } from '../table/table.component';
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
})
export class MembersComponent implements OnInit {
  members: Member[] = [
    {
      firstName: 'Virge',
      lastName: 'Guevarra',
      email: 'bergeguevarra@gmail.com',
      company: 'Codebricks',
      address: '322',
      birthday: '2001-05-03',
    },
  ];

  constructor() {}

  @ViewChild(TableComponent) table!: TableComponent;

  ngOnInit(): void {}

  addMember(member: Member) {
    this.members.push(member);
    this.table.updateTable();
  }
}
