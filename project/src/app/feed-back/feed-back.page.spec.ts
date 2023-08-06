import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeedBackPage } from './feed-back.page';

describe('FeedBackPage', () => {
  let component: FeedBackPage;
  let fixture: ComponentFixture<FeedBackPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FeedBackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
