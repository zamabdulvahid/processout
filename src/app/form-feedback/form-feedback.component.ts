import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-feedback',
  templateUrl: './form-feedback.component.html',
  styleUrls: ['./form-feedback.component.scss']
})
export class FormFeedbackComponent implements OnInit {

  feedbackForm!: FormGroup;

  get f(): { [key: string]: AbstractControl } {
    return this.feedbackForm.controls;
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.configureForm();
  }

  configureForm() {
    this.feedbackForm = this.formBuilder.group({
      name: [{value: null, disabled: false}, [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z \-\']+')]],
      email: [{value: null, disabled: false}, [Validators.required, Validators.email]],
      rating: [{value: null, disabled: false}, [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(1), Validators.max(5)]],
      comment: [{value: null, disabled: false}, [Validators.required]]
    });
  }

  submitFeedback() {
    console.log(this.feedbackForm.value);
  }

}
