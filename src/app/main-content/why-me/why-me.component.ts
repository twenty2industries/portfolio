import { Component, Input } from '@angular/core';
import { WhyMeData } from '../interfaces/why-me.interface';

@Component({
  selector: 'app-why-me',
  imports: [],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.scss'
})
export class WhyMeComponent {
@Input() whymeData!: WhyMeData;
}
