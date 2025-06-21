import { Component, Input } from '@angular/core';
import { HeaderData } from '../../main-content/interfaces/header.interface';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
@Input() headerData!: HeaderData;
}
