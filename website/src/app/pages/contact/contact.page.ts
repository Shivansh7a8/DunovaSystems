import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.css']
})
export class ContactPage {

  loading = false;

  submitted = false;

  contactForm: FormGroup;
  showSuccessPopup = false;
  popupTitle = '';
  popupMessage = '';

  // Change this when deployed
  api = "https://dunovasystems.onrender.com/api/contact";

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ){

    this.contactForm = this.fb.group({

      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],

      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      company: [
        '',
        [
          Validators.required
        ]
      ],

      message: [
        '',
        [
          Validators.required,
          Validators.minLength(20)
        ]
      ]

    });

  }

  get f(){

    return this.contactForm.controls;

  }
submit() {

  if (this.contactForm.invalid) {
    this.contactForm.markAllAsTouched();
    return;
  }

  // Store form data before resetting
  const formData = this.contactForm.value;

  // Show popup immediately
  this.popupTitle = 'Message Sent!';
  this.popupMessage =
    'Thank you for choosing us.\nWe will get back to you soon.';

  this.showSuccessPopup = true;

  // Hide popup after 2 seconds
  setTimeout(() => {
    this.showSuccessPopup = false;
  }, 2000);

  // Reset form immediately
  this.contactForm.reset();

  // Send request in the background
  this.http.post(
    'https://dunovasystems.onrender.com/api/contact',formData,
    { responseType: 'text' }
  ).subscribe({

    next: () => {
      console.log('Mail sent successfully.');
    },

    error: () => {

      console.error('Failed to send mail.');

      // Optional: show an error popup if the request actually fails
      // this.popupTitle = 'Failed';
      // this.popupMessage = 'Unable to send your message.';
      // this.showSuccessPopup = true;
      setTimeout(() => {
   this.showSuccessPopup = false;
   }, 2000);

    }

  });

}
}
