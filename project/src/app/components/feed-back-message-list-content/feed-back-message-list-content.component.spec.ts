import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FeedBackMessageListContentComponent } from './feed-back-message-list-content.component';

describe('FeedBackMessageListContentComponent', () => {
  let component: FeedBackMessageListContentComponent;
  let fixture: ComponentFixture<FeedBackMessageListContentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedBackMessageListContentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FeedBackMessageListContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
