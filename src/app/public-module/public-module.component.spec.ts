import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicModuleComponent } from './public-module.component';

describe('PublicModuleComponent', () => {
  let component: PublicModuleComponent;
  let fixture: ComponentFixture<PublicModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicModuleComponent]
    });
    fixture = TestBed.createComponent(PublicModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
