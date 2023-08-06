import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeConnecterPageRoutingModule } from './se-connecter-routing.module';

import { SeConnecterPage } from './se-connecter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeConnecterPageRoutingModule
  ],
  declarations: [SeConnecterPage]
})
export class SeConnecterPageModule {}
