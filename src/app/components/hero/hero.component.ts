import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
export interfaceHeroContent{
  
}
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  host: {
    '(window:resize)': 'onWindowResize($event)',
  },
})
export class HeroComponent {
  @ViewChild('footerImg') footerImg!: ElementRef<HTMLImageElement>;
  @Input() heroContent
  pageWidth: number = window.innerWidth;

  ngOnInit(): void {
    this.pageWidth = window.innerWidth;
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.pageWidth = window.innerWidth;
    if (this.pageWidth > 740) {
      this.footerImg.nativeElement.src =
        'https://www.notion.so/front-static/pages/product/super-duper/notion-hero-v3.png';
    } else {
      this.footerImg.nativeElement.src =
        'https://www.notion.so/front-static/pages/product/super-duper/mobile/notion-hero-v2.png';
    }
  }
}
