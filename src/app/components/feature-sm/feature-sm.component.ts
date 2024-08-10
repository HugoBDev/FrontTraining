import { Component, Input } from '@angular/core';
import { FeatureHint } from '../feature-hint/feature-hint.component';

@Component({
  selector: 'app-feature-sm',
  standalone: true,
  imports: [],
  templateUrl: './feature-sm.component.html',
  styleUrl: './feature-sm.component.scss'
})
export class FeatureSmComponent {
@Input() featureSm!: FeatureHint
}
