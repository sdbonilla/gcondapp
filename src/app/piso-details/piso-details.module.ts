import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PisoDetailsPageRoutingModule } from './piso-details-routing.module';

import { PisoDetailsPage } from './piso-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PisoDetailsPageRoutingModule
  ],
  declarations: [PisoDetailsPage]
})
export class PisoDetailsPageModule {}
