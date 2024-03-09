import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedbyCardComponent } from './likedby-card.component';

describe('LikedbyCardComponent', () => {
  let component: LikedbyCardComponent;
  let fixture: ComponentFixture<LikedbyCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LikedbyCardComponent]
    });
    fixture = TestBed.createComponent(LikedbyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
