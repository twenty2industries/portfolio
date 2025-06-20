import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { HeaderComponent } from './shared/header/header.component';
import { HeroComponent } from './main-content/hero/hero.component';
import { FooterComponent } from "./shared/footer/footer.component";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainContentComponent, HeaderComponent, HeroComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
