import { AfterViewInit, Component, input } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-products-and-solutions',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './products-and-solutions.component.html',
  styleUrl: './products-and-solutions.component.scss'
})
export class PrductsAndSolutionsComponent implements AfterViewInit {

  ngAfterViewInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const imageContainer = document.querySelector('.right-image');
          imageContainer?.setAttribute('style', 'background-image: url(./../../../assets/images/top-right-img.webp)');
          observer.disconnect();
        }
      });
    });
    observer.observe(document.querySelector('.image-container')!);
  }
}
