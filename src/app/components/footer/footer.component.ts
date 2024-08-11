import { Component, Input } from '@angular/core';

export interface FooterContent {
  title: string;
  sectionsContent: string[];
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  @Input() footerContents!: FooterContent[];
}
