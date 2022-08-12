import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Member } from 'src/app/Member';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  member!: Member;
  editForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Member,
    private fb: FormBuilder
  ) {
    this.editForm = this.fb.group({
      firstName: [`${data.firstName}`, Validators.required],
      lastName: [`${data.lastName}`, Validators.required],
      email: [`${data.email}`, [Validators.required, Validators.email]],
      company: [`${data.company}`],
      address: [`${data.address}`, Validators.required],
      birthday: [`${data.birthday}`, Validators.required],
    });
  }

  ngOnInit(): void {}

  onUpdate() {
    this.member = this.editForm.getRawValue();
    this.dialogRef.close(this.member);
  }
}
