import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
export interface HeroContent{
title: string,
content: string,
btnContent: string[]
imgUrl: string
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
  @Input() heroContent! : HeroContent 
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
