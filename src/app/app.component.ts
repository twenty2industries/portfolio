import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { HeaderComponent } from './shared/header/header.component';
import { HeroComponent } from './main-content/hero/hero.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeroData } from './main-content/interfaces/hero.interface';
import { HeaderData } from './main-content/interfaces/header.interface';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MainContentComponent,
    HeaderComponent,
    HeroComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio';

  heroData: HeroData = {
    images: {
      bgShape: {
        path: '/images/sections/hero/bgShapeDefault.png',
        alt: 'bg-Form',
      },
      logo: {
        path: '/images/ui/logo/logoDefault.png',
        alt: 'Portfolio-Logo',
      },
      arrowDown: {
        path: '/images/ui/arrow/arrowDownDefault.png',
        alt: 'arrow down',
      },
    },
    socials: [
      { icon: '/images/socials/mail/mailDefault.png', alt: 'Mail' },
      { icon: '/images/socials/github/githubDefault.png', alt: 'GitHub' },
      { icon: '/images/socials/linkedin/linkedinDefault.png', alt: 'LinkedIn' },
    ],
    text: {
      name: 'Burak Bostanli',
      title: 'FRONTEND DEVELOPER',
    },
  };

  headerData: HeaderData = {
  logo: {
    path: "/images/sections/navBar/logoDarkDefault.png",
    alt: "Logo"
  },
  links: [
    { text: "Why me", url: "#why-me" },
    { text: "Skills", url: "#skills" },
    { text: "Projects", url: "#projects" },
    { text: "Contact", url: "#contact" }
  ],
  languageOptions: [
    { code: "DE", lang: "de" },
    { code: "EN", lang: "en" }
  ]
};
}
