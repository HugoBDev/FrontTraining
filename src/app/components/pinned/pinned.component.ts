import { Component, Input } from '@angular/core';

export interface PinContent{
  quote: string;
  imgUrl: string;
}
@Component({
  selector: 'app-pinned',
  standalone: true,
  imports: [],
  templateUrl: './pinned.component.html',
  styleUrl: './pinned.component.scss'
})
export class PinnedComponent {
@Input() pinContent! : PinContent
}
