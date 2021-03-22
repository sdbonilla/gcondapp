import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PisosTorre3Page } from './pisos-torre3.page';

const routes: Routes = [
  {
    path: '',
    component: PisosTorre3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PisosTorre3PageRoutingModule {}
