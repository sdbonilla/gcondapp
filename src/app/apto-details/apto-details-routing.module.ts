import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AptoDetailsPage } from './apto-details.page';

const routes: Routes = [
  {
    path: '',
    component: AptoDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AptoDetailsPageRoutingModule {}
