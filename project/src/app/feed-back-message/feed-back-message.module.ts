import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedBackMessagePageRoutingModule } from './feed-back-message-routing.module';

import { FeedBackMessagePage } from './feed-back-message.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedBackMessagePageRoutingModule
  ],
  declarations: [FeedBackMessagePage]
})
export class FeedBackMessagePageModule {}
