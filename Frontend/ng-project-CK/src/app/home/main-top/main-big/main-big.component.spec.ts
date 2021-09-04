import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBigComponent } from './main-big.component';

describe('MainBigComponent', () => {
  let component: MainBigComponent;
  let fixture: ComponentFixture<MainBigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainBigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
