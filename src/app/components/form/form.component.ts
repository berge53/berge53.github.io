import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Member } from 'src/app/Member';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Output() onCreate: EventEmitter<Member> = new EventEmitter();
  member!: Member;
  profileForm!: FormGroup;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      company: [''],
      address: ['', Validators.required],
      birthday: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  @ViewChild(FormGroupDirective) formDirective!: FormGroupDirective;

  onSubmit() {
    if (this.profileForm.valid) {
      this.submit();
    } else {
      console.log('error');
    }
  }

  submit() {
    this.convertDate();

    this.member = this.profileForm.getRawValue() as Member;

    this.onCreate.emit(this.member);

    this.formDirective.resetForm();

    this.snackBar.open('Form submitted!', 'OK');
  }

  convertDate() {
    const dataObj = this.profileForm.controls['birthday'].value;
    let date = JSON.stringify(dataObj);
    date = date.substring(1, 11);

    this.profileForm.patchValue({ birthday: date });
  }
}
