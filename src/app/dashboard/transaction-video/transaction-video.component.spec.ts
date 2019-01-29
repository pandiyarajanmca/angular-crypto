import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionVideoComponent } from './transaction-video.component';

describe('TransactionVideoComponent', () => {
  let component: TransactionVideoComponent;
  let fixture: ComponentFixture<TransactionVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
