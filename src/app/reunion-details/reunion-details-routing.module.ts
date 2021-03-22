import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReunionDetailsPage } from './reunion-details.page';

const routes: Routes = [
  {
    path: '',
    component: ReunionDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReunionDetailsPageRoutingModule {}
