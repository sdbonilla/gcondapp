import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionpisosPageRoutingModule } from './gestionpisos-routing.module';

import { GestionpisosPage } from './gestionpisos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionpisosPageRoutingModule
  ],
  declarations: [GestionpisosPage]
})
export class GestionpisosPageModule {}
