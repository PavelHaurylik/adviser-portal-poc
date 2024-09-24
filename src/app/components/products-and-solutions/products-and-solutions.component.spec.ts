import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrductsAndSolutionsComponent } from './products-and-solutions.component';

describe('PrductsAndSolutionsComponent', () => {
  let component: PrductsAndSolutionsComponent;
  let fixture: ComponentFixture<PrductsAndSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrductsAndSolutionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PrductsAndSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
