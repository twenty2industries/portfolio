import { Component, Input } from '@angular/core';
import { ContactFormData } from "./../interfaces/contactMe.interface";

@Component({
  selector: 'app-contact-me',
  imports: [],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
@Input() contactData!: ContactFormData;


  isInputActive = false;

  toggleInputFocus() {
    this.isInputActive = !this.isInputActive;
  }
}
