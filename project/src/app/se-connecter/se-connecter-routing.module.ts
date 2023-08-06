import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeConnecterPage } from './se-connecter.page';

const routes: Routes = [
  {
    path: '',
    component: SeConnecterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeConnecterPageRoutingModule {}
