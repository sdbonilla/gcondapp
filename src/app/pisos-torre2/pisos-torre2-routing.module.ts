import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PisosTorre2Page } from './pisos-torre2.page';

const routes: Routes = [
  {
    path: '',
    component: PisosTorre2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PisosTorre2PageRoutingModule {}
