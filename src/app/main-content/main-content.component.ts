import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { WhyMeComponent } from './why-me/why-me.component';


@Component({
  selector: 'app-main-content',
  imports: [HeroComponent, WhyMeComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
