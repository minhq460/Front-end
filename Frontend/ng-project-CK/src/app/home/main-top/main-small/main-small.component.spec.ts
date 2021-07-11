import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSmallComponent } from './main-small.component';

describe('MainSmallComponent', () => {
  let component: MainSmallComponent;
  let fixture: ComponentFixture<MainSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSmallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
