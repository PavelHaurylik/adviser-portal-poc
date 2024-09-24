import { NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';


export interface SocialLink {
  socialMedia: SocialLinkType
  url: string;
}

interface SocialLinkWithIcon extends SocialLink {
  iconUrl: string;
}

export enum SocialLinkType {
  X = 'x',
  LinkedIn = 'linkedin',
  Facebook = 'facebook',
  Youtube = 'youtube',
  Instagram = 'instagram'
}

const SocialIconMapping = {
  [SocialLinkType.X]: 'assets/icons/x.svg',
  [SocialLinkType.LinkedIn]: 'assets/icons/linkedin.svg',
  [SocialLinkType.Instagram]: 'assets/icons/instagram.svg',
  [SocialLinkType.Facebook]: 'assets/icons/facebook.svg',
  [SocialLinkType.Youtube]: 'assets/icons/youtube.svg',
}

@Component({
  selector: 'app-social-nav',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './social-nav.component.html',
  styleUrl: './social-nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialNavComponent {
  socialLinks: SocialLinkWithIcon[] = [];
  @Input() set links(links: SocialLink[]) {
    this.socialLinks = links
      .map((link) => ({
        ...link,
        iconUrl: SocialIconMapping[link.socialMedia],
      }))
      .filter((link) => link.iconUrl);
  }
}
