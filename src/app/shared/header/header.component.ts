import { Component, Input } from '@angular/core';
import { HeaderData } from '../../main-content/interfaces/header.interface';
import { NgClass } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() headerData!: HeaderData;
  activeLanguage: string = 'DE';

  constructor(private translate: TranslateService) {
    this.changeLanguage;
  }

  changeLanguage(languageCode: string) { 
    this.translate.use(languageCode);
    this.setActiveLanguage(languageCode); 
  }

  setActiveLanguage(code: string) {
    this.activeLanguage = code;
  }
}
