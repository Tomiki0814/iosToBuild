import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaperRequestHistoryPage } from './paper-request-history.page';

describe('PaperRequestHistoryPage', () => {
  let component: PaperRequestHistoryPage;
  let fixture: ComponentFixture<PaperRequestHistoryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PaperRequestHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
