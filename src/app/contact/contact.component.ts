import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  ngOnInit() {
    emailjs.init(environment.emailjs.publicKey);
  }

  sendEmail() {
    if (this.contactForm.valid) {
      const form = this.contactForm.value;
      emailjs.send(environment.emailjs.serviceID, environment.emailjs.templateID, form)
        .then((result: EmailJSResponseStatus) => {
          console.log(result.text);
          alert('Message envoyé avec succès!');
        }, (error) => {
          console.log(error.text);
          alert('Échec de l\'envoi du message.');
        });
    } else {
      alert('Veuillez remplir tous les champs correctement.');
    }
  }
}
