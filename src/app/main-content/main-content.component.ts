import { Component } from '@angular/core';
import { WhyMeComponent } from './why-me/why-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { WhyMeData } from './interfaces/why-me.interface';
import { MySkillsData } from './interfaces/my-skills.interface';
import { ProjectData } from './interfaces/projects.interface';

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
        'Why are you passionate about coding?  You can include some key traits like: analytical thinking, creativity, persistence and  collaboration. A problem-solving mindset is always nice to have.',
    },
    talkButton: {
      path: '/images/sections/whyMe/buttonDefault.png',
      alt: 'Talk to me button',
    },
  };

  mySkillsData: MySkillsData = {
    title: 'My Skills',
    skillIcons: [
      {
        path: '/images/sections/mySkills/angularDefault.png',
        alt: 'Angular',
        skillText: 'Angular',
      },
      {
        path: '/images/sections/mySkills/cssDefault.png',
        alt: 'CSS',
        skillText: 'CSS',
      },
      {
        path: '/images/sections/mySkills/htmlDefault.png',
        alt: 'HTML',
        skillText: 'HTML',
      },
      {
        path: '/images/sections/mySkills/jsDefault.png',
        alt: 'JavaScript',
        skillText: 'JavaScript',
      },
      {
        path: '/images/sections/mySkills/tsDefault.png',
        alt: 'TypeScript',
        skillText: 'TypeScript',
      },
    ],
  };

  projectData: ProjectData = [
    {
      id: 1,
      title: 'El Polo Loco',
      duration: '4 weeks',
      description: 'Jump-and-run game inspired by classic platformers.',
      technologies: [
        {
          iconPath: '/images/sections/mySkills/jsDefault.png',
          altText: 'JavaScript',
        },
        {
          iconPath: '/images/sections/mySkills/htmlDefault.png',
          altText: 'HTML',
        },
        {
          iconPath: '/images/sections/mySkills/cssDefault.png',
          altText: 'CSS',
        },
      ],
      bulletPoints: [
        {
          title: 'About the project',
          content:
            'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and  bottles to fight against the Chicken.',
        },
        {
          title: 'How I have organised my work process',
          content:
            'How do you keep your code clean and maintainable? Have you broken the project down into reusable modules or components? Focus on documentation, naming files, variables, classes and testing.',
        },
        {
          title: 'What I have learnt',
          content:
            'As someone who is always trying to learn new technologies, you may have enjoyed working on this project because it allowed you to delve deep into a particular technology. Give details, such as the name of the framework or language you mean.',
        },
      ],
      url: 'Play Game',
      image: '/images/sections/myProjects/elpololoco.png',
    },
    {
      id: 2,
      title: 'Join',
      duration: '5 weeks',
      description: 'Task manager inspired by the Kanban System.',
      technologies: [
        {
          iconPath: '/images/sections/mySkills/angularDefault.png',
          altText: 'Angular',
        },
        {
          iconPath: '/images/sections/mySkills/tsDefault.png',
          altText: 'TypeScript',
        },
        {
          iconPath: '/images/sections/mySkills/htmlDefault.png',
          altText: 'HTML',
        },
        {
          iconPath: '/images/sections/mySkills/cssDefault.png',
          altText: 'CSS',
        },
      ],
      bulletPoints: [
        {
          title: 'About the project',
          content:
            'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
        },
        {
          title: 'How I have organised my work process',
          content:
            'How do you keep your code clean and maintainable? Have you broken the project down into reusable modules or components? Focus on documentation, naming files, variables, classes and testing.',
        },
      ],
      url: 'Try it now',
      image: '/images/sections/myProjects/join.png',
    },
  ];
}
