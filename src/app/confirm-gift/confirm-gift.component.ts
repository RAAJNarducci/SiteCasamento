import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-confirm-gift',
  templateUrl: './confirm-gift.component.html',
  styleUrls: ['./confirm-gift.component.css']
})
export class ConfirmGiftComponent implements OnInit {
  confirmGiftForm: FormGroup;
  submitted = false;
  showForm = true;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.confirmGiftForm = this.formBuilder.group({
      name: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
  get f() { return this.confirmGiftForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.confirmGiftForm.invalid) {
      return;
    }

    this.showForm = false;
  }

}
