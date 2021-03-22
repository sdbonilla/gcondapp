import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TorreDetailsPageRoutingModule } from './torre-details-routing.module';

import { TorreDetailsPage } from './torre-details.page';
import { GestionpisosPageModule } from '../gestionpisos/gestionpisos.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TorreDetailsPageRoutingModule,
    GestionpisosPageModule  
  ],
  declarations: [TorreDetailsPage]
})
export class TorreDetailsPageModule {}
