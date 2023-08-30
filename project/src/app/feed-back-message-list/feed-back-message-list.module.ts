import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedBackMessageListPageRoutingModule } from './feed-back-message-list-routing.module';

import { FeedBackMessageListPage } from './feed-back-message-list.page';
import { FeedBackMessageListContentComponent } from '../components/feed-back-message-list-content/feed-back-message-list-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedBackMessageListPageRoutingModule
  ],
  declarations: [
    FeedBackMessageListPage,
    FeedBackMessageListContentComponent
  ]
})
export class FeedBackMessageListPageModule { }
