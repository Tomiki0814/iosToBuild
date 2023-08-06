import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaperRequestHistoryPageRoutingModule } from './paper-request-history-routing.module';

import { PaperRequestHistoryPage } from './paper-request-history.page';
import { PaperRequestHistoryContentComponent } from '../components/paper-request-history-content/paper-request-history-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaperRequestHistoryPageRoutingModule
  ],
  declarations: [
    PaperRequestHistoryPage,
    PaperRequestHistoryContentComponent]
})
export class PaperRequestHistoryPageModule { }
