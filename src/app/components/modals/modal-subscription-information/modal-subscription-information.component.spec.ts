import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSubscriptionInformationComponent } from './modal-subscription-information.component';

describe('ModalSubscriptionInformationComponent', () => {
  let component: ModalSubscriptionInformationComponent;
  let fixture: ComponentFixture<ModalSubscriptionInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalSubscriptionInformationComponent]
    });
    fixture = TestBed.createComponent(ModalSubscriptionInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
