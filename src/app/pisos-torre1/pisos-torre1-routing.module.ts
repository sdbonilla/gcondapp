import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PisosTorre1Page } from './pisos-torre1.page';

const routes: Routes = [
  {
    path: '',
    component: PisosTorre1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PisosTorre1PageRoutingModule {}
