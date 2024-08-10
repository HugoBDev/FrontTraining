import { Component, Input } from '@angular/core';
import {
  FeatureHint,
  FeatureHintComponent,
} from '../feature-hint/feature-hint.component';

export interface FeatureBlock {
  title: string;
  content: string;
  hrefLink: string;
  linkText: string;
  imgUrl: string;
  tag: string;
  featureHints: FeatureHint[];
  replaces?: Replace[];
}

export interface Replace {
  imgUrl: string;
  name: string;
}

@Component({
  selector: 'app-feature-block',
  standalone: true,
  imports: [FeatureHintComponent],
  templateUrl: './feature-block.component.html',
  styleUrl: './feature-block.component.scss',
})
export class FeatureBlockComponent {
  @Input() featureBlock!: FeatureBlock;
}
