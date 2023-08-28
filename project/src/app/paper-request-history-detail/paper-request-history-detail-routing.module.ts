import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaperRequestHistoryDetailPage } from './paper-request-history-detail.page';

const routes: Routes = [
  {
    path: '',
    component: PaperRequestHistoryDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaperRequestHistoryDetailPageRoutingModule {}
