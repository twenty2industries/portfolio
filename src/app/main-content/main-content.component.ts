import { Component } from '@angular/core';
import { WhyMeComponent } from './why-me/why-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { WhyMeData } from './interfaces/why-me.interface';

@Component({
  selector: 'app-main-content',
  imports: [
    WhyMeComponent,
    MySkillsComponent,
    MyProjectsComponent,
    FeedbackComponent,
    ContactMeComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {
  whyMeData: WhyMeData = {
    title: 'Why me',
    locationIcon: {
      path: '/images/sections/whyMe/locationDefault.png',
      alt: 'Location icon',
    },
    texts: {
      locationText: 'First text for typing effect',
      whyMeText:
        'Second text for typing effect, Second text for typing effect, Second text for typing effect,Second text for typing effect',
    },
    talkButton: {
      path: '/images/sections/whyMe/buttonDefault.png',
      alt: 'Talk to me button',
    },
  };
}
