import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservasDetailsPage } from './reservas-details.page';

const routes: Routes = [
  {
    path: '',
    component: ReservasDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservasDetailsPageRoutingModule {}
