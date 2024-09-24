import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { PrductsAndSolutionsComponent } from './components/products-and-solutions/products-and-solutions.component';
import { ProductsSliderComponent } from './components/products-slider/products-slider.component';
import { RecentNewsComponent } from './components/recent-news/recent-news.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductCategoriesComponent } from './components/product-categories/product-categories.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    PrductsAndSolutionsComponent,
    ProductsSliderComponent,
    ProductCategoriesComponent,
    RecentNewsComponent,
    QuestionsComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mercer-adviser-portal-poc';

  currentSection = signal('content-pages');

  icons = [
    'calendar',
    'address',
    'call',
    'contact-icon',
    'product-icon',
    'product-icon-white',
    'plus',
    'remove',
    'plus-small',
    'remove-small'
  ];

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.icons.forEach(icon => {
      this.matIconRegistry.addSvgIcon(
        icon,
        this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${icon}.svg`)
      );
    });
  }

  ngOnInit(): void {
    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  onScroll() {
    const scrollPosition = window.scrollY + 150;
    const sections = document.querySelectorAll('.section');

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const sectionBottom = sectionTop + section.clientHeight;
      const id = section.id;

      if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
        this.currentSection.set(id);
      }
    });
  }

}
