import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  NavBarComponent,
  NavBarContent,
} from './components/nav-bar/nav-bar.component';
import { FeatureHintComponent } from './components/feature-hint/feature-hint.component';
import {
  FeatureBlock,
  FeatureBlockComponent,
} from './components/feature-block/feature-block.component';
import { HeroComponent } from './components/hero/hero.component';
import {
  featureSmContainer,
  FeatureSmContainerComponent,
} from './components/feature-sm-container/feature-sm-container.component';
import { LogoWallComponent } from './components/logo-wall/logo-wall.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavBarComponent,
    FeatureHintComponent,
    FeatureBlockComponent,
    HeroComponent,
    FeatureSmContainerComponent,
    LogoWallComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  navBarContent: NavBarContent = {
    sectionsContent: [
      'Product',
      'Download',
      'Solutions',
      'Resources',
      'Pricing',
    ],
    btnContent: ['Request a demo', 'Log in', 'Get Notion free'],
  };

  logoUrls: string[] = [
    'https://images.ctfassets.net/spoqsaf9291f/6T4QxYfpIzIbZgWUSa5Rb1/c88459cc628f176493f115900cfbe5c0/figma.svg',
    'https://images.ctfassets.net/spoqsaf9291f/GcGQkjJATOyaJRTvul2nK/3ad21f3637815fde848c61e6e7cfb1cc/substack.png',
    'https://images.ctfassets.net/spoqsaf9291f/27ImnwWYAZNrl4pE44azZJ/ad710b3b96e67d3b19eb4012c0aeaed2/discord.svg  ',
    'https://images.ctfassets.net/spoqsaf9291f/1MsSLQFZEc53mD2sFhdz44/78d002d81f91e7aab5322eb582f30190/arc.svg',
    'https://images.ctfassets.net/spoqsaf9291f/6YyxUI0AtkIHmgiB8gRVJb/4cb6836b5db29aae9a514738bfc17a4c/spotify_3x.png',
    'https://images.ctfassets.net/spoqsaf9291f/1fJCIIjK31CRPMPj7Bp9Mu/c094fa31125ad5f8a01bb8169847e227/toyota.svg',
  ];

  writeFeatureBlock: FeatureBlock = {
    title: 'Find the right words.',
    content:
      'Capture ideas, gather feedback from teammates, and ask AI to add the finishing touches.',
    hrefLink: 'http://#',
    imgUrl:
      'https://www.notion.so/front-static/pages/product/super-duper/write-v5.png',
    resizedImgUrl:
      'https://www.notion.so/front-static/pages/product/super-duper/mobile/write.png',
    linkText: 'Explore docs & notes',
    tag: ' Write',
    featureHints: [
      {
        imgUrl:
          'https://www.notion.so/cdn-cgi/image/format=webp,width=96/front-static/illustrated-icons/photoOnRectangle.png',
        title: 'Building blocks',
        content: '100+ content types to communicate any idea.',
      },
      {
        imgUrl:
          'https://www.notion.so/cdn-cgi/image/format=webp,width=96/front-static/illustrated-icons/at2.png',
        title: 'Collaborative tools',
        content: 'Built for teams to share, suggest, and comment.',
      },
      {
        imgUrl:
          'https://www.notion.so/cdn-cgi/image/format=webp,width=96/front-static/illustrated-icons/sparklePencil.png',
        title: 'AI-assisted',
        content: 'Edit, draft, translate. Ask, and AI will answer.',
      },
    ],
    replaces: [
      {
        imgUrl:
          'https://www.notion.so/front-static/pages/product/super-duper/tools/evernote.svg',
        name: 'Evernote',
      },
      {
        imgUrl:
          'https://www.notion.so/front-static/pages/product/super-duper/tools/gdocs.svg',
        name: 'Google Docs',
      },
      {
        imgUrl:
          'https://www.notion.so/front-static/pages/product/super-duper/tools/coda.svg',
        name: 'Coda',
      },
    ],
  };

  planFeatureBlock: FeatureBlock = {
    title: 'Your workflow. Your way.',
    content:
      'There’s a lot to keep track of. Notion’s flexible pages allow you to design your ideal workflow and view it by timeline, task, team, or level of doneness.',
    hrefLink: 'http://#',
    imgUrl:
      'https://www.notion.so/front-static/pages/product/super-duper/plan-v5.png',
    resizedImgUrl:
      'https://www.notion.so/front-static/pages/product/super-duper/mobile/plan.png',
    linkText: 'Explore projects',
    tag: ' Plan',
    featureHints: [
      {
        imgUrl:
          'https://www.notion.so/cdn-cgi/image/format=webp,width=96/front-static/illustrated-icons/checklist.png',
        title: 'Tasks and to-dos',
        content: 'Tackle any project, big or small.',
      },
      {
        imgUrl:
          'https://www.notion.so/cdn-cgi/image/format=webp,width=96/front-static/illustrated-icons/calendarSheet.png',
        title: 'Custom views',
        content:
          'Visualize work in any format, from calendars to kanban boards.',
      },
      {
        imgUrl:
          'https://www.notion.so/cdn-cgi/image/format=webp,width=96/front-static/illustrated-icons/bolt.png',
        title: 'Automations',
        content: 'Put tedious tasks on autopilot.',
      },
    ],
    replaces: [
      {
        imgUrl:
          'https://www.notion.so/front-static/pages/product/super-duper/tools/trello.svg',
        name: 'Trello',
      },
      {
        imgUrl:
          'https://www.notion.so/front-static/pages/product/super-duper/tools/asana.svg',
        name: 'Asana',
      },
      {
        imgUrl:
          'https://www.notion.so/front-static/pages/product/super-duper/tools/monday.svg',
        name: 'Monday',
      },
    ],
  };

  organizeFeatureBlock: FeatureBlock = {
    title: 'Remember everything.',
    content:
      'No more endless searching for the info you need. Everything you and your team store in Notion is accessible in an instant.',
    hrefLink: 'http://#',
    imgUrl:
      'https://www.notion.so/front-static/pages/product/super-duper/organize-v6.png',
    resizedImgUrl:
      'https://www.notion.so/front-static/pages/product/super-duper/mobile/organize.png',
    linkText: 'Explore knowledge management',
    tag: ' Organize',
    featureHints: [
      {
        imgUrl:
          'https://www.notion.so/cdn-cgi/image/format=webp,width=96/front-static/illustrated-icons/bookClosed1.png',
        title: 'Teamspaces',
        content: 'Dedicated space for every team and project.',
      },
      {
        imgUrl:
          'https://www.notion.so/cdn-cgi/image/format=webp,width=96/front-static/illustrated-icons/connections.png',
        title: 'Integrations',
        content: 'Connected to all your favorite tools.',
      },
      {
        imgUrl:
          'https://www.notion.so/cdn-cgi/image/format=webp,width=96/front-static/illustrated-icons/sparkleBubble.png',
        title: 'Just ask AI',
        content: 'Instant answers when you need them.',
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
        name: 'Gooogle Drive',
      },
    ],
  };

  iaFeatureBlock: FeatureBlock = {
    title: 'Get a brain boost.',
    content:
      'Built right into your workspace, Notion AI is at the ready to brainstorm ideas, summarize, help you write, and find what you’re looking for.',
    hrefLink: 'http://#',
    imgUrl:
      'https://www.notion.so/front-static/pages/product/super-duper/ai-v6.png',
    resizedImgUrl:
      'https://www.notion.so/front-static/pages/product/super-duper/mobile/ai.png',
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
  };

  featureSmContainerContent: featureSmContainer = {
    title: 'Everything you need to do your best work.',
    featureHints: [
      {
        imgUrl:
          'https://www.notion.so/cdn-cgi/image/format=webp,width=96/front-static/illustrated-icons/docsStacked.png',
        title: 'Docs',
        content: 'Build any page, communicate any idea.',
      },
      {
        imgUrl:
          'https://www.notion.so/cdn-cgi/image/format=webp,width=96/front-static/illustrated-icons/bookFlat.png',
        title: 'Wiki',
        content: 'Store all your knowledge in one home base.',
      },
      {
        imgUrl:
          'https://www.notion.so/cdn-cgi/image/format=webp,width=96/front-static/illustrated-icons/target.png',
        title: 'Projects',
        content: 'Manage any endeavor from beginning to end.',
      },
      {
        imgUrl:
          'https://www.notion.so/cdn-cgi/image/format=webp,width=96/front-static/illustrated-icons/sparkle.png',
        title: 'Notion AI',
        content: 'Instant answers and writing help within your workspace.',
      },
      {
        imgUrl:
          'https://www.notion.so/cdn-cgi/image/format=webp,width=96/front-static/illustrated-icons/notionCalendarLogo.png',
        title: 'Calendar',
        content: 'See all your commitments in one place.',
      },
      {
        imgUrl:
          'https://www.notion.so/cdn-cgi/image/format=webp,width=96/front-static/illustrated-icons/trophy.png',
        title: 'Goals',
        content: 'Set objectives, get organized, and track progress.',
      },
      {
        imgUrl:
          'https://www.notion.so/cdn-cgi/image/format=webp,width=96/front-static/illustrated-icons/globe.png',
        title: 'Sites',
        content: 'Make any page a website in minutes.',
      },
      {
        imgUrl:
          'https://www.notion.so/cdn-cgi/image/format=webp,width=96/front-static/illustrated-icons/shapes1.png',
        title: 'Templates',
        content: 'Jump in with one of 10,000+ templates.',
      },
    ],
  };
}
