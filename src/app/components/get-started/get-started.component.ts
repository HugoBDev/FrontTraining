import { Component, Input } from '@angular/core';
export interface GetStartedContent {
  title : string;
  content : string;
  btnContent : string[];
}
@Component({
  selector: 'app-get-started',
  standalone: true,
  imports: [],
  templateUrl: './get-started.component.html',
  styleUrl: './get-started.component.scss'
})
export class GetStartedComponent {
@Input() getStartedContent! : GetStartedContent
}
