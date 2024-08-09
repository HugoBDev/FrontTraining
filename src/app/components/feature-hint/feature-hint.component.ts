import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feature-hint',
  standalone: true,
  imports: [],
  templateUrl: './feature-hint.component.html',
  styleUrl: './feature-hint.component.scss',
})
export class FeatureHintComponent {
  @Input() imgUrl!: string;
  @Input() title!: string;
  @Input() content!: string;
}
