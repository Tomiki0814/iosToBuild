import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedBackMessagePage } from './feed-back-message.page';

const routes: Routes = [
  {
    path: '',
    component: FeedBackMessagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedBackMessagePageRoutingModule {}
