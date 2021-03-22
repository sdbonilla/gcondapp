import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PisoDetailsPage } from './piso-details.page';

const routes: Routes = [
  {
    path: '',
    component: PisoDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PisoDetailsPageRoutingModule {}
