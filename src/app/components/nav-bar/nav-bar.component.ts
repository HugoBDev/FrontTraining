import { Component, Input } from '@angular/core';

export interface NavBarContent {
  sectionsContent : string[]
  btnContent : string[]
}

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
@Input() navBarContent !: NavBarContent
}
