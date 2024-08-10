import {
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
} from '@angular/core';
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
  resizedImgUrl?: string;
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
  host: {
    '(window:resize)': 'onWindowResize($event)',
  },
})
export class FeatureBlockComponent {
  @Input() featureBlock!: FeatureBlock;
  @ViewChild('featureImg') featureImgRef!: ElementRef<HTMLImageElement>;
  pageWidth: number = window.innerWidth;

  ngOnInit(): void {
    this.pageWidth = window.innerWidth;
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.pageWidth = window.innerWidth;
    if (this.pageWidth < 700) {
      this.featureImgRef.nativeElement.src =
        this.featureBlock.resizedImgUrl || this.featureBlock.imgUrl;
    } else {
      this.featureImgRef.nativeElement.src = this.featureBlock.imgUrl;
    }
  }
}
