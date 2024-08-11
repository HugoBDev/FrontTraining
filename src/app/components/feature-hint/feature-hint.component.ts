import { Component, Input } from '@angular/core';

export interface FeatureHint {
  imgUrl: string;
  title: string;
  content: string;
}

@Component({
  selector: 'app-feature-hint',
  standalone: true,
  imports: [],
  templateUrl: './feature-hint.component.html',
  styleUrl: './feature-hint.component.scss',
})
export class FeatureHintComponent {
  @Input() featureHint!: FeatureHint;
}
