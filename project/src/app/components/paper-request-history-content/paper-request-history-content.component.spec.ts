import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaperRequestHistoryContentComponent } from './paper-request-history-content.component';

describe('PaperRequestHistoryContentComponent', () => {
  let component: PaperRequestHistoryContentComponent;
  let fixture: ComponentFixture<PaperRequestHistoryContentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperRequestHistoryContentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaperRequestHistoryContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
