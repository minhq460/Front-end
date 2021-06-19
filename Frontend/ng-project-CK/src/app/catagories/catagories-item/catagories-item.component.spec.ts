import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatagoriesItemComponent } from './catagories-item.component';

describe('CatagoriesItemComponent', () => {
  let component: CatagoriesItemComponent;
  let fixture: ComponentFixture<CatagoriesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatagoriesItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatagoriesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
