import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Member } from 'src/app/Member';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  members: Member[] = [];

  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    company: new FormControl(''),
    address: new FormControl('', [Validators.required]),
    birthday: new FormControl('', [Validators.required]),
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.profileForm.valid) {
      this.members.push(this.profileForm.value as Member);
      this.profileForm.setValue({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        address: '',
        birthday: '',
      });
    } else {
      console.log('error');
    }
  }
}
