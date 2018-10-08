import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmGiftComponent } from './confirm-gift.component';

describe('ConfirmGiftComponent', () => {
  let component: ConfirmGiftComponent;
  let fixture: ComponentFixture<ConfirmGiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmGiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmGiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
