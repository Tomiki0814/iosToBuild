import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { MessageComponentModule } from '../message/message.module';
import { NewComponent } from '../components/new/new.component';
import { QuillModule } from 'ngx-quill';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessageComponentModule,
    HomePageRoutingModule,
    QuillModule
  ],
  declarations: [
    HomePage,
    NewComponent
  ]
})
export class HomePageModule { }
