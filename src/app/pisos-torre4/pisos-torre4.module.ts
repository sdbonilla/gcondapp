import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PisosTorre4PageRoutingModule } from './pisos-torre4-routing.module';

import { PisosTorre4Page } from './pisos-torre4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PisosTorre4PageRoutingModule
  ],
  declarations: [PisosTorre4Page]
})
export class PisosTorre4PageModule {}
