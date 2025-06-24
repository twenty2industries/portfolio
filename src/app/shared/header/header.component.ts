import { Component, Input } from '@angular/core';
import { HeaderData } from '../../main-content/interfaces/header.interface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
@Input() headerData!: HeaderData;

activeLanguage: string = 'DE'; // Standardmäßig DE aktiv

setActiveLanguage(code: string) {
  this.activeLanguage = code; // Nur der geklickte Button wird aktiv
}
}
