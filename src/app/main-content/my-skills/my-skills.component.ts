import { Component, Input, input } from '@angular/core';
import { InputBoxComponent } from '../input-box/input-box.component';
import { MySkillsData } from '../interfaces/my-skills.interface';
import { InputBoxData } from '../interfaces/input-box.interface';

@Component({
  selector: 'app-my-skills',
  imports: [InputBoxComponent],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss',
})
export class MySkillsComponent {
  @Input() mySkillsData!: MySkillsData;

  inputBoxData: InputBoxData = {
    subject: 'I am currently learning',
    backgroundImage: {
      path: '/images/sections/mySkills/bgSkillsDefault.png',
      alt: 'Feedback background',
    },
    learning: [
      {
        iconPath: '/images/sections/mySkills/reactDefault.png',
        language: 'React',
      },
      {
        iconPath: '/images/sections/mySkills/vueDefault.png',
        language: 'Vue Js',
      },
    ],
    inputText: [
      'Show that you are motivated to continually improve your skills, implement innovative solutions and stay abreast of new technologies.',
    ],
  };
}
