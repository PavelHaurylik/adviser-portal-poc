import { Component, input, InputSignal, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ MatIconModule, MatDividerModule ],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  animations: [
    trigger('productAnimation', [
      transition(':enter', [
        animate('600ms ease-out', keyframes([
          style({ opacity: 0, transform: 'translateY(-20px)', offset: 0 }),
          style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 })
        ]))
      ]),
      transition(':leave', [
        animate('600ms ease-in', keyframes([
          style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
          style({ opacity: 0, transform: 'translateY(20px)', offset: 1.0 })
        ]))
      ])
    ])
  ]
})
export class ProductComponent {

  label: InputSignal<string> = input.required();
  description: InputSignal<string> = input('');
  btnName: InputSignal<string> = input('View More')
  icon: InputSignal<string> = input('');

  constructor() { }

}
