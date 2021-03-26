import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AptopayPage } from './aptopay.page';

const routes: Routes = [
  {
    path: '',
    component: AptopayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AptopayPageRoutingModule {}
