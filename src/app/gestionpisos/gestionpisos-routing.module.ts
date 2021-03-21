import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionpisosPage } from './gestionpisos.page';

const routes: Routes = [
  {
    path: '',
    component: GestionpisosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionpisosPageRoutingModule {}
