import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FeatureHintComponent } from './components/feature-hint/feature-hint.component';
import {
  FeatureBlock,
  FeatureBlockComponent,
} from './components/feature-block/feature-block.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavBarComponent,
    FeatureHintComponent,
    FeatureBlockComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  /**
   *  🗃️ Simple Feature block data : AI
   */
  iaFeatureBlock: FeatureBlock = {
    title: 'Get a brain boost.',
    content:
      'Built right into your workspace, Notion AI is at the ready to brainstorm ideas, summarize, help you write, and find what you’re looking for.',
    hrefLink: 'http://#',
    imgUrl:
      'https://www.notion.so/front-static/pages/product/super-duper/ai-v6.png',
    linkText: 'Try Notion AI',
    tag: ' Notion AI',
    featureHints: [
      {
        imgUrl:
          'https://www.notion.so/cdn-cgi/image/format=webp,width=96/front-static/illustrated-icons/exclaimationBubble.png',
        title: 'Instant answers',
        content: 'Ask any question about your team’s docs and projects.',
      },
      {
        imgUrl:
          'https://www.notion.so/cdn-cgi/image/format=webp,width=96/front-static/illustrated-icons/pencilTwist.png',
        title: 'Personalized editor',
        content: 'Generate content that’s always relevant.',
      },
      {
        imgUrl:
          'https://www.notion.so/cdn-cgi/image/format=webp,width=96/front-static/illustrated-icons/puzzle.png',
        title: 'AI connectors',
        content: 'Access info from all your tools, right inside Notion.',
      },
    ],
    replaces: [
      {
        imgUrl:
          'https://www.notion.so/cdn-cgi/image/format=webp,width=32/front-static/pages/product/super-duper/tools/confluence.png',
        name: 'Confluence',
      },
      {
        imgUrl:
          'https://www.notion.so/cdn-cgi/image/format=webp,width=32/front-static/pages/product/super-duper/tools/sharepoint.png',
        name: 'SharePoint',
      },
      {
        imgUrl:
          'https://www.notion.so/front-static/pages/product/super-duper/tools/google-drive.svg',
        name: 'Google Drive',
      },
    ],
  };
}
