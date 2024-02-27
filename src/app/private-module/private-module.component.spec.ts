import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateModuleComponent } from './private-module.component';

describe('PrivateModuleComponent', () => {
  let component: PrivateModuleComponent;
  let fixture: ComponentFixture<PrivateModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrivateModuleComponent]
    });
    fixture = TestBed.createComponent(PrivateModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
