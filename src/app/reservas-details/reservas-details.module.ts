import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservasDetailsPageRoutingModule } from './reservas-details-routing.module';

import { ReservasDetailsPage } from './reservas-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservasDetailsPageRoutingModule
  ],
  declarations: [ReservasDetailsPage]
})
export class ReservasDetailsPageModule {}
