import { Component, Input, input } from '@angular/core';
import { InputBoxComponent } from '../input-box/input-box.component';
import { MySkillsData } from '../interfaces/my-skills.interface';


@Component({
  selector: 'app-my-skills',
  imports: [InputBoxComponent],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  @Input() mySkillsData!: MySkillsData;
}
