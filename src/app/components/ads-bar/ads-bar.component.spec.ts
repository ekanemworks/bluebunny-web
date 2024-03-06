import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsBarComponent } from './ads-bar.component';

describe('AdsBarComponent', () => {
  let component: AdsBarComponent;
  let fixture: ComponentFixture<AdsBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdsBarComponent]
    });
    fixture = TestBed.createComponent(AdsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
