import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaperRequestHistoryDetailPage } from './paper-request-history-detail.page';

describe('PaperRequestHistoryDetailPage', () => {
  let component: PaperRequestHistoryDetailPage;
  let fixture: ComponentFixture<PaperRequestHistoryDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PaperRequestHistoryDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
