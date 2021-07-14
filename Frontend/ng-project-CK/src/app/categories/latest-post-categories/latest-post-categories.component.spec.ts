import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestPostCategoriesComponent } from './latest-post-categories.component';

describe('LatestPostCategoriesComponent', () => {
  let component: LatestPostCategoriesComponent;
  let fixture: ComponentFixture<LatestPostCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestPostCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestPostCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
