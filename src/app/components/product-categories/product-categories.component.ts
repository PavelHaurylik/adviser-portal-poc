import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgClass } from '@angular/common';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-product-categories',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    NgClass,
    ProductComponent
  ],
  templateUrl: './product-categories.component.html',
  styleUrl: './product-categories.component.scss',
})
export class ProductCategoriesComponent {

  btnLabels = [
    'Compensation and Rewards',
    'Employee Engagement and Experience',
    'Talent Mobility',
    'Benefits',
    'Events and Conferences',
    'Learning, Upskilling and Assessment',
    'Talent and Transformation',
    'Workforce Analytics'
  ];

  productLabels = [
    'Investment Adviser Portal (Mercer Fund Services)',
    'MercerInsight (Research)',
    'MercerIS (Replacement)',
    'MercerInsight Community',
    'Super Adviser Portal',
  ];

  productDescriptions = [
    'Curious about the factors that have the greatest impact on pay and how it compares to the market average?',
    'Get insights on salary forecasts, attrition rates, hot jobs, starting salaries, medical coverage...',
    'This robust research analysis with market trend lines is particularly helpful to consult when designing salary ranges.',
    'This robust research analysis with market trend lines is particularly helpful to consult when designing salary ranges.',
    'Curious about the factors that have the greatest impact on pay and how it compares to the market average?',
  ];

  activeBtnIndex: WritableSignal<number> = signal(0);
  shuffledProducts: WritableSignal<{label: string, description: string, key: number}[]> = signal([]);
  randomEvenNumber: Signal<number> = computed(() => {
    const ind = this.activeBtnIndex();
    const max = 24;
    const min = 10;
    const randomNumber = Math.floor(Math.random() * ((max - min) / 2 + 1)) * 2 + min;
    return randomNumber;
  });

  constructor() {
    this.shuffleProducts(0);
  }

  shuffleProducts(index: number) {
     const productsArray = this.productLabels.map((label, index) => ({
      label,
      description: this.productDescriptions[index],
      key: Math.random()
    }));

    for (let i = productsArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [productsArray[i], productsArray[j]] = [productsArray[j], productsArray[i]];
    }

    this.shuffledProducts.set(productsArray);
    this.activeBtnIndex.set(index);
  }

}
