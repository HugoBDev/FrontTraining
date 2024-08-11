import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo-wall',
  standalone: true,
  imports: [],
  templateUrl: './logo-wall.component.html',
  styleUrl: './logo-wall.component.scss',
})
export class LogoWallComponent {
  @Input() logoUrls!: string[];
}
