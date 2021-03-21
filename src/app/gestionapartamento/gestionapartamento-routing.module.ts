import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionapartamentoPage } from './gestionapartamento.page';

const routes: Routes = [
  {
    path: '',
    component: GestionapartamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionapartamentoPageRoutingModule {}
