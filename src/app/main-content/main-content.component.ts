import { Component } from '@angular/core';
import { WhyMeComponent } from './why-me/why-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactMeComponent } from './contact-me/contact-me.component';





@Component({
  selector: 'app-main-content',
  imports: [WhyMeComponent, MySkillsComponent, MyProjectsComponent, FeedbackComponent, ContactMeComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
