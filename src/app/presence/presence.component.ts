import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-presence',
  templateUrl: './presence.component.html',
  styleUrls: ['./presence.component.css']
})
export class PresenceComponent implements OnInit {
  presenceForm: FormGroup;
  submitted = false;
  showForm = true;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.presenceForm = this.formBuilder.group({
      name: ['', Validators.required],
      adults: ['', Validators.required],
      children: ['', Validators.required],
    });
  }

  get f() { return this.presenceForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.presenceForm.invalid) {
      return;
    }

    this.showForm = false;
  }

}
