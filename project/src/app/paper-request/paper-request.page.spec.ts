import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaperRequestPage } from './paper-request.page';

describe('PaperRequestPage', () => {
  let component: PaperRequestPage;
  let fixture: ComponentFixture<PaperRequestPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PaperRequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
