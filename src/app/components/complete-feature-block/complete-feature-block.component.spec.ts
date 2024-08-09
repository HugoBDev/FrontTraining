import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteFeatureBlockComponent } from './complete-feature-block.component';

describe('CompleteFeatureBlockComponent', () => {
  let component: CompleteFeatureBlockComponent;
  let fixture: ComponentFixture<CompleteFeatureBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompleteFeatureBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompleteFeatureBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
