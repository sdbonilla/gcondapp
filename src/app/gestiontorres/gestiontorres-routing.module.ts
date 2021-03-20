import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestiontorresPage } from './gestiontorres.page';

const routes: Routes = [
  {
    path: '',
    component: GestiontorresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestiontorresPageRoutingModule {}
