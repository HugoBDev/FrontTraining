import { Component, Input } from '@angular/core';
import {
  FeatureHint,
  FeatureHintComponent,
} from '../feature-hint/feature-hint.component';
import { FeatureSmComponent } from '../feature-sm/feature-sm.component';

export interface featureSmContainer {
  title: string;
  featureHints: FeatureHint[];
}
@Component({
  selector: 'app-feature-sm-container',
  standalone: true,
  imports: [FeatureSmComponent, FeatureHintComponent],
  templateUrl: './feature-sm-container.component.html',
  styleUrl: './feature-sm-container.component.scss',
})
export class FeatureSmContainerComponent {
  @Input() featureSm!: featureSmContainer;
}
