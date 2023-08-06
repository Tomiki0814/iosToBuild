import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaperRequestPage } from './paper-request.page';

const routes: Routes = [
  {
    path: '',
    component: PaperRequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaperRequestPageRoutingModule {}
