import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeedBackMessageListPage } from './feed-back-message-list.page';

describe('FeedBackMessageListPage', () => {
  let component: FeedBackMessageListPage;
  let fixture: ComponentFixture<FeedBackMessageListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FeedBackMessageListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
