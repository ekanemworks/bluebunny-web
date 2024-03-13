import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSystemInformationComponent } from './modal-system-information.component';

describe('ModalSystemInformationComponent', () => {
  let component: ModalSystemInformationComponent;
  let fixture: ComponentFixture<ModalSystemInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalSystemInformationComponent]
    });
    fixture = TestBed.createComponent(ModalSystemInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
