import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaperRequestPageRoutingModule } from './paper-request-routing.module';

import { PaperRequestPage } from './paper-request.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaperRequestPageRoutingModule
  ],
  declarations: [PaperRequestPage]
})
export class PaperRequestPageModule {}
