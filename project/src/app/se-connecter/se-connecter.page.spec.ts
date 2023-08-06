import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeConnecterPage } from './se-connecter.page';

describe('SeConnecterPage', () => {
  let component: SeConnecterPage;
  let fixture: ComponentFixture<SeConnecterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SeConnecterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
