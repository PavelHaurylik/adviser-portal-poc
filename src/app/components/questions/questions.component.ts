import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal, WritableSignal } from '@angular/core';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [ MatExpansionModule, MatIconModule, NgClass ],
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionsComponent {

  readonly panelOpenState: WritableSignal<Set<number>> = signal(new Set());
  readonly panelLabels = [
    '1. Complex regulatory environment',
    '2. Economic movements and inflation risk',
    '3. Complex regulatory environment',
    '4. Economic movements and inflation risk',
    '5. Complex regulatory environment',
  ];
  readonly panelContents = [
    'National and international regulations are complex and make it difficult to construct compliant investment portfolios while properly optimising risk and return. If you operate in multiple jurisdictions, it’s even more challenging to balance the different requirements within a central investment strategy. We work across all major domiciles and have extensive experience working with multi-national insurance companies.',
    'National and international regulations are complex and make it difficult to construct compliant investment portfolios while properly optimising risk and return. If you operate in multiple jurisdictions, it’s even more challenging to balance the different requirements within a central investment strategy. We work across all major domiciles and have extensive experience working with multi-national insurance companies.',
    'National and international regulations are complex and make it difficult to construct compliant investment portfolios while properly optimising risk and return. If you operate in multiple jurisdictions, it’s even more challenging to balance the different requirements within a central investment strategy. We work across all major domiciles and have extensive experience working with multi-national insurance companies.',
    'National and international regulations are complex and make it difficult to construct compliant investment portfolios while properly optimising risk and return. If you operate in multiple jurisdictions, it’s even more challenging to balance the different requirements within a central investment strategy. We work across all major domiciles and have extensive experience working with multi-national insurance companies.',
    'National and international regulations are complex and make it difficult to construct compliant investment portfolios while properly optimising risk and return. If you operate in multiple jurisdictions, it’s even more challenging to balance the different requirements within a central investment strategy. We work across all major domiciles and have extensive experience working with multi-national insurance companies.',
  ];

  onOpened(index: number) {
    this.panelOpenState.update((state) => {
      state.add(index);
      return state;
    });
  }

  onClosed(index: number) {
    this.panelOpenState.update((state) => {
      state.delete(index);
      return state;
    });
  }

}
