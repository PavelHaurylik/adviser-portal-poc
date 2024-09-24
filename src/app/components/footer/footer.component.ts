import { Component, OnInit } from '@angular/core';
import { SocialLink, SocialLinkType, SocialNavComponent } from './social-nav/social-nav.component';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ SocialNavComponent, MatDividerModule ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  bottomLinks = [
    {
      label: 'Terms of Use',
      url: 'https://www.mercer.com/footer/terms-of-use/',
    },
    {
      label: 'Privacy Policy',
      url: 'https://www.mercer.com/footer/privacy-notice/',
    },
    {
      label: 'Contact Us',
      url: 'https://www.mercer.com/',
    },
  ];

  socialMediaLinks: SocialLink[] = [
    {
      socialMedia: SocialLinkType.LinkedIn,
      url: 'https://www.linkedin.com/company/mercer',
    },
    {
      socialMedia: SocialLinkType.X,
      url: 'https://x.com/mercer',
    },
    {
      socialMedia: SocialLinkType.Facebook,
      url: 'https://x.com/mercer',
    },
    {
      socialMedia: SocialLinkType.Youtube,
      url: 'https://x.com/mercer',
    },
    {
      socialMedia: SocialLinkType.Instagram,
      url: 'https://www.instagram.com/mercer/?hl=en',
    },
  ];
}
