import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AptodetailsPage } from './aptodetails.page';

const routes: Routes = [
  {
    path: '',
    component: AptodetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AptodetailsPageRoutingModule {}
