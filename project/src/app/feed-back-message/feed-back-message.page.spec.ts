import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeedBackMessagePage } from './feed-back-message.page';

describe('FeedBackMessagePage', () => {
  let component: FeedBackMessagePage;
  let fixture: ComponentFixture<FeedBackMessagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FeedBackMessagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
