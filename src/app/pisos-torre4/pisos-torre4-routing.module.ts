import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PisosTorre4Page } from './pisos-torre4.page';

const routes: Routes = [
  {
    path: '',
    component: PisosTorre4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PisosTorre4PageRoutingModule {}
