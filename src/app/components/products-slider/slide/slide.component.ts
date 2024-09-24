import { Component,  input, InputSignal, signal, WritableSignal } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-slide',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    NgStyle,
    NgClass
  ],
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.scss'
})
export class SlideComponent {

  slideIndex: InputSignal<number> = input.required();

  isExpanded: WritableSignal<boolean> = signal(false);

  imageUrl = './../../../../assets/images/slide';

  labels = [
    'News/Blogs/Seminars',
    'MBB',
    'Career',
    'Marsh',
    'Adviser Solutions'
  ];

  descriptions = [
    'Adviser insights - mercer.com',
    'Relevant and up to date information on apprentice pay practices in the UK based on data from over 100 organisations.',
    'Relevant and up to date information on apprentice pay practices in the UK based on data from over 100 organisations.',
    'Relevant and up to date information on apprentice pay practices in the UK based on data from over 100 organisations.',
    'Relevant and up to date information on apprentice pay practices in the UK based on data from over 100 organisations.',
  ];

  getClasses() {
    return {
      ['slide-' + this.slideIndex()]: true,
      'expanded': this.isExpanded()
    };
  }

}
