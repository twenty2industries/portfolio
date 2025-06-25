import { Component, Input } from '@angular/core';
import { ContactFormData } from './../interfaces/contactMe.interface';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss',
})
export class ContactMeComponent {
  @Input() contactData!: ContactFormData;

  contactDatas = {
    name: '',
    email: '',
    message: '',
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted) {
          console.log(this.contactDatas);
    }
  }
}
