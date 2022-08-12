import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import {
  FormControl,
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

  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    company: new FormControl(''),
    address: new FormControl('', [Validators.required]),
    birthday: new FormControl([Validators.required]),
  });

  constructor(private snackBar: MatSnackBar) {}

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
    this.member = this.profileForm.value as Member;

    this.onCreate.emit(this.member);

    this.formDirective.resetForm();

    this.snackBar.open('Form submitted!', 'OK');
  }
}
