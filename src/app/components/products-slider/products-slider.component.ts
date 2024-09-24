import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Input, OnInit
} from '@angular/core';

import { register as registerSwiperElements } from 'swiper/element/bundle';
import { SlideComponent } from './slide/slide.component';

@Component({
  selector: 'app-products-slider',
  standalone: true,
  imports: [SlideComponent],
  templateUrl: './products-slider.component.html',
  styleUrl: './products-slider.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductsSliderComponent implements OnInit {
  slides = [
    'first',
    'second',
    'third',
    'fourth',
    'fifth',
  ];
  ngOnInit() {
    registerSwiperElements();
  }
}
