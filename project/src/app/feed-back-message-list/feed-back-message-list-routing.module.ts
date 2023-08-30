import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedBackMessageListPage } from './feed-back-message-list.page';

const routes: Routes = [
  {
    path: '',
    component: FeedBackMessageListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedBackMessageListPageRoutingModule {}
