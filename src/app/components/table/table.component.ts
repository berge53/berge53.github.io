import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Member } from 'src/app/Member';

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
  ];

  constructor() {}

  @ViewChild(MatTable) table!: MatTable<any>;

  ngOnInit(): void {}

  updateTable() {
    this.table.renderRows();
  }
}
