import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikesMeComponent } from './likes-me.component';

describe('LikesMeComponent', () => {
  let component: LikesMeComponent;
  let fixture: ComponentFixture<LikesMeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LikesMeComponent]
    });
    fixture = TestBed.createComponent(LikesMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
