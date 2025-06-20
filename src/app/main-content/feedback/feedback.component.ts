import { Component } from '@angular/core';
import { InputBoxComponent } from '../../shared/input-box/input-box.component';


@Component({
  selector: 'app-feedback',
  imports: [InputBoxComponent],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {

}
