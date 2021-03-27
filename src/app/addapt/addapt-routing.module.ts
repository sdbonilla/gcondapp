import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddaptPage } from './addapt.page';

const routes: Routes = [
  {
    path: '',
    component: AddaptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddaptPageRoutingModule {}
