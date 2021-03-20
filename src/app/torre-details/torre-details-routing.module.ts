import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TorreDetailsPage } from './torre-details.page';

const routes: Routes = [
  {
    path: '',
    component: TorreDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TorreDetailsPageRoutingModule {}
