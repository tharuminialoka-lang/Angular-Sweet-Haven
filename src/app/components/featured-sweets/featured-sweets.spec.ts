import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedSweetsComponent } from './featured-sweets';

describe('FeaturedSweets', () => {
  let component: FeaturedSweetsComponent;
  let fixture: ComponentFixture<FeaturedSweetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedSweetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedSweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
