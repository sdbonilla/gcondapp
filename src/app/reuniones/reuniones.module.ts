import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReunionesPageRoutingModule } from './reuniones-routing.module';

import { ReunionesPage } from './reuniones.page';
import { GestionReunionPageModule } from '../gestion-reunion/gestion-reunion.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReunionesPageRoutingModule,
    GestionReunionPageModule
  ],
  declarations: [ReunionesPage]
})
export class ReunionesPageModule {}
